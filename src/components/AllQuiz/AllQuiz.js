import React, { Fragment } from 'react';

const AllQuiz = ({quiz}) => {
    const {id, question, options, correctAnswer} = quiz;

    return (
      <div className='bg-pink-300 w-10/12 bg-gray-200 m-auto'>
        <div className='m-auto bg-gray-300 rounded-xl'>
           <h1 className='m-4 text-2xl text-orange-800 font-bold'>
                Quiz:{question}
           </h1>
           <div className='gird grid-cols-2'>
                <div className='border-2 border-violet-400 bg-green-200 rounded-lg flex w-11/12 m-auto text-center mt-2 mb-2'>
                    <input 
                    className='ml-4 mr-4'
                    type="radio"
                    id={options[0]}
                    name={id}
                    value={options[0]}
                    />
                    <label className="bg-yellow-200   py-6 w-full hover:bg-yellow-300 rounded" for={options[0]}>{options[0]}</label>
                    <input 
                    className='ml-4 mr-4'
                    type="radio"
                    id={options[1]}
                    name={id}
                    value={options[1]}
                    />
                    <label className="bg-yellow-200   py-6 w-full hover:bg-yellow-300 rounded" for={options[1]}>{options[1]}</label>
                    <input 
                    className='ml-4 mr-4'
                    type="radio"
                    id={options[2]}
                    name={id}
                    value={options[2]}
                    />
                    <label className="bg-yellow-200   py-6 w-full hover:bg-yellow-300 rounded" for={options[2]}>{options[2]}</label>
                    <input 
                    className='ml-4 mr-4'
                    type="radio"
                    id={options[3]}
                    name={id}
                    value={options[3]}
                    />
                    <label className="bg-yellow-200   py-6 w-full hover:bg-yellow-300 rounded" for={options[3]}>{options[3]}</label>
                </div>
           </div>
        </div>
      </div>
    );
};

export default AllQuiz;