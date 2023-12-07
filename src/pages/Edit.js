import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";

// import Map from "./Map/Map";
import Map from "../Map";

import { Layers, MyImageLayer } from "../Layers";

import MapExample from "../resources/map_example.jpg";

const Edit = () => {
    const [center, setCenter] = useState([
        139.63753948366164, 35.461861938180036,
    ]);
    // const [center, setCenter] = useState([730, 530]);
    const [zoom, setZoom] = useState(20);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
                padding: "10px",
            }}
        >
            <div style={{ flex: 2 }}>
                <Map center={center} zoom={zoom}>
                    <Layers>
                        <MyImageLayer
                            imageSource={MapExample}
                            imageAnchor={center}
                            imageResolution={0.05}
                        />
                    </Layers>
                </Map>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <h1>EDIT</h1>
                <div
                    style={{
                        maxHeight: 200,
                        overflow: "auto",
                        scrollbarColor: "#6969dd #e0e0e0",
                        scrollbarWidth: "thin",
                    }}
                >
                    <List
                        style={{
                            scrollbarColor: "#6969dd #e0e0e0",
                            scrollbarWidth: "thin",
                        }}
                    >
                        <h1>EDIT</h1>
                        <h1>EDIT</h1>
                        <h1>EDIT</h1>
                    </List>
                </div>
            </div>
        </div>
    );
};

export default Edit;
