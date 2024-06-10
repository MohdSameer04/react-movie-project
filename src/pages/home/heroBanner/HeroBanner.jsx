import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const { url } = useSelector((state) => state.home);

    // with the help of that we can fetch upcoming movie data
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        // creating a background image url 
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;     // pick randomly from 20 images fetched from api
        setBackground(bg);
    }, [data]);

    // when we write anything in the search bar so inside this method the working of search-Input field
    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            
            {/* apply the condition when the loading state was false in that case background image will change for each and every referesh */}
            
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            {/* merge background image to the content, basically add some gradient colour proprties */}
            <div className="opacity-layer"></div>


            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
