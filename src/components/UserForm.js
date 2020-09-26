import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';

export class UserForm extends Component {

    state = {
      principal : 0 
    } 

    handleChange = (e) => {
      this.setState({[e.target.name] : e.target.value});
    }

    render() {
        const {theme} = this.props;
        const handleChange = this.handleChange.bind(this);
        const values = this.state;
        return (
           <Box component="div" style={{paddingTop:'20px'}}>
          <Container maxWidth="sm" >
          <Typography variant="h3">
          {this.props.title}
          </Typography>
          <br/>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" color="primary">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.principal}
            name="principal"
            onChange={handleChange}
            style={{color: 'black'}}
            endAdornment={<InputAdornment position="end" >Kg</InputAdornment>}
            labelWidth={0}
          />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" color="primary">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.principal}
            name="principal"
            onChange={handleChange}
            style={{color: 'black'}}
            endAdornment={<InputAdornment position="end" >Kg</InputAdornment>}
            labelWidth={0}
          />
        </FormControl>
          </Grid>
          
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper>xs</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper>xs</Paper>
          </Grid>
        </Grid>
          </Container>
          </Box>
        )
    }
}

export default UserForm
