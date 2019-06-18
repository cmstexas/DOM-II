// Your code goes here


//nav//

    //hover nav turns color pink//

const nav = document.querySelectorAll('a');
const navHover = function(e){
    e.target.style.color = 'pink';
    e.preventDefault();
}


    //stickynav//

const navHoverNot = function(e){
    e.target.style.color = '';
}
nav.forEach (item => {item.addEventListener('mouseover', navHover)});
nav.forEach (item => {item.addEventListener('mouseleave', navHoverNot)});
   
const head = document.querySelector('.logo-heading');
const headingZoom = function(e){
    e.target.style.fontSize = '5rem';
}
head.addEventListener('click', headingZoom);

//heading//


    // logo mouseover
    const logoHeadHover = document.querySelector('.nav-container .logo-heading');
    logoHeadHover.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '6rem';
        event.target.style.cursor = 'pointer';
        event.target.style.transitionDuration = '.3s';
        event.target.style.color = 'purple';
      
       });
    
       logoHeadHover.addEventListener('mouseleave', function (event) {
        event.target.style.fontSize = '';
        event.target.style.color = 'black';
      });




//buttons//

      //button style actions on click//

    const buttonClick = document.querySelectorAll('.btn');

    buttonClick.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.target.style.backgroundColor = 'seagreen';
            event.target.style.color = 'gold';
            event.stopPropagation;
        });
    })



//images//


    // disapearing mouse pointer when hovering over image

    const destinationImg = document.querySelector('#destimage');
    destinationImg.addEventListener('mouseenter', (event) => {
        event.target.style.cursor = 'none';
        event.stopPropagation;
    });
 

//Scrolling wheel over paragraph//

const textContentPara = document.querySelector('#expeditionp');

textContentPara.addEventListener('wheel', (event) => {
    event.target.style.backgroundColor = 'seagreen';
    event.stopPropagation;
});


//scroll counter alert//

let counter = 0;
window.addEventListener("scroll", function (event) {
  console.log("scroll counter!");
  counter++;
  if (counter > 50) {
    alert("Email us at hello@funbus.com for 50% off your next trip!");
    counter = 0;
  }
})

//footer//

         //double click to change color of footer//

         const footerItems = document.querySelectorAll('.footer');
        footerItems.forEach(event => {
            event.addEventListener('dblclick', (event) => {
                event.target.style.color = 'white'; 
                event.target.style.backgroundColor = 'dodgerblue'; 
            });
        });


 // Loading Event 
window.addEventListener("load", function(event) {
    console.log("Working Great!");
  });  



//Resize browser Event

window.addEventListener("resize", function(event) {
    alert("iiiiiity bitty living space");
  });



//Propogation//

// Selectors
const titleContent = document.querySelector('.letsgoheader');

// mouseover/mouseleave: text getting bigger then shrinking
titleContent.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '8rem';
    event.stopPropagation
});
titleContent.addEventListener('mouseleave', (event) => {
    event.target.style.fontSize = '6rem';
    event.stopPropagation;
});


//prevent default - stop navigation from items from refreshing the page//

const navPrevent = document.querySelector('nav');
navPrevent.addEventListener('click', (event) => {
    event.preventDefault();
    
})
