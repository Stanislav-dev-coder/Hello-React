import React from 'react';
import articles from '../fixtures.js';
import ArticleList from './ArticleList.jsx';


function App() {
  return (
    <div>
      <h1>App name</h1>
      <ArticleList articles/>
    </div>
  )
}

export default App