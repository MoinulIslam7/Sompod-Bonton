import React from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
const convertToBanglaNumber = (num) => {
    if (num === null || num === undefined) return "";
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num.toString().split("").map((digit) => (/\d/.test(digit) ? banglaDigits[digit] : digit)).join("");
};

// Register the required chart components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ data }) => {
    const chartData = {
        labels: data.map((item) => `${item.person} - ${item?.percentage ? convertToBanglaNumber(item?.percentage?.toFixed(2)) : convertToBanglaNumber(100)}%`),
        datasets: [
            {
                data: data.map((item) => (item.percentage ?? 100)),
                backgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#E74C3C",
                    "#3498DB", "#2ECC71", "#9B59B6", "#F1C40F", "#1ABC9C", "#34495E", "#95A5A6",
                    "#7F8C8D", "#C0392B", "#8E44AD", "#27AE60", "#2980B9", "#16A085", "#F39C12",
                    "#D35400", "#BDC3C7", "#2C3E50", "#E67E22", "#AAB7B8", "#1F618D", "#E59866",
                    "#73C6B6", "#A569BD"
                ],
                hoverBackgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#E74C3C",
                    "#3498DB", "#2ECC71", "#9B59B6", "#F1C40F", "#1ABC9C", "#34495E", "#95A5A6",
                    "#7F8C8D", "#C0392B", "#8E44AD", "#27AE60", "#2980B9", "#16A085", "#F39C12",
                    "#D35400", "#BDC3C7", "#2C3E50", "#E67E22", "#AAB7B8", "#1F618D", "#E59866",
                    "#73C6B6", "#A569BD"
                ],
                borderWidth: 3,
                borderColor: "#fff",
                offset: 10,
                hoverOffset: 15,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: { size: 14 },
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) =>
                        `${tooltipItem.label}: ${tooltipItem?.raw ? Number(tooltipItem.raw).toFixed(2) : ''}%`,
                },
            },
            datalabels: {
                color: "#000",
                formatter: (value, context) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    return `${label}`;
                },
                align: "start",
                anchor: "end",
                offset: 10,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: 3,
                padding: 6,
                borderWidth: 1,
                borderColor: "#000",
                display: "auto",
                rotation: 0,
            },
        },
    };

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full h-full lg:w-[30rem] lg:h-[30rem]">
                <Pie data={chartData} options={options} />
            </div>
        </div>
    );
};

export default PieChart;
