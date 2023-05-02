import { useDispatch } from "react-redux";
import { useNavigate as routerUseNavigate, useLocation } from "react-router-dom";
import { pushBackAction } from "../../features/backActionSlice.js";

const useNavigate = () => {
    const routerNavigate = routerUseNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const customNavigate = (to, options) => {
        // Back button trace
        dispatch(pushBackAction({ type: 'location', value: location.pathname }));

        // Then navigate to the target route
        routerNavigate(to, options);
    };

    return customNavigate;
};

export default useNavigate;
