import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const Home = () => {
   const allQuiz = useLoaderData();

    return (        
        <div >
            <Header></Header>
            <div className='flex flex-wrap w-100 m-10 justify-between' >
            {
                allQuiz.data.map(quiz => <Quiz
                 key={quiz.id}
                 quiz={quiz}
                >
                </Quiz>)
            }
            </div>
        </div>     
    );    
};

export default Home;