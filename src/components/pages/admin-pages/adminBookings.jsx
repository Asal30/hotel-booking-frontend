export default function AdminBookings() {
    // Hardcoded sample data
    const bookings = [
        {
            bookingId: 1,
            roomId: 101,
            email: "john.doe@example.com",
            status: "Confirmed",
            reason: "",
            timeStamp: new Date("2023-10-01T10:00:00Z"),
            startDate: new Date("2023-10-05T14:00:00Z"),
            endDate: new Date("2023-10-07T11:00:00Z"),
            notes: "Early check-in requested.",
        },
        {
            bookingId: 2,
            roomId: 102,
            email: "jane.smith@example.com",
            status: "Pending",
            reason: "",
            timeStamp: new Date("2023-10-02T09:30:00Z"),
            startDate: new Date("2023-10-06T16:00:00Z"),
            endDate: new Date("2023-10-08T12:00:00Z"),
            notes: "",
        },
        {
            bookingId: 3,
            roomId: 103,
            email: "alice.johnson@example.com",
            status: "Cancelled",
            reason: "Change of plans",
            timeStamp: new Date("2023-10-03T08:45:00Z"),
            startDate: new Date("2023-10-07T12:00:00Z"),
            endDate: new Date("2023-10-09T10:00:00Z"),
            notes: "Refund processed.",
        },
    ];

    function handleSearch(event) {
        const searchValue = event.target.value.toLowerCase();
        const rows = document.querySelectorAll(".bookings-row");

        rows.forEach((row) => {
            const details = row.getAttribute("data").toLowerCase();
            row.style.display = details.includes(searchValue) ? "" : "none";
        });
    }

    return (
        <div className="bg-[#E0ECDE] w-full h-[100vh]">
            <h1 className="m-6 text-3xl font-bold text-[#2C6975] mb-6">Bookings</h1>
            <div className="m-6">
                <input
                    type="text"
                    placeholder="Search by booking id, room id or email..."
                    className="w-full p-2 border border-[#6B82A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C6975]"
                    onInput={handleSearch}
                />
            </div>
            <div className="overflow-x-auto bg-[#CDE0C9] rounded-lg shadow m-6">
                <table className="w-full divide-y divide-[#6B82A0]">
                    <thead className="bg-[#2C6975]">
                        <tr>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Booking ID
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Room ID
                            </th>
                            <th className="px-4 py-4 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-4 py-4 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-4 py-4 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Reason
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Timestamp
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Start Date
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                End Date
                            </th>
                            <th className="px-4 py-4 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Notes
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#CDE0C9] divide-y divide-[#6B82A0]">
                        {bookings.map((booking, index) => (
                            <tr
                                key={index}
                                className="bookings-row"
                                data={`${booking.bookingId} ${booking.roomId} ${booking.email}`}
                            >
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {booking.bookingId}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {booking.roomId}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {booking.email}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm">
                                    <span
                                        className={`px-2 py-1 rounded-full text-center text-xs font-semibold ${
                                            booking.status === "Confirmed"
                                                ? "bg-[#9cd891] text-[#2C6975]"
                                                : booking.status === "Pending"
                                                ? "bg-[#e9ef9f] text-[#6B82A0]"
                                                : "bg-[#e65940] text-[#FFFFFF]"
                                        }`}
                                    >
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {booking.reason}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {booking.timeStamp.toLocaleString()}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {booking.startDate.toLocaleDateString()}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {booking.endDate.toLocaleDateString()}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {booking.notes}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}