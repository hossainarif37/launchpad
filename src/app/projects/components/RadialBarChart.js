// components/RadialBarChart.js
import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RadialBarChart = ({ data }) => {
    const chartOptions = {
        chart: {
            height: 200,
            type: "radialBar"
        },


        plotOptions: {
            radialBar: {
                hollow: {
                    // margin: 15,
                    size: "65%"
                },

                track: {
                    background: '#24243D'
                },

                dataLabels: {
                    showOn: "always",
                    name: {
                        offsetY: 30,
                        show: true,
                        color: "#7787B1",
                        fontSize: "14px",
                        fontFamily: "Mulish",
                    },
                    value: {
                        color: "#ffffff",
                        fontSize: "30px",
                        fontWeight: "bold",
                        show: true,
                        offsetY: -20,
                    }
                }
            }
        },

        stroke: {
            lineCap: "round",
        },
        labels: ["Submitted"],
        fill: {
            colors: ['#37C7B6'],
            type: 'solid'
        },

    };

    return (
        <div className="RadialBarChart">
            <ReactApexChart options={chartOptions} series={data} type="radialBar" width={"100%"} height={250} />
        </div>
    );
};

export default RadialBarChart;