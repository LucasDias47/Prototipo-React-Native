import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { questoes } from '../utils/QuestionnaireData';
import { useNavigation, useRoute } from '@react-navigation/native';

const QuestionnaireScreen = () => {
  const [respostas, setRespostas] = useState({});
  const navigation = useNavigation();
  const route = useRoute();
  const { nome, data } = route.params;

  const handleAnswer = (categoria, perguntaIndex, resposta) => {
    setRespostas((prev) => ({
      ...prev,
      [categoria]: {
        ...prev[categoria],
        [perguntaIndex]: resposta,
      },
    }));
  };

  const finalizarQuestionario = () => {
    navigation.navigate('Report', { respostas, nome, data });
  };

  return (
    <ScrollView style={GlobalStyles.container}>
      {Object.keys(questoes).map((categoria) => (
        <View key={categoria}>
          <Text style={GlobalStyles.categoryTitle}>{categoria}</Text>
          {questoes[categoria].map((pergunta, index) => (
            <View key={index} style={GlobalStyles.questionContainer}>
              <Text style={GlobalStyles.questionText}>{pergunta}</Text>
              <View style={GlobalStyles.answerButtons}>
                <Button
                  title="Sim"
                  onPress={() => handleAnswer(categoria, index, 's')}
                />
                <Button
                  title="Não"
                  onPress={() => handleAnswer(categoria, index, 'n')}
                />
              </View>
            </View>
          ))}
        </View>
      ))}
      <Button title="Finalizar Questionário" onPress={finalizarQuestionario} />
    </ScrollView>
  );
};

export default QuestionnaireScreen;
