let choice = prompt('Digite um número ou uma letra');

if (typeof choice !== 'string') {
    alert('Isto é um número');
} else {
    alert('Isto é uma string');
}
