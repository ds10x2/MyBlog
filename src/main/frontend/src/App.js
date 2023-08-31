import { useRef, useState, useEffect } from 'react';
import './App.css';
import { InView, inView } from 'react-intersection-observer';

function Nav(){
  const data = ["Home", "Information", "Portfolio", "Contents", "Link"];
  return (
      <div className="navigation">
        {data.map((item) => <a href="#"><div className="text">{item}</div></a>)}
      </div>
  );
}

function Title(){

  const title = "MY RESPONSIBILITY";
  const [titleIsView, setTitleIsView] = useState(false);


  return(
  <InView as="div" className="main" onChange={(inView, entry)=> {
    setTitleIsView(inView);
  }}>
    <h2 className={`main-title${titleIsView ? "view" : ""}`}>title</h2>
  </InView>
  );
}


function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Nav></Nav>
      </div>
      <div className='contents'>
        <Title></Title>
      </div>
    </div>
  )
}

export default App;
