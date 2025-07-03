class AboutCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const title = this.getAttribute('title')?.trim();
    const text = this.getAttribute('text')?.trim();
    const image = this.getAttribute('image')?.trim();

    // Start with the shared HTML and style
    const style = `
      <style>
        .card {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 60rem;
          min-width: 60rem;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 1s ease-in, transform 1s ease-in;
          background-image: linear-gradient(to right, #9e7fe4, #4169e1);
          border-radius: 1rem;
          padding: 1rem;
          font-family: Arial, sans-serif;
        }

        .card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 1rem;
        }

        .card h3 {
          text-align: left;
          margin: 1rem 0 0 0;
          font-size: xx-large;
          font-style: italic;
          text-shadow: 
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000;
        }

        .card p {
          text-align: left;
          font-size: xx-large;
          text-shadow: 
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000;
        }

        .content {
          display: flex;
          flex-direction: row;
          flex-grow: 1;
          gap: 1rem;
        }

        .text-container, .image-container {
          flex: 1 1 50%;
          box-sizing: border-box;
        }

        a {
          color: white;
          text-decoration: none;
        }

        @media (max-width: 786px) {
          .card {
            width: 90%;
            min-width: 0;
          }

          .card h3 {
            font-size: x-large;
          }
          .content {
            flex-direction: column;
          }
          .content p {
            text-align: left;
          }

          .card p {
            font-size: medium;
          }
        }
      </style>
    `;

    // Build up inner HTML
    let html = `<div class="card">`;
    if (title) {
      html += `<h3>${title}</h3>`;
    }

    if (text || image) {
      html += `<div class="content">`;

      if (text) {
        html += `
          <div class="text-container">
            <p>${text}</p>
          </div>
        `;
      }

      if (image) {
        html += `
          <div class="image-container">
            <img src="${image}" alt="Card image">
          </div>
        `;
      }

      html += `</div>`; // end .content
    }

    html += `</div>`; // end .card

    this.shadowRoot.innerHTML = style + html;
  }

  connectedCallback() {
  const card = this.shadowRoot.querySelector('.card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0,
      rootMargin: '0px 0px -25% 0px' 
    }
  );

  observer.observe(this);
  }
}

customElements.define('about-card', AboutCard);
