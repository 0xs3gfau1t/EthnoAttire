import { Outlet } from 'react-router'
import Nav from './Nav'

const Layout = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer className="h-20 bg-red-400">
                <Nav />
            </footer>
        </div>
    )
}

export default Layout
