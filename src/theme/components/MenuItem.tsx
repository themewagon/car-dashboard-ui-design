import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const MenuItem: Components<Omit<Theme, 'components'>>['MuiMenuItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      minHeight: 30,
    },
    gutters: ({ theme }) => ({ margin: theme.spacing(1, 0) }),
  },
};

export default MenuItem;
