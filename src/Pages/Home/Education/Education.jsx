import React from 'react';

const Education = () => {
    return (
   <div className=''>
     <h2 className='text-center text-3xl font-bold my-12'>Qualification || Education</h2>
         <div className='grid grid-cols-3 place-items-center my-12'>
     <div className='lg:ml-[700px] pt-36 '>
        <p className='text-md'>B .S . C</p>
        <h2 className='text-gray-500'> Ttiumir College </h2>
     </div>
 
     <div>
    <div className='relative'>
        <p className='absolute right-28 lg:right-20'><span className='text-green-500'>Education</span></p>
    <ul className="steps steps-vertical ">
  <li className="step step-primary">  </li>
  <li className="step "></li>
  <li className="step step-primary"></li>
  <li className="step"></li>
</ul>
<p className='absolute top-0 left-20'><span className='text-green-500'>Education</span></p>
    </div>


     </div>

     <div className='lg:-ml-[640px]  pt-6'>
      <p>Higher Secondary Cretificate</p>
       <span className='text-gray-400'>Milestone College</span>
     </div>
        </div>
   </div>
    );
};

export default Education;