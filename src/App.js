import Body from './MyComponent/Body';
import { Provider } from 'react-redux';
import userstore from './utils/userstore';

function App() {
  return (
    <div >
      <Provider store={userstore}>
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
