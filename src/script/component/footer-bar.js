class FooterBar extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar bg-danger d-flex justify-content-center">
        <p class="navbar-brand"> <i class="bi bi-radioactive"> </i>AASport - <i class="bi bi-c-circle"></i> 2023</p>
      </nav>
        `;
    }
}

customElements.define('footer-bar', FooterBar);