import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className="card w-96 bg-gray-200 m-3 shadow-xl"> 
        <figure className="px-10 pt-10">
            <img src={logo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>Total Quiz: {total}</p>
            <div className="card-actions">
                <Link to={`home/${id}`}><button className="btn bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-ful mb-4">Start Learning</button></Link>
            </div>
        </div>
    </div>
 );
};

export default Quiz;