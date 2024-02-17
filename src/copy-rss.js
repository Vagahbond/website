document.querySelector("#copy-rss-link-button").onclick = (e) => {
  const initialValue = e.target.innerHTML;
  navigator.clipboard.writeText("https://blog.vagahbond.com/vagahbond/feed/");
  e.target.innerHTML = "Copied !";
  setTimeout(() => {
    e.target.innerHTML = initialValue;
  }, 2000);
};
