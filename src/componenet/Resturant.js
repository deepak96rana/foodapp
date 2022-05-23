import React, { useState } from 'react'
import Menucard from './Menucard';
import "./style.css";
import Menu from "./menuapi.js";

function Resturant() {
    const [menuData,setmenudata] = useState(Menu);
    const filteritem = (category) =>{
        const updatedlist = Menu.filter((currElement) => {
            return currElement.category === category;
        });
         setmenudata(updatedlist);
    };
   return (
      <>
      <nav className='navbar'>
          <div className='btn-group'>
              <button className='btn-group__item' onClick={() => filteritem("breakfast")}>Breakfast</button>
              <button className='btn-group__item' onClick={() => filteritem("lunch")}>Lunch</button>
              <button className='btn-group__item' onClick={() => filteritem("evening")}>Evening</button>
              <button className='btn-group__item' onClick={() => filteritem("dinner")}>Dinner</button>
              <button className='btn-group__item' onClick={() =>  setmenudata(Menu)}>All</button>
          </div>

      </nav>
      <Menucard  menuData={menuData}/>
      </>
    
  );
}

export default Resturant;