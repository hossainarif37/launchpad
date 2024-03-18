
const TokenomicsList = ({ item, total, color }) => {
    // Convert the values to percentages
    const percentage = parseFloat(item.value.replace(/,/g, '')) / total * 100;

    const hexToRGBA = (hex, opacity) => {
        switch (opacity) {
            case 0:
                return `${hex}00`
            case 5:
                return `${hex}0D`
            case 10:
                return `${hex}1A`
            case 15:
                return `${hex}26`
            case 20:
                return `${hex}33`
            case 25:
                return `${hex}40`
            case 30:
                return `${hex}4D`
            case 35:
                return `${hex}59`
            case 40:
                return `${hex}66`
            case 45:
                return `${hex}73`
            case 50:
                return `${hex}80`
            case 55:
        }
    }

    return (
        <li className="flex items-center justify-between  hover:bg-[#212137] p-2 rounded-lg">

            <div className="flex items-center gap-x-3">
                <div className={`w-4 h-4 block rounded-full border-8  relative`} style={{ borderColor: hexToRGBA(color, 40) }}>
                    <div className={`w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full`} style={{ backgroundColor: color }}></div>
                </div>
                <span className="font-semibold text-[#FFFFF2] font-[Prompt]">{item.label}</span>
            </div>

            <span className="text-[#7787B1]">{percentage.toFixed(1)}%</span>

        </li>
    );
};

export default TokenomicsList;