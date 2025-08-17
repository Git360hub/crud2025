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
  const [todos, setTodos] = useState([]);

  const todosRef = collection(db, 'todos');

  //read
  useEffect(() => {
    onSnapshot(todosRef, (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(items);
    });
  }, []);

  //create
  const createtodo = async (e) => {
    e.preventDefault();
    if(!newTodo.trim()) return;
    await addDoc(todosRef, { text: newTodo });
    setNewTodo('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={e => setNewTodo(e.target.value)} />
        <button onClick={createtodo}>Submit</button>
        {todos.map(todo => (
          <div>
            {todo.text}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
