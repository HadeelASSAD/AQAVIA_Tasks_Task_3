import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page_1";
import Page2 from "./pages/page_2";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="https://hadeelassad.github.io/AQAVIA_Tasks_Task_3/"
            element={<Page1 />}
          />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
