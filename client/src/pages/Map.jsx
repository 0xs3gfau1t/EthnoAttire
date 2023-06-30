import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import * as turf from '@turf/turf' // Import all functions from turf library

const Map = () => {
    const [districtsData, setDistrictsData] = useState(null)
    const [loading, setLoading] = useState(true) // Add loading state

    useEffect(() => {
        fetch('../../data/nepal-districts-new.geojson')
            .then(response => response.json())
            .then(data => {
                setDistrictsData(data)
                setLoading(false) // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('Error loading GeoJSON data:', error)
                setLoading(false) // Set loading to false even if there's an error
            })
    }, [])

    const givenCoordinate = { lat: 29.2089, lng: 81.7349 }

    const mapStyle = {
        height: '600px',
        width: '100%',
    }

    const mapCenter = [28.3949, 84.124]
    const zoomLevel = 7

    const districtStyle = {
        color: 'gray',
        weight: 1,
        fillOpacity: 0.2,
    }

    const highlightStyle = {
        color: 'blue',
        weight: 2,
        fillOpacity: 0.5,
    }

    useEffect(() => {
        if (districtsData) {
            districtsData.features.forEach(district => {
                const isInside = turf.booleanPointInPolygon(
                    turf.point([givenCoordinate.lng, givenCoordinate.lat]),
                    district.geometry
                )
                district.properties.isHighlighted = isInside
            })
        }
    }, [districtsData, givenCoordinate])

    return (
        <MapContainer style={mapStyle} center={mapCenter} zoom={zoomLevel}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {!loading &&
                districtsData && ( // Render only when data is not loading
                    <GeoJSON
                        data={districtsData.features}
                        style={feature => ({
                            ...districtStyle,
                            ...(feature.properties.isHighlighted
                                ? highlightStyle
                                : null),
                        })}
                    />
                )}
        </MapContainer>
    )
}

export default Map
