import React, { Component } from 'react'
import { withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export class MenuBar extends Component {
    constructor(props){
      super(props);
      this.state = {anchorEl : null}
    }

    handleClick = (event) => {
      this.setState({anchorEl: event.currentTarget})
    }

    handleClose = () => {
      this.setState({anchorEl: null})
    }

    render() {
        const {theme} = this.props;
        return (
            <AppBar position="static" >
            <Container maxWidth="md" style={{minHeight:"90px", justifyContent:"center", display:"flex", flexDirection:"column", margin:"0 auto"}}>
            <Toolbar>
            <Grid container spacing={3} style={{marginTop:'5px', marginBottom:'5px'}}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" align="left" style={{paddingLeft:'10px'}}>
                <Link variant="inherit" underline="none" href="/">
                <b style={{color : theme.palette.text.primary}}>BASTIEN </b>
                <b style={{color : theme.palette.text.secondary}}>COLLIN</b>
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={{marginTop:"6px", marginBottom:"7px"}}>
              <Typography variant="body1" align="center" color="textPrimary">
                <Link variant="inherit" underline="none" href="#" color="textPrimary">
                 Commence ici 
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={{marginTop:"6px", marginBottom:"7px"}}>
              <Typography variant="body1" align="center"  color="textPrimary">
                <Link variant="inherit" underline="none" href="#" color="textPrimary">
                  Formations
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={2} style={{marginTop:"6px", marginBottom:"7px"}}>
            <Grid container direction="row" alignItems="center">
              <Typography variant="body1" align="center" color="textPrimary">
                <Link variant="inherit" underline="none" align="center" href="#" color="textPrimary" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                  Ressources
                </Link>
              </Typography>
                  <ArrowDropDownIcon style={{color : theme.palette.text.primary}}/>
                <Menu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  keepMounted
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="body1" align="center" color="textPrimary">
                      <Link variant="inherit" underline="none" href="/calcs" color="textPrimary" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                Calculateur d'interêts composés
                      </Link>
                    </Typography>
                  </MenuItem>
                </Menu>
            </Grid>
          </Grid>
          </Grid>
            </Toolbar>
          </Container>
          </AppBar> 
        )
    }
}

export default (withTheme) (MenuBar)
