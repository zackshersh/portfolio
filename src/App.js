import {useState} from "react";
import Home from "./components/Home";

import Page from "./components/Page";

import CreativeContent from "./components/CreativeContent";

function getPage(page){
  switch(page){
    case 'creative':
      return <Page title={"Creative"}>
              <CreativeContent/>
            </Page>
    case 'web':
      return <Page title={"Web"}>
            </Page>
    case 'about':
      return <Page title={"About"}>
            </Page>
    case 'none':
      return 
  }
}

function App() {

  const [pageState, setPageState] = useState('none')

  return (
    <div className="App">
      <div className="wrapper">
        <Home setPageState={setPageState}/>
        {getPage(pageState)}
      </div>

    </div>
  );
}

export default App;
