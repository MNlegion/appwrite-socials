import { Routes, Route } from "react-router-dom";

import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes - sign in/up */}
        <Route path="/sign-in" element={<SigninForm />} />

        {/* private routes - routes only available once signed in */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
