import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const quizData = useLoaderData();
    console.log(quizData.data);
    const datas = quizData.data;


    return (
        <div className='flex justify-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
          <LineChart width={800}
          height={300}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <Line type="monotone" dataKey='name' stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey='total' stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />

        </LineChart>
        </div>
    );
};

export default Statistics;