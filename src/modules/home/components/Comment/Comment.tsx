import { Box } from "@mui/material"
import { FC } from "react"

interface CommentProps {
    comment: string
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <Box>
        {comment}
    </Box>
  )
}

export default Comment
