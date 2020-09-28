import React from 'react'
import MenuBar from '../MenuBar'
import UserForm from '../UserForm'
import Card from '../Card'
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';

function Calculators(props) {
    return (
        <div>
            <MenuBar title="Bastien Collin"/>
            <Typography variant="h2" style={{paddingTop:"10px", paddingBottom:"10px"}}>
                {props.title}
            </Typography>
            <Container>

           <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <Card 
                    title="Calculateur d'interêts"
                    subtitle="Investissement" 
                    description="Calcule combien tes investissements pourraient te rapporter."
                    cta="Je calcule"
                    />
            </Grid>
           <Grid item xs={12} sm={6} md={4}>
                <Card 
                    title="Calcul de mensualités"
                    subtitle="Finance personnelles" 
                    description="Calcule combien tes investissements pourraient te rapporter."
                    cta="Je veux"
                    />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card 
                    title="Les types de portefeuilles"
                    subtitle="Diversification" 
                    description="Calcule combien tes investissements pourraient te rapporter."
                    cta="En savoir plus"
                    />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card 
                    title="Calculateur d'interêts"
                    subtitle="Savoir Investir" 
                    description="Calcule combien tes investissements pourraient te rapporter."
                    cta="Learn More"
                    />
            </Grid>
           </Grid>
            </Container>
        </div>
    )
}

export default Calculators
