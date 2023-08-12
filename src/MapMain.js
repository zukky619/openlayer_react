import React, { useState } from "react";

// import Map from "./Map/Map";
import Map from "./Map";

import { fromLonLat, get } from "ol/proj";

import { Layers, TileLayer, VectorLayer, MyImageLayer } from "./Layers";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";

import * as olSource from "ol/source";
import { Vector as VectorSource } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "./Controls";

import MapExample from "./resources/map_example.jpg";

export default function MapMain() {
    //   const [center, setCenter] = useState([-94.9065, 38.9884]);
    // const [center, setCenter] = useState([730, 530]);
    // const [zoom, setZoom] = useState(1);

    return (
        <div>
            <Map source={MapExample}>
                {/* <Controls>
                    <FullScreenControl />
                </Controls> */}
            </Map>
        </div>
    );
}
