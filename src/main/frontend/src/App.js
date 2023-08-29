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


function App() {
  return (<Nav></Nav>);
}

export default App;
