import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Earnings of the year',
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

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Earnings $ ',
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 35000],
            borderColor: 'dodgerblue',
            backgroundColor: 'blue',
            tension: 0.3,
        },
    ],
};

export default function LineChart() {
    return (
        <div class="card shadow mb-4 col-md-8">
            {/* Line Chart Header - Dropdown */}
            <Dropdown >
                <Dropdown.Toggle
                    className="card-header text-primary py-3 d-flex flex-row align-items-center justify-content-between "
                    style={{ width: "100%", fontWeight: "bold", backgroundColor: 'transparent' }}
                    variant="light"
                    id="dropdown-basic"
                >
                    Earnings Overview
                </Dropdown.Toggle>

                <Dropdown.Menu align={"end"}>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* <Line Chart Body*/}
            <Line options={options} data={data} />
        </div>
    );
}