import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import './App.css'
import { useState } from 'react'

type AppProps = {
  heading: string
  defaultStep: number
}

export const App: React.FC<AppProps> = ({ heading, defaultStep }) => {
  const [count, setCount] = useState(0); // [., .]
  const [step, setStep] = useState(defaultStep);

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h4" gutterBottom>
        {heading}
      </Typography>

      <Typography variant="h6">
        Количество: {count}
      </Typography>

      <TextField
        label="Шаг увеличения"
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        sx={{
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          }}}
      />

      <Box>
        <Button
          variant="contained"
          onClick={() => setCount(count + step)}
        >
          Увеличить на {step}
        </Button>
      </Box>
    </Stack>
  )
}