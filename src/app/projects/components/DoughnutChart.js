// components/DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

// Register the elements and plugins
Chart.register(ArcElement, CategoryScale, Title, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
    // Convert value strings to numbers
    const processedData = data.map(item => ({
        ...item,
        value: parseFloat(item.value.replace(/,/g, '')), // Remove commas and convert to number
        color: item.color // Extract color
    }));

    const chartData = {
        labels: processedData.map(item => item.label),
        datasets: [
            {
                data: processedData.map(item => item.value),
                backgroundColor: processedData.map(item => item.color), // Use colors from data
                borderWidth: 4, // Set borderWidth to create a gap between segments
                borderColor: '#18182B', // Set borderColor to match the background color or any other color
            }
        ]
    };

    const options = {
        cutout: '85%', // Adjust this value to decrease the width and height of the chart
        plugins: {
            legend: {
                display: false // Hide the legend
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#1F1F1F',
                hoverOffset: 2,// Tooltip background color
                titleFont: { size: 14 }, // Tooltip title font size
                bodyFont: { size: 12 }, // Tooltip body font size
                callbacks: {
                    // Custom tooltip title
                    title: function (context) {
                        const label = context[0].label || '';
                        return label;
                    },
                    // Custom tooltip label
                    label: function (context) {
                        const value = context.parsed;
                        return `Value: ${value.toFixed()}%`; // Format the number as percentage with 2 decimal places
                    }
                },
                custom: function (context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById('chartjs-tooltip');

                    // // Create element on first render
                    // if (!tooltipEl) {
                    //     tooltipEl = document.createElement('div');
                    //     tooltipEl.id = 'chartjs-tooltip';
                    //     tooltipEl.style.border = '1px solid #000'; // Add a border to make it look like a square
                    //     tooltipEl.style.padding = '5px'; // Add some padding
                    //     tooltipEl.style.borderRadius = '5px'; // Optional: Add rounded corners
                    //     document.body.appendChild(tooltipEl);
                    // }

                    // Hide if no tooltip
                    const tooltip = context.tooltip;
                    if (!tooltip) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set Text
                    if (tooltip.body) {
                        const bodyLines = tooltip.body.map(b => b.lines);
                        let innerHtml = '';

                        bodyLines.forEach(function (body, i) {
                            // Removed the part that adds the colored box
                            innerHtml += '<div>' + body + '</div>';
                        });

                        tooltipEl.innerHTML = innerHtml;
                    }

                    tooltipEl.style.padding = '10px';
                }
            }
        },
        // Other options...
    };

    return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;