const Select = ({ options = [], className = '', ...props })=> {
  return (
    <select className={`border rounded px-2 py-1 ${className}`} {...props}>
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}
export default Select
