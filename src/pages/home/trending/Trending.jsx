import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {

    const [endpoint, setEndpoint] = useState("day");

    // with the help of that call a API 
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    // set a useState condition 
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>

                {/* With the help of that we can switch a tab from day to week */}
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>

            
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;
