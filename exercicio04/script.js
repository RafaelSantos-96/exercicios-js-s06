// Salvar nome no localStorage
let nome = localStorage.getItem("nomeUsuario");

if (!nome) {
  nome = prompt("Digite seu nome:");
  localStorage.setItem("nomeUsuario", nome);
}

document.getElementById("usuario").textContent = nome;

// Relógio com setInterval
function atualizarRelogio() {
  const agora = new Date();
  document.getElementById("relogio").textContent = agora.toLocaleTimeString();
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // já atualiza imediatamente

// Mensagem de boas-vindas com setTimeout
setTimeout(() => {
  document.getElementById("mensagem").textContent = `Olá, ${nome}! Que bom te ver por aqui.`;
}, 3000);
