import React from 'react';
import {Button, Card, CardContent, Grid, makeStyles, Typography} from '@material-ui/core';
import allaslogo from './../../../assets/images/logo1.png';

const useStyles = makeStyles((theme) => ({
    card: {
        background: theme.palette.warning.light,
        marginTop: '16px',
        marginBottom: '16px',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '19px solid ',
            borderColor: theme.palette.warning.main,
            borderRadius: '50%',
            top: '65px',
            right: '-150px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '3px solid ',
            borderColor: theme.palette.warning.main,
            borderRadius: '50%',
            top: '145px',
            right: '-70px'
        }
    },
    tagLine: {
        color: theme.palette.grey[900],
        opacity: 0.6
    },
    button: {
        color: theme.palette.grey[900],
        backgroundColor: theme.palette.warning.dark,
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: theme.palette.warning.main
        }
    }
}));

const BrandingCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h4">Allas Network</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" className={classes.tagLine}>
                            Custom Dashboard for Umeå Energi <br />
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={allaslogo} alt="Allas" width="130" />
                        
                    </Grid>
                    <Grid item>
                        <Button variant="link" href="https://allas.network" target="_blank" className={classes.button} disableElevation>
                            Visit Website
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default BrandingCard;
