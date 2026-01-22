:root {
  --bg: #0e0e0e;
  --text: #e6e6e6;
  --muted: #999;
  --accent: #ffffff;
}

.light {
  --bg: #ffffff;
  --text: #111;
  --muted: #555;
  --accent: #000000;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: mona-sans, sans-serif;
  margin: 0;
  padding: 2rem;
}

section {
  margin-bottom: 4rem;
}

h1, h2, h3 {
  font-weight: 500;
}

.summary {
  max-width: 600px;
  color: var(--muted);
}

.project-list {
  list-style: none;
  padding: 0;
}

.project-link {
  background: none;
  border: none;
  color: var(--text);
  text-align: left;
  padding: 0.5rem 0;
  cursor: pointer;
}

.project-link:hover {
  text-decoration: underline;
}

.video-wrapper {
  position: relative;
  padding-top: 56.25%;
}

.video-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* MODAL */

#modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hidden {
  display: none;
}

.modal-content {
  background: var(--bg);
  padding: 2rem;
  max-width: 900px;
  width: 100%;
}

