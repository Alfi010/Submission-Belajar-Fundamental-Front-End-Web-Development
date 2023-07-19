import './player-item.js';

class PlayerList extends HTMLElement {
  constructor() {
    super();
  }

  set players(players) {
    this._players = players;
    this.render();
  }

  renderError(message) {
    alert(message);
  }

  render() {
    this.innerHTML = '';
    $.each(this._players, (index, player) => {
      const playerItemElement = $('<player-item></player-item>').get(0);
      playerItemElement.player = player;
      $(this).append(playerItemElement);
    });
  }
}

customElements.define('player-list', PlayerList);