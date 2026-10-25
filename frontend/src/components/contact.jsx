function Contact() {
    return (
        <section
            id="contact"
            className="px-6 py-20 md:px-12"
        >
            <div className="mx-auto max-w-3xl">

                <div className="mb-10 text-center">
                    <span className="rounded-full bg-primary-accent/30 px-4 py-2 text-sm font-meduim text-text">
                        Contact Us
                    </span>

                    <h2 className="mt-5 text-3xl font-bold text-text md:text-5xl">
                        Let's Get In Touch.
                    </h2>

                    <p className="mt-4 text-text/80">
                        Have a question or just curious about Save Point Studio?
                        We'd love to hear from you
                    </p>
                </div>

                <form className="mx-auto max-w-xl rounded-2xl border border-primary-accent/40 bg-background p-6 shadow-lg md:p-8">
                    <div className="mb-5">
                        <label htmlFor="name" className="mb-2 block font-medium text-text">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            required
                            className="w-full rounded-xl border border-secondary-accent/60 bg-transparent px-4 py-3 text-text outline-none transition focus:border-cards focus:ring-2 focus:ring-primary-accent/50"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="mb-2 block font-medium text-text">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="w-full rounded-xl border border-secondary-accent/60 bg-transparent px-4 py-3 text-text outline-none transition focus:border-cards focus:ring-2 focus:ring-primary-accent/50"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="mb-2 block font-medium text-text">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell us what's on your mind..."
                            required
                            className="w-full resize-y rounded-xl border border-secondary-accent/60 bg-transparent px-4 py-3 text-text outline-none transition focus:border-cards focus:ring-2 focus:ring-primary-accent/50"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex-w-full items-center justify-center gap-2 rounded-full bg-cards px-6 py-3 font-semibold text-background transition hover:-translate-y-0.5 hover:bg-primary-accent hover:text-text"
                    >
                        Send Message
                        <span aria-hidden="true">➜</span>
                    </button>
                </form>

            </div>
        </section>
    );
}

export default Contact;