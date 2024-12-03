import React from "react";

function ResultDisplay({ results = [] }) {
  const normalMails = results.filter((mail) => !mail.isSpam);
  const spamMails = results.filter((mail) => mail.isSpam);

  const handleDelete = (id, isSpam) => {
    console.log(`Delete mail ID: ${id}, Spam: ${isSpam}`);
  };

  return (
    <div className="result-display">
      <h2>Spam Filtering Results</h2>
      <div className="mail-lists">
        <div className="mail-list normal-mails">
          <h3>Normal Mails</h3>
          <ul>
            {normalMails.length > 0 ? (
              normalMails.map((mail) => (
                <li key={mail.id} className="mail-item">
                  <span className="sender">{mail.sender}</span>
                  <span className="subject">{mail.subject}</span>
                  <span className="received-at">{mail.receivedAt}</span>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(mail.id, false)}
                  >
                    ×
                  </button>
                </li>
              ))
            ) : (
              <li className="empty-list-message">No normal mails to display.</li>
            )}
          </ul>
        </div>
        <div className="mail-list spam-mails">
          <h3>Spam Mails</h3>
          <ul>
            {spamMails.length > 0 ? (
              spamMails.map((mail) => (
                <li key={mail.id} className="mail-item">
                  <span className="sender">{mail.sender}</span>
                  <span className="subject">{mail.subject}</span>
                  <span className="received-at">{mail.receivedAt}</span>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(mail.id, true)}
                  >
                    ×
                  </button>
                </li>
              ))
            ) : (
              <li className="empty-list-message">No spam mails to display.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResultDisplay;
