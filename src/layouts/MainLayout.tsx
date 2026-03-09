import { Box, Container, Stack, Typography } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? '#90caf9' : '#ffffff',
  textDecoration: 'none',
  fontWeight: isActive ? 700 : 500,
})

export const MainLayout = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Demo роутинга
          </Typography>

          <Stack direction="row" spacing={2}>
            <NavLink to="/" end style={navLinkStyle}>
              Главная
            </NavLink>

            <NavLink to="/about" style={navLinkStyle}>
              О проекте
            </NavLink>
          </Stack>
        </Box>

        <Box>
          <Outlet />
        </Box>
      </Stack>
    </Container>
  )
}