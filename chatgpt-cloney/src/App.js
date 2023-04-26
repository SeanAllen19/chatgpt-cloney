const App = () => {
  const getMessages = async () => {
    const options = {
      method: "POST",
      body : JSON.stringify({
        message: "Hi world, how are you?",
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      const response = await fetch('http://localhost:3000/completions', options)
      const data = await response.json()
      console.log(data)
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div className="app">
      <section className="side-bar">

        <button>+ New Chat</button>

        <ul className="history">
          <li>Question 1</li>
          <li>Question 2</li>
          <li>Question 3</li>
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
            <input />
            <div id="submit" onClick={getMessages}>➢</div>
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
