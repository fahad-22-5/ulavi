import React, { useState } from 'react';
import './App.css';
import Option from './option';
import Collapsible from 'react-collapsible';
import ImageGallery from "react-image-gallery";

const InfoPage = () => {

    const [cart, setCart] = useState(0);
    const [bill, setBill] = useState(0);


    const data = {
        name: "Universal Studios Singapore Ticket",
        image: "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/activities/ktvgpnwvcewzebykmcz0.webp",
        description: "Universal Studios Singapore is a theme park located within Resorts World Sentosa on Sentosa Island, Singapore. It features 28 rides, shows, and attractions in seven themed zones. It was a key component of Genting's bid for the right to build Singapore's second integrated resort. On 8 December 2006, the Singapore government announced that the consortium had won the bid. Construction of the theme park and the rest of the resort started on 19 April 2007. It is the second Universal Studios theme park to open in Asia (Japan being the first), and the first in Southeast Asia. The official plans for the park were unveiled to the public when Universal Studios Singapore released a park map to the public on 20 October 2009. Universal Studios Singapore has since attracted more than 2 million visitors in the 9 months from its opening.!!Universal Studios Singapore is a theme park located within Resorts World Sentosa on Sentosa Island, Singapore. It features 28 rides, shows, and attractions in seven themed zones. It was a key component of Genting's bid for the right to build Singapore's second integrated resort. On 8 December 2006, the Singapore government announced that the consortium had won the bid. Construction of the theme park and the rest of the resort started on 19 April 2007. It is the second Universal Studios theme park to open in Asia (Japan being the first), and the first in Southeast Asia. The official plans for the park were unveiled to the public when Universal Studios Singapore released a park map to the public on 20 October 2009. Universal Studios Singapore has since attracted more than 2 million visitors in the 9 months from its opening.Universal Studios Singapore is a theme park located within Resorts World Sentosa on Sentosa Island, Singapore. It features 28 rides, shows, and attractions in seven themed zones. It was a key component of Genting's bid for the right to build Singapore's second integrated resort. On 8 December 2006, the Singapore government announced that the consortium had won the bid. Construction of the theme park and the rest of the resort started on 19 April 2007. It is the second Universal Studios theme park to open in Asia (Japan being the first), and the first in Southeast Asia. The official plans for the park were unveiled to the public when Universal Studios Singapore released a park map to the public on 20 October 2009. Universal Studios Singapore has since attracted more than 2 million visitors in the 9 months from its opening.Universal Studios Singapore is a theme park located within Resorts World Sentosa on Sentosa Island, Singapore. It features 28 rides, shows, and attractions in seven themed zones. It was a key component of Genting's bid for the right to build Singapore's second integrated resort. On 8 December 2006, the Singapore government announced that the consortium had won the bid. Construction of the theme park and the rest of the resort started on 19 April 2007. It is the second Universal Studios theme park to open in Asia (Japan being the first), and the first in Southeast Asia. The official plans for the park were unveiled to the public when Universal Studios Singapore released a park map to the public on 20 October 2009. Universal Studios Singapore has since attracted more than 2 million visitors in the 9 months from its opening.",
        price: 4031
    }

    const images = [
        {
            original: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/shutterstock_203847640.jpg",
            thumbnail: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/shutterstock_203847640.jpg",        },
        {
            original: "https://www.rwsentosa.com/-/jssmedia/project/non-gaming/rwsentosa/attractions/universal-studios-singapore/zones/uss-thelostworld-750-x-422.jpg?h=422&iar=0&w=750&rev=422aec23797f4c6eb9d6999c38bc2e73&hash=5D64FB8901581F9E1E9BAC9E3CDF8F71",
            thumbnail: "https://www.rwsentosa.com/-/jssmedia/project/non-gaming/rwsentosa/attractions/universal-studios-singapore/zones/uss-thelostworld-750-x-422.jpg?h=422&iar=0&w=750&rev=422aec23797f4c6eb9d6999c38bc2e73&hash=5D64FB8901581F9E1E9BAC9E3CDF8F71",
        },
        {
            original: "https://mediaim.expedia.com/destination/2/7310799cda06face193ea10461d2b1bb.jpg",
            thumbnail: "https://mediaim.expedia.com/destination/2/7310799cda06face193ea10461d2b1bb.jpg",
        },
        {
            original: "https://cdn.getyourguide.com/img/location/5729aea8abe7e.jpeg/68.jpg",
            thumbnail: "https://cdn.getyourguide.com/img/location/5729aea8abe7e.jpeg/68.jpg",
        },
        {
            original: "https://www.neverendingvoyage.com/wp-content/uploads/2020/03/universal-studios-singapore-6.jpg",
            thumbnail: "https://www.neverendingvoyage.com/wp-content/uploads/2020/03/universal-studios-singapore-6.jpg",
        }
    ]


    return (
        <div className='info'>
            <h1 className='headerTxt'>{data.name}</h1>
            <div className="heroImageContainer">
                <img src={data.image} alt={data.name} 
                className='heroImage'/>
            </div>

            <div className='desContainer'>
                <div className="leftColumn">
                    <div className="dbox">
                    <p className='desText'>Universal Studios Singapore is a theme park located within Resorts World Sentosa on Sentosa Island, Singapore. It features 28 rides, shows, and attractions in seven themed zones. It was a key component of Genting's bid for the right to build Singapore's second integrated resort. On 8 December 2006, the Singapore government announced that the consortium had won the bid. </p>
                    <Collapsible trigger="Click Here to Read More">
                        <p className='desText'> {data.description}</p>
                    </Collapsible>
                    </div>
                    <Option data = {data} setCart = {setCart} cart = {cart} bill = {bill} setBill = {setBill}/>
                    <Option data = {data} setCart = {setCart} cart = {cart} bill = {bill} setBill = {setBill}/>
                    <Option data = {data} setCart = {setCart} cart = {cart} bill = {bill} setBill = {setBill}/>
                    <Option data = {data} setCart = {setCart} cart = {cart} bill = {bill} setBill = {setBill}/>
                    <Option data = {data} setCart = {setCart} cart = {cart} bill = {bill} setBill = {setBill}/>

                </div>
                <div className="rightColumn">
                <div className="innerCon">
                        Items in cart: {cart}
                        <br/>
                        Total Bill: ₹ {bill}
                        <br/>
                        <button className='checkoutBtn'>Checkout</button>
                        <button className='checkoutBtn'>Add Other</button>
                    </div>
                    <div className="innerCon2">
                        From <h3>₹ {data.price}</h3>
                        {/* <button className='bookBtn'>Book Now</button> */}
                    <ImageGallery items={images} />
                    </div>

                </div>
            </div>            
        </div>
    );
}

export default InfoPage;
