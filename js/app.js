document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript loaded');

  const form = document.querySelector('#unesco-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleFormSubmit = function(event){
  const newListSite = document.createElement('div');
  newListSite.classList.add('list-item');

  const newListSite1 = document.createElement('h2');
  newListSite1.textContent = `${event.target.site.value}`;

  const newListSite2 = document.createElement('h3');
  newListSite2.textContent = `${event.target.country.value}`;

  const newListSite3 = document.createElement('h4');
  newListSite3.textContent = `${event.target.continent.value}`; 

  const newListSite4 = document.createElement('h5');
  newListSite4.innerText = `${event.target.category.value}`;

  const unescoList = document.querySelector('#unesco-list');

  newListSite.appendChild(newListSite1);
  newListSite.appendChild(newListSite2);
  newListSite.appendChild(newListSite3);
  newListSite.appendChild(newListSite4);
  
  unescoList.append(newListSite);
  
  this.reset();
  event.preventDefault();
};

const handleDeleteAllClick = function (event) {
  const unescoList = document.querySelector('#unesco-list');
  unescoList.innerHTML = '';
}