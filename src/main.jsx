import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from "./sections/NotFound.jsx"
import EmbedWebsite from "./sections/EmbedWebsite.jsx"
import { KeyboardControls } from "@react-three/drei"
import { Controls } from "./components/Controls.jsx"
import Browser from "./sections/SubSections/Browser.jsx";

const map = [
    { name: Controls.escape, keys: ["Escape"] },
]

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <KeyboardControls map={map}>
                            <App />
                        </KeyboardControls>
                    }
                />
                <Route path="/embed" element={<EmbedWebsite />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/Browser/*" element={<Browser />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)