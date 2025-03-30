import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            ></Route>
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            ></Route>
            <Route path="/" element={<Landing />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh", backgroundColor: "green" }}>
      <Header />
      <div style={{ height: "90vh", backgroundColor: "red" }}>
        <Outlet />
      </div>
      footer
    </div>
  );
}

function Header() {
  return (
    <div>
      <Link to="/">Allen</Link>|
      <Link to="/neet/online-coaching-class-11">Class 11</Link>|
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
  );
}

function Error() {
  return <div>No page found</div>;
}

function Landing() {
  return <div>Welcome Landing Page</div>;
}

function Class11Program() {
  return <div>Welcome to the program of class 11</div>;
}

function Class12Program() {
  return <div>Welcome to the program of class 12</div>;
}
export default App;
