export default function LogisticsLogo() {
    return (
      <div className="flex items-center bg-blue-700 p-3 rounded-md max-w-fit">
        {/* Yellow Wing/Delivery Icon */}
        <div className="mr-2">
          <svg width="50" height="35" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10H50V15H0V10Z" fill="#FFD700" />
            <path d="M0 20H40V25H0V20Z" fill="#FFD700" />
            <path d="M0 30H30V35H0V30Z" fill="#FFD700" />
            <path d="M55 10H60V35H40V30H55V10Z" fill="white" />
          </svg>
        </div>
  
        {/* Text Part */}
        <div className="text-white">
          <h1 className="text-xl font-bold leading-tight">Mas</h1>
          <h2 className="text-xl font-bold leading-tight">Logistics</h2>
        </div>
      </div>
    )
  }
  
  