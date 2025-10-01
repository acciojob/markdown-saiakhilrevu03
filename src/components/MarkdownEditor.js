import React,{useState,useEffect} from 'react';
import ReactMarkdown from 'react-markdown'

function MarkdownEditor(){
  const [text,setText] = useState("");
  const [preview,setPreview] = useState("");

  useEffect(()=>{
    setPreview(text);
  },[text]);

  return(
    <div className="markdown-editor">
        <div className="input-section">
            <h2>Markdown Input</h2>
            <textarea
            className="textarea"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Enter Markdown here..."
              />
        </div>
        <div className="preview-section">
            <h2>Preview</h2>
            <div className="preview">
                <ReactMarkdown>{preview}</ReactMarkdown>
            </div>
        </div>
    </div>
  )
}

export default MarkdownEditor;
