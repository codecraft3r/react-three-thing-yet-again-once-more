import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))
//set bacground color of canvas to black
root.render(
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 0, 0, 0 ]
        } }
        style={{ background: 'black' }}
    >
        <Experience />
    </Canvas>
)