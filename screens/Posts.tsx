import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import generatePosts from '../utils/generatePosts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getPosts from '../utils/getPosts';
import { useAppSelector } from '../redux/hooks';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../redux/slices/user';
import Post from '../components/Post';

const Header = styled.View`
  width: 100%;
  height: 100px;
  background: #e4b062;
  display: flex;
  justify-content: center;
`;

const PostImage = styled.Image`
  width: 70px;
  margin-left: 20px;
  height: 63px;
`;

const PostsComponent = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
`;

const PostsWrappper = styled.View`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Posts = () => {
  const dispatch = useDispatch();
  const isAuth = useAppSelector((state) => state.user.isAuth);

  const [posts, setPosts] = useState<any[]>([]);
  const [resultPosts, setResultPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    if (fetching) {
      generatePosts(currentPage, setCurrentPage, setPosts, setTotalCount, setFetching);
    }
  }, [fetching]);

  useEffect(() => {
    AsyncStorage.getItem('access_token').then((res: any) => {
      getPosts(res)
        .then((res) => {
          if (res.data[0].isAuth) {
            dispatch(setIsAuth(true));
          }
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }, []);

  return (
    <>
      <Header>
        <PostImage source={require('../assets/images/mobile-header-logo.png')} />
      </Header>
      <PostsComponent>
        <PostsWrappper>
          <FlatList
            data={posts}
            onScrollEndDrag={() => setFetching(true)}
            renderItem={({ item }) => (
              <Post username={item.username} company={item.company} title={item.title} />
            )}
          />
        </PostsWrappper>
      </PostsComponent>
    </>
  );
};

export default Posts;
