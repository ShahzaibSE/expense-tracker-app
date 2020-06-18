import React, {useContext} from 'react'
import {Button} from "@material-ui/core"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import { purple } from '@material-ui/core/colors'
// Getting context.
import {globalContext} from "./../context/GlobalState"

const theme = createMuiTheme({
    palette: {
      primary: purple,
    },
});

export const AddTransactionComponent = () => {
    const [text, setText] = React.useState()
    const [amount, setAmount] = React.useState()
    let {addTransaction} = useContext(globalContext)

    // e for event.
    const onSubmit = e => {
        e.preventDefault()
        let new_transaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        console.log(new_transaction)
        addTransaction(new_transaction)
    }
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
                <br/>
                {/* <button className="btn">Add transaction</button> */}
                <ThemeProvider theme={theme}>
                    <Button className="btn-custom-material" variant="contained" color="primary" onClick={onSubmit}>Add Transaction</Button>
                </ThemeProvider>
            </form>
            <br/>
        </div>
    )
}
