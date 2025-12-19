import { CharacterCounter } from './components/CharacterCounter/CharacterCounter'
// Renders CC with props
function App() {
  return (
    <div className="App">
      <CharacterCounter targetReadingTime={5} />
    </div>
  );
}

export default App;
