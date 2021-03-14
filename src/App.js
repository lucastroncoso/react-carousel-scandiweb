import React from "react"
import { render } from "react-dom";

import ImageSlider from "./components/ImageSlider"
import {MockData} from "./components/MockData"

export default function App() {
    return (
        <ImageSlider slides={MockData} />
    )
}

render(<App />, document.getElementById("root"));