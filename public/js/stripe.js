/* eslint-disable */
import axios from 'axos';
import { showAlert } from './alerts';
const stripe = Stripe(
  pk_test_51UMLUNL2q6bN5OyiRB7t9AprmDMB8RgFdAENrWS72Nl6HnhnG1qg0qnjXBu8i5Lncqn8liMtilPV1ChiKzRG5chS00JkDfP9Xr
);

export const bookTour = async tourId => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
