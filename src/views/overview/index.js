import { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
// material-ui
import { Grid, Divider, Typography, Button } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import AccountCard from './AccountCard';

// ==============================|| OVERVIEW ||============================== //

const Overview = () => {
    const [{ data, loading, error }, refetch] = useAxios('/customer/1');
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (!loading) {
            let tempBalance = balance;
            data.accounts.forEach((account) => (tempBalance += account.balance));
            setBalance(tempBalance);
        }
    }, [data]);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="User Details" sx={{ justifyContent: 'center' }}>
                    {loading ? (
                        <Typography variant="h4">Loading...</Typography>
                    ) : error ? (
                        <>
                            <Typography variant="h4">An Error Occured...</Typography>
                            <Button onClick={() => refetch()}>Retry</Button>
                        </>
                    ) : (
                        <>
                            <Typography variant="h4">{data.firstName + ' ' + data.lastName}</Typography>
                            <Typography variant="p">{data.email}</Typography>
                            <Divider sx={{ my: 1.5 }} />
                            <Typography variant="h3">Current Balance is ${balance}</Typography>
                        </>
                    )}
                </MainCard>
            </Grid>
            {!loading &&
                !error &&
                data.accounts.map((account) => (
                    <Grid item xs={12} lg={4} key={account.accountNumber}>
                        <AccountCard account={account} isLoading={loading} />
                    </Grid>
                ))}
        </Grid>
    );
};

export default Overview;
