import Post from "../../components/Post/Post"
import { posts } from "../../data/data"
import { PostsContainer } from "./HomeScreen.styles"

export const HomeScreen = () => {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <Post
          styles={{
            ...(posts.indexOf(post) === 0 && {
              ml: '5%',
            }),
          }}
          key={post.id}
          avatarUrl={post.avatarUrl}
          username={post.username}
          postText={post.postText}
        />
      ))}
    </PostsContainer>
  )
}
