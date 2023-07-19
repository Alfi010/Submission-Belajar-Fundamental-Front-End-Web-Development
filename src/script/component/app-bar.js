class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
    $('#searchButton').click(() => {
      $('search-bar').find('#searching')[0].scrollIntoView({ behavior: 'smooth' });
    });
  }
  

  render() {
    this.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap');
      body {
        font-family: 'Quicksand', sans-serif;
      }
      .navbar {
        height: 60px;
      }
      .navbar-brand {
        font-size: 25px;
        font-weight: bold;
        font-style: italic;
        color: white;
      }
      h1.pg {
        font-size: 50pt;
        font-weight: bold;
      }
      p.p {
        font-size: 35pt;
        text-shadow: -5px -5px 7px #dc3545;
      }
      #searchButton {
        font-size: 20pt;
        padding: 20px 50px;
        font-weight: bold;
      }
      .btn:hover {
        background-color: #dc3545;
        color: #f8f9fa;
        font-weight: bold;
      }
      @media screen and (max-width: 992px) {
        h1.pg {
          font-size: 45pt;
        }
        p.p {
          font-size: 32pt;
        }
        #searchButton{
          font-size: 18pt;
        }
      }
      @media screen and (max-width: 768px) {
        h1.pg {
          font-size: 35pt;
        }
        p.p {
          font-size: 25pt;
        }
        #searchButton{
          font-size: 13pt;
        }
      }
      @media screen and (max-width: 576px) {
        h1.pg {
          font-size: 25pt;
        }
        p.p {
          font-size: 18pt;
        }
        #searchButton{
          font-size: 10pt;
        }
      }
    </style>
    <nav class="navbar bg-danger d-flex justify-content-start">
      <p class="navbar-brand px-4"> <i class="bi bi-radioactive"> </i>AASport</p>
    </nav>
    <div id="intro">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="pg text-center text-light pt-lg-5 pt-md-3 py-sm-2">Find a Football Athletes
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p class="p text-center text-light pt-lg-4 pt-md-3 py-sm-1" >Find
                your favorite football player and know everything!</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="d-flex justify-content-center py-5">
                <a href="#searching" id="searchButton" class="btn btn-light rounded-5">Find Players!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);