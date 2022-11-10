import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';


function WebSocket() {

    //Public API that will echo messages sent to it back to the client
    const [socketUrl, setSocketUrl] = useState(`ws://${process.env.REACT_APP_PUBLIC_URL}/ws/chat/testing/`);
    const [messageHistory, setMessageHistory] = useState([]);
    const { sendMessage, lastMessage, lastJsonMessage, readyState, sendJsonMessage } = useWebSocket(socketUrl);
    console.log(lastMessage, lastJsonMessage)
    useEffect(() => {
        console.log(readyState)
        console.log(connectionStatus)
        if (lastJsonMessage !== null) {
        setMessageHistory((prev) => prev.concat(lastJsonMessage));
        }
    }, [lastJsonMessage, setMessageHistory]);

    const handleClickChangeSocketUrl = useCallback(
        () => setSocketUrl('ws://localhost:8000/ws/chat/testing/'),
        []
    );

    const handleClickSendMessage = useCallback(() => sendJsonMessage({'message': 'hello'}), []);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];





    return ( 
        <div>
            <button onClick={handleClickChangeSocketUrl}>
            Click Me to change Socket Url
            </button>
            <br />
            <br />
            <button
            onClick={handleClickSendMessage}
            disabled={readyState !== ReadyState.OPEN}>
                Click Me to send 'Hello'
            </button>
            <br />
            <br />
        <span>The WebSocket is currently {connectionStatus}</span>
        <br /><br />
        {lastJsonMessage ? <span>Last message: {lastJsonMessage.message}</span> : null}
        <br />
        History
        <ul>
          {messageHistory.map((message, idx) => (
            <div key={idx}>{message ? message.message : null}</div>
          ))}
        </ul>
      </div>
  
     );
}

export default WebSocket;