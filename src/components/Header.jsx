import MenuIcon from '../assets/icons/MenuIcon'
import { Button } from 'antd'
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);

  function displayMenu() {
    console.log("boutton cliqué");

    setOpen(!open);
  }
  return (
    <header className="flex justify-between items-center lg:px-[250px] px-4">
    <div className=" text-[#e71d36] text-[65px] font-bold ">DeMo.</div>
    <nav className="md:flex items-center text-lg gap-4 hidden">
      <a href="#services">Services</a>
      <a href="#packages">Packages</a>
      <a href="">Who we are</a>
      <a href="#Portfolio">Our Portfolio</a>
      <a href="">About Us</a>
    </nav>
    <Button className="bg-primary md:flex hidden text-center hero rounded-lg text-white text-lg font-medium font-['Inter']">
      Contacts
    </Button>
    <span
      className="md:hidden  hover:translate-x-2 focus:border-primary rounded-lg"
      onClick={displayMenu}
    >
      <MenuIcon />
    </span>
    <>
      {open && (
        <nav className=" md:hidden nav flex flex-col h-[250px] w-[200px] rounded-lg z-0 justify-around absolute top-16 right-10 transition-all text-lg gap-2 bg-green/35 ">
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="">Who we are</a>
          <a href="">Our Portfolio</a>
          <a href="">About Us</a>
        </nav>
      )}
    </>
  </header>  )
}

export default Header