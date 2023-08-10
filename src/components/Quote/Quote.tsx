import { useRecoilValue } from "recoil";
import "./Quote.css";
import { quoteState } from "../../atoms/quote";

interface Quote {
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}

const Quote = () => {
  const { quoteText, quoteAuthor, quoteGenre } = useRecoilValue(quoteState);
  return (
    <div className="quote">
      <div className="quoteText">{quoteText}</div>
      <div className="quote-meta-container">
        <div className="quote-meta">
          <div className="quoteAuthor">{quoteAuthor}</div>
          <div className="quoteGenre">{quoteGenre}</div>
        </div>
        <span className="material-symbols-outlined">east</span>
      </div>
    </div>
  );
};

export default Quote;
