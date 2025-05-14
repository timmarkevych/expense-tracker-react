import '../css/chart.css'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
  } from 'chart.js';


import { Pie } from 'react-chartjs-2';

// Chart data
const data = {
    labels: ['Rent', 'Food', 'Utilities', 'Entertainment'],
    datasets: [
      {
        label: 'Expenses',
        data: [800, 300, 150, 200],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  };
  
  // Chart options
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Chart',
      },
    },
};
  

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function Chart () {
    return(
        <>
            <h1 className='overview'>You spent 2 352 $ this month.</h1>
            <Pie data={data} options={options} />
        </>
    )

}

export default Chart