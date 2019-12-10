import React from 'react';
import logo from './logo.svg';
import PageWrapper from './components/page-wrapper';
import Header from './components/header';
import AppRouter from "./features/router";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Brewshop"/>
      <PageWrapper>
        <AppRouter/>
      </PageWrapper>
    </div>
  );
}

export default App;
