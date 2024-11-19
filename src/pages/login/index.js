import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {
    Container,
    Error,
    Form,
    Input,
    Button,
    ButtonText,
    WhiteBox,
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
      response = {status: 200};
      setLoading(true);
      if(response.status === 200){
        await AsyncStorage.setItem('access_token', JSON.stringify(response.data.access_token));
        navigation.navigete('Home');
      } else {
        Alert.alert('Ops', 'Verifique seu usuário e senha!!!');
      }
    } catch (error){
      setLoading(false);
      console.log(error);
      Alert.alert('Erro', 'Não foi possível logar!!!');
      navigation.navigete('Home');
    }
  };

  return (
    <Container>
      <WhiteBox>
        <Form>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu emails"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={email}
            onChangeText={email => setEmail(email)}
          />

          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite sua senha"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            secureTextEntry={true}
            value={password}
            onChangeText={password => setPassword(password)}
          />

          <Button onPress={signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <ButtonText>Entrar</ButtonText>
            )}
          </Button>
          {!!errorMessage && <Error>{errorMessage}</Error>}
        </Form>
      </WhiteBox>
    </Container>
  );
}


// import React from 'react';
// import {Text, TouchableOpacity} from 'react-native';
// import {UserService} from '_services';
// import {CommonActions} from '@react-navigation/native';

// const Login = ({navigation}) => {
//   const login = () => {
//     UserService.login({email: 'teste', token: 'teste'});
//     //usa o reset abaixo pra ele não conseguir voltar pra tela de login após logar
//     navigation.dispatch(
//       CommonActions.reset({
//         index: 1,
//         routes: [{name: 'BottomTabNavigator'}],
//       }),
//     );
//   };
//   return (
//     <>
//       <Text>Tela de Login</Text>
//       <TouchableOpacity onPress={login}>
//         <Text>Clique para entrar</Text>
//       </TouchableOpacity>
//     </>
//   );
// };

// export default Login;
