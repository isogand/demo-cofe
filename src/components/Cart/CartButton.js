import classes from './CartButton.module.css';
import { useDispatch ,useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import React, {useState} from "react";
import Cart from "./Cart";


const CartButton = (props) => {
 const [mouse, setMouse] = useState(false);
 const dispatch = useDispatch();
 const showCart = useSelector(state => state.ui.cartIsVisible);

 const toggleCartHandler = () => {
   dispatch(uiActions.toggle());
 }

  return (
    <div className={`${classes.wrapper}`}  onClick={toggleCartHandler}>
       <div
           onMouseEnter={() => {
               setMouse(true);
           }}
           onMouseLeave={() => {
               setMouse(false);
           }}
       >
           <img className={classes['accordion-toggle']} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAASFBMVEVHcExQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFAA448A4o8H2ItQUFAA448E241QUFAG2IsD3Yw5eGEipHQA45BQUFANi+IiAAAAFnRSTlMAMNlCwBB/n/CAZcBQ8rBA/CDQyOdwnvkcRAAAAJ1JREFUGNOVkNkSgyAMAAFJE0Ct9iD//6dFktpopw/dBxh2Qi7nxjLVcnUnxto5+yJ64k6YvWixdUkdDJytnvQzIA8myV3sCi7MpuRDdECXGbq/LbU8GUEzDJKl3a16ZoqRtnpvnXg7PcaIvTtORn9QHeNRSytfWt+ER41kc+1orR/RSGAtaJjnYDwE1t22CfGiIOlm+4TECuHq/uYFsoAKE8E4488AAAAASUVORK5CYII="/>
       </div>
        {mouse ?
            <div className={classes['basket-top-men']}>
                <div className={classes['pagecontainer']}>
                    <div className={classes['pagecontainer-empty-container']}>
                        <div className={classes['sweet-empty-product-msg']}>
                            {showCart? (
                                <Cart />
                            ):(
                                <img className={classes['sweet-empty-product-img']} src="/img/download.png"/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
       :null }
      </div>

  );
};
export default CartButton;
