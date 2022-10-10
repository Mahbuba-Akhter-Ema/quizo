import React from 'react';

const Header = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Welcome To 
              <br className="hidden md:block" />
              Quizo{' '}
            </h2>
            <p className="text-gray-700 text-base md:text-lg">We've got all the quizzes you love to binge! Come on in and hunker down for the long haul.</p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <img className="object-cover" src="https://st2.depositphotos.com/4398873/7554/v/450/depositphotos_75545389-stock-illustration-quiz-multicolor-letters.jpg" alt="" />
          </div>
        </div>
      </div>
      <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
    );
};

export default Header;