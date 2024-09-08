import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 flex flex-col text-center gap-8 items-center justify-center">
        <h1 className="text-2xl md:text-4xl">
          We`re delighted to have you{" "}
          <span className="text-pink-500">Here!</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          recusandae quas beatae distinctio ea, facilis, corrupti accusantium
          suscipit sunt minus obcaecati cumque eaque repellendus vero eum non
          facere quos perspiciatis! Necessitatibus harum error nesciunt numquam
          voluptatum soluta, animi perspiciatis? Alias vitae aut debitis autem,
          aliquid reprehenderit nisi neque asperiores inventore.
        </p>
        <Link to="/">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300">
          Back
        </button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 mt-12 mb-12">
        {
          list.map((item, index)=>(
            <Cards key={index} item={item}/>
          ))
        }
      </div>
    </div>
  );
};

export default Course;
