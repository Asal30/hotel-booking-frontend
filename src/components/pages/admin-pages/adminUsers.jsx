export default function AdminUsers() {
    // Hardcoded sample data
    const users = [
        {
            email: "john.doe@example.com",
            password: "hashedpassword1",
            firstName: "John",
            lastName: "Doe",
            type: "customer",
            whatsApp: "+1234567890",
            phone: "+1234567890",
            isDisabled: false,
            isEmailVerified: true,
        },
        {
            email: "jane.smith@example.com",
            password: "hashedpassword2",
            firstName: "Jane",
            lastName: "Smith",
            type: "admin",
            whatsApp: "+0987654321",
            phone: "+0987654321",
            isDisabled: false,
            isEmailVerified: true,
        },
        {
            email: "alice.johnson@example.com",
            password: "hashedpassword3",
            firstName: "Alice",
            lastName: "Johnson",
            type: "customer",
            whatsApp: "+1122334455",
            phone: "+1122334455",
            isDisabled: true,
            isEmailVerified: false,
        },
    ];

    function handleSearch(event) {
        const searchValue = event.target.value.toLowerCase();
        const rows = document.querySelectorAll(".user-row");

        rows.forEach((row) => {
            const details = row.getAttribute("data").toLowerCase();
            row.style.display = details.includes(searchValue) ? "" : "none";
        });
    }

    return (
        <div className="bg-[#E0ECDE] w-full h-[100vh]">
            <h1 className="m-6 text-3xl font-bold text-[#2C6975] mb-6">Users</h1>
            <div className="m-6">
                <input
                    type="text"
                    placeholder="Search by email, name, or type..."
                    className="w-full p-2 border border-[#6B82A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C6975]"
                    onInput={handleSearch}
                />
            </div>
            <div className="overflow-x-auto bg-[#CDE0C9] rounded-lg shadow m-6">
                <table className="w-full divide-y divide-[#6B82A0]">
                    <thead className="bg-[#2C6975]">
                        <tr>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                First Name
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Last Name
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                WhatsApp
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Phone
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Disabled
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Email Verified
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#CDE0C9] divide-y divide-[#6B82A0]">
                        {users.map((user, index) => (
                            <tr
                                key={index}
                                className="user-row"
                                data={`${user.email} ${user.firstName} ${user.lastName} ${user.type}`}
                            >
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {user.email}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {user.firstName}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {user.lastName}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {user.type}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {user.whatsApp}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {user.phone}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            user.isDisabled
                                                ? "bg-[#FF6347] text-[#FFFFFF]"
                                                : "bg-[#CDE0C9] text-[#2C6975]"
                                        }`}
                                    >
                                        {user.isDisabled ? "Yes" : "No"}
                                    </span>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            user.isEmailVerified
                                                ? "bg-[#CDE0C9] text-[#2C6975]"
                                                : "bg-[#FF6347] text-[#FFFFFF]"
                                        }`}
                                    >
                                        {user.isEmailVerified ? "Yes" : "No"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}