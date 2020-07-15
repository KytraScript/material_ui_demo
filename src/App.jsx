import './bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    textField: {
        marginTop: 'none',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        fontSize: '20px',
        width: 200,
    },
    card: {
        width: 500,
        backgroundColor: '#23272A'
    },
    columndiv: {
        display: 'flex',
        flexDirection: 'column'
    },
    flexdiv: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
    },
    innerText: {
        color: '#FFFFFF'
    },
    title: {
        color: '#757ce8',
        marginBottom: '3px'
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: '18px',
        overflow: 'hidden !important',
    },
    cssLabel: {
        color: grey[50],
        '&$cssFocused': {
            color: grey[50],
        },
    },
    cssFocused: {
        overflow: 'hidden !important',
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: grey[50],
            overflow: 'hidden !important',
        },
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important',
    },
    helperText: {
        color: 'red'
    },
    textarea: {
        overflow: 'hidden !important',
        color: 'white'
    }
});

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messageText: "",
            templateName: ""
        }
    }

    handleChange = messageText => event => {
        this.setState({
            [messageText]: event.target.value,
        });
    };

    render(){
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <div className={classes.columndiv}>
                    <CardContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="standard-name"
                                label="New Template Name"
                                className={classes.textField}
                                value={this.state.templateName}
                                //onChange={this.handleChange('name')}
                                margin="normal"
                            />
                        {/*<Typography variant="h5" component="h2" className={classes.title}>
                            Template Name Here
                        </Typography>*/}
                        <TextField
                            id="outlined-helperText"
                            label="SMS Message Text"
                            onChange={this.handleChange('messageText')}
                            multiline
                            required
                            rowsMax={4}
                            style={{'--overflow' : 'hidden !important'}}
                            /*classes={{textField: classes.textField}}*/
                            helperText={(160 - this.state.messageText.length).toString() + ' characters remaining'}
                            margin="normal"
                            variant="outlined"
                            FormHelperTextProps={{ classes: { root: classes.helperText } }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline,
                                    inputMultiline: classes.textarea
                                },
                            }}
                        />
                        </form>
                        {/*<Typography component="p" className={classes.innerText}>
                            {'This is the maximum allowed text contained within the template and will be sent to the intended recipient. The _MAX_CHAR_LENGTH_ is 160 Chars for a single text.'}
                        </Typography>*/}
                    </CardContent>

                    <CardActions>
                        <div className={classes.flexdiv}>
                            <Button variant="contained" color="primary" size="small">Save Template</Button>
                        </div>
                    </CardActions>
                </div>
            </Card>
        );
    }
}

Message.propTypes = {
    classes: PropTypes.object.isRequired,
};

const MessageTemplate = withStyles(styles)(Message);

const App = () => {

    return (
        <div>
            <MessageTemplate/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
