import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import { OGCMapTile, Vector as VectorSource } from "ol/source.js";
import { Vector as VectorLayer } from "ol/layer.js";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { Fill, RegularShape, Stroke, Style } from "ol/style.js";

const ApLayer = ({ coordinate, angle }) => {
    const iconFeature = new Feature({
        geometry: new Point(coordinate),
    });
    const vectorSource = new VectorSource({
        features: [iconFeature],
    });
    const vectorLayer = new VectorLayer({
        source: vectorSource,
        style: function (feature) {
            const shaft = new RegularShape({
                points: 2,
                radius: 5,
                stroke: new Stroke({
                    width: 5,
                    color: "#1e90ff",
                }),
                rotateWithView: true,
            });

            const head = new RegularShape({
                points: 3,
                radius: 8,
                fill: new Fill({
                    color: "#1e90ff",
                }),
                rotateWithView: true,
            });

            const styles = [
                new Style({ image: shaft }),
                new Style({ image: head }),
            ];
            // rotate arrow away from wind origin
            const angle_radian = (angle * Math.PI) / 180;
            const scale = 10 / 10;
            shaft.setScale([1, scale]);
            shaft.setRotation(angle_radian);
            head.setDisplacement([
                0,
                head.getRadius() / 2 + shaft.getRadius() * scale,
            ]);
            head.setRotation(angle_radian);
            return styles;
        },
    });

    return vectorLayer;
};

export default ApLayer;
