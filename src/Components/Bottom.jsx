import React,{Component} from "react";
export default class Bottom extends Component {
    render() {
        return(
            <>
                <div className="end">
                <div className="bottom">TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.| Do Not Sell Or Share My Personal Information</div>
                <div className="border">
                    <div>
                    <ul>
                        <li><i className="fa-solid fa-house"></i><br />Home</li>
                    </ul>
                    </div>
                    <div>
                    <ul>
                        <li><i className="fa-solid fa-burger"></i><br />Menu</li>
                    </ul>
                    </div><div>
                    <ul>
                        <li><i className="fa-solid fa-tag"></i><br />Offers</li>
                    </ul>
                    </div>
                    <div>
                    <ul>
                        <li><i className="fa-solid fa-crown"></i><br />Rewards</li>
                    </ul>
                    </div>
                </div>
                </div>
            </>
        )
    }
}