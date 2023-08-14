import React from "react";

const RenderStars = (filledCount, outlineCount) => {
    const stars = [];
    for (let i = 0; i < filledCount; i++) {
        stars.push(<i key={`filled-${i}`} className="fa fa-star"></i>);
    }
    for (let i = 0; i < outlineCount; i++) {
        stars.push(<i key={`outline-${i}`} className="fa fa-star-o"></i>);
    }
    return stars;
};
export default RenderStars