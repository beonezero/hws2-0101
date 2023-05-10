import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type FriendMassageType = {
    message: MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMassageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                    <div>{props.message.user.name}</div>
                        {/**/}
                    </div>
                    <div
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        <div>{props.message.message.text}</div>
                        {/**/}
                    </div>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
            <div>{props.message.message.time}</div>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
