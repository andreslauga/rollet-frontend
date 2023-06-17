import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { StyledPostContainer } from './Post.styles';

interface PostProps {
  avatarUrl: string;
  username: string;
  postText: string;
}

const Post: React.FC<PostProps> = ({ avatarUrl, postText, username }) => {
  return (
    <StyledPostContainer>
      <Avatar src={avatarUrl} alt={username} />
      <Typography variant='h6'>{username}</Typography>
      <Typography variant="body1">{postText}</Typography>
    </StyledPostContainer>
  );
};

export default Post;