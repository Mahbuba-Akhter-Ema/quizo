import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const quizData = useLoaderData();
    const datas = quizData.data;

    return (
      <div style={{
        paddingBottom: '56.25%', /* 16:9 */
        position: 'relative',
        height: 0
      }} >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '60%'
        }}>
            <ResponsiveContainer> 
              <LineChart width={500}
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
        </ResponsiveContainer>
        </div>
      </div>
          
    );
};

export default Statistics;