export const cardVideo = (data) => `
    <a href="/video.html"
    class="cover">
    <img class="image"
      src=${data.cover}>
      <time class="time">${data.time}</time>
  </a>
  <div class="container flex">
    <div class="user-avatar">
      <img class="image" src=${data.avatar}>
    </div>
    <div class="content">
      <h3 class="title">
        <a href="/video.html">#EDpodcast - 5: ¿Qué es el testing de software y cómo hacerlo? 🐞</a>
      </h3>
      <a href="#">EDteam</a>
      <p class="video-information">
        <span class="views">${data.views} visualizaciones</span>
        <span>Hace 2 horas</span>
      </p>
    </div>
  </div>
  `
