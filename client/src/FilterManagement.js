import React, { useState } from "react";

function FilterManagement() {
  const [domain, setDomain] = useState("");
  const [word, setWord] = useState("");
  const [domains, setDomains] = useState([]);
  const [words, setWords] = useState([]);
  const [showDomains, setShowDomains] = useState(false);
  const [showWords, setShowWords] = useState(false);

  const addDomain = () => {
    if (domain && !domains.includes(domain)) {
      setDomains([domain, ...domains]); // 최신 항목을 위로 추가
      setDomain("");
    }
  };

  const addWord = () => {
    if (word && !words.includes(word)) {
      setWords([word, ...words]); // 최신 항목을 위로 추가
      setWord("");
    }
  };

  const removeDomain = (item) => {
    setDomains(domains.filter((domainItem) => domainItem !== item));
  };

  const removeWord = (item) => {
    setWords(words.filter((wordItem) => wordItem !== item));
  };

  return (
    <div className="filter-management">
      <h2>Filter Management</h2>
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="domain">Block Domain:</label>
          <input
            id="domain"
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="e.g., spamdomain.com"
          />
          <button onClick={addDomain}>Add Domain</button>
        </div>
        <div className="input-group">
          <label htmlFor="word">Filter Word:</label>
          <input
            id="word"
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="e.g., free, offer"
          />
          <button onClick={addWord}>Add Word</button>
        </div>
      </div>
      <div className="list-section">
        <div className="toggle-group">
          <h3>
            Blocked Domains
            <button
              className="toggle-button"
              onClick={() => setShowDomains(!showDomains)}
            >
              {showDomains ? "▲" : "▼"}
            </button>
          </h3>
          {showDomains && (
            <ul className="filter-list">
              {domains.map((item, index) => (
                <li key={index} className="filter-item">
                  {item}
                  <button
                    className="delete-button"
                    onClick={() => removeDomain(item)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="toggle-group">
          <h3>
            Filtered Words
            <button
              className="toggle-button"
              onClick={() => setShowWords(!showWords)}
            >
              {showWords ? "▲" : "▼"}
            </button>
          </h3>
          {showWords && (
            <ul className="filter-list">
              {words.map((item, index) => (
                <li key={index} className="filter-item">
                  {item}
                  <button
                    className="delete-button"
                    onClick={() => removeWord(item)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterManagement;
