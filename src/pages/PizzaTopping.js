import React from 'react';
import Header from '../components/Header';
import {pizzaTypes } from '../data/data';

const PizzaTopping = ({setToppings,state}) => {
  const addToppings=(item)=>
  {
    setToppings(item);
    prompt("adding",item);
  }
  return (
    <div className='flex flex-col flex-auto h-full'>
      <Header />
      <div className='flex flex-col justify-center h-3/4'>
        <div className='flex justify-center mb-5'>
          <p className='text-3xl font-bold'>Choose your Pizza Toppings</p>
                
        </div>
        <div className='flex justify-center'>
        <ul className='list-none hover:list-disc'>
                {pizzaTypes.map((item,index)=>{return(<li key={index} onClick={()=>addToppings(item)} className='text-xl mt-1 mb-1 hover:text-2xl hover:text-slate-700 text-start left-0'>{item}</li>)})}
        </ul>
        </div>
        <div>
            <p>{JSON.stringify(state)}</p>
            <ol>
                {
                    state.toppings.map((item,index)=>(
                    <li 
                    key={index} 
                    onClick={setToppings(item)}>
                    {item}
                    </li>
                    )
                    )}
            </ol>
        </div>

           
        {/* <div className='flex justify-center'>
          <Button title={"Continue"} borderColor={"blue"} bgColor={"violet"} />
        </div> */}
      </div>
    </div>
  );
};

export default PizzaTopping;
