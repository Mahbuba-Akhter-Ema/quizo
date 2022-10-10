import React from 'react';

const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div className="flex">
            <div className="card w-96 bg-base-200 shadow-xl"> 
        <figure className="px-10 pt-10">
            <img src={logo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>Total Quiz: {total}</p>
            <div className="card-actions">
            <button className="btn bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-3 rounded-ful mb-2">Start Learning</button>
            </div>
        </div>
    </div>
      </div>
 );
};

export default Quiz;