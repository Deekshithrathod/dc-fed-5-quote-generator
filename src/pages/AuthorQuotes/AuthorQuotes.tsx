import { useEffect, useState } from "react";
import "./AuthorQuotes.css";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../components/Navbar/Navbar";
import { IQuote } from "../../components/Quote/Quote";
import QuoteText from "../../components/Quote/QuoteText/QuoteText";

const AuthorQuotes = () => {
  const { authorName } = useParams();
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  useEffect(() => {
    // fetch all quotes at Once
    fetch(`${BASE_URL}?author=${authorName}`)
      .then((res) => res.json())
      .then((data) => setQuotes(data.data));
  }, []);

  return (
    <div className="authorQuotes">
      {quotes.map((quote, index) => (
        <QuoteText quoteText={quote.quoteText} key={index} />
      ))}
    </div>
  );
};

export default AuthorQuotes;
