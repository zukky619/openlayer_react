import React, { useEffect, useRef, useState } from 'react';
// OpenLayers読み込み
import * as ol from "ol";
import MapContext from "./MapContext";
import 'ol/ol.css';
import './Map.css';

import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from 'ol/interaction.js';

import Projection from 'ol/proj/Projection.js';

const extent = [0, 0, 1460, 1040];
const projection = new Projection({
  // code: 'xkcd-image',

  code: 'local_image',
  units: 'pixels',
  extent: extent,
});


const Map = ({children,zoom,center}) => {
  const mapRef = useRef();
console.log(zoom);
console.log(center);
console.log('childrenとは');
console.log(children);
  const [map,setMap] = useState(null);

  // on component mount
  useEffect(() => {
    let options = {
        view: new ol.View({
          projection: projection,
          zoom: zoom, 
          center: center, 
      }),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      layers: [],
      controls: [],
      overlays: []
    };
    let mapObject = new ol.Map(options);
console.log('aaa');
console.log(mapObject);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
console.log(map);
    return () => mapObject.setTarget(undefined);
  }, []);

  // zoom change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);

  // center change handler
  useEffect(() => {
    if (!map) return;

    map.getView().setCenter(center)
  }, [center])

    return (
      <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
       </MapContext.Provider>   
     )
}

export default Map;
