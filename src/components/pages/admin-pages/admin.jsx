// import { Link, Routes, Route } from "react-router-dom";
// import { MdPeople, MdFeedback, MdPhotoLibrary, MdBedroomParent, MdCategory, MdBookmark } from "react-icons/md";
// import AdminBookings from "./adminBookings";
// import AdminCategory from "./adminCategory";
// import AdminRooms from "./adminRooms";
// import AdminUsers from "./adminUsers";
// import AdminFeedback from "./adminFeedback";
// import AdminGallery from "./adminGallery";

// export default function AdminPage() {
//     return (
//         <div className="w-full h-screen flex">
//             {/* Sidebar */}
//             <div className="w-[20%] bg-blue-600 h-full flex flex-col py-10 px-4 shadow-lg items-center">
//                 <h2 className="text-white text-3xl font-bold text-center mb-6">Admin Panel</h2>
//                 <nav className="flex flex-col w-full justify-between h-full my-[25%]">
//                     <LinkItem to="/admin/bookings" icon={<MdBookmark />} label="Bookings" />
//                     <LinkItem to="/admin/category" icon={<MdCategory />} label="Categories" />
//                     <LinkItem to="/admin/rooms" icon={<MdBedroomParent />} label="Rooms" />
//                     <LinkItem to="/admin/users" icon={<MdPeople />} label="Users" />
//                     <LinkItem to="/admin/feedback" icon={<MdFeedback />} label="Feedback" />
//                     <LinkItem to="/admin/gallery" icon={<MdPhotoLibrary />} label="Gallery Items" />
//                 </nav>
//             </div>

//             {/* Main Content */}
//             <div className="w-[80%] max-h-[100vh] bg-blue-800 flex items-center justify-center overflow-auto">
//                 <Routes path="/*">
//                     <Route path="/bookings" element={<AdminBookings />} />
//                     <Route path="/category" element={<AdminCategory />} />
//                     <Route path="/rooms" element={<AdminRooms />} />
//                     <Route path="/users" element={< AdminUsers />} />
//                     <Route path="/feedback" element={<AdminFeedback />} />
//                     <Route path="/gallery" element={<AdminGallery />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// }

// function LinkItem({ to, icon, label }) {
//     return (
//         <Link to={to} className="flex items-center gap-3 text-white text-xl font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-all justify-center">
//             {icon}
//             <span>{label}</span>
//         </Link>
//     );
// }

import { Link, Routes, Route } from "react-router-dom";
import { MdPeople, MdFeedback, MdPhotoLibrary, MdBedroomParent, MdCategory, MdBookmark, MdDashboard } from "react-icons/md";
import AdminBookings from "./adminBookings";
import AdminCategory from "./adminCategory";
import AdminRooms from "./adminRooms";
import AdminUsers from "./adminUsers";
import AdminFeedback from "./adminFeedback";
import AdminGallery from "./adminGallery";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[20%] bg-[#2C6975] h-full flex flex-col py-10 px-4 shadow-lg items-center">
                <h2 className="text-[#FFFFFF] text-3xl font-bold text-center mb-6">Admin Panel</h2>
                <nav className="flex flex-col w-full justify-between h-full my-[25%]">
                    <LinkItem to="/admin/dashboard" icon={<MdDashboard />} label="Dashboard" />
                    <LinkItem to="/admin/bookings" icon={<MdBookmark />} label="Bookings" />
                    <LinkItem to="/admin/category" icon={<MdCategory />} label="Categories" />
                    <LinkItem to="/admin/rooms" icon={<MdBedroomParent />} label="Rooms" />
                    <LinkItem to="/admin/users" icon={<MdPeople />} label="Users" />
                    <LinkItem to="/admin/feedback" icon={<MdFeedback />} label="Feedback" />
                    <LinkItem to="/admin/gallery" icon={<MdPhotoLibrary />} label="Gallery Items" />
                </nav>
            </div>

            {/* Main Content */}
            <div className="w-[80%] max-h-[100vh] bg-[#E0ECDE] flex items-center justify-center overflow-auto">
                <Routes>
                    <Route path="/*" element={<AdminDashboard />} />
                    <Route path="/dashboard" element={<AdminDashboard />} />
                    <Route path="/bookings" element={<AdminBookings />} />
                    <Route path="/category" element={<AdminCategory />} />
                    <Route path="/rooms" element={<AdminRooms />} />
                    <Route path="/users" element={<AdminUsers />} />
                    <Route path="/feedback" element={<AdminFeedback />} />
                    <Route path="/gallery" element={<AdminGallery />} />
                </Routes>
            </div>
        </div>
    );
}

function LinkItem({ to, icon, label }) {
    return (
        <Link
            to={to}
            className="flex items-center gap-3 text-[#FFFFFF] text-xl font-medium px-4 py-2 rounded-lg hover:bg-[#6B82A0] transition-all justify-center"
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}

// Dashboard Component
function AdminDashboard() {
    // Sample data for the dashboard
    const metrics = [
        { label: "Total Bookings", value: 120, icon: "📅" },
        { label: "Active Users", value: 85, icon: "👤" },
        { label: "Pending Feedback", value: 12, icon: "💬" },
        { label: "Rooms Available", value: 45, icon: "🛏️" },
    ];

    const recentActivities = [
        { id: 1, activity: "New booking by John Doe", time: "2 hours ago" },
        { id: 2, activity: "User Alice Johnson registered", time: "5 hours ago" },
        { id: 3, activity: "Feedback received from Jane Smith", time: "1 day ago" },
    ];

    return (
        <div className="w-full p-8">
            <h1 className="text-3xl font-bold text-[#2C6975] mb-6">Dashboard</h1>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => (
                    <div
                        key={index}
                        className="bg-[#CDE0C9] p-6 rounded-lg shadow-md flex items-center justify-between"
                    >
                        <div>
                            <p className="text-[#2C6975] text-sm">{metric.label}</p>
                            <p className="text-2xl font-bold text-[#2C6975]">{metric.value}</p>
                        </div>
                        <span className="text-3xl text-[#2C6975]">{metric.icon}</span>
                    </div>
                ))}
            </div>

            {/* Quick Links */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#2C6975] mb-4">Quick Links</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                        to="/admin/bookings"
                        className="bg-[#CDE0C9] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <p className="text-lg font-medium text-[#2C6975]">Manage Bookings</p>
                        <p className="text-sm text-[#6B82A0]">View and manage all bookings</p>
                    </Link>
                    <Link
                        to="/admin/rooms"
                        className="bg-[#CDE0C9] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <p className="text-lg font-medium text-[#2C6975]">Manage Rooms</p>
                        <p className="text-sm text-[#6B82A0]">View and manage all rooms</p>
                    </Link>
                    <Link
                        to="/admin/users"
                        className="bg-[#CDE0C9] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <p className="text-lg font-medium text-[#2C6975]">Manage Users</p>
                        <p className="text-sm text-[#6B82A0]">View and manage all users</p>
                    </Link>
                </div>
            </div>

            {/* Recent Activity */}
            <div>
                <h2 className="text-xl font-semibold text-[#2C6975] mb-4">Recent Activity</h2>
                <div className="bg-[#CDE0C9] p-6 rounded-lg shadow-md">
                    {recentActivities.map((activity) => (
                        <div key={activity.id} className="border-b border-[#6B82A0] py-2">
                            <p className="text-[#2C6975]">{activity.activity}</p>
                            <p className="text-sm text-[#6B82A0]">{activity.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}