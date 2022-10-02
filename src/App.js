import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Edit from "./pages/edit/Edit";
import New from "./pages/new/New";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { userInputs } from './formSource'

function App() {

  const { currentUser } = useContext(AuthContext)


  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to="/login" />
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Edit /></RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={userInputs} /></RequireAuth>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
