import { Route, Routes } from "react-router-dom"
import Nav from './components/Nav'

export default function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path='/' element={<>Home</>}/>
                <Route path='/image' element={<>Image</>}/>
                <Route path='/video' element={<>Video</>}/>
                <Route path='/info' element={<>Info</>}/>
            </Routes>
        </>
    )
}
