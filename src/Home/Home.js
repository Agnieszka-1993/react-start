import React from "react";
import Hero from "../components/Hero/Hero";
import SearchForm from "../components/SearchForm/SearchForm";
import List from "../components/List/List";

const Home = () => {
    return(
        <div>
            <Hero />
            <SearchForm />
            <List />
        </div>
    );
};

export default Home