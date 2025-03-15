export default function AdminCategory() {
    // Hardcoded sample data
    const categories = [
        {
            name: "Deluxe Room",
            price: 200,
            description: "A spacious deluxe room with a king-sized bed and a view of the city.",
            features: ["Free Wi-Fi", "Air Conditioning", "Mini Bar"],
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Executive Suite",
            price: 350,
            description: "An executive suite with a separate living area and a private balcony.",
            features: ["Free Wi-Fi", "Air Conditioning", "Mini Bar", "Jacuzzi"],
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Family Room",
            price: 250,
            description: "A family-friendly room with two double beds and a play area for kids.",
            features: ["Free Wi-Fi", "Air Conditioning", "Mini Bar", "Kids Play Area"],
            image: "https://via.placeholder.com/150",
        },
    ];

    function handleSearch(event) {
        const searchValue = event.target.value.toLowerCase();
        const rows = document.querySelectorAll(".category-row");

        rows.forEach((row) => {
            const details = row.getAttribute("data").toLowerCase();
            row.style.display = details.includes(searchValue) ? "" : "none";
        });
    }

    return (
        <div className="bg-[#E0ECDE] w-full h-[100vh]">
            <h1 className="m-6 text-3xl font-bold text-[#2C6975] mb-6">Categories</h1>
            <div className="m-6">
                <input
                    type="text"
                    placeholder="Search by category name..."
                    className="w-full p-2 border border-[#6B82A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C6975]"
                    onInput={handleSearch}
                />
            </div>
            <div className="overflow-x-auto bg-[#CDE0C9] rounded-lg shadow m-6">
                <table className="w-full divide-y divide-[#6B82A0]">
                    <thead className="bg-[#2C6975]">
                        <tr>
                            <th className="px-4 py-4 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-4 py-4 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-4 py-4 text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Features
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-medium text-[#FFFFFF] uppercase tracking-wider">
                                Image
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#CDE0C9] divide-y divide-[#6B82A0]">
                        {categories.map((category, index) => (
                            <tr key={index} className="category-row" data={category.name}>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {category.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    ${category.price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-[#2C6975]">
                                    {category.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2C6975]">
                                    <ul className="list-disc list-inside">
                                        {category.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2C6975]">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}