export const calcularPontuacao = (respostas) => {
    let total = 0;
  
    Object.keys(respostas).forEach((categoria) => {
      Object.values(respostas[categoria]).forEach((resposta) => {
        if (resposta === 's') total += 1;
      });
    });
  
    return { total };
  };
  
  export const gerarClassificacao = (pontuacao) => {
    if (pontuacao.total > 30) return "Alto risco de TDAH";
    if (pontuacao.total > 15) return "Moderado risco de TDAH";
    return "Baixo risco de TDAH";
  };
  