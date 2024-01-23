import { Avatar, Box, SxProps, Typography } from '@mui/material';
import { PostContainer } from './Post.styles';
import Comment from '../Comment/Comment';
import { FC } from 'react';

interface PostProps {
  avatarUrl: string;
  comments: any[];
  imageUrl?: string;
  username: string;
  postText: string;
  styles: SxProps;
}

const Post: FC<PostProps> = ({ avatarUrl, comments, imageUrl, postText, styles, username }) => {
  return (
    <PostContainer sx={styles}>
      <Box>
        <Avatar src={avatarUrl} alt={username} />
        <Typography variant='h6'>{username}</Typography>
      </Box>
      <Box>
        <Typography variant="body1">{postText}</Typography>
        { imageUrl ??
          <img
            src={imageUrl}
          />
        }
      </Box>
      <Box>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
          />
        ))}
      </Box>
    </PostContainer>
  );
};

export default Post;