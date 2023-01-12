import { FC } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutePaths from './structures/enums/Routes.enum'
import ListPage from './components/04_pages/ListPage/ListPage'
import Login from './components/04_pages/Login/Login'
import Register from './components/04_pages/Register/Register'
import {QueryClient, QueryClientProvider} from 'react-query'
import DetailPage from './components/04_pages/DetailPage/DetailPage'
import ProtectedUserRoute from './components/00_fundament/ProtectedUserRoute'
import AddPage from './components/04_pages/AddPage/AddPage'
import ApplicationContext from './context/ApplicationContext'
import Logout from './components/00_fundament/Logout/Logout'


const App: FC<Record<string, never>> = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ApplicationContext>
                <Routes>
                    <Route
                        index
                        path={RoutePaths.ROOT}
                        element={<ListPage />}
                    />
                    <Route
                        path={RoutePaths.PRODUCT}
                        element={<ListPage />}
                    />
                    <Route
                        path={RoutePaths.LIST}
                        element={<ListPage />}
                    />
                    <Route
                        path={RoutePaths.DETAIL}
                        element={<DetailPage id={'1'} />}
                    />
                    <Route element={<ProtectedUserRoute />}>
                        <Route
                            path={RoutePaths.ADD}
                            element={<AddPage />}
                        />
                    </Route>
                    <Route
                        path={RoutePaths.LOGIN}
                        element={<Login />}
                    />
                    <Route
                        path={RoutePaths.REGISTER}
                        element={<Register />}
                    />
                    <Route element={<ProtectedUserRoute />}>
                        <Route
                            path={RoutePaths.LOGOUT}
                            element={<Logout />}
                        />
                    </Route>
                </Routes>
                </ApplicationContext>
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
