function Rings({ className = "" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <img src="/images/Line.png" alt="bg0" className="absolute top-0 left-0" />
      <img src="/images/Line-2.png" alt="bg2" className="absolute top-0 left-0" />
      <img src="/images/Line-3.png" alt="bg3" className="absolute top-0 left-0" />
      <img src="/images/Line-4.png" alt="bg4" className="absolute top-0 left-0" />
    </div>
  );
}

export default Rings;
