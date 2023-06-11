import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {

    const [cart] = useCart()
    let total
    let price
    if (cart !== null) {
        total = cart.reduce((sum, item) => item.price + sum, 0)
        price = parseFloat(total.toFixed(2))
    }

    return (
        <div className="w-2/3 mx-auto">
            <h2 className="text-center mt-10 text-3xl">Please Provide Payment</h2>
            <div className="mt-5">

                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;