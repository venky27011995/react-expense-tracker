import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'


export const Transaction = ( props ) => {
    const sign = props.transaction.amount < 0 ? '-' : '+';
    const transType = props.transaction.amount < 0 ? 'minus' : 'plus';
    const { deleteTransaction } = useContext(GlobalContext);

    return (  
        <li className={transType}>
        {props.transaction.text} <span>{sign}₹{Math.abs(props.transaction.amount)} &nbsp; <small>{props.transaction.amount < 0 ? 'Db':'Cr'}</small><button className="delete-btn" onClick={()=>deleteTransaction(props.transaction.id)}>x</button></span>
        </li>                
    )
}
