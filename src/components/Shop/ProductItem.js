import { useState } from 'react';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import Irani from './food/Irani';
import Eup from './food/Eup';
import Salad from './food/Salad';
import Burger from './food/Burger';
import {useSelector} from "react-redux";


const PRODUCT = [
  {title:'کباب دیگی',price:'120,000',description:'گوشت مخلوط گوشت له و گوسفندی _  پیاز  ادویه جاد  روغن کرمانشاهی',img: "/img/photo-1.jpg",id:'b1'},
  {title:'لاپلو دیگی',price:'100,000',description:' قیمه یا قورمه همراه با تهچین ',img: "/img/photo-2.jpg",id:'b2'},
  {title:'لقمه کباب',price:'80,000',description:'۱۸۰ گرم گوشت مخلوط _ پیاز و زعفران',img: "/img/photo-3.jpg",id:'b3'},
  {title:'چلو زرشک پلو',price:'130,000',description:'ران مرغ _ سبزیجات _ زعفران ',img: "/img/photo-4.jpg",id:'b4'},
]
const URP = [
  {title:'سيني  سوخاری',price:'80,000',description:'گوشت مخلوط گوشت له و گوسفندی _  پیاز  ادویه جاد  روغن کرمانشاهی',img: "/img/photo-5.jpg",id:'b5'},
  {title:' بال و کتف سوخاری',price:'90,000',description:' قیمه یا قورمه همراه با تهچین ',img: "/img/photo-6.jpg",id:'b6'},

]
const SALAD = [
  {title:'  سالاد چاینیز',price:'80,000',description:'گوشت مخلوط گوشت له و گوسفندی _  پیاز  ادویه جاد  روغن کرمانشاهی',img: "/img/photo-10.jpg",id:'b7'},
  {title:' سالاد فتوش',price:'40,000',description:' قیمه یا قورمه همراه با تهچین ',img: "/img/photo-11.jpg",id:'b8'},

]
const BURGER = [
  {title:' بی بی برگر',price:'70,000',description:'گوشت مخلوط گوشت له و گوسفندی _  پیاز  ادویه جاد  روغن کرمانشاهی',img: "/img/photo-9.jpg",id:'b8'},
  {title:'چیز برگر ',price:'80,000',description:' قیمه یا قورمه همراه با تهچین ',img: "/img/photo-7.jpg",id:'b9'},
  {title:'تپل برگر',price:'85,000',description:' قیمه یا قورمه همراه با تهچین ',img: "/img/photo-7.jpg",id:'b10'}

]


const ProductItem = (props) => {
  const cartItems =useSelector(state => state.cart.items)
  const keyword = props.keyword;
  const irani = PRODUCT.filter((item)=> !keyword?.title || item.title.includes(keyword.title)).map((product) => (
    <Irani
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      img={product.img}
    />
  ));
  const urp = URP.filter((item)=> !keyword?.title || item.title.includes(keyword.title)).map((product) => (
    <Eup
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      img={product.img}
    />
  ));
  const salad = SALAD.filter((item)=> !keyword?.title || item.title.includes(keyword.title)).map((product) => (
    <Salad
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      img={product.img}
    />
  ));
  const burger = BURGER.filter((item)=> !keyword?.title || item.title.includes(keyword.title)).map((product) => (
    <Burger
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      img={product.img}
    />
  ));

  return (
         <div className={classes['product-card-container']}>
           {/* // irani // */}

             <div id='1' className={classes.gpiranian} id="irani">
               <div className={classes['group-top-place']}></div>
               <div className={classes['sweet-group-title']} >
                  <span className={classes['sweet-title-product-bullet']}></span>ایرانی
               </div>
               <div className={classes.div} >
                 {irani}
               </div>
             </div>
            {/* // EUR // */}
            <div id='2' className={classes.gpiranian} id="urp">
               <div className={classes['group-top-place']}></div>
               <div className={classes['sweet-group-title']}>
                  <span className={classes['sweet-title-product-bullet']}></span>فرنگی
               </div>
               <div className={classes.div}>
                 {urp}
               </div>
             </div>
            {/* // Salad // */}
            <div id='3' className={classes.gpiranian} id="salad">
               <div className={classes['group-top-place']}></div>
               <div className={classes['sweet-group-title']}>
                  <span className={classes['sweet-title-product-bullet']}></span>سالاد
               </div>
               <div className={classes.div}>
                 {salad}
               </div>
             </div>
            {/* // burger // */}
            <div id='4' className={classes.gpiranian} id="burger">
               <div className={classes['group-top-place']}></div>
               <div className={classes['sweet-group-title']}>
                  <span className={classes['sweet-title-product-bullet']}></span>برگر
               </div>
               <div className={classes.div}>
                 {burger}
               </div>
             </div>
        </div>
  );

};

export default ProductItem;

