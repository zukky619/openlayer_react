import { useNavigate } from "react-router-dom";
import MapMain from "../MapMain.js";

const Home = () => {
    console.log(MapMain);
    console.log("Home.jsを通った")
    return (
        <MapMain />
    )
}

export default Home;