import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const HomePage = () => {
    return (
        <div
            className="h-full w-full flex flex-col items-center gap-2"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
            <h1 className="text-4xl">ETHNO ATTIRE</h1>
            <img src="/home.gif" className="rounded-2xl" />
            <h2 className="text-2xl font-semibold">
                Identify cultures in a whim
            </h2>
            <h3 className="text-justify px-4">
                Designed to preserve the rich cultural heritage of Nepal, our
                app, EthnoAttire allows users to explore and discover the
                vibrant world of Nepali culture. Simply upload a photo or video,
                and EthnoAttire will instantly identify the cultural items in
                the media. Also, providing detailed information about the items.
            </h3>
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
