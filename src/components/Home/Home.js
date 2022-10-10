import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
   const allQuiz = useLoaderData();
    return (
        <div>
            <h1>All Quize: {allQuiz.length}</h1>
        </div>
    );
};

export default Home;