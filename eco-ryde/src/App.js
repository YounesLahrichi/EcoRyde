import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Account from "./pages/Account"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"
import Search from "./pages/Search"
import SignIn from "./pages/SignIn"
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element = {<Home/>}/>
            <Route path ="/home" element = {<Home/>}/>
            <Route path ="/account" element = {<Account/>}/>
            <Route path ="/search" element = {<Search/>}/>
            <Route path ="/signin" element = {<SignIn/>}/>
            <Route path ="/*" element = {<NoPage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
