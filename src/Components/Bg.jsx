import React, { Component } from "react";

export default class Bg extends Component {
    render() {
        return (
            <>
               <div id="background">
               <div id="bg">
                    <div id="bg-c1">
                        <h1 >Start your BK® order.</h1>
                        <button id="b1"> <i className="fa-solid fa-bag-shopping" id="bag"></i><b>Order Pickup</b></button><br /><br />
                        <button id="b2"> <i className="fa-solid fa-motorcycle" id="bike"></i><b>Order Delivery</b></button>
                    </div>
                    <div>
                        <img id="bg-img" src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/992ab9282f7352ad6d92ce74d86446c8ad758336-800x450.png?w=812&q=90&fit=max&auto=format" alt="" />
                    </div>
                </div>
               </div>
            </>
        )
    }
}