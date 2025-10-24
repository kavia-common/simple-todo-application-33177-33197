import React, { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import './index.css';
import { theme } from './theme';

// PUBLIC_INTERFACE
export default function App() {
  /**
   * Retro Todo - In-memory todo application.
   * Users can add tasks via input and Enter/Add button,
   * view tasks in a list, and delete tasks individually.
   * No backend calls or auth; state is client-side only.
   */
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  // Generate subtle gradient as inline style using the theme
  const gradientStyle = useMemo(
    () => ({
      minHeight: '100vh',
      background: `linear-gradient(180deg, rgba(59,130,246,0.10) 0%, rgba(249,250,251,1) 40%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }),
    []
  );

  useEffect(() => {
    // Autofocus input on mount
    if (inputRef.current) inputRef.current.focus();
  }, []);

  // PUBLIC_INTERFACE
  const addTodo = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: trimmed,
      },
    ]);
    setText('');
    if (inputRef.current) inputRef.current.focus();
  };

  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // Handle Enter key on input to add
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={gradientStyle}>
      <main
        className="card"
        style={{
          width: '100%',
          maxWidth: 720,
          background: theme.surface,
          borderRadius: theme.radiusLg,
          boxShadow: theme.shadowMd,
          padding: 24,
          color: theme.text,
          border: '1px solid rgba(17,24,39,0.06)',
        }}
      >
        <header className="header">
          <h1 className="title">
            <span className="retro-accent">Retro</span> Todo
          </h1>
          <p className="subtitle">A clean, modern task list with ocean vibes.</p>
        </header>

        <section className="input-row" aria-label="Add todo">
          <div className="input-wrapper">
            <input
              ref={inputRef}
              type="text"
              placeholder="Add a new task..."
              aria-label="Todo text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onKeyDown}
              className="todo-input"
            />
          </div>
          <button
            type="button"
            className="btn-add"
            onClick={addTodo}
            aria-label="Add task"
          >
            Add
          </button>
        </section>

        <section className="list-section" aria-live="polite">
          {todos.length === 0 ? (
            <div className="empty">
              <div className="empty-badge">No tasks yet</div>
              <p className="empty-text">
                You’re all set. Add your first task to get started.
              </p>
            </div>
          ) : (
            <ul className="todo-list">
              {todos.map((t) => (
                <li key={t.id} className="todo-item">
                  <span className="todo-text">{t.text}</span>
                  <button
                    className="btn-delete"
                    onClick={() => deleteTodo(t.id)}
                    aria-label={`Delete ${t.text}`}
                    title="Delete"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
