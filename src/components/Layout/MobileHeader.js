import classes from "./MainHeader.module.css";
import {AiOutlineSearch} from "react-icons/ai";
import React from "react";
import {useSelector} from "react-redux";

const MobileHeader = () => {
    const cartQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <div>
            <div className="d-flex"
                 style={{flexDirection: "row", justifyContent: "space-between", padding: "30px 25px"}}>
                <img className={classes["small-header-icon"]}
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAY1BMVEVHcEz////////////////////////9/f3///////////////////9wcHD////6VFaUlJT+39/+1dWCgoKvr6+Kior6Xl/7h4jAwMB4eHjk5OTS0tL+ycr9qqv7dHWmpqalpaVIuBmyAAAADXRSTlMA0Cd1ksVO+BHgo2Swr9IuiwAAATdJREFUSMe9VtuWwiAMpBVK0QWqhXq//P9X6rpcWmmQ6Dk7Tx47QxJCBgiJaJaV4OoFXFTLhsygpQl3pKLtK3+RoT8li+nyTL3FzyhILVQBqjqsX8RXSvgYTBWCuXpVMZ6Vt25/uOklgN54zm9S1P22MgPrFDQGMI+FOgCP0CaEaFx6vezhrsWPjc9ISdnBxXZSKp+T31Mr9weIf9iH1RjxTdvJLHa+eSQculuOfwvlkBj4aKBdMsfIIgqJrwQbELOC06BBDKdUsNZZrBPBVuszlNFZ620iGOJ/KS56mBFccAJ0Suii0duKb9w/nKXC4x0G6JoboGscIPSIok0AbTMjI+MZI7PByJBW+YEZj+welNiJ3YeyC0D/rrgKeWXhL0VS8yJ+jbvY2fT1sHqTllh9+zgpfv7cAcy1dVI58GrCAAAAAElFTkSuQmCC"
                     alt='logo'/>
                <div className={"text-center"}>
                    <img className={classes["small-header-logo"]}
                         src="http://bblounge.ir/static/media/logo-icon.1b14830dd1779a1db484.png" alt='logo'/>
                    <div className={classes["small-header-title"]}>کافه رستوران بی بی لانژ</div>
                    <div style={{display: 'inline-block'}}>
                        <div className="d-flex" style={{flexDirection: "row"}}>
                            <span className={classes["small-green-bullet"]}/>
                            <div className={classes["small-header-subtitle"]}>سفارش می‌پذیریم</div>
                        </div>
                    </div>
                </div>
                <img className={classes["small-header-icon"]}
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAclBMVEVHcEzw8PDx8fEA44/w8PDw8PAC4pD4+Pjw8PDw8PAA5Y8A45AA5I/z8/Pw8PDv7+8A44/W1tbx8fHw8PBQUFAA45B4eHiwsLDIyMiOjo7c3NxtbW3S0tKfn59kZGRaWlrm5uaA68MP5JZZWVlB56rD7t7ItyiIAAAAE3RSTlMA707A4JLyEPjIKoBwJGyjsOxI61RrYgAAAghJREFUSMe9ltmWgyAMhmurIt3PYAF3azvv/4pDXTBEQHsz/0V7FD4ISQzZ7TbreDrE8eF03H2l82NQfP6Guj+07t/v1WvzfkdIPeKt5zsZ2OMEx/Y3GiYMKQnpbb87mNhBMyQKmFNBbGLxRF09kFJnxQhlfr1tRl7CFYo9LS4hqxT77ZYBoGxdz0W4r2yL3ii5iOFDkdUpUJ0JvV9npHIEIGkwIymn8z3fnf5wCMgL8ZlWcKB+GQFyhkwZZVJZbh4p5ya3H7HZxtycABZr5rWiEZu9n1kpxiplg36gIxaCzQr1VxpW5qX6qdNGvwhHTHtE9puVaVrO1PCktpPaJyMGbZH9RD5jvMfUgpV+hTF1tHFmBl7xwXw3xgesbNTc3ibJJx9CCzBW9B4ZuLQeIt0M53x5ML1kyae84uVkSOPB9JlkVqhoZBLZb8MMdy0Dnrsx4cGkAxNgCAsuibDKj1UOLAPHxmqBuxDGPRiM9wIr3FjtxIwUxgKm/Av2QljynUsSVBSEJ0vAWIhKkPoWm9YRtmbOSYoLnop3YeXaAkQ7WpRXNVrb6mSdgpD+THd2AldNG470+dZnKxJ9189lua1Sq6p2UZTNuyMX/GUiLy5yy82BbqoVRaCLIXQrRQnsftYbhTHUxOyoLsEWKrjgTmyLnZRYWriV5okFV3vr52/VIuJuGj2NIdYfNvKsOZeEmwUAAAAASUVORK5CYII="
                     alt='logo'/>
            </div>
            <div className={`${classes["sweet-search-container"]} search-box-container justify-content-center`}>
                <div className={classes["sweet-search-box"]}>

                    <input className={classes.inputMobile} type="text" placeholder="جستجوی غذا" name="search2"
                           value=""/>
                    <a className={classes["sweet-search-icon-btn"]}>
                        <AiOutlineSearch/>
                    </a>
                </div>
            </div>
            <div className={classes['sweet-grouped-product-list-page']}>
                <div className={classes['sweet-grouped-product-list sweet-content']}>
                    <div className={classes['FixedHeader']}>
                        <div className={classes['mother-group-selectors-container']}>
                            <a className={classes['mother-group-selector-item active']}>
                                <div className={classes['sweet-mothergroup-card']}>
                                    <img className={classes['image']} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-1.png"/>
                                    <span className={classes['sweet-mothergroup-title']}>رستوران</span>
                                </div>
                            </a>
                            <a className={classes['mother-group-selector-item inactive']} href="/products/cafe">
                                <div className={classes['sweet-mothergroup-card']}>
                                    <img className={classes['image']} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-2.png"/>
                                    <span className={classes['sweet-mothergroup-title']}>کافه</span>
                                </div>
                            </a>
                        </div>
                        <div className={classes['slider-box']}>
                            <div className={classes['sweet-slider-scrollbar-hidden']}>
                                <a className={classes['group-selector-item inactive']}>
                                    <div className={classes['sweet-slider-card']}>
                                        <img className={classes['imagefood']} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-5.png"/>
                                    </div>
                                    <p className={classes['sweet-slider-title']}>ایرانی</p>
                                </a>
                                <a className={classes['group-selector-item inactive']}>
                                    <div className={classes['sweet-slider-card']}>
                                        <img className={classes['imagefood']} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-6.png"/>
                                    </div>
                                    <p className={classes['sweet-slider-title']}>فرنگی</p>
                                </a>
                                <a className={classes['group-selector-item inactive']}>
                                    <div className={classes['sweet-slider-card']}>
                                        <img className={classes['imagefood']} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-7.png"/>
                                    </div>
                                    <p className={classes['sweet-slider-title']}>سالاد</p>
                                </a>
                                <a className={classes['group-selector-item inactive']}>
                                    <div className={classes['sweet-slider-card']}>
                                        <img className={classes['imagefood']} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-8.png"/>
                                    </div>
                                    <p className={classes['sweet-slider-title']}>برگر</p>
                                </a>
                                <a className={classes['group-selector-item inactive']}>
                                    <div className={classes['sweet-slider-card']}>
                                        <img className={classes['imagefood']} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-23.jpg"/>
                                    </div>
                                    <p className={classes['sweet-slider-title']}>اضافات</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes['sweet-product-card-container-content']}>
                        <div className={classes['gpiranian-food']}>
                            <div className={classes['group-top-place']}></div>
                            <div className={classes['sweet-group-title']}>
                                <span className={classes['sweet-title-product-bullet']}></span>ایرانی
                            </div>
                            <div className={classes['sweet-products-container-card']}>
                                <div className={classes['sweet-product-card']}>
                                    <div className={classes['sweet-product-card-head']}>
                                        <span className={classes['sweer-discount-product']}>10%</span>
                                        <img src="http://bblounge.ir/static/media/favorite-liked.069ece0d508c647698f5474ba1e459cf.svg" className={classes['sweet-product-favorite']}/>
                                    </div>

                                    <span className={classes['sweet-product-title']}>کباب دیگی</span>
                                    <div className={classes['sweet-productKinds-section']}>
                                        <div className={classes['sweet-productkind-notselected']}>
                                            <div className={classes['sweet-product-price-selected']}>
                                                <span className={classes['sweet-productkind-description']}>گوشت مخلوط گوشت له و گوسفندی _  پیاز  ادویه جاد  روغن کرمانشاهی</span>
                                                <div className={classes['sweet-productkind-content-container']}>
                                                    <span className={classes['sweet-number-person']}> ویژه :</span>
                                                    <span className={classes['sweet-productkind-price']}>
                                                            <span className={classes['price']}>120,000</span>تومان
                                                    </span>
                                                    <div className={classes['sweet-productkind-details']}>
                                                        <div className={classes['sweet-productkind-countbox']}>
                                                            <a className={classes['sweet-product-countchange-btn-sweet-product-add-btn']}>
                                                                <img className={classes['imagefood2']} src="/img/download (2).png"/>
                                                            </a>
                                                            <span className={classes['sweet-product-count']}>{cartQuantity}</span>
                                                            <a className={classes['sweet-product-countchange-btn-sweet-product-remove-btn']}>
                                                                <img className={classes['imagefood2']} src="/img/download (3).png"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <a className={classes.basket} href="/basket">
                    <div className={classes['sweet-register-order-container']}>
                        <div className={classes['sweet-register-order']}>
                            <span className={classes['order']}>تکمیل خرید</span>
                            <span className={classes['basketcountinbutton']}>{cartQuantity}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default MobileHeader
