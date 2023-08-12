import { useSetRecoilState } from "recoil";
import "./Navbar.css";
import { quoteState } from "../../atoms/quote";
import { IQuote } from "../Quote/Quote";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const BASE_URL = `https://quote-garden.onrender.com/api/v3/quotes/`;

const Navbar = () => {
  const { authorName } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const setQuote = useSetRecoilState(quoteState);

  const updateQuote = (quote: IQuote) => {
    setQuote(quote);
    setIsLoading(false);
  };

  const handleClick = () => {
    console.log(`get random quote`);
    setIsLoading((prevState) => !prevState);

    fetch(`${BASE_URL}/random`)
      .then((res) => res.json())
      .then((data) => updateQuote(data.data[0]));

    if (authorName) {
      navigate("/");
    }
  };

  return (
    <nav onClick={() => handleClick()}>
      {isLoading ? "loading..." : "random"}
      <span
        className={`material-symbols-outlined ${isLoading ? "rotate" : ""}`}>
        autorenew
      </span>
    </nav>
  );
};

export default Navbar;
