import database from '../firebase'; // Step 1: import firebase
import { defaults } from 'chart.js'; // it is needable when we want make some defaults
import React from 'react';
import { Line } from 'react-chartjs-2';

defaults.global.legend.position = 'bottom';

const Chart = () => {
  // fetchdata
  let labelsArray = [];
  let vaxArray = [];
  let unVaxArray = [];
  let unKnownArray = [];

  const starCountRef = database.ref('events');

  starCountRef.on('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      let item = childSnapshot.val();

      let date = item.date;
      labelsArray.push(date);
      console.log(labelsArray);

      let vax = item.vax;
      vaxArray.push(vax);
      console.log(vaxArray);

      let unVax = item.unVax;
      unVaxArray.push(unVax);
      console.log(unVaxArray);

      let unKnown = item.unKnown;
      unKnownArray.push(unKnown);
      console.log(unKnownArray);
    });
  });

  return (
    <div>
      <Line
        data={{
          labels: labelsArray,
          datasets: [
            {
              label: 'Vaktsineeritud',
              data: vaxArray,
              backgroundColor: 'rgba(0, 179, 25, 0.2)',
              borderColor: 'rgba(0, 179, 25, 1)',
            },
            {
              label: 'Vaktsineerimata',
              data: unVaxArray,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
            },
            {
              label: 'Teadmata',
              data: unKnownArray,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 22,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
