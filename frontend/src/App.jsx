import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useAppTheme from "./components/ThemeSwitcher/useAppTheme.js";
import Routes from './Routes.jsx';
import './App.css';

const App = () => {
    const theme = useAppTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div id="app">
                <Routes />
            </div>
        </ThemeProvider>
    );
};

export default App;
