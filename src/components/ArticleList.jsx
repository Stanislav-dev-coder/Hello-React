import React, {Component} from 'react';
import Article from './Article.jsx'

function ArticleList ({ articles }) {
  return (
    <ul>
      <li><Article article = {articles[0]}/></li>
      <li><Article article = {articles[0]}/></li>
      <li><Article article = {articles[0]}/></li>
    </ul>
  )
}
export default ArticleList