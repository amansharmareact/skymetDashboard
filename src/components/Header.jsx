import React from 'react';
import Input from "./ui/Input";

const Header = ()=> {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow rounded-xl mb-4">
      <h1 className="text-2xl font-bold text-[#1e0f50]">Skymet</h1>
      <div className="flex items-center gap-2">
        <Input placeholder="Search..." className="w-64" />
        <img src="/user-avatar.png" alt="Admin" className="w-10 h-10 rounded-full" />
        <span>Jayesh Patil</span>
      </div>
    </header>
  );
}
export default Header
