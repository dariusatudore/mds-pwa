import React from "react";
import Chat from './Chat';

import "./ChatList.css";

function ChatList() {
    return <div className="chats">
        <Chat
            name="Roxana Ionescu"
            message="Hey!"
            timestamp="34seconds ago"
            profilePic="https://www.curentul.info/wp-content/uploads/2017/09/13-rox.jpg"
        />

        <Chat
            name="Chef Scarlatescu"
            message="Hey!"
            timestamp="7 seconds ago"
            profilePic="https://scontent-otp1-1.xx.fbcdn.net/v/t1.15752-9/186865885_609315566693816_3078965018968254603_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=MoxShB7BCWUAX8Qupyb&_nc_ht=scontent-otp1-1.xx&oh=ffd30368efee267cf4881d13870b4f36&oe=60C67904"
        />

        <Chat
            name="Killa Fonic"
            message="Hey!"
            timestamp="39 seconds ago"
            profilePic="https://cloudia.cms.protvplus.ro/r620x350n/26de434a-3edf-4c74-b282-c32c0ac850ba?default=b507a3ad-e712-494d-9667-5274d0c05bca"
        />

        <Chat
            name="Azteca"
            message="Hey!"
            timestamp="55 seconds ago"
            profilePic="https://scontent-otp1-1.xx.fbcdn.net/v/t1.15752-9/187371094_1005930666607520_4436855636917238988_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=vfdSdwhqJrkAX_wM0Tg&_nc_ht=scontent-otp1-1.xx&oh=718d0aabc0a92bbd2f93682e7e6b12f0&oe=60C5EB6F"
        />

        <Chat
            name="Dorian Popa"
            message="Hey!"
            timestamp="55 seconds ago"
            profilePic="https://playtech.ro/stiri/wp-content/uploads/2020/08/Ce-a-f%C4%83cut-Dorian-Popa-%C3%AEn-ziua-%C3%AEn-care-a-%C3%AEmplinit-32-de-ani.-Ce-surpriz%C4%83-pentru-artist.jpg"
        />
    </div>;
}

export default ChatList;