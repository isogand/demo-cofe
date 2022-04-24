import React from "react";
import classes from './Select.module.css';
import ScrollIntoView from 'react-scroll-into-view';

const SelectProduct = () => {
    return (
        <div className={classes.slider}>
            <div className={classes.scrollbar}>
                <ScrollIntoView selector="#irani">
                <a className={classes.scrollbaritem}>
                    <div className={classes.scrollbarcard}>
                        <img className={classes.scrollImage} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-5.png" alt='logo'/>
                    </div>
                    <p className={classes.scrollItem}>ایرانی</p>
                </a>
                </ScrollIntoView>
                <ScrollIntoView selector="#urp">
                <a className={classes.scrollbaritem}>
                    <div className={classes.scrollbarcard}>
                        <img className={classes.scrollImage} src="	http://api.bblounge.ir/img/ecommerce/group/logoImage-6.png" alt='logo'/>
                    </div>
                    <p className={classes.scrollItem}>فرنگی</p>
                </a>
                </ScrollIntoView>
                <ScrollIntoView selector="#salad">
                <a className={classes.scrollbaritem}>
                    <div className={classes.scrollbarcard}>
                        <img className={classes.scrollImage} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-7.png" alt='logo'/>
                    </div>
                    <p className={classes.scrollItem}>سالاد</p>
                </a>
                </ScrollIntoView>
                <ScrollIntoView selector="#burger">
                    <a className={classes.scrollbaritem}>
                        <div className={classes.scrollbarcard}>
                            <img className={classes.scrollImage} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-8.png" alt='logo'/>
                        </div>
                        <p className={classes.scrollItem}>برگر</p>
                    </a>
                </ScrollIntoView>
                <ScrollIntoView selector="#ezafat">
                    <a className={classes.scrollbaritem}>
                        <div className={classes.scrollbarcard}>
                            <img className={classes.scrollImage} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-23.jpg" alt='logo'/>
                        </div>
                        <p className={classes.scrollItem}>اضافات</p>
                    </a>
                </ScrollIntoView>
            </div>
        </div>
    )
};

export default SelectProduct;

