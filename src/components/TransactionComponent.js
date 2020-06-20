import React, {useContext} from 'react'
import {globalContext} from "../context/GlobalState"
import {ListItem, Typography, ListItemText, ListItemSecondaryAction,
        IconButton, makeStyles} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';      


export const TransactionComponent = ({transaction}) => {
    let sign = transaction.amount > 0 ? "+" : "-"
    const {deleteTransaction} = useContext(globalContext)
    //
    return (
        <ListItem>
            <ListItemText primary={transaction.text}
                          secondary= {`${sign}$${Math.abs(transaction.amount)}`}/>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={()=>deleteTransaction(transaction.id)} />
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        // <li className={transaction.amount < 0 ? 'minus': 'plus'}>
        // {transaction.text} <span>{sign}${Math.abs(transaction.amount)}
        //                    </span><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>
        //                        x</button>
        // </li>
    )
}
