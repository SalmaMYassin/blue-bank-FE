import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MiniAccountCard from './MiniAccountCard';
import AccountTransactionLine from './AccountTransactionLine';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

// ==============================|| OVERVIEW DEFAULT - ACCOUNT CARD ||============================== //

const AccountCard = ({ isLoading, account }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                <MiniAccountCard accountId={account.accountNumber} accountCredit={account.accountCredit} />
                            </Grid>
                            <Grid item xs={12}>
                                {account.transactions.map((transaction) => (
                                    <div key={transaction.id}>
                                        <AccountTransactionLine transaction={transaction} />
                                        <Divider sx={{ my: 1.5 }} />
                                    </div>
                                ))}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        <Button size="small" disableElevation>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
};

AccountCard.propTypes = {
    isLoading: PropTypes.bool,
    account: PropTypes.object
};

export default AccountCard;
