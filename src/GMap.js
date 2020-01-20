import React, { useEffect, useRef } from 'react';

const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  useEffect(() => {
    googleMap = initGoogleMap();
    createMarker();
  }, []);


  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  // create marker on google map
  const createMarker = () => new window.google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: googleMap
  });

  return <div
    ref={googleMapRef}
    style={{ width: 600, height: 500 }}
  />
}

export default GMap;