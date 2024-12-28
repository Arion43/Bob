const searchInput = document.getElementById("search");
const dictionaryList = document.getElementById("dictionary-list");
const descriptionBox = document.getElementById("description-box");

// Обработка клика по слову
dictionaryList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const description = e.target.getAttribute("data-description");
    descriptionBox.innerHTML = `<p>${description}</p>`;
  }
});

// Поиск слов
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const items = dictionaryList.querySelectorAll("li");

  items.forEach((item) => {
    const word = item.textContent.toLowerCase();
    if (word.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// Проверка, есть ли данные пользователя в localStorage
if (!localStorage.getItem('username')) {
  window.location.href = 'index.html';
}
