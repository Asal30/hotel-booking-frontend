import Header from '../../header/header';
function HomePage() {
    return (
      <>
        <Header />
        <div className="w-full h-screen bg-gradient-to-br from-cyan-500 via-teal-500 to-purple-600 flex justify-center items-center">
          <div className="bg-gradient-to-r from-purple-800 via-blue-700 to-cyan-500 bg-opacity-80 backdrop-blur-md border border-purple-400 h-[140px] w-[750px] rounded-xl flex justify-between items-center px-10 shadow-2xl hover:shadow-purple-600/70 transform hover:scale-105 transition-transform duration-300">
            <input
              type="date"
              className="p-3 bg-transparent border border-teal-300 rounded-lg text-teal-100 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-purple-800 transition-all duration-300 placeholder:text-teal-200"
              placeholder="Start Date"
            />
            <input
              type="date"
              className="p-3 bg-transparent border border-teal-300 rounded-lg text-teal-100 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-purple-800 transition-all duration-300 placeholder:text-teal-200"
              placeholder="End Date"
            />
            <select className="p-3 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-purple-800 transition-all duration-300">
              <option value="Luxury">Luxury</option>
              <option value="Normal">Normal</option>
              <option value="Low">Low</option>
            </select>
            <button className="bg-gradient-to-br from-green-500 via-lime-500 to-yellow-400 text-white font-bold px-5 py-2 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-110 transition-transform duration-300">
              Book Now
            </button>
          </div>
        </div>
      </>
    );
}

export default HomePage;