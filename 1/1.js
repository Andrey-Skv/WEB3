const degrees = parseInt(prompt('Введите температуру в градусах Цельсия, для перевода в градусы Фаренгейта'));
alert(`Цельсий: ${degrees}, Фаренгейт: ${convert(degrees)}`)


function convert(degrees) {
    const tempF = Math.round((9/5 * degrees + 32) * 100) / 100;
    return tempF
}