import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: '',
        },
        tooltip: {

            backgroundColor: 'white',
            titleColor: 'black',
            bodyColor: 'black',
            borderColor: 'black',
            borderWidth: 0.2,

        }
    },
};

export const data = {
    labels: ['Direct', 'Referral', 'Social'],
    datasets: [
        {
            label: '',
            data: [55, 30, 15],
            backgroundColor: [
                'dodgerblue',
                'lightgreen',
                'skyblue'
            ],
            borderColor: [
                'white',
                'white',
                'white'
            ],
            borderWidth: 5,
            cutout: '80%'
        },
    ],
};

export default function DonutChart() {
    return (
        <div className="card shadow mb-4 col-md-4" >
            {/* Donut Chart Header - Dropdown */}
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
                Donut Chart
            </div>
            {/* <Donut Chart Body*/}
            <Doughnut options={options} data={data} />
        </div>
    );
}