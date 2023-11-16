import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [4000, 5000, 6000, 7000, 8500, 10000],
            backgroundColor: 'dodgerblue',
            barPercentage: 0.5,
            barThickness: 30,
            maxBarThickness: 40,
            minBarLength: 2,
        },
    ],
};

export default function BarChart() {
    return (
        <div className="col-md-8 border border-2 rounded shadow">
            {/* Bar Chart Header - Dropdown */}
            <div
                className="card-header text-primary py-3 d-flex flex-row align-items-center justify-content-between"
                style={{
                    width: "100%",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                }}
                variant="light"
                id="dropdown-basic"
            >
                Bar Chart
            </div>
            {/* <Bar Chart Body*/}
            <Bar options={options} data={data} />
        </div>
    );
}