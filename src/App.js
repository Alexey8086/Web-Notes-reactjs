import React from 'react';
import Layout from './hoc/Layout/Layout'
// import MainPage from './containers/main-page/main-page'
// import HomePage from './containers/home-page/home-page'
import EditorPage from './containers/editor-page/editor-page'

function App() {
  return (
    <Layout >

      {/* <MainPage /> */}
      
      {/* <HomePage /> */}

      <EditorPage />

    </Layout>
  );
}

export default App;
