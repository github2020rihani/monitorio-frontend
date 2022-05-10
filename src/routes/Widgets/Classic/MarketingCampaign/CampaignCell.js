import React from 'react';
import { Box } from '@material-ui/core';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  camCellItem: {
    transition: 'all .2s',
    borderTop: `1px solid ${alpha(theme.palette.common.dark, 0.04)}`,
    '&:last-child': {
      borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.04)}`,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
    },
  },
  IconSm: {
    fontSize: 16,
    marginLeft: 4,
  },
}));

const CampaignCell = ({ data }) => {
  const { profileName, icon, nbrUsers } = data;
  const statusColor = nbrUsers > 0 ? '#8DCD03' : '#E00930';
  const textUser = nbrUsers > 0 ? 'utilisateurs' : 'utilisateur';
  const classes = useStyles();
  return (
    <Box className={classes.camCellItem} display="flex" alignItems="center" justifyContent="space-between" px={6} py={2}>
      <Box display="flex" alignItems="center" flexDirection="row">
        <Box>
          <CmtAvatar size={56} src={icon} />
        </Box>
        <Box ml={4}>
          <Box component="p">{profileName} </Box>
        </Box>
      </Box>
      <Box color={statusColor}>
        <Box display="flex" alignItems="center">
          {nbrUsers} {textUser}
        </Box>

      </Box>
    </Box>
  );
};

export default CampaignCell;
