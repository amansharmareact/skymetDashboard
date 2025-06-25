const CardContent=({ children, className = '' })=> {
  return (
    <div className={`p-3 ${className}`}>{children}</div>
  );
}
export default CardContent
