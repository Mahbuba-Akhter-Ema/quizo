import React from 'react';

const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz.data;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Quiz;