import React from 'react'

export const AddTransactionComponent = () => {
    const [text, setText] = React.useState("")
    const [amount, setAmount] = React.useState(0)
    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                <label htmlFor="text" style={{fontWeight:"bold"}}>Text</label>
                <input type="text" value={text} 
                       onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount" style={{fontWeight:"bold"}}>Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}
                 placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
