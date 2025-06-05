import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/canvas");
    };

    return (
        <div className="landing-page">
            <h1>Welcome to the Scrabble Game</h1>
            <label htmlFor="playerName">Enter your name:</label>
            <input type="text" id="playerName" name="playerName" placeholder="Your Name" />
            <p>Click the button below to start playing!</p>
            <button onClick={onSubmit}>
                Start Game
            </button>
        </div>      
    );
}

export default LandingPage;