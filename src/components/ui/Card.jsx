const Card=({ children, className = '', style }) =>{
  return (
    <div className={`  rounded shadow ${className}`}
    style={style}
    >{children}</div>
  );
}
export default Card
