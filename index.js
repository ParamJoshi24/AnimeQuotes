const url = "https://api.animechan.io/v1";

function debounce(func, delay) {
  let timeoutId;
  
  return function (...args) {
    clearTimeout(timeoutId);
    const name = document.getElementById("search").value.trim();
    if(name){
      document.getElementById("quotes").innerText = 'Searching...'
    }else{
      document.getElementById("quotes").innerText = ''
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

async function handleSearch() {
  const searchInput = document.getElementById("search");
  const name = searchInput.value.trim();
  document.getElementById("anime-name").innerText = name;
  
  if (!name) return;
  
  try {
    const response = await fetch(
      `${url}/quotes/?anime=${encodeURIComponent(name)}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // document.getElementById("main-div").classList.remove("d-none");
    document.getElementById("quotes").innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Search failed:", error);
    document.getElementById("anime-name").innerText = 'Sorry!!';
    document.getElementById("quotes").innerText = `No quotes found for ${name}`;
  }
}

document
  .getElementById("search")
  .addEventListener("input", debounce(handleSearch, 400));