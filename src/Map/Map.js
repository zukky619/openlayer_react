import React, { useEffect, useRef, useState } from "react";
import * as ol from "ol";
import MapContext from "./MapContext";
import "ol/ol.css";
import "./Map.css";

import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
} from "ol/interaction.js";

import { transform } from "ol/proj";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import ZoomSlider from "ol/control/ZoomSlider.js";
import { defaults as defaultControls } from "ol/control.js";
import { OGCMapTile, Vector as VectorSource } from "ol/source.js";
import { Vector as VectorLayer } from "ol/layer.js";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { Fill, RegularShape, Stroke, Style } from "ol/style.js";
import { ApLayer } from "../Layers";

const Map = ({ children, zoom, center, rotation = 0, isEditMode = false }) => {
    const mapRef = useRef();
    const [map, setMap] = useState(null);

    const coordinate = transform(center, "EPSG:4326", "EPSG:3857");

    const projection = "EPSG:3857";

    // on component mount
    useEffect(() => {
        let options = {
            view: new ol.View({
                projection: projection,
                zoom: zoom,
                center: coordinate,
                rotation: rotation * (Math.PI / 180),
            }),
            interactions: defaultInteractions().extend([
                new DragRotateAndZoom(),
            ]),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            controls: defaultControls().extend([new ZoomSlider()]),
            overlays: [],
        };
        let mapObject = new ol.Map(options);

        mapObject.setTarget(mapRef.current);
        setMap(mapObject);

        if (isEditMode) {
            mapObject.on("click", function (e) {
                // クリックした場所の座標を取得
                // ctrlキーを押した場合
                if (e.originalEvent.ctrlKey) {
                    // クリックした場所の座標を取得
                    const clickedCoordinate = e.coordinate;
                    console.log(clickedCoordinate);
                    const ap_layer = ApLayer({
                        coordinate: clickedCoordinate,
                        angle: 0,
                    });
                    mapObject.addLayer(ap_layer);
                }
            });
        }
        return () => mapObject.setTarget(undefined);
    }, []);

    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    );
};

export default Map;
