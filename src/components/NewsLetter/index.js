import React from "react";

export default function NewsLetter() {
  return (
    <div className="news-letter-container">
      <div className="body-row-container">
        <div className="body-row">
          <div className="news-letter-box">
            <div className="title">
              <h2>Deseja receber nossas novidades?</h2>
            </div>
            <div className="email-container">
              <form>
                <div className="input">
                  <i className="icon icon-email"></i>
                  <input
                    name="news-letter-email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <button type="submit">Inscrever-se</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
