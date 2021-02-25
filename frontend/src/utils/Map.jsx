import React from 'react'
import GoogleMapReact from 'google-map-react'
import GoogleMapMarker from 'google-map-react'
import LatLng from 'google-map-react'
import './map.css'

function Map ({ location, zoomLevel }) {

    const createControlledPromise = []

    const handleAPILoaded = (map, maps) => {
        // console.log(map, '---------map')

        console.log( LatLng )
        console.log(maps, '---------maps')
    }
return(
   
    <div className='map'>
        <div className='google-map'>
           
            <GoogleMapReact 
            bootstrapURLKeys={{key: 'API KEY'}}
            defaultCenter={location} defaultZoom={zoomLevel} onGoogleApiLoaded={({map, maps}) => handleAPILoaded(map, maps)}>

            </GoogleMapReact>
        </div>
    </div>
   
)
}

export default Map