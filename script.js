'use strict'

const head = document.getElementById('head');
const headListItem = document.querySelector('.list_item');
const HeadEnd = document.querySelector('.hd_end');
const usrCart = document.querySelector('.hd_end .usr_cart')
const menu = document.querySelector('.menuBtn');

// Application Architecture

class App{
    constructor(){
        HeadEnd.addEventListener('mouseover',this.#whenmouseover.bind(this));
        HeadEnd.addEventListener('mouseout',this.#whenmouseout.bind(this));
        this.#windowEvent();
    }
    #whenmouseover(e){
        e.preventDefault();
        usrCart.style.display = "block";
    }
    #whenmouseout(e){
        e.preventDefault();
        usrCart.style.display = "none";
    }
    #windowEvent(){
        window.addEventListener('resize',(e)=>{
            console.log(e.currentTarget.innerWidth)
            if (e.currentTarget.innerWidth <= 744) {
                headListItem.style.display = "none";
                menu.style.display = "block";
            }
            else if (e.currentTarget.innerWidth > 744) {
                headListItem.style.display = "flex";
                menu.style.display = "none";
            }
        });
    }
}

const app = new App();