import './app-bar.js';
class SearchBar extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return $('#searchElement').val();
  }

  render() {
    this.innerHTML = `
      <style>
        h1 {
          font-size: 30pt;
        }
        h1.big {
          font-size: 40pt;
          font-weight: bold;
        }
        
        @media screen and (max-width: 992px) {
          h1 { 
            font-size: 27pt;
          }
          h1.big {
            font-size: 35pt;
          }
        }
      
        @media screen and (max-width: 768px) {
          h1 { 
            font-size: 25pt;
           }
           h1.big {
            font-size: 32pt;
           }
        }
      
        @media screen and (max-width: 576px) {
          h1 {
            font-size: 22pt;
          }
          h1.big {
            font-size: 30pt;
          }
        }
      </style>
      <div class="container-fluid bg-dark">
        <div class="container bg-light pt-5 text-center">
          <div class="row">
            <div class="col-12">
              <h1>Please Find Your Favorite Player</h1>
              <h1 class="big">Now!</h1>
            </div>
          </div>
          <div id="searching" class="row">
            <div class="col-8 offset-2 pt-3">
              <div class="input-group mb-3">
                <input type="search" class="form-control" placeholder="Enter your Player Name ..." id="searchElement">
                <button id="searchButtonElement" class="btn btn-danger" type="submit"><i class="bi bi-search"></i> Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    $('#searchButtonElement').on('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);