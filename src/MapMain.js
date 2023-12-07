import React, { useState } from "react";

// import Map from "./Map/Map";
import Map from "./Map";

import { Layers, MyImageLayer } from "./Layers";

import MapExample from "./resources/map_example.jpg";

export default function MapMain() {
    const [center, setCenter] = useState([
        139.63753948366164, 35.461861938180036,
    ]);
    // const [center, setCenter] = useState([730, 530]);
    const [zoom, setZoom] = useState(20);

    return (
        <div>
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
    );
}
