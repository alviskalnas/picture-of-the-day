document.addEventListener("DOMContentLoaded", async function() {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=pD9O2D8zLGhCMrEladF4veyAvNtOhdIgweodPaDl"
  );
  const data = await response.json();
  document.querySelector("#title").innerHTML = data.title;
  document.querySelector("#picture").src = data.url;
  document.querySelector("#picture").alt = data.title;
  document.querySelector("#explanation").innerHTML = data.explanation;
  document.querySelector("#apod").style.display = "flex";
});