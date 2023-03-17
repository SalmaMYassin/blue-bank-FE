// material-ui
import { Typography, Grid, Divider, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AccountTransactionLine from 'views/overview/AccountTransactionLine';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //

const Account = () => {
    const [selectedAccountId, setSelectedAccountId] = useState();

    const [{ data: accounts, loading: loadingAccounts, error: errorAccounts }, refetchAccounts] = useAxios('/customer/1/accounts');
    const [{ data: transactions, loading: loadingTransactions, error: errorTransactions }, execute] = useAxios(
        `/transaction?accountId=${selectedAccountId}`,
        { manual: true }
    );

    useEffect(() => {
        if (selectedAccountId) execute();
    }, [selectedAccountId]);

    return (
        <Grid container spacing={gridSpacing}>
            {loadingAccounts ? (
                <Grid item xs={6}>
                    <MainCard sx={{ justifyContent: 'center' }}>
                        <Typography variant="h4">Loading...</Typography>
                    </MainCard>
                </Grid>
            ) : errorAccounts ? (
                <Grid item xs={6}>
                    <MainCard sx={{ justifyContent: 'center' }}>
                        <Typography variant="h4">An Error Occured...</Typography>
                        <Button onClick={() => refetchAccounts()}>Retry</Button>
                    </MainCard>
                </Grid>
            ) : (
                accounts.map((account) => (
                    <Grid item xs={6} key={account.id}>
                        <MainCard sx={{ justifyContent: 'center' }}>
                            <Typography variant="h4">Account Number {account.id}</Typography>
                            <Typography variant="p">{account.type}</Typography>
                            <Divider sx={{ my: 1.5 }} />
                            <Typography variant="h4">Current Balance is ${account.balance}</Typography>
                            <Divider sx={{ my: 1.5 }} />
                            <Button type="button" variant="outlined" onClick={() => setSelectedAccountId(account.id)}>
                                Show Transactions
                            </Button>
                        </MainCard>
                    </Grid>
                ))
            )}
            <Grid item xs={12}>
                <MainCard title="Transactions" sx={{ justifyContent: 'center' }}>
                    {!loadingTransactions &&
                        !errorTransactions &&
                        transactions &&
                        transactions.content.map((transaction) => (
                            <div key={transaction.id}>
                                <AccountTransactionLine transaction={transaction} />
                                <Divider sx={{ my: 1.5 }} />
                            </div>
                        ))}
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default Account;
