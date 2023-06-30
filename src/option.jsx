import React from 'react';
import CartButtons from './cartButtons';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const Option = ({data, setCart, cart, bill, setBill}) => {

    const [startDate, setStartDate] = useState(new Date());

    const handleAdd = () => {
        setCart(cart + 1);
        setBill(bill + data.price);
    }

    const handleMinus = () => {
        if(cart > 0){
            setCart(cart - 1);
            setBill(bill - data.price);
        }
    }

    return (
        <div className="optionsContainer">
                <div className="option">
                    <h3>One-Day Admission Ticket</h3>
                    <div className="cell">
                        Adult: ₹{data.price}
                        <div className='btns'>
                            <button className='bookBtn' onClick={handleAdd}>+</button>
                            <button className='minusBtn' onClick={handleMinus}>-</button>
                        </div>
                    </div>
                    <div className="cell">
                        Children: ₹{data.price}
                        <div className='btns'>
                            <button className='bookBtn' onClick={handleAdd}>+</button>
                            <button className='minusBtn' onClick={handleMinus}>-</button>
                        </div>
                    </div>
                    <div className="cell">
                        Senior Citizen: ₹{data.price}
                        <div className='btns'>
                            <button className='bookBtn' onClick={handleAdd}>+</button>
                            <button className='minusBtn' onClick={handleMinus}>-</button>
                        </div>
                    </div>
                    Select Date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
            </div>
    );
}

export default Option;
