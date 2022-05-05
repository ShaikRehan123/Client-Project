import Navbar  from "./Navbar";
import ImageSlideShow from "./ImageSlideShow";

export default function App() {
    return (
        <div>
            <Navbar darkMode={false} />
            <ImageSlideShow />
        </div>
    );
}
