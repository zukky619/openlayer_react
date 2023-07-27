import React from "react";

const Layers = ({ children }) => {
    console.log("Layersの中");
    console.log(children);
    return <div>{children}</div>;
};

export default Layers;
