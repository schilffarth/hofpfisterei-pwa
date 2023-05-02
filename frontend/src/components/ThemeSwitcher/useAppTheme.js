import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createAppTheme } from '../../theme';

const useAppTheme = () => {
    const mode = useSelector((state) => state.theme.mode);
    return useMemo(() => createAppTheme(mode), [mode]);
};

export default useAppTheme;
