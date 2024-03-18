// TokenomicsChart.js
import dynamic from 'next/dynamic';
import React from 'react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TokenomicsChart = ({ data }) => {
    // Calculate the total sum of all values
    const total = data.reduce((sum, item) => sum + parseFloat(item.value.replace(/,/g, '')), 0);

    // Convert the values to percentages
    const series = data.map(item => (parseFloat(item.value.replace(/,/g, '')) / total * 100))

    // Extract labels from the data prop
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);
    const colors = data.map(item => item.color);

    const chartOptions = {
        labels: labels,
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            show: true,
            width: 4,
            colors: ['#18182B']
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '86%'
                }
            }
        },
        tooltip: {
            theme: 'dark',
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                // Access the series data for the hovered pie slice
                const seriesData = w.config.series[seriesIndex];

                // Custom content function
                const customContent = `<div class="bg-gray-800 bg-opacity-5 text-white p-4 rounded-lg">
                <div class="font-bold mb-2 flex flex-1 justify-between gap-5">
                    <span>${w.config.labels[seriesIndex]}</span>
                    <span>${seriesData.toFixed(2)}%</span>
                </div>
                <div>${values[seriesIndex]}</div>
            </div>`;
                return customContent;
            }
        },

        colors: colors
    }

    return (
        <div className="DoughnutChart">
            <ReactApexChart options={chartOptions} series={series} type="donut" width={"100%"}
                height={300} />
        </div>
    );
};

export default TokenomicsChart;