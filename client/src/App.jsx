import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ImagePage from './pages/Image'
import VideoPage from './pages/Video'
import CultureDetail from './pages/CultureDetail'
import './index.css'
import Culture from './pages/Culture'
import Map from './pages/Map'

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<HomePage />} />
                    <Route path="image" element={<ImagePage />} />
                    <Route path="video" element={<VideoPage />} />
                    <Route path="culture" element={<Culture />} />
                    <Route path="culture/:id" element={<CultureDetail />} />
                    <Route path="map" element={<Map />} />
                </Route>
            </Routes>
        </>
    )
}
