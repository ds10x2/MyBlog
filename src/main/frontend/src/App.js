import './App.css';


function Nav(){
  return (
    <div class="navigation">
      <a href="#"><div class="text">Home</div></a>
      <a href="#"><div class="text">Information</div></a>
      <a href="#"><div class="text">Portfolio</div></a>
      <a href="#"><div class="text">Contents</div></a>
      <a href="#"><div class="text">Link</div></a>
    </div>
  );
}

function Title(){
  return (
    <div class = "main-title">
      <div>My Page,</div>
      <div>My Responsibility</div>
    </div>
  );
}


function App() {
  return (
    <div>
      <Nav></Nav>
      <div class="main">
        <Title></Title>
      </div>
    </div>
  )
}

export default App;
