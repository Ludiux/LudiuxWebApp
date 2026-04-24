import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from "./sections/NotFound.jsx"
import { KeyboardControls } from "@react-three/drei"
import { Controls } from "./components/Controls.jsx"
import Browser from "./sections/SubSections/Browser.jsx";
import Desktop from "./sections/SubSections/Desktop.jsx";
import TabGithub from "./sections/SubSections/TabGithub.jsx";
import Contact from "./sections/SubSections/Contact.jsx";


const map = [
    { name: Controls.escape, keys: ["Escape"] },
]

createRoot(document.getElementById('root')).render(

    <StrictMode>
        <BrowserRouter>
            <Routes location={location} key={location.pathname}>

                <Route
                    path="/"
                    element={
                        <KeyboardControls map={map}>
                            <App />
                        </KeyboardControls>
                    }
                />

                <Route path="/Desktop" element={<Desktop />} />
                <Route path="/Browser" element={<Browser />} />
                <Route path="/TabGithub" element={<TabGithub />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    </StrictMode>
)