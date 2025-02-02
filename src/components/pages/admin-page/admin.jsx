import { Link, Routes, Route } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineCategory, MdOutlineBedroomChild, MdPeople, MdFeedback, MdPhotoLibrary } from "react-icons/md";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[20%] bg-blue-600 h-full flex flex-col py-10 px-4 shadow-lg items-center">
                <h2 className="text-white text-3xl font-bold text-center mb-6">Admin Panel</h2>
                <nav className="flex flex-col w-full justify-between h-full my-[25%]">
                    <LinkItem to="/admin/bookings" icon={<CiBookmarkCheck />} label="Bookings" />
                    <LinkItem to="/admin/category" icon={<MdOutlineCategory />} label="Categories" />
                    <LinkItem to="/admin/rooms" icon={<MdOutlineBedroomChild />} label="Rooms" />
                    <LinkItem to="/admin/users" icon={<MdPeople />} label="Users" />
                    <LinkItem to="/admin/feedback" icon={<MdFeedback />} label="Feedback" />
                    <LinkItem to="/admin/galery" icon={<MdPhotoLibrary />} label="Gallery Items" />
                </nav>
            </div>

            {/* Main Content */}
            <div className="w-[80%] max-h-[100vh] bg-blue-800 flex items-center justify-center overflow-hidden">
                <Routes path="/*">
                    <Route path="/bookings" element={<h1>Booking</h1>} />
                    <Route path="/category" element={<h1>Category</h1>} />
                    <Route path="/rooms" element={<h1>Rooms</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/feedback" element={<h1>Feedback</h1>} />
                    <Route path="/galery" element={<h1>Galery</h1>} />
                </Routes>
            </div>
        </div>
    );
}

function LinkItem({ to, icon, label }) {
    return (
        <Link to={to} className="flex items-center gap-3 text-white text-xl font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-all justify-center">
            {icon}
            <span>{label}</span>
        </Link>
    );
}
