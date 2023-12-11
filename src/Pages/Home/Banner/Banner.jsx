import profile from '../../../assets/photos/profile.png'
const Banner =()=> {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
           <div className="flex-1 rounded-full">
           <img src={profile} className="max-w-sm rounded-lg " />
           </div>
           
          <div className="flex-1 ">
            <h1 className="text-5xl font-bold">Hi Iam Shadin</h1>
            <h1 className='text-5xl font-bold'>Full Stack Developer </h1>
            <p className="py-6 w-[546px]">I am a dedicated MERN Stack developer, driven by a passion for crafting high-performance and scalable web applications. With a solid foundation in MongoDB, Express.js, React.js, and Node.js,</p>
            
            <button className="btn btn-outline btn-success">Download Cv</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;