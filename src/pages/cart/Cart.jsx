// import BasketItem from './CartItem';
import "./cart.css";

const Cart = ({order,  handleIncrement,  handleDecerement, removeFromCart,handleShow,handleClear }) => {


  const totalPrice = order.reduce((sum, el)=> sum + el.price*el.quantity, 0);

  return (
    <div className='cart'>
      <span><i className="fa-solid fa-xmark" onClick={handleShow}></i></span>
      <h2>Shopping Cart</h2>

      <div className="empty-cart"> 
      {order.length===0 && (
            <div className="no-item">You have no items in your shopping cart</div>
          )}
      </div>

      {
        order.map( (item, index)=>{
        return  <div className='cartItem'  key={index} >
                  <span><img src={item.image_url} alt={item.title} /></span>
                  <span>{item.title}</span>
                  <div className="plus-minus">
                    <button className='first' onClick={()=> handleDecerement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className='last' onClick={()=> handleIncrement(item.id)}>+</button>
                  </div>
                  <div className="price">
                    <span> = {item.price * item.quantity}$</span>
                    <span> <i onClick={()=>removeFromCart(item.id)} className='fa-solid fa-xmark'></i> </span>
                  </div>
            </div>
      })}

      {
        order.length>=1&&(
          <button className='clear' onClick={handleClear}>Clear Cart</button>
      )}
      
        <div className='footer'>
          <div className='price'>
             <span>Total</span> 
             <span>{totalPrice}$</span>  
        </div>
        </div>
    </div>
  )
}

export default Cart