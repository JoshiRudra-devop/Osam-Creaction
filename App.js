import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

// This app will always show Login first, and only show Home after login or "Do it later"
export default function App() {
  // We use a simple state for demo; in production use proper auth & routing
  const [showMain, setShowMain] = useState(false);
  // Optionally: store if user skipped login for further logic

  if (!showMain) {
    return (
      <Login onLogin={() => setShowMain(true)} onSkip={() => setShowMain(true)} />
    );
  }
  return <Home />;
}