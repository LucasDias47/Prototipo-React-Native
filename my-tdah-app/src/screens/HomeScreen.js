import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../styles/GlobalStyles';

const HomeScreen = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const navigation = useNavigation();

  const iniciarQuestionario = () => {
    if (nome && data) {
      navigation.navigate('Questionnaire', { nome, data });
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.label}>Nome do Aluno:</Text>
      <TextInput
        style={GlobalStyles.input}
        value={nome}
        onChangeText={setNome}
      />
      <Text style={GlobalStyles.label}>Data (dd/mm/aa):</Text>
      <TextInput
        style={GlobalStyles.input}
        value={data}
        onChangeText={setData}
        keyboardType="numeric"
      />
      <Button title="Iniciar Questionário" onPress={iniciarQuestionario} />
    </View>
  );
};

export default HomeScreen;
