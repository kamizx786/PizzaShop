import React from 'react';
import Card from "./Card";
import "./style.css";
import Menu from "./menuapi";
import { useState } from 'react';
import Navbar from './Navbar';

const UniqueList=[
... new Set(Menu.map((curElem)=>{
    return curElem.category;
})),
"All"
];
const Restaurant = () => {
    const [menuData,setmenuData]=useState(Menu);
    const [menuList,setmenuList]=useState(UniqueList);
    const filteritem= (category)=>{
        if(category==="All")
    {
        setmenuData(Menu);
        return;
    }
     const Updatedlist=Menu.filter((curElem)=>{
      return curElem.category===category;
     });
     setmenuData(Updatedlist);
    };
  return (
    <>
   
    <Navbar filteritem={filteritem} menuList={menuList}/>
    <Card menuData={menuData}/>
    </>
  );
};

export default Restaurant;
