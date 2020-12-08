import { createContext } from "react";

export const TweetContext = createContext({
    content: '',
    userName: "Max",
    date: new Date(Date.now())
});
