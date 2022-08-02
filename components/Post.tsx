import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import generatePosts from '../utils/generatePosts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getPosts from '../utils/getPosts';

const PostWrappper = styled.View`
  width: 300px;
  margin-left: 13px;
  margin-right: 15px;
  border: 5px solid #27569c;
  margin-bottom: 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PostUser = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const PostRight = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const Author = styled.Text`
  margin-top: 12px;
  margin-left: 17px;
  margin-bottom: 17px;
`;

const Company = styled.Text`
  margin-left: 17px;
  margin-bottom: 17px;
`;

const Title = styled.Text`
  margin-left: 17px;
`;

interface postProps {
  title: string;
  company: string;
  username: string;
}

const Post: React.FC<postProps> = (props) => {
  return (
    <>
      <PostWrappper>
        <PostUser>
          <PostRight>
            <Author>Author: {props.username}</Author>
            <Company>Company: {props.company}</Company>
          </PostRight>
          <Title>Title: {props.title}</Title>
        </PostUser>
      </PostWrappper>
    </>
  );
};

export default Post;
