import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 0 20px;
`;

export const WhiteBox = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
`;

export const TextInformation = styled.Text`
  font-size: 16px;
  color: #555555;
  margin-bottom: 20px;
  text-align: center;
`;

export const Error = styled.Text`
  color: #e37a7a;
  text-align: center;
  margin-top: 10px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  height: 44px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 0 15px;
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
  height: 44px;
  background-color: #4f5b93;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;

export const LinkText = styled.Text`
  font-size: 14px;
  color: #4f5b93;
  text-decoration: underline;
  text-align: center;
  margin-top: 10px;
`;
