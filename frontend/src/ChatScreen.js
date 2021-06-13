import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Dorian Popa",
            image: "https://media.cancan.ro/unsafe/750x750/smart/filters:contrast(5):quality(80)/https://tacataca.prosport.ro/wp-content/uploads/2020/08/rian-popa.jpg",
            message: "what's up ❤"
        },
        {
            message: "sal cf?"
        },
        {
            name: "Dorian Popa",
            image: "https://playtech.ro/stiri/wp-content/uploads/2020/08/Ce-a-f%C4%83cut-Dorian-Popa-%C3%AEn-ziua-%C3%AEn-care-a-%C3%AEmplinit-32-de-ani.-Ce-surpriz%C4%83-pentru-artist.jpg",
            message: "inoata chelutzu"
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen" >
            <p className="chatScreen__timeStamp">
                YOU MATCHED WITH MARK ON 10/08/20 </p>
            {messages.map((message) =>
            (
                message.name ?
                    (
                        <div className="chatScreen__message">
                            <Avatar
                                className="chatScreen__image"
                                alt={message.name}
                                src={message.image}
                            />
                            <p className="chatScreen__text">
                                {message.message}</p>
                        </div>
                    ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">
                                {message.message}</p>
                        </div>
                    )
            )
            )}

            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text"
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen;