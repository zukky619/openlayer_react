import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>Home</ p>
            <button onClick={() => navigate("/login")}>login</ button>
        </ div>
    )
}

export default Home;