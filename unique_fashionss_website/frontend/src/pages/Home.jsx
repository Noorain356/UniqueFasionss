import { useEffect, useState } from "react";
import Background from "../component/Background";
import Hero from "../component/Hero";
import "../index.css";

function Home() {
    const heroData = [
        { text1: <>Welcome to Unique <br /> Fashionss</>, text2: "Discover Your Style" },
        { text1: <>Trendy and Chic </>, text2: "Stay Ahead in Fashion" },
        { text1: <>Exclusive Collections</>, text2: "Find Your Perfect Outfit" },
        { text1: <>Unleash Your Creativity </>, text2: "Express Yourself Through Fashion" }
    ];
    const [heroCount, setHeroCount] = useState(0);
        
    useEffect(()=>{
        let interval = setInterval(()=>{
            setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1));
        },3000)
        return () => clearInterval(interval);
    },[])  

    return (
        <main className="relative isolate mt-[80px] mb-[90px] aspect-[4096/2305] w-full overflow-hidden lg:mb-0">
            <Hero
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                heroData={heroData[heroCount]}
            />
            <Background heroCount={heroCount} />
        </main>
    );
}

export default Home;