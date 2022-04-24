import ProductItem from './ProductItem';
import classes from './Products.module.css';
import React, {  useState,useEffect } from "react";



const Search = (props) => {

  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setCountryList(data) 
         setCountryListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	



  const BarStyling = {width:"15rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  const [keyword,setKeyword] = useState('');
  const shoesList = props.PRO.filter((item)=> !keyword?.title || item.title.includes(keyword.title)).map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}     
      title={product.title}
      price={product.price}
      description={product.description}
      img={product.img}
    />
  ));
  
  return (
    <>
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
       <div style={{marginLeft:'930px',marginTop:'-50px'}}>
         <input 
          style={BarStyling}
          key="random1"
          value={keyword.title}
          placeholder={"search..."}
          onChange={(e) => setKeyword({...keyword ,title:e.target.value})}
         />
        <button className={classes.pas}>Search</button>
      </div> 
    </section>
   
   </>
  );
};

export default Search;
