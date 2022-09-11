import Provider from '../context/Provider';
import MainRouter from './MainRouter';

function App() {
  return (
    <Provider>
      <MainRouter />
    </Provider>
  );
}

export default App;
