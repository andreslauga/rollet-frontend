import Post from "../../components/Post/Post"
import { posts } from "../../data/data"
import { StyledPostsContainer } from "./HomeScreen.styles"

export const HomeScreen = () => {
  return (
    <StyledPostsContainer>
      {posts.map((post) => (
        <Post
          key={post.id}
          avatarUrl={post.avatarUrl}
          username={post.username}
          postText={post.postText}
        />
      ))}
    </StyledPostsContainer>
  )
}
