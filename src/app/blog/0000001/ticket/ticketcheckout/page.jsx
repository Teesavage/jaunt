"use client"

import Link from "next/link";
import { useState } from "react";



export default function TicketCheckout(){
    const [count1, setCount1] = useState(1);
    const [amount1, setAmount1] = useState(15000);

        const increment1 = () => {
            setCount1(c => c + 1);
            setAmount1(amount1 => amount1 + 15000);
        }
        const decrement1 = () => {
            setCount1(c => c - 1);
            setAmount1(amount1 => amount1 - 15000);
        }
        const reset1 = () => {
            setCount1(0);
            setAmount1(0);
        }

        const [count2, setCount2] = useState(0);
        const [amount2, setAmount2] = useState(0);


        const increment2 = () => {
            setCount2(c => c + 1);
            setAmount2(amount2 => amount2 + 25000);
        }
        const decrement2 = () => {
            setCount2(c => c - 1);
            setAmount2(amount2 => amount2 - 25000);
        }
        const reset2 = () => {
            setCount2(0);
            setAmount2(0);
        }

        const [count3, setCount3] = useState(0);
        const [amount3, setAmount3] = useState(0);

        const increment3 = () => {
            setCount3(c => c + 1);
            setAmount3(amount3 => amount3 + 70000);
        }
        const decrement3 = () => {
            setCount3(c => c - 1);
            setAmount3(amount3 => amount3 - 70000);
        }
        const reset3 = () => {
            setCount3(0);
            setAmount3(0);
        }

    const total = amount1 + amount2 + amount3;



    

    return(
        <>
        <section id="ticket">
            <div className="ticket">
                <h1>COMPLETE ORDER</h1>
                <hr />
                <h1>DINE AND BANT AT MARYLAND RESTAURANT.</h1>
                <center><p>24th November, 2024. 8:00pm.</p></center>
                <br />
                <hr />
                <br />
            </div>

        <center><h2>ORDER CONFIRMATION</h2></center>

            <div className="orderConfirmation">
                <h3>
                    REGULAR
                    <span>
                        <b onClick={decrement1}>  -  </b>
                        <b onClick={reset1}>{count1}</b> 
                        <b onClick={increment1}>  +  </b>
                    </span>
                </h3>
                <p>{amount1} NGN</p>
                <br />
                <p>REGULAR TICKET includes:</p>
                <ul>
                    <li>- One seat reservation</li>
                    <li>- Free Parking</li>
                </ul>
        
            </div>
            <br />
            <div className="orderConfirmation">
                <h3>
                    VIP
                    <span>
                        <b onClick={decrement2}> - </b>
                        <b onClick={reset2}> {count2} </b> 
                        <b onClick={increment2}> + </b>
                    </span>
                </h3>
                <p>{amount2} NGN</p>
                <br />
                <p>VIP TICKET includes:</p>
                <ul>
                    <li>- Two seat reservation</li>
                    <li>- Free Parking</li>
                    <li>- Free MeatPie and Doughnut</li>
                </ul>
        
            </div>
            <br />
            <div className="orderConfirmation">
                <h3>
                    TABLE FOR 5
                    <span>
                        <b onClick={decrement3}> - </b>
                        <b onClick={reset3}> {count3} </b> 
                        <b onClick={increment3}> + </b>
                    </span>
                </h3>
                <p>{amount3} NGN</p>
                <br />
                <p>TABLE FOR 5 TICKET includes:</p>
                <ul>
                    <li>- Five seat reservation</li>
                    <li>- Free Parking</li>
                    <li>- Free Jollof and MeatPie and Doughnut</li>
                </ul>
        
            </div>
            <br />
            <div id="order">
                <p>Total: {total} NGN</p>
                <Link href=""><button>Order</button></Link>
                <Link href="/"><button>Cancel</button></Link>

            </div>

        </section>
        </>
    )
}