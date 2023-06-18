import React from 'react';
import { Avatar, SxProps, Typography } from '@mui/material';
import { PostContainer } from './Post.styles';

interface PostProps {
  avatarUrl: string;
  username: string;
  postText: string;
  styles: SxProps;
}

const Post: React.FC<PostProps> = ({ avatarUrl, postText, styles, username }) => {
  return (
    <PostContainer sx={styles}>
      <Avatar src={avatarUrl} alt={username} />
      <Typography variant='h6'>{username}</Typography>
      <Typography variant="body1">{postText}</Typography>
    </PostContainer>
  );
};

export default Post;