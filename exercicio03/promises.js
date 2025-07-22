// Simulando uma Promise com setTimeout
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = true;
      if (sucesso) {
        resolve("Dados recebidos com sucesso!");
      } else {
        reject("Erro ao buscar dados.");
      }
    }, 2000);
  });
}

// Versão com then/catch
buscarDados()
  .then(dados => console.log("then:", dados))
  .catch(erro => console.error("then erro:", erro));

// Versão com async/await
async function executarBusca() {
  try {
    const resultado = await buscarDados();
    console.log("await:", resultado);
  } catch (erro) {
    console.error("await erro:", erro);
  }
}

executarBusca();
