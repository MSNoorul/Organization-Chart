import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import data from '../data';

const JsonInput = ({ setData }) => {
  const handleEditorChange = (value) => {
    try {
      const json = JSON.parse(value);
      setData(json);
    } catch (e) {
      console.error("Invalid JSON");
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'auto', backgroundColor: 'white', zIndex: 1 }}>
      <AceEditor
        mode="json"
        theme="github"
        name="json-editor"
        onChange={handleEditorChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        defaultValue={JSON.stringify(data, null, 2)}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: false,
          tabSize: 2,
        }}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default JsonInput;
