import { Badge, BadgeProps, styled } from '@mui/material';

const OutlinedBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    left: 9,
    top: 7,
    width: 9,
    height: 9,
    border: `${theme.shape.borderRadius * 0.375}px solid ${theme.palette.background.default}`,
  },
}));

export default OutlinedBadge;
