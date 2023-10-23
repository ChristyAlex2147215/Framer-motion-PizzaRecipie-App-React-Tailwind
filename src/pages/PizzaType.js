import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { toppings } from '../data/data';
import { Link } from 'react-router-dom';

const PizzaType = ({setType,state}) => {
  const handleTypeClick = (item) => {
    setType(item);
  };
  
  return (
    <div className='flex flex-col flex-auto h-full'>
      <Header />
      <div className='flex flex-col justify-center h-full'>
        <div className='flex justify-center mb-5'>
          <p className='text-3xl font-bold'>Choose Pizza Type</p>
        </div>
        <div className='flex justify-center'>
        <ul className='list-none hover:list-disc'>
                {toppings.map((item,index)=>
                {
                  return(
                  <li 
                  key={index} 
                  onClick={()=>handleTypeClick(item)} 
                  className='text-xl mt-1 mb-1 hover:text-2xl hover:text-slate-700 text-start left-0'
                  >
                    {item}
                  </li>
                  );
                  })}
        </ul>
        </div>
        {state.type && 
        <Link to="/pizza-topping">
        <div className='flex justify-center'>
          <Button title={"Continue"} borderColor={"blue"} bgColor={"violet"} />
        </div></Link>} 
      </div>
    </div>
  );
};

export default PizzaType;
