import React, { useState } from 'react';
import { Alert, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {
  Container,
  WhiteBox,
  Title,
  Form,
  Input,
  Button,
  ButtonText,
  LinkText,
  Error,
} from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const signIn = async () => {
    setLoading(false);

    const body = {
      email: email,
      password: password,
    };

    try {
      let response = await axios.post('http://127.0.0.1:8080/login', body);
      response = { status: 200 };
      setLoading(true);
      if (response.status === 200) {
        await AsyncStorage.setItem('access_token', JSON.stringify(response.data.access_token));
        navigation.navigate('Home');
      } else {
        Alert.alert('Ops', 'Verifique seu usuário e senha!!!');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      Alert.alert('Erro', 'Não foi possível logar!!!');
      navigation.navigate('Home');
    }
  };

  return (
    <Container>
      <WhiteBox>
        <Title>Login</Title>
        <Text style={{ textAlign: 'center', marginBottom: 20, color: '#555' }}>
          Escreva seu nome de usuário e senha para entrar
        </Text>
        <Form>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome de usuário"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />

          <TouchableOpacity onPress={() => Alert.alert('Ajuda', 'Esqueceu o usuário?')}>
            <LinkText>Esqueceu o usuário?</LinkText>
          </TouchableOpacity>

          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Senha"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />

          <TouchableOpacity onPress={() => Alert.alert('Ajuda', 'Esqueceu a senha?')}>
            <LinkText>Esqueceu a senha?</LinkText>
          </TouchableOpacity>

          <Button onPress={signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <ButtonText>Login</ButtonText>
            )}
          </Button>
          {!!errorMessage && <Error>{errorMessage}</Error>}
        </Form>

        <TouchableOpacity onPress={() => Alert.alert('Registrar', 'Ir para registro')}>
          <Text style={{ marginTop: 20, color: '#4f5b93', textAlign: 'center' }}>
            Não tem uma conta? <Text style={{ fontWeight: 'bold' }}>Registre uma aqui!</Text>
          </Text>
        </TouchableOpacity>
      </WhiteBox>
    </Container>
  );
}
