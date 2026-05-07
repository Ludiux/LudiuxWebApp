import LandingPage from "./sections/LandingPage.jsx";
import {useState, useEffect, useRef} from "react";

function App(close, setClose) {
    const [transition, setTransition] = useState(false);
    const [loading, setLoading] = useState(true);

    function LoaderManager() {

        const frames = useRef(0);
        const [ready, setReady] = useState(false);


        useEffect(() => {
            if (loading) return;

            let frame = 0;

            function tick() {
                frame++;

                if (frame > 60) {
                    const loader = document.getElementById("initial-loader");

                    if (loader) {
                        loader.style.opacity = "0";

                        setTimeout(() => {
                            loader.remove();
                        }, 500);
                    }

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
