import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () =>{
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51M8csdFYhvkjqxYkTVO54LB94gWP208PwrWszOazqn2OwvOOSac1JkJAdfcZIPjOUTgcSNAthzEykf4EOGoI2lhV00NN19dI6C')
    }

    return stripePromise
}

export default getStripe