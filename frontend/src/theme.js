import { createTheme } from '@mui/material';

export const createAppTheme = (mode) => {
    const commonColors = {
        primary: {
            light: '#35baf6',
            main: '#03a9f4',
            dark: '#0276aa',
            contrastText: '#000',
        },
        secondary: {
            light: '#ffc570',
            main: '#ffb74d',
            dark: '#b28035',
            contrastText: '#fff',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#fff',
        },
        success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
    };

    const lightPalette = {
        mode: 'light',
        ...commonColors,
        background: {
            default: '#ffffff',
            paper: '#f6f6f6',
        },
    };

    const darkPalette = {
        mode: 'dark',
        ...commonColors,
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
    };

    const palette = mode === 'dark' ? darkPalette : lightPalette;

    return createTheme({
        palette,
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: 16,
            code: {
                fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
                fontSize: '1.125rem',
                backgroundColor: palette.background.paper,
                borderRadius: 4,
                padding: '2px 4px',
                lineHeight: 1.6,
            },
            body1: {
                fontSize: '1rem', // default anyways
            },
            body2: {
                fontSize: '0.8rem',
            },
            h1: {
                fontSize: '3rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                lineHeight: '5rem',
            },
            h6: {
                fontWeight: 'bold',
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        '--primary-light': palette.primary.light,
                        '--primary-main': palette.primary.main,
                        '--primary-dark': palette.primary.dark,
                        '--primary-contrastText': palette.primary.contrastText,
                        '--secondary-light': palette.secondary.light,
                        '--secondary-main': palette.secondary.main,
                        '--secondary-dark': palette.secondary.dark,
                        '--secondary-contrastText': palette.secondary.contrastText,
                        '--error-light': palette.error.light,
                        '--error-main': palette.error.main,
                        '--error-dark': palette.error.dark,
                        '--error-contrastText': palette.error.contrastText,
                        '--info-light': palette.info.light,
                        '--info-main': palette.info.main,
                        '--info-dark': palette.info.dark,
                        '--info-contrastText': palette.info.contrastText,
                        '--success-light': palette.success.light,
                        '--success-main': palette.success.main,
                        '--success-dark': palette.success.dark,
                        '--success-contrastText': palette.success.contrastText,
                        '--background-default': palette.background.default,
                        '--background-paper': palette.background.paper,
                    },
                },
            },
        },
    });
};

export default createAppTheme('light');
