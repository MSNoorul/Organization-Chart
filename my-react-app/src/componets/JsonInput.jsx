import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-error_marker';
import data from '../data';

const JsonInput = ({ setData }) => {
  const [error, setError] = useState(null);
  const [markers, setMarkers] = useState([]);

  const handleEditorChange = (value) => {
    try {
      const json = JSON.parse(value);
      setData(json);
      setError(null);
      setMarkers([]);
    } catch (e) {
      const errorLine = getErrorLine(e, value);
      setError(`Invalid JSON at line ${errorLine}`);
      setMarkers([
        {
          startRow: errorLine - 1,
          startCol: 0,
          endRow: errorLine,
          endCol: 1,
          className: 'error-marker',
          type: 'background',
          inFront: true,
        },
      ]);
    }
  };

  const getErrorLine = (error, value) => {
    const errorMatch = error.message.match(/at position (\d+)/);
    if (errorMatch) {
      const errorPosition = parseInt(errorMatch[1], 10);
      const lines = value.slice(0, errorPosition).split('\n');
      return lines.length;
    }
    return 1;
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
          showLineNumbers: true,
          tabSize: 2,
        }}
        markers={markers}
        style={{ height: '90%', width: '100%' }}
      />
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </div>
  );
};

export default JsonInput;
