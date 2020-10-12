import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.css';
import axios from '../../axiosApi';
import Container from '../../components/Container/Container';
import { changeMessageInput, fetchGetMessages } from '../../store/actions/messagesActions';
import MessageListItem from '../../components/MessageListItem/MessageListItem';

const MainPage = () => {

    const dispatch = useDispatch();
    const messageVal = useSelector(state => state.messageInputValue);
    const messages = useSelector(state => state.messages);

    const changeVal = event => {
        const value = event.target.value;
        dispatch(changeMessageInput(value));
    };

    useEffect(() => {
        dispatch(fetchGetMessages());
    }, [messages, dispatch]);

    const sendMessage = async() =>{
        const data = {
            author: "Admin",
            message: messageVal,
        };

        await axios.post('/messages/', data);
    }



    return (
        <div className='main-page-box'>
            <Container>
                <div className='main-box'>
                    <div className='messages-box'>
                        <div className='messages'>
                             {messages.length > 0 ?
                            messages.map(message => {
                                return <MessageListItem key={message.id} dateTime={message.dateTime} author={message.author} message={message.message} />
                            }) : null}
                        </div>
                       

                    </div>
                    <div className='send-box'>
                        <input required value={messageVal} onChange={changeVal} />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default MainPage;