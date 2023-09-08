import './App.css';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  // function
  function handleClick(){
    alert('button click');
  };

  // arrow function
  const handleClick2 = () => {
    alert('button click');
  };

  // arrow function
  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('third button clicked')}}>third button</button>
      <button onClick={() => addToFive(3)}>Four button</button> 
    </>
  )
}

export default App
