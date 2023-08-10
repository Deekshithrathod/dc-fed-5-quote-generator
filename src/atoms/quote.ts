import { atom } from "recoil";
import Quote from "../components/Quote/Quote";

const defaultQuote: Quote = {
  quoteText:
    "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.",
  quoteAuthor: "Bill Gates",
  quoteGenre: "business",
};

export const quoteState = atom({
  key: "quoteState",
  default: defaultQuote,
});
