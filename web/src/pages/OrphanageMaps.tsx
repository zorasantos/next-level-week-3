import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../assets/map-marker.svg';
import '../styles/pages/orphanage-map.css';
function OrphanageMap() {
  return (
   <div id="page-map">
     <aside>
       <header>
         <img src={mapMarkerImg} alt="Map"/>
         <h2>Escolha um orfanato no mapa</h2>
         <p>Muitas crianças estão esperando a sua visita :)</p>
       </header>

      <footer>
        <strong>Ceará</strong>
        <span>Fortaleza</span>
      </footer>
     </aside>

     <Map
       center={[-3.7899266,-38.5889878]}
       zoom={12}
       style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
       />
      </Map>

     <Link to="" className="create-orphanage">
       <FiPlus size={32} color="#FFF" />
     </Link>
   </div>
  );
}

export default OrphanageMap;