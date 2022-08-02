import React, { useState } from 'react';
import AuthWindow from '../components/AuthWindow';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { useAppSelector } from '../redux/hooks';

const PostImage = styled.Image`
  width: 70px;
  margin-left: 20px;
  height: 63px;
`;

const Header = styled.View`
  width: 100%;
  height: 100px;
  background: #e4b062;
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  const useFonts = async () => {
    await Font.loadAsync({
      Inter: require('../assets/fonts/Inter-Bold.ttf'), // Download .tff font file and use it here like this
    });
  };

  return (
    <>
      <Header>
        <PostImage source={require('../assets/images/mobile-header-logo.png')} />
      </Header>
      <AuthWindow />
    </>
  );
};

export default Home;
