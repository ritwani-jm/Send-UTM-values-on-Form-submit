(function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const $form = document.querySelector('.details-form'); 

    $form.addEventListener('submit', () => { 
        for(const [key, val] of urlParams.entries()) {
            createInput(key, val, $form); 
        }
    });

    function createInput(key, val, parent) {
        const el = document.createElement('input');
        el.setAttribute('type','hidden'); 
        el.name = key; 
        el.value = val;
        parent?.append(el);
    } 
})(); 