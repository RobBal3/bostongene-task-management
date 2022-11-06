import MainContextProvider from "./context/context.jsx";
import Users from "./components/users/index.js";
import { Routes, Route } from "react-router-dom";
import UserBoards from "./components/userBoards/index.js";
import Tasks from "./components/tasks/index.js";

function App() {
  return (
    <MainContextProvider>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:userID' element={<UserBoards />} />
          <Route path='/:userID/:boardName' element={<Tasks />} />
        </Routes>
      </div>
    </MainContextProvider>
  );
}

export default App;
