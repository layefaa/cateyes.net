"use client"
import {ReactNode, useState} from 'react';
import {MenuContext} from "@/context/MenuContext";

const MenuContextProvider = ({children}: { children: ReactNode }) => {

  const [isOpen, toggle] = useState<boolean>(true)
  const toggleMenu = () => {
    toggle((prevState) => !prevState)
  }
  return (
      <MenuContext.Provider value={{isOpen, toggleMenu}}>
        {children}
      </MenuContext.Provider>
  );
};

export default MenuContextProvider;
