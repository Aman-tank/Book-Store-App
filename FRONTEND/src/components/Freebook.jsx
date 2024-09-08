import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

const Freebook = () => {

    const filterBooks = list.filter((book)=> book.category === 'Free');

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="flex flex-col gap-4">
      <h2 className="text-xl md:text-2xl font-semibold">Free Books</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque quae aliquid, quia enim provident temporibus esse deleniti repellendus porro at earum dicta sapiente, tempore voluptatem? Sequi nisi sint quas!</p>
      </div>

      <div className="slider-container mt-12 mb-12">
      <Slider {...settings}>
      {
        filterBooks.map((item, index)=>(
            < Cards key={index} item={item}/>
        ))
      }
      </Slider>
    </div>
    </div>
  )
}

export default Freebook;
