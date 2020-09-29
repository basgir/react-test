import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Dashboard from './dashboard/Dashboard';

export class UserForm extends Component {

    state = {
      principal : 100 ,
      t: 1,
      n: 12,
      r: 10,
      data : [],
      amount : 1,
    } 
  
    computeAmount = (prevState, props) => {
      return prevState.principal * Math.pow(1 + (prevState.r/100)/prevState.n,(prevState.n*prevState.t));
    }
    generateList = (prevState, props) => {
      const arr = Array.from({length: prevState.t}, (v, k) => this.computeAmount(prevState,k+1));  
      console.log(arr)
      return arr 
    }
    handleChange = (e) => {
      this.setState({[e.target.name] : e.target.value});
      this.setState((prevState,props) => ({amount : this.computeAmount(prevState)}));
      this.setState((prevState,props) => ({data : this.generateList(prevState)}));
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
        <Grid container spacing={3} direction="column" justify="space-evenly" alignItems="stretch">
          <Grid item xs={12} sm={6}>
          <Typography variant="h5">
            Placement Initial
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

          <Grid item xs={12} sm={6}>
          <Typography variant="h5">
            Versement réguliers
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
          <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" style={{minWidth: "100%"}}>
        <InputLabel id="demo-simple-select-filled-label">
          <Typography color="textPrimary" style={{margin:0}}>
          Récurrence des versements
          </Typography>
          </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={values.n}
          onChange={handleChange}
        >
          <MenuItem value={365}>Une fois par jour</MenuItem>
          <MenuItem value={52}>Une fois par semaine</MenuItem>
          <MenuItem value={24}>Deux fois par mois</MenuItem>
          <MenuItem value={12}>Une fois par mois</MenuItem>
          <MenuItem value={2}>Deux fois par an</MenuItem>
          <MenuItem value={1}>Une fois par an</MenuItem>
        </Select>
          </FormControl>
          </Grid>         
          <Grid item xs={12} sm={6}>
          <Typography variant="h5">
            Taux d'interêts
          </Typography>
          <br/>

          <FormControl variant="outlined" color="primary">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.r}
            name="r"
            onChange={handleChange}
            style={{color: 'black'}}
            endAdornment={<InputAdornment position="end" ><Typography>%</Typography></InputAdornment>}
          />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h5">
            Années
          </Typography>
          <br/>
          <FormControl variant="outlined" color="primary" style={{minWidth: "100%"}}>
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.t}
            name="t"
            onChange={handleChange}
            inputProps={{
              step:5,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            endAdornment={<InputAdornment position="end" ><Typography>An(s)</Typography></InputAdornment>}
          />
        </FormControl>
          </Grid>
        </Grid>
          <Typography>
            {this.state.amount}
          </Typography>
        <Dashboard title="Résultats" data={this.state.data}/>
         </Container>
          </Box>
        )
    }
}

export default UserForm
