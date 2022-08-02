import React from 'react';
import randomInteger from './randomInteger';
import axios from 'axios';
import { IPost } from '../types/types';
import { IResult } from '../redux/types/data';

const generatePosts = (
  currentPage: number,
  setCurrentPage: (arg: number) => void,
  setPosts: (arg: Array<IPost>) => void,
  setTotalCount: (arg: number) => void,
  setFetching: (arg: boolean) => void,
) => {
  const userId = randomInteger(5, 15);
  const limit = randomInteger(5, 15);

  let URL1 = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`;
  let URL2 = `https://jsonplaceholder.typicode.com/users`;

  const promise1 = axios.get(URL1);
  const promise2 = axios.get(URL2);

  Promise.all([promise1, promise2]).then((values) => {
    const newValues = values.map((curr) => curr.data);

    const posts: Array<IResult> = newValues[0];
    const users: Array<any> = newValues[1];

    const newPosts: Array<IResult> = posts.reduce((acc, post) => {
      const currUser = users.filter((user) => post.userId === user.id)[0];

      post['username'] = currUser.username;
      post['company'] = currUser.company.name;

      acc.push(post);
      return acc;
    }, []);

    setCurrentPage((prev: number) => prev + 1);
    setPosts([...posts, ...newPosts]);
    setTotalCount(Number(values[0].headers['x-total-count']));
    setFetching(false);
  });
};

export default generatePosts;
