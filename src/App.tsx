import { FC } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutePaths from './structures/enums/Routes.enum'
import ListPage from './components/04_pages/ListPage/ListPage'
import Login from './components/04_pages/Login/Login'
import Register from './components/04_pages/Register/Register'
import {QueryClient, QueryClientProvider} from 'react-query'


const App: FC<Record<string, never>> = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route
                        index
                        path={RoutePaths.ROOT}
                        element={<ListPage />}
                    />
                    <Route
                        path={RoutePaths.LOGIN}
                        element={<Login />}
                    />
                    <Route
                        path={RoutePaths.REGISTER}
                        element={<Register />}
                    />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
