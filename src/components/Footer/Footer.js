import React from "react";
import classes from './Footer.module.css';
import { AiOutlinePhone,AiOutlineMail} from "react-icons/ai";
import {GrLocation} from "react-icons/gr";


const Footer = () => {


  return (
    <div className="d-none d-sm-block ">
     <footer className={classes.footer} style={{backgroundImage:'url(/img/b1.png)'}}>
       <div className={classes.about}>
         <div className={classes.title}>درباره ما</div>
         <div className={classes.content}>استارت آپ آریایی که قدرت گرفته از رستوران آریایی و تیم فنی آژانس ماهور درسال 99 شروع به کار کرده و تمام توان خود را برای حفظ سلامتی و رعایت پروتکل های بهداشتی همراهان رستوران به کار گرفته است . سرویس وب اپلیکیشن آریایی تمام دغدغه خود را به رفع نیازهای کاربران در منزل و محل کار قرار داده و تلاش خود را بر این اصل نهاده که کاربران بتوانند سفارشات خود را به صورت آنلاین و بدون مراجعه حضوری انجام دهند.</div>
       </div>

       <div className={classes.separator}></div>

       <div className={classes.contactus}>
         <div className={classes.title}>تماس با ما</div>
         <div className={classes.content}>

           <div className={classes.box}>
             <div className={classes.icon}>
                <GrLocation/>
             </div>
             <div className={classes.info}>تهران ، شهرک ورداورد ، خیابان گلزار ، رستوران آریایی</div>
           </div>

           <div className={classes.box}>
             <div className={classes.icon}>
                <AiOutlinePhone/>
             </div>
             <div className={classes.info}>02144989313 - 02144987989</div>
           </div>

           <div className={classes.box}>
             <div className={classes.icon}>
                <AiOutlineMail/>
             </div>
             <div className={classes.info}>info@aryiaei.com</div>
           </div>

         </div>
       </div>

       <div className={classes.enamad}>
          <img src="/img/download (1).png" alt="logo"/>
       </div>
    </footer>
    </div>
  );
};

export default Footer;

