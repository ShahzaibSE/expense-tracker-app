import React, {useContext} from 'react'
import {Button, TextField} from "@material-ui/core"
import {createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles"
import { purple } from '@material-ui/core/colors'
// Getting context.
import {globalContext} from "./../context/GlobalState"

const theme = createMuiTheme({
    palette: {
      primary: purple,
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0.3),
        marginBottom:15,
        width: '100%'
      },
    },
  }));

export const AddTransactionComponent = () => {
    const [text, setText] = React.useState()
    const [amount, setAmount] = React.useState()
    let {addTransaction} = useContext(globalContext)
    let classes = useStyles()
    // e for event.
    const onSubmit = e => {
        e.preventDefault()
        let new_transaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        console.log(new_transaction)
        if (document.getElementById("text_field").value && 
        document.getElementById('amount_field').value) {
            addTransaction(new_transaction)
            setText('')
            setAmount('')
        }else {
            console.log("Please provide text and amount.")
        }
        setText('')
        setAmount('')
    }
    return (
        <div>
            <h3 style={{marginBottom:25}}>Add new transaction</h3>
            <form className={classes.root}>
                {/* <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} 
                       onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
                </div> */}
                <TextField id="text_field" label="Text" variant="outlined"
                value={text} onChange={(e)=>{setText(e.target.value)}}></TextField><br/>
                {/* <div className="form-control">
                <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}
                 placeholder="Enter amount..." />
                </div> */}
                <TextField id="amount_field" label="Amount" variant="outlined" value={amount} onChange={(e)=>{setAmount(e.target.value)}}>
                </TextField>
                <br/>
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
