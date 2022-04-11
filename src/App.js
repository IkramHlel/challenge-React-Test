import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import GiftCard1 from './level1/giftCard1';
import GiftCard2 from './level2/giftCard2';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GiftCard1/>
        {/* <GiftCard2/> */}
      </div>
    </Provider>
  );
}

export default App;
