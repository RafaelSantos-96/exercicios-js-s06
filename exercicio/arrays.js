// 1. Usando map() para dobrar os valores
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
console.log("Dobro:", dobrados);

// 2. Usando filter() para pegar apenas pares
const pares = numeros.filter(n => n % 2 === 0);
console.log("Pares:", pares);

// 3. Usando reduce() para somar todos os valores
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log("Soma:", soma);

// Exibindo os dados no HTML
document.getElementById("original").textContent = JSON.stringify(numeros, null, 2);
document.getElementById("map").textContent = JSON.stringify(dobrados, null, 2);
document.getElementById("filter").textContent = JSON.stringify(pares, null, 2);
document.getElementById("reduce").textContent = soma.toString();

// JSON.stringify(..., null, 2) → formata o array com identação, deixando mais legível.

// toString() → para garantir que o número da soma apareça corretamente no HTML.  
