import './App.css';

function Nav(){
  const data = ["Home", "Information", "Portfolio", "Contents", "Link"];

  return (
    <div class="navigation">
      {data.map((item) => <a href="#"><div class="text">{item}</div></a>)}
    </div>
  );
}

function App() {
  return (
    <div>
      <Nav></Nav>
    </div>
  )
}

export default App;
