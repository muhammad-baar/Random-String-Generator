const { useState } = React;

function Front() {
  const themes = [ 
    { bg: "grey", text: "red" },
    { bg: "red", text: "grey" },
    { bg: "yellow", text: "green" },
    { bg: "green", text: "yellow" },
  ];

  function getRandomTheme() {
    return themes[Math.floor(Math.random() * themes.length)];
  }

  const [popup, setPopup] = useState(false);
  const [randomString, setRandomString] = useState("");
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(getRandomTheme());

  const handleClick = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/random-string");
      setRandomString(res.data.string);
      setPopup(true);
      setCount(count + 1);
    } catch (err) {
      console.error("Error fetching random string:", err);
    }
  };

  const closePopup = () => {
    setPopup(false);
    setTheme(getRandomTheme());
  };

  return (
    <div
      className="app"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
      }}
    >
      <div className="center-text">Press the button for the random string</div>
      <button
        className="main-button"
        onClick={handleClick}
        style={{
          backgroundColor: theme.text,
          color: theme.bg,
        }}
      >
        Press
      </button>
      <div className="counter">Pressed: {count} times</div>

      {popup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              ×
            </span>
            <p>{randomString}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Front;

// Mount to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Front />);
