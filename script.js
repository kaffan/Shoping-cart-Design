const head = document.getElementById('head');
const headListItem = document.querySelector('.list_item');
const HeadEnd = document.querySelector('.hd_end');
const usrCart = document.querySelector('.hd_end .usr_cart')
const menu = document.querySelector('.menuBtn');

// On hover end of heading 
HeadEnd.addEventListener('mouseover',(e)=>
{
    e.preventDefault();
    usrCart.style.display = "block";
});
HeadEnd.addEventListener('mouseout',(e)=>
{
    e.preventDefault();
    usrCart.style.display = "none";
});


// when screen size reaches 

window.addEventListener("resize",(e)=>
{
    console.log(e.currentTarget.innerWidth)
    if(e.currentTarget.innerWidth<=743)
    {
        headListItem.style.display="none";
        menu.style.display="block";
    }
    else if(e.currentTarget.innerWidth>743)
    {
        headListItem.style.display="flex";
        menu.style.display="none";
    }
})