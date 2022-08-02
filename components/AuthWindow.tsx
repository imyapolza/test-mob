import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchData from '../utils/fetchData';
import { fakeData } from '../constants/fakeData';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AuthWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Auth = styled.View`
  width: 290px;
  height: 400px;
  box-sizing: border-box;
  margin-top: 10px;
  border: 5px solid #27569c;
`;

const Title = styled.Text`
width: 212px;
height: 45px;
margin-top: 19px;
margin-left: 35px;
margin-bottom: 15px;
color: #27569c;
font-family: "Inter";
font-style: normal;
font-weight: 800;
font-size: 24px;
display: flex;
justify-content: center;
align-items: center;
}
`;

const TextFieldLogin = styled.TextInput`
  box-sizing: border-box;
  width: 219px;
  background: #d9d9d9;
  border: 4px solid #27569c;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 14px;
  padding: 0 10px;
`;

const TextFieldPassword = styled.TextInput`
  box-sizing: border-box;
  width: 219px;
  background: #d9d9d9;
  border: 4px solid #27569c;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  padding: 0 10px;
`;

const Label = styled.Text`
display: flex;
font-family: "Inter";
font-style: normal;
font-weight: 800;
font-size: 24px;
margin-bottom: 13px;
}
`;

const Row = styled.View`
display: flex;
margin-left: 35px;
font-family: "Inter";
font-style: normal;
font-weight: 800;
font-size: 24px;
}
`;

const ErrorMessage = styled.Text`
    color: red;
    margin-top: 5px;
}
`;

const AuthWindow = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [validationErr, setValidationErr] = useState<string>('');

  useEffect(() => {
    try {
      fetchData('/register', fakeData);
    } catch (e) {
      throw e;
    }
  }, []);

  const handleForm = async () => {
    try {
      const resp = await fetchData('/login', { email: login, password });
      navigation.navigate('Posts');
      await AsyncStorage.setItem('access_token', resp.data.accessToken);
      setValidationErr('');
      setIsAuth(true);
    } catch (e) {
      setValidationErr(e.response.data);
      throw e;
    }
  };

  return (
    <AuthWrapper>
      <Auth>
        <Title>Authorization</Title>
        <Row>
          <Label>login</Label>
          <TextFieldLogin
            onChangeText={(login: string) => setLogin(login)}
            onSubmitEditing={handleForm}
          />
        </Row>

        <Row>
          <Label>password</Label>
          <TextFieldPassword
            secureTextEntry={true}
            onChangeText={(password: string) => setPassword(password)}
            onSubmitEditing={handleForm}
          />
          <ErrorMessage>{validationErr}</ErrorMessage>
        </Row>
      </Auth>
    </AuthWrapper>
  );
};

export default AuthWindow;
