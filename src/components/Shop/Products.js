import ProductItem from './ProductItem';
import classes from './Products.module.css';
import React, {  useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector  } from 'react-redux';
import Cart from '../Cart/Cart';
import SelectProduct from './SelectProduct';



const Products = (props) => {

  const [keyword,setKeyword] = useState({title : ""});
  const showCart = useSelector(state => state.ui.cartIsVisible);


  return (
    <>
    <section className={classes.products}>
     <section>
         <div style={{margin:50}}>
           <div className="row text-center">

           <div className="col-md-4">
               <div style={{backgroundColor:'#E7E7E7',borderRadius:25}} className="card d-none d-sm-block text-light shadow-lg">
                   {showCart? (
                       <Cart />
                    ):(
                     <div style={{paddingTop:300,paddingBottom:300}} className="card-body text-center">
                        <img  src='/img/download.png'/>
                     </div>
                   )}
               </div>
           </div>

              <div className="col-md-8">
                <div>
                  <div className="">
                     <div className="">
                         <div className="">
                           <div>
                            <div className="d-none d-sm-block ">
                            {/* // *page part cart* // */}
                              <div className={classes.page}>
                                <div className={classes.search}>
                                   <div className={classes.searchbox}>
                                      <input onChange={(e) => setKeyword({...keyword ,title:e.target.value})} className={classes.input} type="text" placeholder="جستجوی غذا" name="search2" value={keyword.title}/>
                                       <a className="searchicon" href="">
                                         <AiOutlineSearch className={classes.icon}/>
                                       </a>
                                   </div>
                                </div>

                                <div className={classes.list}>
                                  <div className={classes.grouped}>
                                    <div className={classes.FixedHeader}>
                                      <div className={classes.selectors}>
                                           <a  className={classes.selectoritem}>
                                               <div className={classes.card}>
                                                 <img className={classes.imgcard} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-1.png" alt='logo'/>
                                                 <span classname={classes.cardtitle}>رستوران</span>
                                               </div>
                                           </a>
                                           <a  className={classes['selectoritem-secondary']}>
                                             <div className={classes.card2}>
                                               <img className={classes.imgcard} src="http://api.bblounge.ir/img/ecommerce/group/logoImage-2.png" alt='logo'/>
                                               <span classname={classes.cardtitle}>کافه</span>
                                             </div>
                                           </a>
                                      </div>

                                       <SelectProduct/>
                                    </div>
                                    <ProductItem keyword={keyword}/>
                                  </div>

                                </div>
                                </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
         </div>
       </div>
     </section>
    </section>

   </>
  );
};

export default Products;

 {/* <div className="d-md-flex justify-content-between align-items-center px-5">
                            <div style={{borderRadius:25,backgroundColor:'white'}} className="input-group news-input ">
                              <AiOutlineSearch size={35} style={{color:'gray'}}/>
                              <input
                                  style={{borderRadius:25}}
                                  className="form-control"
                                  key="random1"
                                  value={keyword.title}
                                  placeholder={"جستوجوی غذا"}
                                  onChange={(e) => setKeyword({...keyword ,title:e.target.value})}
                               />
                            </div>
                        </div> */}
