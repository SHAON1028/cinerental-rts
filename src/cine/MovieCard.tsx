import { useState } from "react";
import { Movie } from "../data/movies";
import { getImgUrl } from "../utils/get-image-url";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../redux/features/cart/cartSlice";
import { RootState } from "../redux/store";
import toast from "react-hot-toast";

type MovieProps = {
  movie: Movie;
};
const MovieCard = ({ movie }: MovieProps) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state.cart);

  
  const isAdded = items.some((item) => item.name === movie.title);

  console.log(items,isAdded,movie.id);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleAddToCart = () => {
    if(isAdded){
      toast("Already Added to the Cart", {
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    else {
      dispatch(
      addtoCart({
        id: movie.id,
        name: movie.title,
        cover: movie.cover,
        genre: movie.genre,
        price: movie.price,
        quantity: 1,
      })
    );
    }
  };
  console.log(showModal);
  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={movie} onClose={handleCloseModal}  onAddToCart={handleAddToCart}/>
      )}
      <figure
        id={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            handleOpenModal();
          }}
        >
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
          <button onClick={handleAddToCart}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          
          >
            <img src="./assets/tag.svg" alt="" />
            <span>
              {movie.price} | Add to Cart
            </span>
          </button>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
