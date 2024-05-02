// inicio da barra de navegação

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
}
  
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
  mobileNavbar.init();

// fim da barra de navegação

//Funcionalidade de adicionar e remover itens

/*const btnAdd = document.querySelector('.addItem')
const btnRemove = document.querySelector('.removeItem')*/
let contador = [0,0,0,0]

function removeItem (col) {
  const amountItem = document.querySelectorAll('.amountItem')[col]
  console.log(amountItem)
  if(contador[col] <= 0){
    contador[col] = 0
  }else{
    contador[col] -= 1
  }
  amountItem.innerText = `${contador[col]}`
}

function addItem (col) {
  const amountItem = document.querySelectorAll('.amountItem')[col] 
  console.log("deu certo")
    contador[col] += 1
  amountItem.innerText = `${contador[col]}` 

}



