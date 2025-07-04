class ReferenceCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const title = this.getAttribute('title') || '';
    const text = this.getAttribute('text') || '';
    const image = this.getAttribute('image') || '';
    
    let pageLink = this.getAttribute('pageLink');

    //Als er geen pageLink is gegeven, dan maakt hij er een mail knop van
    if (!pageLink) {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      const dateStr = `${day}-${month}-${year}`;

      const subject = encodeURIComponent("Nieuw contact via website");
      const body = encodeURIComponent(`Datum: ${dateStr}\nNaam: ---\nGelegenheid: ---`);

      pageLink = `mailto:seegersruben@gmail.com?subject=${subject}&body=${body}`;
    }

    this.shadowRoot.innerHTML = `
      <style>
        .card {
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 2s ease-in, transform 2s ease-in;
            background-image: linear-gradient(to right, 	#9e7fe4, #4169e1);
            border-radius: 1rem;
            padding: 1rem;
            max-width: 400px;
            height: 31.25rem;
            font-family: Arial, sans-serif;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            margin: 0 2rem;
        }

        .card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .card:hover {
            background-image: linear-gradient(to right, #1abc9c, #7873f5);
        }

        .card img {
          width: 100%;
          height: 25rem;
          object-fit: cover;
          border-radius: 1rem;
          display: block;
        }


        .card h3 {
            text-align: center;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-size: x-large;
            text-shadow: 
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px  1px 0 #000,
            1px  1px 0 #000;
        }
        
        .card p {
            text-align: center;
            font-size: large;
            text-shadow: 
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px  1px 0 #000,
            1px  1px 0 #000;
        }
        
        a {
            color: white;
            text-decoration: none;
        }

        @media (max-width: 915px){
            .card {
                margin: 1rem 0;
            }
        }

      </style>
      <div class="card">
        <a href="${pageLink}">
            <h3>${title}</h3>
            <p>${text}</p>
            ${image ? `<img src="${image}" alt="Card image">` : ''}
        </a>
      </div>
    `;
  }

  connectedCallback(){
    setTimeout(() => {
      const card = this.shadowRoot.querySelector('.card');
      card.classList.add('visible');
    }, 100);
  }
}

customElements.define('reference-card', ReferenceCard);
