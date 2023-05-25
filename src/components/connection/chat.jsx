const Features = (roomId, serverUrl) => {
    return {
        connect() {
            console.log(
                '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
            );
        },
        disconnect() {
            console.log(
                '❌ Disconnected from "' + roomId + '" room at ' + serverUrl
            );
        },
    };
};

export default Features;
