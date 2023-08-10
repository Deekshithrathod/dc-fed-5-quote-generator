import "./Quote.css";
import { useRecoilValue } from "recoil";
import { quoteState } from "../../atoms/quote";
import QuoteMeta, { IQuoteMeta } from "./QuoteMeta/QuoteMeta";
import QuoteText, { IQuoteText } from "./QuoteText/QuoteText";

export interface IQuote extends IQuoteMeta, IQuoteText {}

const Quote = () => {
  const { quoteText, quoteAuthor, quoteGenre } = useRecoilValue(quoteState);
  return (
    <div className="quote">
      <QuoteText quoteText={quoteText} />
      <QuoteMeta {...{ quoteAuthor, quoteGenre }} />
    </div>
  );
};

export default Quote;
