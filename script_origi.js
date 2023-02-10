const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);

// const product = urlParams.get('product')
// console.log(product);

// console.log(urlParams.has('product'));

// console.log(urlParams.getAll('size'));
// [ 'm' ]

//Programmatically add a second size parameter.
// urlParams.append('size', 'xl');

// console.log(urlParams.getAll('size'));

// const
//   keys = urlParams.keys(),
//   values = urlParams.values(),
//   entries = urlParams.entries();

// for (const key of keys) console.log(key);
// // product, color, newuser, size

// for (const value of values) console.log(value);
// shirt, blue, , m

const $form = document.querySelectorAll('.details-form');

for(const [key, val] of urlParams.entries()) {
    console.log(`${entry[0]}: ${entry[1]}`);
    createInput(key, val, $form); 
}

function createInput(key, val, parent) {
    const el = document.createElement('input');
    el.setAttribute('type','hidden'); 
    el.name = key; 
    el.value = val;
    parent.append(el);
} 