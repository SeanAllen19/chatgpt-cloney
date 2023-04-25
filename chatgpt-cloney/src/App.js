const App = () => {
  return (
    <div className="app">
        <section className="side-bar">
          <button>+ New Chat</button>
          <ul className="history">
            <li>Question 1</li>
            <li>Question 2</li>
          </ul>
          <nav>
            <p>Made by Sean Allen</p>
          </nav>
        </section>

        <section className="main">
          <h1>CloneyGPT</h1>
          <ul className="feed">
          </ul>

          <div className="bottom-section"> 
            
            <div className="input-container">
                <input/>
                <div id="submit">➢</div>
            </div>
            <p className="info">
            Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. Our goal (Including myself) is to make AI systems more natural and safe to interact with. Your feedback will help us improve.
            </p>

          </div>

        </section>
    </div>
  );
}

export default App;
