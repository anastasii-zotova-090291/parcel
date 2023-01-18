let count = 0
let reviews = [
    {
        id: count++,
        rating: "/images/star.png",
        text: "Очень интерьерное место! Красиво и вкусно. Отличное место в центре города для бранча с друзьями!Большой выбор десертов, что разбегаются глаза, хочется попробовать все! ))очень вкусный шоколадный чизкейк с грецкими орехами!Есть классная детская комната! Однозначно рекомендую всем и приду еще раз!",
        name: "Аделина",
        date: "18-10-2022",
        image: "/images/woman-smile.jpg"
    },
    {
        id: count++,
        rating: "/images/star.png",
        text: "Все было очень хорошо и вкусно! Еда интересная и нестандартная, поэтому хочется попробовать все! Уютное место, хороший сервис, неплохая винная карта и очень вкусно! Спасибо!",
        name: "Максим Артурович",
        date: "04-11-2022",
        image: "/images/wolf.jpg"
    },
    {
        id: count++,
        rating: "/images/star.png",
        text: "Большой выбор завтраков! Безглютеновые десерты, без сахара - это прекрасно. Были семьей из 5 человек и всем все понравилось. Обслуживание ненавязчивое и легкое, есть детская комната. Сочетание вкуса, десертов, атмосферы и красоты, а также приятный бонус - кофе.",
        name: "Валерия",
        date: "28-12-2022",
        image: "/images/makeup.jpg"
    },
    {
        id: count++,
        rating: "/images/star.png",
        text: "Отличное и уютное место, приятно провели время с друзьями. Было вкусно, порадовало качество блюд и сервис выше всех похвал. Обслуживание быстрое.",
        name: "Андрей",
        date: "04-01-2023",
        image: "images/man.jpg"
    }
];


let i = 0;
const container = document.getElementById("reviewCafe")

function renderReview(index) {
  function next() {
    console.log('next');
    i = i + 1;
    if (i > reviews.length - 1) {
      i = 0;
    }
    renderReview(i);
  }
  function prev() {
    console.log('prev');
    i = i - 1;
    if (i < 0) {
      i = reviews.length - 1;
    }
    renderReview(i);
  }
  function getRandomIndex() {
    const r = Math.random() * (reviews.length - 1);
    return Math.round(r);
  }
  function random() {
    console.log('surprice');
    do {
      t = getRandomIndex();  
      console.log(t);
    }
    while (i == t);

    i = t;
    renderReview(i);
  }
    container.innerHTML = ""
    const review = reviews[index];
      container.innerHTML += `
          <div class="reviews">
            <div class="reviews_container_list">
              <div class="reviews_block">
                <img src="${review.image}"class="img-review"/>
                <p class=number-rating><img src="${review.rating}" alt="5" class="rating-review"/>5</p>
                <h3 class="name-review">${review.name}</h3>
                <p class="review-text">${review.text}</p>
              
            
                <div class="buttons">
                  <button id='back-press-review' class="buttons_reviews"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><title/><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" class="svg-color"/></svg></button>
                  <button id='forward-press-review' class="buttons_reviews"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><title/><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg></button>
                </div>
                <div class="btn_surprise">
                  <button id="surprise-me" class="buttons_surprise_me">Случайный отзыв</button>
                </div>
              </div>
            </div>
          </div>
          `
    document.getElementById('forward-press-review').removeEventListener('click', next);
    document.getElementById('forward-press-review').addEventListener('click', next);

    document.getElementById('back-press-review').removeEventListener('click', prev);
    document.getElementById('back-press-review').addEventListener('click', prev);

    document.getElementById('surprise-me').removeEventListener('click', random);
    document.getElementById('surprise-me').addEventListener('click', random);
}
renderReview(i);
