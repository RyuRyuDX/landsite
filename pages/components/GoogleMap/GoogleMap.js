import React from "react";
import GoogleMapReact from 'google-map-react';
 
export default function GoogleMap() {
  const defaultLatLng = {
    lat: 36.552728616698424, 
    lng: 140.62749837756104,
  };

  const handleApiLoaded = ({ map, maps }) => {
    new maps.Marker({
      map,
      position: defaultLatLng,
    });
  };

    return (
      //サイズの大きさを指定
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
          defaultCenter={defaultLatLng}
          defaultZoom={16}
          onGoogleApiLoaded={handleApiLoaded}
        >
        </GoogleMapReact>
      </div>
    );
  }
