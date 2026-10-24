import aboutUs from '../assets/About.jpg'

function About() {
    return (
        <section
            id="about"
            className="px-6 py-16 md:px-12 md:py-24"
        >
            <div className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 md:flex-row'>
                <img
                    src={aboutUs}
                    alt='Inside Save Point Studio'
                    className='w-full max-w-md rounded-2xl object-cover'
                />

                <div className='max-w-lg text-sm text-text'>
                    <h2 className='text-xl font-semibold uppercase'>
                        What We Do
                    </h2>

                    <div className='mt-2 h-0.75 w-24 rounded-full bg-linear-to-r from-cards to-primary-accent'></div>

                    <h3 className='mt-8 text-3xl font-bold leading -tight md:text-4xl'>
                        More Than Just a Place to Play.
                    </h3>

                    <p className='mt-6 leading-relaxed'>
                        Save Point Studio is a place for gamers, streaming, and creators to bring their ideas to life. Whether you're here to play your favourite games, create content, or enjoy a dedicated gaming setup, your next adventure start here.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About