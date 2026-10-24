import { useEffect, useState } from "react";

function Navbar() {
    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Rooms', path: '#rooms' },
        { name: 'Contact', path: '#contact' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
            isScrolled
                ? 'bg-background/90 shadow-lg backdrop-blur-lg'
                : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3">
                    <span className="text-2xl">🎮</span>
                    <span className="text-xl font-bold text-text">
                        Save Point Studio
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.path}
                            className="group flex flex-col gap-1 text-text "
                        >
                            {link.name}

                            <div className="h-0.5 w-0 bg-cards transition-all duration-300 group-hover:w-full"></div>
                        </a>
                    ))}

                    <a 
                        href="#booking"
                        className="rounded-full bg-cards px-5 py-2.5 font-semibold text-background transition-colors hover:bg-primary-accent"
                    >
                        Book a Session!
                    </a>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl text-text md:hidden"
                aria-label="Toggle navigation menu"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="mt-4 flex flex-col gap-4 rounded-xl bg-background p-5 shadow-lg md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-text transition-colors hover:text-cards"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a 
                        href="#booking"
                        onClick={() => setIsMenuOpen(false)}
                        className="rounded-full bg-cards px-5 py-2.5 text-center font-semibold text-background transition-colors hover:bg-primary-accent"
                    >
                        Book a Session!
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar