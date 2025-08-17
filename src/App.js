import './App.css';
import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot
} from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const todosRef = collection(db, 'todos');

  // Read
  useEffect(() => {
    const unsubscribe = onSnapshot(todosRef, (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(items);
    });
    return () => unsubscribe();
  }, []);

  // Create
  const createtodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    await addDoc(todosRef, { text: newTodo });
    setNewTodo('');
  };

  // Delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  // Start Edit
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // Save Edit
  const saveEdit = async (id) => {
    if (!editText.trim()) return;
    await updateDoc(doc(db, "todos", id), { text: editText });
    setEditId(null);
    setEditText('');
  };

  // Cancel Edit
  const cancelEdit = () => {
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={createtodo}>Submit</button>
        {todos.map((todo) => (
          <div key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => startEdit(todo)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;

