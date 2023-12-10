import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import { transform } from "ol/proj";
import { RotateProjection } from "./RotateProjection";

const MyImageLayer = ({
    imageSource,
    imageAnchor,
    imageResolution,
    imageRotation = 0,
}) => {
    const { map } = useContext(MapContext);

    const image = new Image();
    image.src = imageSource;
    const width = image.width;
    const height = image.height;

    // 座標系はWebメルカトル図法を使用
    // const projection = "EPSG:3857";

    // 緯度経度からWebメルカトル座標に変換
    const imageAnchorCooodinate = transform(
        imageAnchor,
        "EPSG:4326",
        "EPSG:3857"
    );

    // 画像の範囲を計算
    const extent = [
        imageAnchorCooodinate[0],
        imageAnchorCooodinate[1],
        imageAnchorCooodinate[0] + imageResolution * width,
        imageAnchorCooodinate[1] + imageResolution * height,
    ];

    // 画像を回転させるための座標系を作成
    const rotateProjection = RotateProjection(
        "EPSG:3857",
        imageRotation * (Math.PI / 180),
        extent
    );

    // 画像のソースを作成
    const source = new Static({
        url: imageSource,
        projection: rotateProjection,
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
