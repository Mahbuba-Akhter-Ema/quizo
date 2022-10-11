import React from 'react';

const Option = ({option, handleClick}) => {
    return (
        <div className=' border-2 border-violet-400 bg-green-200 rounded-lg flex w-11/12 m-auto text-center mt-2  mb-2'>
            <label onClick={()=>handleClick(option)}><input type="radio" name='option' />{option}</label>
        </div>
    );
};

export default Option;