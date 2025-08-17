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
  const createtodo = async (e) => {
    if (newTodo === '') return;
    await addDoc(collection(db, 'todos'), { text: newTodo });
    setNewTodo('');
  };
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={e => setNewTodo(e.target.value)} />
        <button onClick={createtodo}>Submit</button>

      </header>
    </div>
  );
}

export default App;
