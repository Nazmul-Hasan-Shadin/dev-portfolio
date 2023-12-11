import React from 'react';

const Skill = () => {
    return (
        <div className=''>
            <h2 className='text-3xl text-center'>Skills</h2>

        <div className=' flex flex-col justify-center items-center space-y-7 w-full'>
            


       <p>
            <p>React js</p>
            <progress className="progress block  progress-info w-56 lg:w-[831px]" value="90" max="100"></progress>
         </p>

         <span>
            <p>Javascript</p>
            <progress className="progress block  progress-info w-56 lg:w-[831px]" value="80" max="100"></progress>
         </span>

         <span>
            <p>Express js</p>
            <progress className="progress block  progress-info w-56 lg:w-[831px]" value="60" max="100"></progress>
         </span>

         <span>
            <p>Mongodb</p>
            <progress className="progress block  progress-info w-56 lg:w-[831px]" value="70" max="100"></progress>
         </span>
        </div>

        </div>

    );
};

export default Skill;