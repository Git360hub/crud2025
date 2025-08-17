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
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
