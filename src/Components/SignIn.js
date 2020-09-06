import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import PropTypes from 'prop-types';
import { axiosInstance, request } from '../helpers'
import { withRouter } from 'react-router-dom'
import { message } from 'antd';
import { loggedUserAction } from '../Actions/userActions'
import { connect } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
        marginLeft: '20px',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },



}));

function SignIn(props) {
    const classes = useStyles();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosInstance.get('user/login/currentUser/')
                .then(res => props.history.push('/home'))
        }
    }, []);

    const handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        name === "username" ? setUsername(value) : setPassword(value)
    };

    message.config({
        top: 80,
    })

    const handle_login = (e) => {
        e.preventDefault();
        let data = {
            "username": username,
            "password": password,
        }
        request.post('/user/login/', data)
            .then(async (res) => {
                await localStorage.setItem('token', res.data.token);
                props.loggedUser({ name: res.data.name, loggedIn: true })
            })
            .then(res => props.history.push('/home'))
            .then(res => message.success("Logged in successfully!"))
            .then(res => console.log("Logged In"))
            .catch(err => message.error("Invalid Credentials"));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="username"
                        autoComplete="email"
                        {...username}
                        autoFocus
                        onChange={handle_change}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...password}
                        onChange={handle_change}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={e => handle_login(e)}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <a>
                                <Link to='/signup' >
                                    Don't have an account? Sign Up
              </Link>
                            </a>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
            </Box>
        </Container>

    );
}

const mapStateToProps = (state, props) => {
    return {
        //   users: state.users
        props
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loggedUser: (data) => { dispatch(loggedUserAction(data)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));