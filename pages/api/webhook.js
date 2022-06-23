import { buffer } from "micro";
import db from "../../firebase";
//  firebase config
const admin = require("firebase-admin");

const service = require("../../permission.json");
const app = !admin.apps.length
    ? admin.initializeApp({
          credential: admin.credential.cert(service),
      })
    : admin.app();

// stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const endpointsecret = process.env.STRIPE_SIGIN;

const fufillOrder = (session) => {
    app.firestore()
        .collection("users")
        .doc(session.metadata.email)
        .collection("order")
        .doc(session.id)
        .set({
            amount: session.amount_total / 100,
            amount_shipping: session.total_details.amount_shipping / 100,
            images: JSON.parse(session.metadata.images),
            timestamp: new Date(),
        })
        .then(() => {
            console.log(
                `SUCCESS: Order ${session.id} has been added to the db`
            );
        })
        .catch((err) => {
            console.log(err);
        });
};
const webhook = async (req, res) => {
    if (req.method === "POST") {
        const requestBuffer = await buffer(req);

        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];

        let event;

        try {
            event = stripe.webhooks.constructEvent(
                payload,
                sig,
                endpointsecret
            );
        } catch (error) {
            console.log(error.message);
            return res.status(400).send(`webhook error ${error.message}`);
        }

        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            fufillOrder(session);
        }
    }
};

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};

export default webhook;
