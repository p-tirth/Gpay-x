import React from "react"

export default function Info(){
    // const Name = document.querySelector()
    // const CollectInfo ={
    //     Name : 
    // }
    return(
        <form className="InfoContainer">
                <div className="input-container">
                    <span> Amount : </span>
                    <input type="number" name="amount" id="amount-input" />
                </div>

                <div className="input-container">
                    <span> Name : </span>
                    <input type="text" name="name" id="name-input" />                    
                </div>
                <div className="input-container">
                    <span> UPI ID : </span>
                    <input type="text" name="upi" id="upi-input" />
                </div>
                <div className="input-container">
                    <button type="submit" id="Submit-input" value="Submit">Gpay X</button>   
                </div>        
        </form>
    )
}