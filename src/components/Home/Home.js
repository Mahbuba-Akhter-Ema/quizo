import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
   const allQuiz = useLoaderData();
   console.log(allQuiz);
    return (
        <div className='flex mb-10'>
            {
                allQuiz.data.map(quiz => <Quiz
                 key={quiz.id}
                 quiz={quiz}
                >
                </Quiz>)
            }
        </div>
    );
};

export default Home;