import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import { createContext } from "react";

export const JobContext = createContext('');

const Home = () => {
    const data = useLoaderData();

    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <JobContext.Provider value={data}>
                <Featured></Featured>
            </JobContext.Provider>
        </>
    );
};

export default Home;