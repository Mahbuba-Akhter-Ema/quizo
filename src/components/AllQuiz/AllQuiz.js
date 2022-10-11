import React, { useState } from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import './AllQuiz.css'


const AllQuiz = ({quiz}) => {
    const { question, options, correctAnswer} = quiz;
    const questions = question.slice(3, -4)
    const handleClick = (answer) =>{
        if(answer === correctAnswer){
            alert('Correct Answer')
        }
        else{
            alert('Wrong Answer')
        }
    };
    const [showDiv,setShowDiv] = useState(false);
    const handleEyeClick = () =>{
        setShowDiv(true);  
    };

    return (
      <div className='bg-pink-200 w-10/12 bg-gray-300 m-auto mt-4 rounded-xl p-2'>
        <div className='m-auto bg-gray-400 rounded-xl p-2'>
            <div className='flex justify-between w-2/3 m-auto '>
                <h1>{questions}</h1>
                <EyeIcon onClick={handleEyeClick} className="h-6 w-6 text-blue-500"/>
            </div>
            {
                showDiv && (
                    <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={()=> setShowDiv(false)} className="close">&times;</span>
                        <p>{correctAnswer}</p>
                    </div>
                    </div>
                )
            }
            {
                options.map((option, _idx) => <Option key={_idx} option={option} handleClick={handleClick}></Option>)
            }
        </div>
      </div>
      
    );
};

export default AllQuiz;