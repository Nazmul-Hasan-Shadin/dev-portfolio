import { Link } from 'react-router-dom';
import profile from '../../../assets/photos/profile.png'
const Banner =()=> {
    return (
        <div className="hero min-h-screen mt-10">
        <div className="hero-content flex-col-reverse lg:flex-row">
           <div className="flex-1 rounded-full">
           <img src={profile} className="max-w-sm rounded-lg " />
           </div>
           
          <div className="flex-1 ">
            <h1 className=" text-2xl lg:text-5xl font-bold">Hi Iam Shadin</h1>
            <h1 className='text-md lg:text-5xl font-bold'>Full Stack Developer </h1>
            <p className="py-6 lg:w-[546px]">I am a dedicated MERN Stack developer, driven by a passion for crafting high-performance and scalable web applications. With a solid foundation in MongoDB, Express.js, React.js, and Node.js,</p>
            
           <Link to={'https://drive.google.com/uc?export=download&id=1M-Wakpdpf5S9WlCQ-giqOARsXeful2xZ'} download={'pdf document'}   target="_blank"  >   <button className="btn btn-outline btn-success">Download Cv</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;