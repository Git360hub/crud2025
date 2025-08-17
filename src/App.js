import './App.css';
import { useState, useEffect } from 'react';
import {
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc, 
  onSnapshot
} from 'firebase/firestore';
import { db } from './firebase';


function App() {
  const [newTodo, setNewTodo] = useState('');
  //create
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={e => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Submit</button>

      </header>
    </div>
  );
}

export default App;
