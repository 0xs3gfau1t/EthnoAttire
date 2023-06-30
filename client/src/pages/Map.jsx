import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import L from 'leaflet'

const Map = () => {
    const [districtsData, setDistrictsData] = useState(null)

    useEffect(() => {
        fetch('../../data/nepal-districts-new.geojson')
            .then(response => response.json())
            .then(data => {
                setDistrictsData(data)
            })
            .catch(error => {
                console.error('Error loading GeoJSON data:', error)
            })
    }, [])

    const mapStyle = {
        height: '100%',
        width: '100%',
    }

    const mapCenter = [28.3949, 84.124]
    const zoomLevel = 7

    return (
        <MapContainer style={mapStyle} center={mapCenter} zoom={zoomLevel}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {districtsData && <GeoJSON data={districtsData.features} />}
        </MapContainer>
    )
}

export default Map
