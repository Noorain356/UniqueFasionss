import back1 from "../assets/back1.png";
import back2 from "../assets/back2.png";
import back3 from "../assets/back3.png";
import back4 from "../assets/back4.png";

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
