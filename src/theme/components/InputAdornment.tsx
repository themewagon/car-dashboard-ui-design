import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
    filled: {
      marginTop: '0!important',
    },
  },
};

export default InputAdornment;
