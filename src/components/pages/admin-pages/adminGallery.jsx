export default function AdminGallery() {
    // Hardcoded sample data
    const galleryItems = [
        {
            name: "Beach View",
            image: "https://via.placeholder.com/150",
            description: "A stunning view of the beach at sunset.",
        },
        {
            name: "Mountain Cabin",
            image: "https://via.placeholder.com/150",
            description: "A cozy cabin nestled in the mountains.",
        },
        {
            name: "City Skyline",
            image: "https://via.placeholder.com/150",
            description: "The vibrant skyline of a bustling city.",
        },
    ];

    function handleSearch(event) {
        const searchValue = event.target.value.toLowerCase();
        const rows = document.querySelectorAll(".gallery-row");

        rows.forEach((row) => {
            const details = row.getAttribute("data").toLowerCase();
            row.style.display = details.includes(searchValue) ? "" : "none";
        });
    }

    return (
        <div className="bg-[#E0ECDE] w-full h-[100vh]">
            <h1 className="m-6 text-3xl font-bold text-[#2C6975] mb-6">Gallery Items</h1>
            <div className="m-6">
                <input
                    type="text"
                    placeholder="Search by name or description..."
                    className="w-full p-2 border border-[#6B82A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C6975]"
                    onInput={handleSearch}
                />
            </div>
            <div className="overflow-x-auto bg-[#CDE0C9] rounded-lg shadow m-6">
                <table className="w-full divide-y divide-[#6B82A0]">
                    <thead className="bg-[#2C6975]">
                        <tr>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Image
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#CDE0C9] divide-y divide-[#6B82A0]">
                        {galleryItems.map((item, index) => (
                            <tr
                                key={index}
                                className="gallery-row"
                                data={`${item.name} ${item.description}`}
                            >
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {item.name}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {item.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}