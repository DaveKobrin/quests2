import quotes from "../data/quotes";
import { Quote } from "../types";

export const FilterTopics = (tag: string) :Quote[] => 
{
    const returnArray = new Array<Quote>();
    for (const quote of quotes)
    {
        if (quote.tags.includes(tag))
        {
            returnArray.push(quote);
        }
    }
    return returnArray;
}