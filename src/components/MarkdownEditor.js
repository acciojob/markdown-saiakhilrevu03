import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor({ markdown, setMarkdown }) {
  const [previewContent, setPreviewContent] = useState('');

  // Update preview content whenever markdown changes
  useEffect(() => {
    setPreviewContent(markdown);
  }, [markdown]);

  // Handler to update markdown state from textarea
  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleInputChange}
        placeholder="Enter Markdown text here..."
      ></textarea>

      <div className="preview">
        <ReactMarkdown>{previewContent}</ReactMarkdown>
      </div>
    </>
  );
}

export default MarkdownEditor;
