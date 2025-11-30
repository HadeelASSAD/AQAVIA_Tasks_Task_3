import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page_1";
import Page2 from "./pages/page_2";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
