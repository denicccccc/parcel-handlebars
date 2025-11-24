import { products } from "./data.js";

// Завантажуємо шаблон (fetch працює для локальних файлів у браузері)
fetch("./src/template.hbs")
  .then(response => response.text())
  .then(templateSource => {
    const template = Handlebars.compile(`
      {{#each this}}
        <li class="product-item">
          <h2 class="name">{{name}}</h2>
          <p class="price">Price: {{price}}</p>
          <p class="description">{{description}}</p>
        </li>
      {{/each}}
    `);

    const markup = template(products);

    document.querySelector(".product-list").innerHTML = markup;
  });
