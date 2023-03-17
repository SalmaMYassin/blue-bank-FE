import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography } from '@mui/material';

// ===========================|| Overview DEFAULT - Mini Account CARD ||=========================== //

const MiniAccountCard = ({ accountId, accountCredit }) => {
    const theme = useTheme();

    return (
        <Card sx={{ bgcolor: 'secondary.light' }}>
            <Grid container sx={{ p: 2, color: '#fff' }}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.secondary.dark }}>
                                Account Number: {accountId}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                                ${accountCredit}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

MiniAccountCard.propTypes = {
    accountId: PropTypes.string,
    accountCredit: PropTypes.number
};

export default MiniAccountCard;
