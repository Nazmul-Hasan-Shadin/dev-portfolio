import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
      const [data,setData]= useState()
    
        useEffect(()=>{
          fetch('/public/project.json')
          .then(res=>res.json())
          .then(info=> setData(info) )
        },[])
      
    return (
        <div className=''>
            <h2 className='text-3xl mb-8 w-40 mx-auto'>Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {
                data?.map(data=> <Project allproject={data} ></Project>)
            }
          </div>
        </div>
    );
};

export default Projects;