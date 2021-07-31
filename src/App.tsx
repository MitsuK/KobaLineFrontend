import React from 'react';
import logo from './logo.svg';
import './App.css';
import Channel, { TProps } from './Components/Atoms/Channel/Channel';
import MessageBalloon, { MessageBalloonProps } from './Components/Atoms/MessageBalloon/MessageBalloon';
import UserIcon, { UserIconProps } from './Components/Atoms/UserIcon/UserIcon';
import AddRoomButton from './Components/Molecules/AddRoomButton/AddRoomButton';
import UsernameField, { UsernameFieldProps } from './Components/Atoms/UsernameField/UsernameField';
import UserWithName from './Components/Molecules/UserWithName/UserWithName';
import MessageItem from './Components/Molecules/MessageItem/MessageItem';
import MessageForm from './Components/Atoms/MessageForm/MessageForm';
import UserListItem from './Components/Atoms/UserListItem/UserListItem';
import SelectableUserWithName from './Components/Molecules/SelectableUserWithName/SelectableUserWithName';



let tmp: TProps = {
  id: "a",
  title: "bb",
  state: true,
}

let defaultMessage: MessageBalloonProps = {
  message: "ななしのああああああああああああああああああああああああああああ",
  isMessageISent: true
};

let defaultMessage2: MessageBalloonProps = {
  message: "ああああああああああああああああああああああああああああ",
  isMessageISent: false
};

//console.log(defaultMessage2, defaultMessage);
let defaultUser: UsernameFieldProps = {
  username: "ななしのごんべえああああああああああああああああああああああ"
}

let defaultUser2: UsernameFieldProps = {
  username: "ななしのごんこ",
}

function App() {
  return (
    <div className="App">
      <div className="SideNav">
        <div className="SideNav_icon">
          <UserIcon />
        </div>
        <UserListItem username="a" />
        <UserListItem username="a" />
        <UserListItem username="a" />
        <AddRoomButton />
      </div>
      <div className="tmp">
        <div className="messages">
          <MessageItem {...defaultMessage} />
          <MessageItem {...defaultMessage2} />
          {/*
          <MessageItem {...defaultMessage2} />
          <MessageItem {...defaultMessage2} />
          <MessageItem {...defaultMessage2} />
          */}
          <div className="room">
            <div className="selectList">
              <SelectableUserWithName />
            </div>
            <div className="createRoom">
              <button className="createRoomButton" >aaa</button>
            </div>
          </div>
        </div>
        <div className="foot">
          <MessageForm />
        </div>
      </div>
    </div>
  );
}

export default App;
