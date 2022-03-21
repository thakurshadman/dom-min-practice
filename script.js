const body = document.body;

const p = document.createElement('p');
p.textContent = "Hey i'm red!";
p.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = "Hey i'm a blue h3";
h3.style.color = 'blue';

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.borderColor = 'black';
div.style.borderWidth = '1rem';
div.style.borderStyle = 'solid';

const h1 = document.createElement('h1');
h1.textContent = 'I am in a div!'

const meToo = document.createElement('p');
meToo.textContent = "ME TOO!"
 
div.appendChild(h1);
div.appendChild(meToo);
body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);

// ------------------------------------------------------------------------------

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    addEventListener('click', ()=> {
        button.style.backgroundColor = 'orange';
    });
    addEventListener('keypress', ()=> {
        button.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    });
    addEventListener('keydown', ()=> {
        button.style.backgroundColor = 'red'
    });

});