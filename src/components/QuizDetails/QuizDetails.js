import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuiz from '../AllQuiz/AllQuiz';

const QuizDetails = () => {
    const loaderData = useLoaderData();
    const quizData = loaderData.data.questions;

    return (
        <div>
            {
                quizData.map(quiz =>(
                <AllQuiz key={quiz.id} quiz={quiz}></AllQuiz>
                ))
            }
        </div>
    );
};

export default QuizDetails;