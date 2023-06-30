import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ImagePage from './pages/Image'
import VideoPage from './pages/Video'
import InfoPage from './pages/Info'
import Culture from './pages/CultureDetail'
import './index.css'

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<HomePage />} />
                    <Route path="image" element={<ImagePage />} />
                    <Route path="video" element={<VideoPage />} />
                    <Route path="info" element={<InfoPage />} />
                    <Route path="info/culture/:id" element={<Culture />} />
                </Route>
            </Routes>
        </>
    )
}
