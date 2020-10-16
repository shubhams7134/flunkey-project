import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function DateAndTimePickers() {
    const classes = useStyles();

    return (
        <div class="boundary">
            <h2 class="main-text">Book a Table</h2>
            <div class="social-box">
                <div class="container">
                    <div class="row">
                        <form className={classes.container} noValidate>
                            <TextField
                                id="datetime-local"
                                label="Choose the time"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-3" type="search" placeholder="Enter your name" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Enquire</button>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
