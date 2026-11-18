import { FaCircle } from "react-icons/fa";

function Hero({ heroData, heroCount, setHeroCount }) {
    return (
        <section className="absolute left-[6%] top-[40%] z-10 w-[40%] -translate-y-1/2 text-white lg:top-[34%]">
            <div className="max-w-xl">
                <h1 className={`text-[clamp(1rem,3.5vw,2.5rem)] font-semibold leading-[1.08] text-[#C9A227] font-[cursive] sm:text-[clamp(1.1rem,4vw,3.5rem)] ${heroCount === 0 ? "lg:text-center" : ""}`}>
                    {heroCount === 0 ? (
                        <>
                            <span className="lg:hidden">{heroData.text1}</span>
                            <span className="hidden lg:block">
                                <span className="block whitespace-nowrap">Welcome to Unique</span>
                                <span className="block">Fashionss</span>
                            </span>
                        </>
                    ) : heroData.text1}
                </h1>
                <p className={`mt-2 text-[clamp(0.7rem,1.5vw,1.4rem)] leading-snug text-white/90 sm:mt-3 sm:text-[clamp(0.85rem,1.6vw,1.4rem)] ${heroCount <= 2 ? "lg:text-center" : ""}`}>
                    {heroData.text2}
                </p>
            </div>
            <div className={`mt-3 flex items-center gap-2 sm:mt-5 sm:gap-3 ${heroCount <= 2 ? "lg:justify-center" : ""}`} aria-label="Hero slides">
                {[0, 1, 2, 3].map((slide) => (
                    <button
                        key={slide}
                        type="button"
                        aria-label={`Show slide ${slide + 1}`}
                        aria-pressed={heroCount === slide}
                        onClick={() => setHeroCount(slide)}
                        className="rounded-full p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <FaCircle
                            aria-hidden="true"
                            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${heroCount === slide ? "text-orange-400" : "text-white"}`}
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Hero