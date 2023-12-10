import "ol/ol.css";
import { rotate } from "ol/coordinate";
import { getCenter } from "ol/extent";
import { transform } from "ol/proj";
import {
    Projection,
    addCoordinateTransforms,
    addProjection,
    get as getProjection,
} from "ol/proj";

export function RotateProjection(projection, angle, extent) {
    function rotateCoordinate(coordinate, angle, anchor) {
        var coord = rotate(
            [coordinate[0] - anchor[0], coordinate[1] - anchor[1]],
            angle
        );
        return [coord[0] + anchor[0], coord[1] + anchor[1]];
    }

    function rotateTransform(coordinate) {
        return rotateCoordinate(coordinate, angle, getCenter(extent));
    }

    function normalTransform(coordinate) {
        return rotateCoordinate(coordinate, -angle, getCenter(extent));
    }

    var normalProjection = getProjection(projection);

    var rotatedProjection = new Projection({
        code:
            normalProjection.getCode() +
            ":" +
            angle.toString() +
            ":" +
            extent.toString(),
        units: normalProjection.getUnits(),
        extent: extent,
    });
    addProjection(rotatedProjection);

    addCoordinateTransforms(
        "EPSG:4326",
        rotatedProjection,
        function (coordinate) {
            return rotateTransform(
                transform(coordinate, "EPSG:4326", projection)
            );
        },
        function (coordinate) {
            return transform(
                normalTransform(coordinate),
                projection,
                "EPSG:4326"
            );
        }
    );

    addCoordinateTransforms(
        "EPSG:3857",
        rotatedProjection,
        function (coordinate) {
            return rotateTransform(
                transform(coordinate, "EPSG:3857", projection)
            );
        },
        function (coordinate) {
            return transform(
                normalTransform(coordinate),
                projection,
                "EPSG:3857"
            );
        }
    );

    return rotatedProjection;
}
