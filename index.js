(() => {
  const popUpContainer = document.getElementById("pop-up-container");
  const getCatFactsBtn = document.getElementById("get-cat-facts-btn");
  const closeButton = document.getElementById("close-btn");

  setTimeout(() => { popUpContainer.classList.add('show') }, 3000);

  getCatFactsBtn.addEventListener('click', () => getCatFacts());

  closeButton.addEventListener('click', () => {
    popUpContainer.classList.add('hide');
    setTimeout(() => { popUpContainer.style.display = 'none' }, 2000)
  });


  const getCatFacts = async () => {
    const factList = document.getElementById("cat-facts-list");
    try {
      const { data } = await axios.get("https://cat-fact.herokuapp.com/facts");
      data.forEach(catFact => {
        let li = `<li class="cat-fact">${catFact.text}</li>`;
        factList.innerHTML += li;
      })
    } catch (error) {
      console.error(error);
    }
  };
})();