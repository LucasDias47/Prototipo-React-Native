import React from 'react';
import { View, Text, Button } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { calcularPontuacao, gerarClassificacao } from '../utils/ReportUtils';
import { useRoute, useNavigation } from '@react-navigation/native';

const ReportScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { respostas, nome, data } = route.params;

  const pontuacao = calcularPontuacao(respostas);
  const classificacao = gerarClassificacao(pontuacao);

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Relatório de Análise de TDAH</Text>
      <Text>Nome do Aluno: {nome}</Text>
      <Text>Data: {data}</Text>
      <Text>Pontuação Total: {pontuacao.total}</Text>
      <Text>Classificação: {classificacao}</Text>
      <Button
        title="Voltar ao Início"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ReportScreen;
