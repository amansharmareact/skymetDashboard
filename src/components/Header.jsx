import React from 'react';
import Input from "./ui/Input";

const Header = ()=> {
  return (
    <header className=" w-[1200px] h-[45px] flex justify-between items-center p-4 bg-white shadow mb-4">
       <div> <img src='/images/image(2).png' alt=''/>
       </div>
      <div className="flex items-center gap-auto">
        <Input placeholder="Search..." className="w-64" />
        <img src="/user-avatar.png" alt="Admin" className="w-10 h-10 rounded-full" />
        <span>Jayesh Patil</span>
      </div>
    </header>
  );
}
export default Header      
