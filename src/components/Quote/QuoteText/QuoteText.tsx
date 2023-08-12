import "./QuoteText.css";

export interface IQuoteText {
  quoteText: string;
}

const QuoteText = ({ quoteText }: IQuoteText) => {
  return <article className="quoteText">{quoteText}</article>;
};

export default QuoteText;
