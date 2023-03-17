import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';
// assets
import { IconClock } from '@tabler/icons';

// constant
const icons = { IconClock };

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const AccountTransactionLine = ({ transaction }) => {
    const theme = useTheme();

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" color="inherit">
                            {transaction.type}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" color="inherit">
                            <IconClock fontSize="small" style={{ verticalAlign: 'middle' }} /> {transaction.createdAt}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                    ${transaction.amount}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {transaction.type === 'DEPOSIT' ? (
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: '5px',
                                            backgroundColor: theme.palette.success.light,
                                            color: theme.palette.success.dark,
                                            ml: 2
                                        }}
                                    >
                                        <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                    </Avatar>
                                ) : (
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: '5px',
                                            backgroundColor: theme.palette.orange.light,
                                            color: theme.palette.orange.dark,
                                            marginLeft: 1.875
                                        }}
                                    >
                                        <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                    </Avatar>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

AccountTransactionLine.propTypes = {
    transaction: PropTypes.object
};

export default AccountTransactionLine;
