import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'

function Map ({ location, zoomLevel }) {

    const handleAPILoaded = (map, maps) => {
        // console.log(map, '---------map')
        console.log(maps, '---------maps')
    }
return(
   
    <div className='map'>
        <div className='google-map'>
           
            <GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyAPg1BvA6UXhRQsmuS9m0e3d5tTQAUlqQI'}}
            defaultCenter={location} defaultZoom={zoomLevel} onGoogleApiLoaded={({map, maps}) => handleAPILoaded(map, maps)}>
                <div className='floating-div'><p>FORM for 'title' and 'description'</p><p>...will also display distance and elevation live</p></div>
            </GoogleMapReact>
        </div>
    </div>
   
)
}

export default Map