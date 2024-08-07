let choice;

do {
    choice = prompt('Digite um número');

} while (isNaN(Number(choice))); 


if (choice % 2 !== 0 && choice != 0) {
    alert ('É um número ímpar')
} else {
    alert ('É um número par.')
};