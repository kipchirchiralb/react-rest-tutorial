
import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import PostList from './PostList';

test('renders a list of posts', async () => {
  // Mocking Axios for unit testing
  jest.mock('axios');
  axios.get.mockResolvedValue({ data: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }] });

  // Render the component
  render(<PostList />);

  // Wait for the component to render with fetched data
  const post1Element = await screen.findByText('Post 1');
  const post2Element = screen.getByText('Post 2');

  // Check if the posts are displayed correctly
  expect(post1Element).toBeInTheDocument();
  expect(post2Element).toBeInTheDocument();
});