import { Navigate, Route, Routes } from "react-router-dom";

import TablePage from "./pages/table-page.jsx";
import ListPage from "./pages/list-page.jsx";
import AppNavbar from "./components/nav-bar.jsx";

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route element={<Navigate to="/table" />} path="/" />
        <Route element={<TablePage />} path="/table" />
        <Route element={<ListPage />} path="/list" />
      </Routes>
    </>

  );
}

export default App;
