import React, { useEffect, useRef, useState } from "react";
import { MyImageLayer } from "../Layers";
// OpenLayers読み込み
import * as ol from "ol";
import MapContext from "./MapContext";
import "ol/ol.css";
import "./Map.css";

import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
} from "ol/interaction.js";

import * as olSource from "ol/source";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import Projection from "ol/proj/Projection.js";
import { transform } from "ol/proj";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import ZoomSlider from "ol/control/ZoomSlider.js";
import { defaults as defaultControls } from "ol/control.js";

const Map = ({ children, source, zoom, center }) => {
    const mapRef = useRef();
    const [map, setMap] = useState(null);

    // get source image size
    // const { width, height } = useImageSize(source);

    center = [139.63753948366164, 35.461861938180036];

    const image_width = 1460;
    const image_hegiht = 1040;

    const coordinate = transform(center, "EPSG:4326", "EPSG:3857");
    zoom = 20;

    console.log(coordinate);

    const extent = [
        coordinate[0],
        coordinate[1],
        coordinate[0] + 0.05 * image_width,
        coordinate[1] + 0.05 * image_hegiht,
    ];

    const projection = "EPSG:3857";

    const staticImageSource = new Static({
        url: source,
        projection: projection,
        imageExtent: extent,
    });

    // on component mount
    useEffect(() => {
        let options = {
            view: new ol.View({
                projection: projection,
                zoom: zoom,
                center: coordinate,
            }),
            interactions: defaultInteractions().extend([
                new DragRotateAndZoom(),
            ]),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new ImageLayer({
                    source: staticImageSource,
                }),
            ],
            controls: defaultControls().extend([new ZoomSlider()]),
            overlays: [],
        };
        let mapObject = new ol.Map(options);

        mapObject.setTarget(mapRef.current);
        setMap(mapObject);
        return () => mapObject.setTarget(undefined);
    }, []);

    // zoom change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [zoom]);

    // center change handler
    // useEffect(() => {
    //     if (!map) return;

    //     map.getView().setCenter(center);
    // }, [center]);

    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    );
};

export default Map;
