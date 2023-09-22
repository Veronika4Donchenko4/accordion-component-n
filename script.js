 // write your JavaScript here
let accordionItemElements = document.querySelectorAll('.accordion-item');
accordionItemElements.forEach(accordion => {
    accordion.querySelector('.accordion').addEventListener('click', (event) => {
        console.log(event.target)
    })
});