let choice;

do {
    choice = prompt('Digite um número');

} while (isNaN(Number(choice))); 


if (choice % 2 === 0 && choice === 0) {
    alert ('Você digitou um número par')
} else {
    alert ('Você escolheu um número ímpar.')
};
