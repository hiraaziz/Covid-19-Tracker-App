import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function InfoPanel() {
    const classes = useStyles();
    const [globalData, setGlobalData] = useState({})
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.covid19india.org/data.json");
            let data = await response.json();
            console.log(data.cases_time_series[0]);
            setGlobalData(data.cases_time_series[0])
        }
        getData();
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {Object.keys(globalData).map((key,ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper className={classes.paper} elevation={3}>
                                <h3>{key.replace(/y/g,'y ').toUpperCase()}</h3>
                                <h3>{globalData[key]}</h3>
                            </Paper>
                        </Grid>
                    )
                })
                }

            </Grid>
        </div>
    );
}
