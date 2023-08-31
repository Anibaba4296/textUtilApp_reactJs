import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    {/* this will pass page title as props i.e, proprties */}
      <NavBar title="textUtils" aboutText="About textUtils"/> 
      <div className="container my-4" >
      <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
