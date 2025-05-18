import '../css/chart.css'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
  } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';


export const data = {
  labels: ['Rent', 'Nutrition', 'Other expenses'],
  datasets: [
    {
      label: 'you spent $',
      data: [1382, 453, 983],
      backgroundColor: [
        '#4ECDC4',
        '#FF6B6B',
        '#EDEDED',
      ],
      hoverBackgroundColor: [
        '#33E6DA', // Custom hover color for Rent
        '#FF5353', // Custom hover color for Nutrition
        '#F1F1F1', // Custom hover color for Other expenses
      ],
      hoverOffset: 20, // Offset when hovering
      borderWidth: 0,
    },
  ],
};

  

ChartJS.register(ArcElement, Tooltip, Legend, Title);


function Chart () {

  const total = data.datasets[0].data.reduce((sum, value) => value + sum, 0)

    return(
        <>
            <h1 className='overview'>You spent {total}$ this month.</h1>
            <Doughnut data={data} />
        </>
    )

}

export default Chart