import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import * as turf from '@turf/turf' // Import all functions from turf library

const Map = ({ toHigh }) => {
    //data format of toHigh,array of coordinates to highlight
    // const toHigh = [
    //     [87.1423, 27.6142],
    //     [81.7349, 29.2089],
    //     [84.0167, 28.2622],
    //     // [29.2089, 81.7349],
    // ]
    const [districtsData, setDistrictsData] = useState(null)
    const [loading, setLoading] = useState(true) // Add loading state
    const [selectedDistrict, setSelectedDistrict] = useState(null)

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

    const mapStyle = {
        height: '300px',
        width: '100%',
    }

    const mapCenter = [toHigh[0][1], toHigh[0][0]]
    const zoomLevel = 6.5

    const districtStyle = {
        color: 'black',
        fillColor: 'transparent',
        weight: 0.5,
        fillOpacity: 0.5,
    }

    const highlightStyle = {
        color: 'red',
        weight: 2,
        fillColor: 'orange',
        fillOpacity: 0.4,
    }

    useEffect(() => {
        if (districtsData && !loading) {
            let isInside = false
            districtsData.features.forEach(district => {
                for (let i = 0; i < toHigh.length; i++) {
                    isInside = turf.booleanPointInPolygon(
                        turf.point(toHigh[i]),
                        district.geometry
                    )
                    if (isInside) break
                }
                district.properties.isHighlighted = isInside
            })
        }
    }, [districtsData, toHigh, loading])

    if (loading) return <h1 className="text-center text-2xl">Loading Map</h1>

    const onEachDistrict = (district, layer) => {
        layer.on({
            click: () => {
                setSelectedDistrict(district.properties.DIST_EN) // Store the clicked district name in state
            },
            mouseover: () => {
                if (district.properties.isHighlighted) {
                    layer.openPopup() // Show the popup on mouseover for highlighted districts
                }
            },
            mouseout: () => {
                if (district.properties.isHighlighted) {
                    layer.closePopup() // Close the popup on mouseout for highlighted districts
                }
            },
        })

        if (district.properties.isHighlighted) {
            layer.bindPopup(district.properties.NAME) // Show the district name in the popup for highlighted districts
        }
    }

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
                        onEachFeature={onEachDistrict}
                    />
                )}
        </MapContainer>
    )
}

export default Map
