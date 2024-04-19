import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

export default function Main() {
  const containerStyle = {
    width: '550px',
    height: '550px'
  };


  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const center = {
    lat: 37.51939392089844,
    lng: 126.88313293457031
  };

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-lg mb-10'>오늘의 날씨</h1>
      <LoadScript
        googleMapsApiKey="AIzaSyD_LX9JZ9DE59NUzg4ufILbmGSm-FfoXVo"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <Marker
            position={center}
            title="My location"
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}