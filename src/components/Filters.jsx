const Filters = ()=> {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      <select className="border rounded px-2 py-1"><option>Select CBG Plant...</option></select>
      <select className="border rounded px-2 py-1"><option>Kolhapur</option></select>
      <select className="border rounded px-2 py-1"><option>7 Days</option></select>
      <select className="border rounded px-2 py-1"><option>Rabi</option></select>
      <button className="col-span-1 md:col-span-4 w-full bg-[#07c4a6] text-white py-2 rounded">Apply</button>
    </div>
  );
}
export default Filters