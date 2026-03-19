import * as React from 'react';
import MainContainer from './Navigation/Maincontainer';
import { SendPushNotification } from './Navigation/Screens/Notification';

function App() {
  // Example usage of SendPushNotification
  React.useEffect(() => {
    SendPushNotification('Example Title', 'Example Body');
  }, []);

  return <MainContainer />;
}

export default App;