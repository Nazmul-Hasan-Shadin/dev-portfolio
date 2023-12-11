

const Project = ({allproject}) => {
    return (
<div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className="h-[230px]" src={allproject?.image} alt="Shoes" /></figure>
  
  <div className="card-body">
    <h2 className="card-title">{allproject?.name}</h2>
    <span>Type: {allproject?.type}</span>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Project;