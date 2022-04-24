import classes from './irani.module.css';
import { cartActions } from '../../../store/cart-slice';
import { useDispatch } from 'react-redux';

const Burger = (props) => {

    const { title, price, description,img,id } = props;
    const dispatch = useDispatch();
  
    const addToCartHandler = () => {
      console.log(addToCartHandler);
      dispatch(cartActions.addItemToCart({
        id,
        title,
        price
      }));
    };


    return (
        <div className={classes['sweet-products-container-card']}>
          <div className={classes['sweet-product-card']}>
            <div className={classes['sweet-product-card-head']}>
              <span className={classes['sweer-discount-product']}>%10</span>
              <img className={classes['sweet-product-favorite']} src="http://bblounge.ir/static/media/favorite-liked.069ece0d508c647698f5474ba1e459cf.svg" alt="logo"/>
            </div>
            <img className={classes['sweet-product-image']} src={img} alt="logo"/>
            <span className={classes['sweet-product-title']}>{title}</span>
            <div className={classes['sweet-productKinds-section']}>
              <div className={classes['sweet-productkind']}>
                <div className={classes['sweet-product-price']}>
                  <span className={classes['sweet-productkind-description']}>{description}</span>
                  <div className={classes['sweet-productkind-content-container']}>
                    <span className="classes['sweet-number-person']">ویژه :</span>
                    <span className="classes['sweet-productkind-price']">
                      <span>{price}</span>تومان
                    </span>
                    <div className={classes['sweet-productkind-details']}>
                      <div className={classes['sweet-productkind-order']}>
                        <img onClick={addToCartHandler} className={classes.icon} src="/img/download (2).png" alt="logo"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        
        </div>
        
   
    )
}
export default Burger;