import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
    label='search'
    variant="standard"
    type='search' 
    value={value} 
    onChange={onChange} 
    fullWidth
    sx={{mb:"1.5rem"}}
    />;
};

export default Search;