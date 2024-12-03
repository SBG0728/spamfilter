import React, { useState } from "react";
import FilterManagement from "./FilterManagement";
import FileUpload from "./FileUpload";
import ResultDisplay from "./ResultDisplay";
import "./SpamFilter.css";

function App() {
  const [filterResults, setFilterResults] = useState([]); // 초기값으로 빈 배열 설정

  const handleFilterResults = (results) => {
    setFilterResults(results);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Spam Filtering System</h1>
      </header>
      <main className="app-main">
        <FilterManagement />
        <FileUpload onFilterComplete={handleFilterResults} />
        <ResultDisplay results={filterResults} /> {}
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 SBG's Spam Filter Inc.</p>
      </footer>
    </div>
  );
}

export default App;
