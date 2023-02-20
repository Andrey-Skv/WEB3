const yourName = prompt('Как вас зовут?');
greeting(yourName);

function greeting(name) {
    alert(`Приветствую тебя, ${yourName}!`)
}