import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Mypage from './pages/Mypage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default router;
