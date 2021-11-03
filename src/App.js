import React from 'react'
import './App.css'
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"

function App() {
  return (
    <div className="App">
      {/* <h2>Whatsapp App</h2> */}
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
