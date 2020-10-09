import React from 'react';
import './App.css';
import PostIframe from './components/PostIframe';

function App() {
  const params = { name: 'Adriano', age: '30', id: '87345-490' };
  return (
    <div className="App">
      <p>This is an iframe receiving that data:</p>

      <p><code>{ JSON.stringify(params) }</code></p>

      <PostIframe 
        frameBorder="1" 
        src="http://iframe-poc.herokuapp.com/page-to-post/" 
        params={params} />
    </div>
  );
}

export default App;
