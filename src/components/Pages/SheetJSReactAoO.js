import React, { useCallback, useEffect, useState } from "react";
import { read, utils, writeFileXLSX } from 'xlsx';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Testing the Bar Chart',
        },
    },
};

export default function SheetJSReactAoO() {
    /* Creating state for our charts */

    const [data, setData] = useState({
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(25, 90, 13, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });

    const dataSet2 = [];



  /* the component state is an array of presidents */
  const [pres, setPres] = useState({
    name:"",
    index:""
  });

  /* Fetch and update the state once */
  useEffect(() => { (async() => {
    const f = await (await fetch("https://sheetjs.com/pres.xlsx")).arrayBuffer();
    const wb = read(f); // parse the array buffer
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_json(ws); // generate objects
    setPres(data); // update state
  })(); }, []);

  for (const val of pres.index) {
    dataSet2.push(val)
    // labelSet.push(val.name)
}
  console.log("app", dataSet2)

//   /* get state data and export to XLSX */
//   const exportFile = useCallback(() => {
//     const ws = utils.json_to_sheet(pres);
//     const wb = utils.book_new();
//     utils.book_append_sheet(wb, ws, "Data");
//     writeFileXLSX(wb, "SheetJSReactAoO.xlsx");
//   }, [pres]);


setData({
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
        {
            label: 'Dataset ID',
            data: [2, 4, 3, 2, 5, 6, 7, 8],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(99, 132, 0.5)',
        },
        {
            label: 'Dataset ID2',
            data: dataSet2,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 235, 0.5)',
        },
    ],
})

return (
    <div style={{ width: '50%', height: '30%' }}>
        <Bar data={data} options={options} />
        {/* <Line data={data1} options={options1}/> */}
    </div>);
}