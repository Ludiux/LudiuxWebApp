import LandingPage from "./sections/LandingPage.jsx";
import {useState, useEffect} from "react";

function App(close, setClose) {
    const [transition, setTransition] = useState(false);
    const [loading, setLoading] = useState(true);

    function LoaderManager() {

        useEffect(() => {
            if (loading) return;

            let frame = 0;

            function tick() {
                frame++;

                if (frame > 60) {

                    const video = document.getElementById("loader-video");

                    if (!video) return;

                    video.loop = false;

                    video.pause();

                    video.querySelector("source").src =
                        "/assets/media/webM/LoadedAnim.webm";

                    video.load();

                    video.oncanplay = async () => {

                        await video.play();

                    };

                    video.onended = () => {

                        const loader = document.getElementById("initial-loader");

                        if (!loader) return;

                        loader.style.opacity = "0";

                        setTimeout(() => {
                            loader.remove();
                        }, 500);
                    };

                    return;
                }

                requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);

        }, [loading]);

        return null;
    }

    return (
    <>
        <LoaderManager />
        <LandingPage setLoading={setLoading} transition={transition} setTransition={setTransition}/>
        <div className={`
        w-screen h-screen 
        pointer-events-none 
        bg-black transition-opacity 
        duration-500 ${transition ? "opacity-100" : "opacity-0"} 
        absolute inset-0 outline-0`}></div>
    </>
  )
}

export default App
