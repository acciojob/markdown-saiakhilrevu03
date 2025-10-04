import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
        placeholder="Enter markdown text here..."
      />
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
