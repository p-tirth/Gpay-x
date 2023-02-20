import React from "react"
import Tick from "../assets/google-pay-success.jpg"

export default function Recipt(){
    let money = 100
    let vendorName = "Subramaniyam Iyar"
    let id = "iyar10934698HJv78@paytm"
    let transactionID = "54139746821"

    let d = new Date()  
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "dateecember"];
    let [date,month,year,hour,min] = [d.getDate(),monthNames[d.getMonth() ],d.getFullYear(),d.getHours(),d.getMinutes()]
    return(
        <div className="recipt-container">
            <img src={Tick} alt="bruh"/>
            <h1><span id="rupee">₹</span>{money}</h1>
            <div className="reciverInfo">
                <p className="light">Paid to {vendorName}</p>
                <p className="dim">{id}</p>
            </div>
            <div className="dateInfo">
                <p className="light">{date+" "+month+" "+year+" "+hour+":"+min}</p>
                <p className="dim">UPI transaction ID: {transactionID}</p>
            </div>
        </div>
    )
}