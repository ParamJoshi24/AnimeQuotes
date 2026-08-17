# Debounced Anime Quote Search

A debounced anime-quote search app that avoids firing expensive API calls on every keystroke by delaying requests until the user stops typing.

**[Live Demo](https://anime-quotes-cyan-chi.vercel.app/)** | **[GitHub Repo](https://github.com/ParamJoshi24/AnimeQuotes)**

---

### What It Demonstrates
* **JavaScript Closures & State Persistence:** Implementing custom debounce logic from scratch to maintain a persistent timer reference across keystrokes without polluting the global scope.
* **Network & Rate-Limit Optimization:** Reducing unnecessary fetch traffic to stay well within external API rate limits[cite: 1].
* **Resilient Async Error Handling:** Gracefully managing fetch promises, failed network calls, and empty response states[cite: 1].

---

### Tech Stack
* **JavaScript (ES6+)** – Native asynchronous fetch and closure-based debounce implementation[cite: 1]
* **Bootstrap 5** – Minimal UI layout and responsive input styling[cite: 1]
* **AnimeChan API** – RESTful endpoint for fetching character quotes by query[cite: 1]

---

### How the Debounce Closure Works
Debouncing relies on a higher-order function that captures a `timer` variable in its lexical scope (a closure)[cite: 1]. Every time the user types, any existing timer is cleared using `clearTimeout()` and a new one is set[cite: 1]. The target API function only executes once the user pauses long enough for the timer delay to fully elapse[cite: 1].

---

### Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ParamJoshi24/AnimeQuotes
   cd AnimeQuotes
2. **Open the application:**
   Simply open index.html directly in any web browser[cite: 1].
   Or use a local development server such as VS Code's Live Server extension.
   
### Next Steps & Planned Improvements
[ ] Format API responses into styled quote cards instead of raw text displays[cite: 1].
[ ] Add an animated loading spinner and active debounce countdown indicator.
[ ] Implement an in-memory cache to prevent re-fetching previously queried terms.
