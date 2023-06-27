import React from 'react';

const Option = ({data, setCart, cart, bill, setBill}) => {

    const handleSubmit = () => {
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
                    One-Day Admission Ticket
                    <h3>₹ {data.price}</h3>

                    <div className="btns">
                    <button className='bookBtn' onClick={handleSubmit}>Add to Cart</button>
                    <button className='minusBtn' onClick={handleMinus}>Remove from Cart</button>
                    </div>
                </div>
            </div>
    );
}

export default Option;
