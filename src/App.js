import React from 'react';

import Header from './Header';
import Article from './Article';

import logo from './assets/Logo.svg';
import {articles} from './data'


function App() {
  console.log(articles)
  return (
    <section className="container mx-auto px-6 py-4 block">
      <Header />

      <section className="py-8">
        {
          articles.map((article, i) => <Article {...article} key={i}/>)
        }

      </section>

      <div className="flex flex-wrap justify-between items-center">
        <img src={logo} alt=""/>
        <p className="text-neutral-600">
          Unifeed© All Copyrights Not Reserved
        </p>
      </div>
    </section>
  )
}

export default App;
