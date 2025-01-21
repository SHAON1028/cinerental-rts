import { useState } from "react";
import { Movie } from "../data/movies";
import { getImgUrl } from "../utils/get-image-url";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
type MovieProps = {
    movie:Movie
}
const MovieCard = ({movie}:MovieProps) => {

  const [showModal,setShowModal] = useState(false);

const handleOpenModal = ()=>{

  setShowModal(true)
}
const handleCloseModal = ()=>{
  setShowModal(false)
}

console.log(showModal)
  return (
    <>
      {showModal && <MovieDetailsModal movie={movie} onClose={handleCloseModal} />}
      <figure
        id={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="" onClick={(e)=>{
          e.preventDefault();
          handleOpenModal()
        }}>
          {" "}
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
        </a>

        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>{movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}

export default MovieCard