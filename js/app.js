document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleButtonClick);
});

const handleFormSubmit = function(event){
  event.preventDefault();

  const newReadingListItem = document.createElement("li");
  
  const newTitle = document.createElement('h3');
  newTitle.textContent = event.target.title.value;
  newTitle.classList.add('title-item');
  newReadingListItem.appendChild(newTitle);

  const newAuthor = document.createElement('h4');
  newAuthor.textContent = event.target.author.value;
  newAuthor.classList.add('author-item');
  newReadingListItem.appendChild(newAuthor);

  const newCategory = document.createElement('p');
  newCategory.textContent = event.target.category.value;
  newCategory.classList.add('category-item');
  newReadingListItem.appendChild(newCategory);

  const readingList = document.querySelector("#reading-list");
  readingList.appendChild(newReadingListItem);

  event.target.reset();
}

const handleButtonClick = function(){
  let readingList = document.getElementById("reading-list");
  if (readingList.parentNode) {
  readingList.parentNode.removeChild(readingList);
}
};



