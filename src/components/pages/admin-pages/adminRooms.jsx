export default function AdminRooms() {
    // Hardcoded sample data
    const rooms = [
        {
            roomId: 101,
            category: "Deluxe Room",
            maxGuests: 3,
            available: true,
            images: ["https://via.placeholder.com/150"],
            specialDescription: "Spacious room with a city view.",
            notes: "Early check-in available.",
        },
        {
            roomId: 102,
            category: "Executive Suite",
            maxGuests: 2,
            available: false,
            images: ["https://via.placeholder.com/150"],
            specialDescription: "Private balcony and jacuzzi.",
            notes: "Under maintenance.",
        },
        {
            roomId: 103,
            category: "Family Room",
            maxGuests: 4,
            available: true,
            images: ["https://via.placeholder.com/150"],
            specialDescription: "Kids play area included.",
            notes: "",
        },
    ];

    function handleSearch(event) {
        const searchValue = event.target.value.toLowerCase();
        const rows = document.querySelectorAll(".room-row");

        rows.forEach((row) => {
            const details = row.getAttribute("data").toLowerCase();
            row.style.display = details.includes(searchValue) ? "" : "none";
        });
    }

    return (
        <div className="bg-[#E0ECDE] w-full h-[100vh]">
            <h1 className="m-6 text-3xl font-bold text-[#2C6975] mb-6">Rooms</h1>
            <div className="m-6">
                <input
                    type="text"
                    placeholder="Search by room ID or category..."
                    className="w-full p-2 border border-[#6B82A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C6975]"
                    onInput={handleSearch}
                />
            </div>
            <div className="overflow-x-auto bg-[#CDE0C9] rounded-lg shadow m-6">
                <table className="w-full divide-y divide-[#6B82A0]">
                    <thead className="bg-[#2C6975]">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Room ID
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Category
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Max Guests
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Availability
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Images
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Special Description
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Notes
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#CDE0C9] divide-y divide-[#6B82A0]">
                        {rooms.map((room, index) => (
                            <tr
                                key={index}
                                className="room-row"
                                data={`${room.roomId} ${room.category}`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {room.roomId}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {room.category}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {room.maxGuests}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            room.available
                                                ? "bg-[#CDE0C9] text-[#2C6975]"
                                                : "bg-[#e65940] text-[#FFFFFF]"
                                        }`}
                                    >
                                        {room.available ? "Available" : "Unavailable"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    <div className="flex space-x-2">
                                        {room.images.map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={image}
                                                alt={`Room ${room.roomId}`}
                                                className="w-12 h-12 rounded-lg object-cover"
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {room.specialDescription}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {room.notes}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}