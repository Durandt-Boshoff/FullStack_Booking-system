function Footer() {
    return (
        <footer className="bg-text text-background">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 p-5 md:flex-row md:items-center md:justify-between">
                <h2 className="text-xl font-bold text-background md:text-2xl">
                    Save Point Studio
                </h2>
                <p className="mt-2 text-sm text-primary-accent md:text-base">Your space. Your game. Your next level.</p>

                <div>
                    <h3 className="mb-3 font-semibold text-background">
                        Quick Link
                    </h3>

                    <nav className="flex flex-wrap gap-4">
                        <a href="#home" className="text-primary-accent transition hover:text-background">
                            Home
                        </a>
                        <a href="#about" className="text-primary-accent transition hover:text-background">
                            About
                        </a>
                        <a href="#rooms" className="text-primary-accent transition hover:text-background">
                            Rooms
                        </a>
                        <a href="#cantact" className="text-primary-accent transition hover:text-background">
                            Contact
                        </a>
                        <a href="#booking" className="text-primary-accent transition hover:text-background">
                            Book a Session
                        </a>
                    </nav>
                </div>
            </div>

            <div className="border-t border-secondary-accent/40 px-5 py-4 text-center text-sm text-background/70">
                © {new Date().getFullYear()} Save Point Studio. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;