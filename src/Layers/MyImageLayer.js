import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import { transform } from "ol/proj";

const MyImageLayer = ({ imageSource, imageAnchor, imageResolution }) => {
    const { map } = useContext(MapContext);

    const image = new Image();
    image.src = imageSource;
    const width = image.width;
    const height = image.height;

    const projection = "EPSG:3857";

    const imageAnchorCooodinate = transform(
        imageAnchor,
        "EPSG:4326",
        "EPSG:3857"
    );

    const extent = [
        imageAnchorCooodinate[0],
        imageAnchorCooodinate[1],
        imageAnchorCooodinate[0] + imageResolution * width,
        imageAnchorCooodinate[1] + imageResolution * height,
    ];

    const source = new Static({
        url: imageSource,
        projection: projection,
        imageExtent: extent,
    });

    useEffect(() => {
        if (!map) return;

        let imageLayer = new ImageLayer({
            source: source,
        });

        map.addLayer(imageLayer);

        return () => {
            if (map) {
                map.removeLayer(imageLayer);
            }
        };
    }, [map]);

    return null;
};

export default MyImageLayer;
