import { Link } from "react-router-dom";
import "./QuoteMeta.css";

export interface IQuoteMeta {
  quoteAuthor: string;
  quoteGenre: string;
}

const QuoteMeta = ({ quoteAuthor, quoteGenre }: IQuoteMeta) => {
  return (
    <Link to={`/${quoteAuthor}`}>
      <div className="quote-meta-container">
        <div className="quote-meta">
          <div className="quoteAuthor">{quoteAuthor}</div>
          <div className="quoteGenre">{quoteGenre}</div>
        </div>
        <span className="material-symbols-outlined">east</span>
      </div>
    </Link>
  );
};

export default QuoteMeta;
