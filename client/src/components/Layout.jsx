import { Outlet } from 'react-router'
import Nav from './Nav'

const Layout = () => {
    return (
        <div className=''>
            <main>
                <Outlet />
            </main>
            <footer>
                <Nav />
            </footer>
        </div>
    )
}

export default Layout
