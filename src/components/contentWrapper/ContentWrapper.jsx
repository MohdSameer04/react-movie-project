import React from "react";

import "./style.scss";

// with the help of this contentWrapper function all the things present inside the function are in the center
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
