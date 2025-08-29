## Random String

A tiny full‑stack demo that serves random alphanumeric strings from a Flask backend and displays them in a React (CDN) frontend with a themed popup.

### Stack
- **Backend**: Python, Flask, `flask-cors`
- **Frontend**: React 18, ReactDOM (via CDN), Axios, plain HTML/CSS/JS

### Project structure
```
back.py        # Flask API (GET /random-string)
front.js       # React UI logic (fetch + popup)
index.html     # Entry HTML (CDN React + Axios)
style.css      # Styles
```

### Backend — run the API
1) Ensure Python 3 is installed.
2) Install deps:
```powershell
pip install flask flask-cors
```
3) Start the server:
```powershell
python .\back.py
```
The API will run at `http://127.0.0.1:5000` with endpoint `GET /random-string` returning `{ "string": "..." }`.

### Frontend — open the app
Open `index.html` directly in a browser, or serve the folder with a simple static server. The page uses React via CDN and `front.js` with in‑browser Babel.

- Click the button to fetch a random string from the backend.
- A popup shows the string; closing the popup changes the theme.

### Notes
- If the browser blocks cross‑origin requests, CORS is already enabled in the backend via `flask-cors`.
- Ensure the backend is running before pressing the button in the UI.


