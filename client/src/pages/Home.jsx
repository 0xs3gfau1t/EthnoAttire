import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const HomePage = () => {
    return (
        <div
            className="h-full w-full flex flex-col items-center"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
            <h1 className="text-4xl">ETHNO ATTIRE</h1>
            <img src="/home.gif" className="rounded-2xl" />
            <h2 className="text-2xl mb-8">Identify cultures in a whimp</h2>
            <h3 className="mb-8">Description Here</h3>
            <Link
                to={'/image'}
                className="flex flex-col items-center justify-center"
            >
                <BsFillArrowRightCircleFill className="text-4xl" />
                <span>Get Started</span>
            </Link>
        </div>
    )
}

export default HomePage
