import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-primary-100">
      
      <section className="text-center py-20 align-center h-[80vh] flex flex-col align-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-800 mb-6">
          Explore the World
        </h1>
        <p className="text-xl text-primary-600 max-w-2xl mx-auto mb-8">
          Get detailed information about any country with our secure API
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Get Started
          </Link>
          <Link
            to="/dashboard"
            className="border-2 border-primary-600 text-primary-600 hover:bg-primary-100 px-6 py-3 rounded-lg font-medium transition"
          >
            Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;