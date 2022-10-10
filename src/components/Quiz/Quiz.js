import React from 'react';

const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h1 className="text-3xl font-semibold tracking-wide">{name}</h1>
			<p className="dark:text-gray-100">All Quize: {total}</p>
		</div>
        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Start Practice</button>	</div>
</div>
    );
};

export default Quiz;