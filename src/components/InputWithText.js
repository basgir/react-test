import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Dashboard from './dashboard/Dashboard';

export class InputWithText extends Component {
    render() {
        return (
            <div>
           <Grid item xs={12} sm={6}>
          <Typography variant="h5">
          {this.props.title}
          </Typography>
          <br/>
          <FormControl variant="outlined" color="primary">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.principal}
            name="principal"
            onChange={handleChange}
            style={{color: 'black'}}
            endAdornment={<InputAdornment position="end" ><Typography>€</Typography></InputAdornment>}
          />
            </FormControl>
          </Grid>
            </div>
        )
    }
}

export default InputWithText
