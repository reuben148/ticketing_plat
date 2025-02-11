import React from 'react'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
    <div className="border-2 border-green-500 shadow-[0_4px_10px_rgba(34,197,94,0.5)] 
        rounded-2xl w-full max-w-[600px] h-auto p-6 sm:p-8 bg-white">
        
      {/* Header Section */}
      <div className="flex justify-between">
        <p className="font-serif text-lg sm:text-xl">Ready</p>
        <p className="font-serif text-sm sm:text-base">Step 3/3</p>
      </div>
  
      {/* Progress Bar */}
      <div className="border-2 border-green-500 bg-green-600 rounded-full 
          h-[5px] w-full max-w-[500px] mx-auto mt-3"></div>
  
      {/* Main Message */}
      <p className="font-serif text-center mt-4 text-lg sm:text-xl">Your Ticket is Booked!</p>
      <p className="font-serif text-center mt-2 text-sm sm:text-base">You can Download or Check for a copy</p>
  
      {/* Ticket Card */}
      <div className="flex flex-col sm:flex-row border-2 border-green-200 
          rounded-xl p-4 mt-6 w-full max-w-[480px] mx-auto">
          
        {/* Ticket Image */}
        <img className="w-full sm:w-[130px] h-auto sm:h-[120px] rounded-md" 
            src="https://res.cloudinary.com/tix-africa/image/upload/f_webp,fl_lossy,q_70/v1739193130/wswecn5xvwftfwdvlvkc.webp" alt="Event" />
  
        {/* Ticket Details */}
        <div className="sm:ml-4 mt-3 sm:mt-0">
          <p className="font-serif text-slate-500 text-sm">OFF THE LEASH (LOVERS ROCK)</p>
  
          <div className="flex items-center gap-2 mt-2">
            <i className="fa-solid fa-calendar-days text-green-600"></i>
            <p className="font-serif text-slate-500 text-sm">Friday, February 14th 2025</p>
          </div>
  
          <div className="flex items-center gap-2 mt-2">
            <i className="fa-regular fa-clock text-green-600"></i>
            <p className="font-serif text-slate-500 text-sm">10:00 PM - 5:00 AM UTC</p>
          </div>
  
          <div className="flex items-center gap-2 mt-2">
            <i className="fa-solid fa-location-dot text-green-600"></i>
            <p className="font-serif text-slate-500 text-sm">VAULT SOCIAL HOUSE, VICTORIA ISLAND, LAGOS</p>
          </div>
  
          <p className="font-serif mt-3 text-sm">Ticket for 1 entry only</p>
        </div>
      </div>
  
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button className="font-serif bg-green-800 text-white px-4 py-2 rounded-md text-sm sm:text-base">
          Book Another Ticket
        </button>
        <button className="font-serif bg-green-800 text-white px-4 py-2 rounded-md text-sm sm:text-base">
          Download Ticket
        </button>
      </div>
  
    </div>
  </div>
  
  )
}

export default App