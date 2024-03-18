
const TokenomicsList = ({ item }) => {

    // Calculate the total sum of all values
    const total = parseFloat(item.value.replace(/,/g, ''));

    // Convert the values to percentages
    // const percentage = parseFloat(item.value.replace(/,/g, '')) / total * 100;

    return (
        <li>
            <span>{item.label}</span>
            {/* <span>{percentage}</span> */}
        </li>
    );
};

export default TokenomicsList;