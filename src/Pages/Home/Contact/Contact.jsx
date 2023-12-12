
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mh4yybj', 'template_8p4zpwq', form.current, '05SFtOhQvrIffDR9G')
          .then((result) => {
              console.log(result.text);
              toast.success('Message Sent Successfully')
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
           <div className="flex-1 rounded-full">
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:text-5xl font-bold">
   <p>GET TOUCH ME?</p>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form ref={form} onSubmit={sendEmail} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="user_name"  type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input hidden name="user_email" type="email" value={'nazmulhasan.shadin3@gmail.com'} placeholder="Email" className="input input-bordered" required />
          <input  name="message" type="email"  placeholder="Email" className="input input-bordered" required />
       
        </div>
        <textarea name="message"  placeholder="Enter Your message" className="textarea textarea-bordered textarea-md w-full max-w-xs" >


        </textarea>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>   </div>
           
          <div className="flex-1 ">
            <h1 className="text-2xl lg:text-5xl text-center lg:text ">Design and Innovation</h1>
          
            <p className="py-6 lg:w-[546px]  lg:text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione voluptatem sequi nesciuNeque porro quisquam est, oursqui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam</p>
            
            {/* stats */}
   <div className='flex  gap-4 '>
   <div className="border w-42">
         <div className="stat place-items-center space-y-4">
   
   <div className="stat-value">1 year +</div>
   <div className="stat-desc">Lernign Expereience</div>
 </div>
         </div>
         <div className="border w-36">
         <div className="stat place-items-center space-y-4">
   
   <div className="stat-value">14+</div>
   <div className="stat-desc">Project Completed</div>
 </div>
         </div>
   </div>

         {/* stat */}
          </div>
        </div>

        <Toaster></Toaster>
      </div>
    );
};

export default Contact;