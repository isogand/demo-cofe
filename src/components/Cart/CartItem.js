import classes from './CartItem.module.css';


const CartItem = (props) => {
  const { title, quantity, total, price ,id} = props.item;

  return (
         <div className={classes['page-part-card']}>
              <div className={classes['pagecontainer']}>
                  <div className={classes['sweet-basket-container']}>
                      <div>
                          <div className={classes['d-flex-justify-content-center-flex-column']}>
                              <div className={classes['sweet-readonly-basket-product-container']}>
                                  <div className={classes['sweet-product-title-basket']}>
                                      <div className={classes['title']}>
                                          {title}
                                          <span className={classes['subtitle']}>(ویژه)</span>
                                      </div>
                                      <div className={classes['line-container']}>
                                          <div className={classes['line']}></div>
                                      </div>
                                  </div>

                                  <div className={classes['sweet-product-title-basket']}>
                                      <div className={classes['title']}>تعداد</div>
                                      <div className={classes['line-container']}>
                                          <div className={classes['line']}></div>
                                      </div>
                                      <div className={classes['value']}>{quantity} پرس</div>
                                  </div>

                                  <div className={classes['sweet-product-title-basket']}>
                                      <div className={classes['title']}>قیمت</div>
                                      <div className={classes['line-container']}>
                                          <div className={classes['line']}></div>
                                      </div>
                                      <div className={classes['value']}>{total} تومان</div>
                                  </div>
                                  <div className={classes['bottom-separator']}>
                                      <div></div>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>

  );
};

export default CartItem;
