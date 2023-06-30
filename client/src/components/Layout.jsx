import { Outlet } from 'react-router'
import Nav from './Nav'

const Layout = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <main className="h-[calc(100%-5rem)]">
                <Outlet />
            </main>
            <footer className="h-20 border-t border-black fixed bottom-0 w-full">
                <Nav />
            </footer>
        </div>
    )
}

export default Layout
