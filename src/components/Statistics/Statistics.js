import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart } from 'recharts';


const Statistics = () => {
    const quizData = useLoaderData();
    console.log(quizData);
    const {name, total} = quizData;
    return (
        <div>
            <LineChart width={500}
          height={300}
          quizData={quizData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <Line type="monotone" dataKey={name} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={total} stroke="#82ca9d" />

   </LineChart>
        </div>
    );
};

export default Statistics;