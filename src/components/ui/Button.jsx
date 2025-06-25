const Button=({ children, className = '', ...props }) =>{
  return (
    <button className={`bg-[#07c4a6] text-white py-2 px-4 rounded ${className}`} {...props}>
      {children}
    </button>
  );
}
export default Button