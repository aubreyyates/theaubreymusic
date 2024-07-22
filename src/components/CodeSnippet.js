import React, { useEffect } from 'react';
import hljs from 'highlight.js';

import { useTheme } from '@mui/material/styles';

const CodeSnippet = ({ language, children }) => {
  const theme = useTheme();

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  let languageTag = '';
  let tagColor = theme.palette.primary.main;
  if (language == 'csharp') {
    languageTag = 'C#';
  }

  return (
    <pre
      style={{
        position: 'relative'
      }}
    >
      <code
        style={{
          borderRadius: '5px'
        }}
        className={`language-${language}`}
      >
        {children}
      </code>
      <p
        style={{
          fontStyle: 'italic',
          fontSize: 'small',
          position: 'absolute',
          top: '5px',
          right: '10px',
          margin: '0',
          color: tagColor
        }}
      >
        {languageTag}
      </p>
    </pre>
  );
};

export default CodeSnippet;
