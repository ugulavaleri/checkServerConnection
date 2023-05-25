import { useEffect } from "react";
import { useState } from "react";
import Features from "./chat";

const ServerUrl = ({ roomId }) => {
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    useEffect(() => {
        const connection = Features(roomId, serverUrl);
        connection.connect();
        // console.log(connection); // two function -> connect and disconnect;
        return () => {
            connection.disconnect();
        };
    }, [roomId, serverUrl]);

    return (
        <>
            <p>Server URL:</p>
            <input
                type="text"
                value={serverUrl}
                onChange={(e) => setServerUrl(e.target.value)}
            />
            <h2>Welcome to {roomId} Room</h2>
        </>
    );
};

const Chat = () => {
    const [roomId, setRoomId] = useState("general");
    const [isClicked, setClick] = useState(false);

    const handleChange = (e) => {
        setRoomId(e.target.value);
        // console.log(e.target.value); // prints oprion values.
    };

    return (
        <>
            <p style={{ display: "inline-block" }}>Choose the chat room: </p>
            <select value={roomId} onChange={handleChange}>
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>
            </select>
            <button onClick={() => setClick((prev) => !prev)}>
                {isClicked ? "Close Chat" : "Open Chat"}
            </button>
            {isClicked && <ServerUrl roomId={roomId} />}
        </>
    );
};

export default Chat;
