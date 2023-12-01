const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl p-4">
        <figure>
          <img
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="flex justify-between items-center w-full pr-4">
          <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          </div>
          <div className="card-actions">
            <div className="flex flex-col space-y-2">
            <button className="btn btn-neutral">View</button>
            <button className="btn btn-success">Edit</button>
            <button className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
