import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {UserService} from './../../services';

const Perfil = ({navigation}) => {
  const logout = () => {
    UserService.logout();
    //usa o reset abaixo pra ele não conseguir voltar pra tela após deslogar
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Login'}],
      }),
    );
  };
  return (
    <>
      <Text>Tela de configurações</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </>
  );
};

export default Perfil;
