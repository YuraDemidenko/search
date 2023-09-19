let $input = document.querySelector('.search');
let $list = document.querySelector('.list');
let characters = ['Aragorn','Gendalf', 'Legolas', 'Gimli',
    'Samwise Gemgee', 'Gollum', 'Frodo Baggins', 'Theoden',
    'Sauron', 'Saruman', 'Eowyn', 'Elrond', 'Arwen'];

let notFound = document.querySelector('.empty-msg');

let characterName = '';



$input.onfocus = function() {
    document.querySelector('.drop-container').classList.add('active');
    document.querySelector('.ls-overlay').classList.add('active');
};

$input.onblur = function() {
    document.querySelector('.drop-container').classList.remove('active');
    document.querySelector('.ls-overlay').classList.remove('active');
};

updatelist(characters);

function updatelist(list) {
    let template = ''
    for (let i = 0; i < list.length; i++) {
        template += '<li>' + list[i] + '</li>';
    }
    $list.innerHTML = template;

    if(list.length <= 0) {
        notFound.classList.add('active');
    } else {
        notFound.classList.remove('active')
    }
    
}

$input.addEventListener('input', function() {
    let query = $input.value.toLowerCase();
    let buffer = characters;

    
    buffer = buffer.filter(function (character) {
        return ~character.toLowerCase().indexOf(query)
    });

    
    updatelist(buffer);
    

});

$list.addEventListener('click', function(e){
    characterName = e.target.textContent;
    $input.value = characterName;
    let buffer = characters;

    buffer = buffer.filter(function (character) {
        return ~character.indexOf(characterName)
    });

    
    updatelist(buffer);
   
});

