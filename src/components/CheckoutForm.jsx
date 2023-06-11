import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    //TODO: later try without useEffect
    useEffect(() => {
        if(price > 0){
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error)
            setCardError(error.message)
        } else {
            setCardError('')
            //console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)

        }
        console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id
            setTransactionId(transactionId)
            // next
            const payment = {
                email: user?.email,
                transactionId,
                price,
                date: new Date(),
                paidItemsName: cart.map(item => item.courseName),
                paidItemsId: cart.map(item => item.courseItemId),
                cartItemsId: cart.map(item => item._id)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertResult.insertedId) {
                        // display
                    }
                })
        }
    };


    return (
        <>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#030508',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-info btn-sm btn-outline mt-8 flex w-28 mx-auto" type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;