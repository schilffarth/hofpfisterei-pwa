import {
    Box,
    Autocomplete,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore } from "../../features/preorderCartSlice.js";

import { storeOptions } from "./storeOptions.js";

const StoreAutocomplete = ({
    initialInputValue = '',
}) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(initialInputValue);
    const value = useSelector((state) => state.preorderCart.store);
    const setValue = (value) => dispatch(setStore(value));

    const options = storeOptions;

    return (
        <Box>
            <Autocomplete
                sx={{ maxWidth: 'sm', margin: 'auto' }}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-stores-select"
                options={options}
                renderInput={(params) => (
                    <TextField autoFocus {...params} label="Filiale" />
                )}
            />
        </Box>
    );
};

export default StoreAutocomplete;
