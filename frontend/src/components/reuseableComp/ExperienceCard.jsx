function ExperienceCard({ emoji, title, description, features, image }) {
    return (
        <div className="flex h-full flex-col rounded-2xl shadow-2xl bg-linear-to-br from-[#9F5260] via-[#CB765C] to-[#FFB873] p-6 transition-all duration-300 hover:-translate-y-2">
            <div className="relative mb-5 overflow-hidden rounded-xl">
                <img
                    src={image}
                    alt={title}
                    className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            <h3 className="text-xl text-background font-bold">
                <span>{title}</span>
                <span>{emoji}</span>
            </h3>
            <p className="mt-2 text-background/80 leading-relaxed">{description}</p>
            <ul className="mt-5 space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-background">
                        <span className="font-bold">✓</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard;