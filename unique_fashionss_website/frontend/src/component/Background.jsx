import back1 from "../assets/back1.webp";
import back2 from "../assets/back2.webp";
import back3 from "../assets/back3.webp";
import back4 from "../assets/back4.webp";

const backgrounds = [back1, back2, back3, back4];

function Background({ heroCount }) {
    return (
        <img
            src={backgrounds[heroCount]}
            alt={`Fashion look ${heroCount + 1}`}
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
    );
}

export default Background;
