export default function Nav({ data, setData }) {
  function handleClick() {
    var author = document.getElementById("authorName").value;
    fetch(`https://openlibrary.org/search/authors.json?q=${author}`)
      .then((res) => res.json())
      .then((r) => setData(r))
      .catch(console.error);
  }
  return (
    <div>
      <header id="header">WELCOME</header>
      <h1>How many author?</h1>
      <p>Enter the name of an author, we'll tell you how many there are!</p>
      <input type="text" id="authorName" name="name" size="10" />
      <button onClick={handleClick}> Check </button>
    </div>
  );
}
