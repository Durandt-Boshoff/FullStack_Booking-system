import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import slideOne from "../assets/slide_1.jpg"
import slideTwo from "../assets/slide_2.jpg"

const images = [slideOne, slideTwo];

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer =setInterval(() => {
            setCurrentSlide((previousSlide) => {
                return (previousSlide + 1) % images.length;
            });
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            className="relative overflow-hidden bg-linear-to-br from-background via-primary-accent to-cards px-6 py-12 md:px-12 md:py-20"    
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
                <div className="flex-w-full flex-col items-start gap-6 md:w-1/2">
                    <h1 className="text-4xl font-bold leading-tight text-text md:text-6xl">
                        Find your next save point.
                    </h1>

                    <p className="text-lg leading-relaxed text-text">
                        Game, stream, and bring your ideas to life. Find your space, book your session, and make every hour count at Save Point Studio.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/booking"
                            className="rounded-full bg-cards px-6 py-3 font-semibold text-background transition-colors hover:bg-primary-accent"
                        >
                            Book a Session
                        </Link>

                        <a
                            href="#rooms"
                            className="rounded-full border-2 border-cards px-6 py-3 font-semibold text-text transition-colors hover:bg-cards/10"
                        >
                            Explore Our Rooms
                        </a>
                    </div>
                </div>
                
                <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl md:h-105 md:w-1/2">
                    {images.map((image, index) => (
                        <img
                            key={image}
                            src={image}
                            alt="Inside Save Point Studio"
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                                currentSlide === index ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );

}

export default Hero;