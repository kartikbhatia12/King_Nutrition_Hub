import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/index.jsx";
import NotFound from "./pages/notfound.jsx";


const App = () => (
  <>
    <Toaster position="top-right" />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
