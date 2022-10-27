import MenuCard from "./MenuCard";
import Menu from "./menuApi";
import Navbar from "./Navbar";
import "./style.css";

import { useState } from "react";
//create it to have array of all unique categories
const uniqueList = Object.values(
  Menu.map((curEle) => {
    return curEle.category;
  })
).filter((v, i, a) => a.indexOf(v) === i);
uniqueList.push("All");
// console.log(uniqueList);

const Resturant = () => {
  //hooks to update data
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = function (category) {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curEle) => {
      if (curEle.category === category) {
        return curEle.category;
      }
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};
export default Resturant;
