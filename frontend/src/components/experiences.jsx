import ExperienceCard from './reuseableComp/ExperienceCard';
import cardOne from '../assets/gaming.jpg'
import cardTwo from '../assets/streaming.jpg'
import cardThree from '../assets/testing.jpg'

function Experiences() {
    return (
        <section
            id='rooms'
            className='px-6 py-20 md:px-12'
        >
            <div className='mx-auto max-w-7xl'>

                <h2 className='text-center text-3xl font-semibold text-text sm:text-4xl md:text-5xl'>
                    Choose Your Experience
                </h2>

                <p className='mt-2 text-center text-text/80 md:text-lg'>
                    Find your space to play, stream, and create
                </p>

                <div className='mt-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <ExperienceCard
                        title="Gaming"
                        emoji="🎮"
                        description='Enjoy your favourite games in a comfortable, dedicated gaming space.'
                        image={cardOne}
                        features={[
                            "High-performance gaming PCs",
                            "Comfortable gaming setups",
                            "A space to play with friends"
                        ]}
                    />
                    <ExperienceCard
                        title="Streaming"
                        emoji="🎤"
                        description="Bring your streams to life in a dedicated space built for content creators."
                        image={cardTwo}
                        features={[
                            "Streaming-ready setups",
                            "A space for recording content",
                            "Comfortable creator stations"
                        ]}
                    />
                    <ExperienceCard
                        title="Create"
                        emoji="🛠️"
                        description="Work on your next big idea, test your games, and bring your creative projects to life."
                        image={cardThree}
                        features={[
                            "A space for game development",
                            "Test and refine your projects",
                            "Room to focus and create"
                        ]}
                    />
                </div>

            </div>
        </section>
    );
}

export default Experiences;