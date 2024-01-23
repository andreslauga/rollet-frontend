import styled from '@emotion/styled'
import { Box } from "@mui/material";

export const PostContainer = styled(Box)({
    borderRight: '1px solid grey',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '400px',

    '&:hover': {
        overflowY: 'auto'
    }
});