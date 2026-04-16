import React from 'react';

export default function App() {
  return (
    <div style={{height: '100vh', margin: 0}}>
      <iframe
        title="EZEpark Live Mirror"
        src="https://ezepark.in/"
        style={{width: '100%', height: '100%', border: 'none'}}
        sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
      />
    </div>
  );
}
