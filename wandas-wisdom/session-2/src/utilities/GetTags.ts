import quotes from "../data/quotes";

export const GetTagsFunction = (): string[] => 
{
    const uniqueQuotes = new Set<string>();
    for (const quote of quotes)
    {
        for (const tag of quote.tags) 
        {
            uniqueQuotes.add(tag);
        }
    }
    const returnArray = new Array<string>(...uniqueQuotes);
    returnArray.sort();
    return returnArray;
}