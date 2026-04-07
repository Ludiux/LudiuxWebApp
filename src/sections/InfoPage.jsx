import React from 'react'
import Header from "../components/Header.jsx";
import Body from "../components/Body.jsx";
import Footer from "../components/Footer.jsx";

let last = null

function getRandom() {
    let num = Math.floor(Math.random() * 3) + 1

    if (num === last && Math.random() < 0.7) {
        return getRandom()
    }

    last = num
    return num
}

const InfoPage = () => {
    let Wallpaper = "";
    switch (getRandom()) {
        case 1:
            Wallpaper = "./assets/media/img/Wallpaper.jpg"
            break;
        case 2:
            Wallpaper = "./assets/media/img/Wallpaper2.png"
            break;
        case 3:
            Wallpaper = "./assets/media/img/Wallpaper3.jpg"
            break;
    }
    return (
        <div className="min-h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Wallpaper})` }}>
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}
export default InfoPage
