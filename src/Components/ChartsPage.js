import React from 'react'
import LineChart from './LineChart'
import DonutChart from './DonutChart'
import BarChart from './BarChart'

const ChartsPage = () => {
    return (
        <div className='row'>
            <LineChart />
            <DonutChart />
            <BarChart />
        </div>
    )
}

export default ChartsPage