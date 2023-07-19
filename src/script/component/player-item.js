class PlayerItem extends HTMLElement {
  constructor() {
    super();
  }

  set player(player) {
    this._player = player;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .fan-art-player {
          width: 100%;
          max-height: 100vh;
          object-fit: contain;
          object-position: center;
        }
        p {
          font-size: 28px;
        }
        @media screen and (max-width: 992px) {
          .fan-art-player {
            max-height: 80vh;
          }
          h3{
            font-size: 26px;
          }
          p {
            font-size: 25px;
          }
        }
        @media screen and (max-width: 768px) {
          .fan-art-player {
            max-height: 70vh;
          }
          h3{
            font-size: 23px
          }
          p {
            font-size: 20px;
          }
        }
        @media screen and (max-width: 576px) {
          .fan-art-player {
            max-height: 50vh;
          }
          h3 {
            font-size: 20px;
          }
          p {
            font-size: 17px
          }
        }
      </style>
      <div class="container-fluid bg-dark pb-5">
        <div class="container bg-light">
          <div class="row">
            <div class="col-10 offset-1">
              <img class="fan-art-player pt-5 pb-5" src="${this._player.strThumb}" alt="Fan Art">
              <div class="row">
                <div class="col-5">
                  <h3 class="fw-bold">Name : ${this._player.strPlayer}</h3>
                  <h3 class="fw-bold">Nationality : ${this._player.strNationality}</h3>
                  <h3 class="fw-bold">Club : ${this._player.strTeam}</h3>
                </div>
                <div class="col-7">
                  <h3 class="fw-bold">Birthplace : ${this._player.strBirthLocation}</h3>
                  <h3 class="fw-bold">Date of Birth : ${this._player.dateBorn}</h3>
                </div>
              </div>
              <p class="text-wrap pt-5" style="text-align:justify;">Description:<br>${this._player.strDescriptionEN}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('player-item', PlayerItem);