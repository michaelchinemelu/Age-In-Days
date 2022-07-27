function daysOld() {
    let yearOfBirth = prompt('What is your year of birth: ')
    currentYear= new Date().getFullYear();
    let age = (currentYear - yearOfBirth) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + age + 'days');
    h1.setAttribute('id', 'daysOld');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
//daysOld(prompt('What is your year of Birth: '),  new Date().getFullYear())


function reset() {
    document.getElementById('daysOld').remove();
}