const SemiCircleProgress = ({ percentage }) => {
  const radius = 16;
  const circumference = Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div className="relative w-[200px] h-[110px]">
      <svg viewBox="0 0 36 18" className="w-full h-full">
        {/* Background Arc */}
        <path
          d="M2,18 A16,16 0 0,1 34,18"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="4"
        />
        {/* Progress Arc */}
        <path
          d="M2,18 A16,16 0 0,1 34,18"
          fill="none"
          stroke="#437329"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </svg>
      <div className="absolute inset-0 flex items-end justify-center pb-1 text-[36px] font-700 font-bold text-[#414651]">
        {percentage}%
      </div>
    </div>
  );
};



export default SemiCircleProgress;
