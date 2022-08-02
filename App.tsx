import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AuthWindow from './components/AuthWindow';
import { Navigation } from './screens/Navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const AuthWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Auth = styled.View`
  width: 290px;
  height: 360px;
  box-sizing: border-box;
  margin-top: 30px;
  border: 5px solid #27569c;
`;

const Title = styled.Text`
    width: 212px;
    height: 45px;
    margin-top: 19px;
    margin-left: 35px;
    margin-bottom: 27px;
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

const Header = styled.View`
  width: 100%;
  height: 100px;
  background: #e4b062;
  display: flex;
  justify-content: center;
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

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
