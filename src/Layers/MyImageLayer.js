import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import Projection from 'ol/proj/Projection.js';

import { useImageSize } from "react-image-size";

// import MapExample from "../resources/map_example.jpg";


const MyImageLayer = ({ imageSource}) => {
  const { map } = useContext(MapContext);

  const [dimensions, { loading, error }] = useImageSize(imageSource);

  const extent = [0, 0, 1460, 1040];
  const projection = new Projection({
    // code: 'xkcd-image',
    code: 'local_image',
    units: 'pixels',
    extent: extent,
  });
  

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