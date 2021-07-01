import React, {useRef,useEffect} from 'react';

const Paypal = () =>{
    const paypal = useRef();

useEffect(()=>{
    window.paypal.Button({
        createOrder:(date,actions,err)=>{
            return actions.order.create({
                intent:"CAPTURE",
                purchase_units:[
                    {
                        description:"Cool looking",
                        amount:{
                            currency_code:"CAD",
                            value:650.00
                        }
                    }
                ]
            })
        },onApprove:async (data,actions)=>{
            const order = await actions.order.capture();
            console.log(order)
        },onErr:(err)=>{
            console.log(err)
        }
    }).render(paypal.current)
},[])
return(
<div>
    <div ref={paypal}></div>
</div>
    )
}

export default Paypal