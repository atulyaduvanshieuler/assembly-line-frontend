import React from 'react';
import Button from '@mui/material/Button';
import './assembly_main_page.component.css';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
//import RegisterVehicle from '../register_new_emch_number/register_new_emch_number';
//import EditVehicleComponent from '../edit_existing_vehicle/edit_existing_vehicle.component';
import { Link } from 'react-router-dom';
//import { getRequest } from '../../../api-service';

function EmchEntryComponent(){

    return(
        <StyledEngineProvider injectFirst>
            <div className='button'>
                <Link to="/registervehicle">
                    <Button 
                        className='single-button'
                        variant="contained"
                        >
                            Register New Vehicle
                    </Button>
                </Link>
                <Link to="/editvehicle">
                <Button 
                    className='single-button'
                    variant="contained"
                    >
                        Edit Existing Vehicle
                </Button>
                </Link>
                
            </div>
        </StyledEngineProvider>
    )


}

export default EmchEntryComponent;