import { Link } from "react-router-dom";


const Project = ({allproject}) => {
  console.log(allproject.links)
    return (
<div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className="h-[230px]" src={allproject?.image} alt="Shoes" /></figure>
  
  <div className="card-body">
    <h2 className="card-title">{allproject?.name}</h2>
    <span>Type: {allproject?.type}</span>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
     <Link to={allproject?.links}> <button className="btn btn-primary"> Visit Now </button></Link>
    </div>
  </div>
</div>
    );
};

export default Project;