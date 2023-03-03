import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        }
      }
    },
  },
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    h2: {
      color: '#401A16',
      fontFamily: 'sniglet',
      fontSize: 40
    }
  }
});