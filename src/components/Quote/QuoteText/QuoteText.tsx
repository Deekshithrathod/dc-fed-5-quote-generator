import "./QuoteText.css";

export interface IQuoteText {
  quoteText: string;
}

const QuoteText = ({ quoteText }: IQuoteText) => {
  return <div className="quoteText">{quoteText}</div>;
};

export default QuoteText;
