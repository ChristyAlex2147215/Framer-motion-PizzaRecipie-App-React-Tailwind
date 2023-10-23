import './App.css';
import Home from './pages/Home';
import PizzaType from './pages/PizzaType';
import PizzaTopping from './pages/PizzaTopping';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [state, setState] = useState({ type: "", toppings: [] });

  const setToppings = (topping) => {
   let newTopping;
   if(!state.toppings.includes(topping))
   {
    newTopping=[...state.toppings,topping]
   }
   else{
    newTopping=state.toppings.filter(item=>item!==topping);
   }
   setState({...state,toppings:newTopping});
  };

  const setType=(data)=>
  {
    setState({...state,type:data})
  }

  return (
    <div className="h-screen">
      {/* <Header /> */}
      <Routes>
       
        <Route
          path="/pizza-type"
          element={<PizzaType setType={setType} state={state} />}
        />
        <Route
          path="/pizza-topping"
          element={<PizzaTopping setToppings={setToppings} state={state} />}
        />
         <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
