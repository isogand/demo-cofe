import Card1 from '../UI/Card1';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';



const Cart = (props) => {

    const cartItems =useSelector(state => state.cart.items)



    return (
    <Card1 className={classes.cart}>
      <div className={classes.title}>
        <div className={classes.dot}></div>
        <div className={classes.text}>سبد خرید</div>
      </div>
      <ul>
       {cartItems.map((item)=>(
           <CartItem
               key={item.id}
               item={{
                   id: item.id,
                   title: item.title,
                   quantity:item.quantity ,
                   total:item.totalPrice,
                   price: item.price
               }}
           />
       ))}
       <br/>
          <div className={classes['sweet-total-price-basket-container']}>
              <div className={classes['sweet-edit-basket-button']}>
                  <div><span className={classes['edit']}>ویرایش سبد خرید </span></div>
              </div>
              <div className={classes['sweet-register-order-basket']}>
                  <div><span>جمع کل :</span><span>80,000 تومان</span></div>
              </div>
              <a className={classes['finish']} href="/location/place/select/basket.preorder.placeid">
                  <div className={classes['sweet-btn-sweet-register-order-basket-style']}>
                      <span>نهایی کردن سفارش</span>
                  </div>
              </a>
          </div>
      </ul>
    </Card1>
  );
};

export default Cart;
