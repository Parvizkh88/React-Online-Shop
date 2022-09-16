import { ToastContainer } from 'react-toastify';
import Provider from '../context/Provider';
import MainRouter from './MainRouter';

function App() {
  return (
    <Provider>
      <ToastContainer />
      <MainRouter />
    </Provider>
  );
}

export default App;
