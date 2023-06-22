
import { Post } from "modules"
import { posts } from "../../data/data"
import { PostsContainer } from "./HomeScreen.styles"

const HomeScreen = () => {
  return (
    <PostsContainer>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          styles={{
            ...(index === 0 && {
              ml: '50px',
            }),
          }}
          avatarUrl={post.avatarUrl}
          username={post.username}
          postText={post.postText}
          comments={['fffsdfsda', 'fdsafdsfdsaf', 'dSDAdhvhsa']}
        />
      ))}
    </PostsContainer>
  )
}

export default HomeScreen
