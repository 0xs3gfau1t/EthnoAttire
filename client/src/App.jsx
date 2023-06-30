import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ImagePage from './pages/Image'
import VideoPage from './pages/Video'
import InfoPage from './pages/Info'
import CultureDetail from './pages/CultureDetail'
import './index.css'
import Culture from './pages/Culture'

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<HomePage />} />
                    <Route path="image" element={<ImagePage />} />
                    <Route path="video" element={<VideoPage />} />
                    <Route path="info" element={<InfoPage />} />
                    <Route path="culture" element={<Culture />} />
                    <Route path="culture/:id" element={<CultureDetail />} />
                </Route>
            </Routes>
        </>
    )
}
