
const TokenomicsList = ({ item, total, color }) => {
    // Convert the values to percentages
    const percentage = parseFloat(item.value.replace(/,/g, '')) / total * 100;

    return (
        <li className="flex items-center justify-between  hover:bg-[#212137] p-2 rounded-lg">

            <div className="flex items-center gap-x-3">
                <div className="w-4 h-4 block rounded-full border-8 border-[#ff5200] border-opacity-40 relative">
                    <div className="w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5200]"></div>
                </div>
                <span className="font-semibold text-[#FFFFF2] font-[Prompt]">{item.label}</span>
            </div>

            <span className="text-[#7787B1]">{percentage.toFixed(1)}%</span>

        </li>
    );
};

export default TokenomicsList;