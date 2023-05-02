import React from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { pushBackAction } from '../../features/backActionSlice';
import './Link.css';

const Link = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const handleClick = (e) => {
        dispatch(pushBackAction({ type: 'location', value: location.pathname }));
        if (props.onClick) props.onClick(e);
    };

    return <RouterLink
        {...props}
        onClick={handleClick}
        className="app-link"
    />;
};

export default Link;
