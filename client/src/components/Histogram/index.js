import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function Histogram(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        // text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const values = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111]

  const data = {
    labels,
    datasets: [
      {
        label: 'Counts',
        data: labels.map((label, index) => {
          let y_value = 0;
          if (props.data) {
            
            for (let i = 0; i < props.data.all_data.length; i++) {
              if (props.data.all_data[i]._id === (index+1).toString()) {
                y_value = props.data.all_data[i].counts;
                break;
              } else {
                y_value = 0;
              }
            }

          } else {
            y_value = values[index];
          }
          return { x: label, y: y_value };
        }),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;

}
