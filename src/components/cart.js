import {Card,Row,Col} from 'antd'
import { useState } from 'react';
import BookTicket from './bookticket';
function Cart({cart,setCart}){
    
    const[itemCount,setItemCount]=useState(cart.map(() => [1]))
    const incrementItem =(index)=>{
        const newCounts=[...itemCount];
        newCounts[index]++;
        setItemCount(newCounts);
    };
  
    const decrementItem =(index)=>{
        if(itemCount[index]>0){
            const newCounts=[...itemCount];
            newCounts[index]--;
            setItemCount(newCounts);
        }
    };
   
   const calculateTotalPrice = (index, movie) => {
  return movie.ticketprice * itemCount[index];
};

    return(
        <>  
        <h4 className="heading">WatchList</h4>
        {cart.map((movie,index)=>(
            <div className="cart-box" key={movie.id}>
                <Card className='cart'>
                    <Row>
                        <Col span={12}>
                        <img src={movie.image} alt="poster" height="250rem" width="200rem"/>
                        </Col>
                        <Col span={12}>
                            <h4>{movie.title}</h4>
                            <h3>₹{calculateTotalPrice(index,movie)}</h3>
                            <button className='buton' onClick={() => incrementItem(index)}>+</button>
                            <button className='buton'>Quantity: {itemCount[index]}</button>
                            <button className='buton' onClick={() => decrementItem(index)}>-</button>
                            <div className='tickets pt-3'>
                            <BookTicket/>
                            </div>
                        </Col>
                    </Row>
                </Card>     
            </div>
        ))}
        </>
    );
}
export default Cart;

