import Logo from "./assets/logo.svg";
import moonIcon from "./assets/icons/moon.svg";
import cartIcon from "./assets/shopping-cart.svg";
import ringIcon from "./assets/ring.svg";
import { useState } from "react";
import { Cart } from "./cine/Cart";
const Header = () => {

  const [showCart, setShowCart] = useState(false);


const handleShowCart = ()=>{

  setShowCart(true)
}

const handleCloseCart = ()=>{

  setShowCart(false)
}
  return (
    <>

    {
      showCart && <Cart onClose={handleCloseCart}/>
    }
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ringIcon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={moonIcon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"

                onClick={(e)=>{e.preventDefault();handleShowCart()}}
              >
                <img src={cartIcon} width="24" height="24" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
