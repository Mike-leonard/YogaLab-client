import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
    return (
        <div className="w-2/3 mx-auto">
            <h2 className="text-center mt-10 text-3xl">Please Provide Payment</h2>
            <div className="mt-5">

                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;