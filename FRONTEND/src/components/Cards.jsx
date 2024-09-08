const Cards = ({ item }) => {
  return (
    <div>
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 m-4">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between">
            <h3 className="text-xl font-semibold">${item.price}</h3>
            <button className="bg-pink-400 text-white px-2 py-1 rounded-md hover:bg-pink-700 duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
