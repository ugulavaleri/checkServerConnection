const Features = (roomId, serverUrl) => {
    // console.log(roomId);
    // console.log(serverUrl);
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
