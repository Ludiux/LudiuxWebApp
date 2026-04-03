import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from "./sections/NotFound.jsx"
import InfoPage from "./sections/InfoPage.jsx"
import { KeyboardControls } from "@react-three/drei"
import { Controls } from "./components/Controls.jsx"



const map = [
    { name: Controls.escape, keys: ["Escape"] },
]


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <KeyboardControls map={map}>
                <App />
            </KeyboardControls>
        )
    },
    { path: '/embed', element:
            <InfoPage /> },
    { path: "*", element: <NotFound /> },
])

createRoot(document.getElementById('root')).render(

    <StrictMode>
            <RouterProvider router={router} />
    </StrictMode>
)