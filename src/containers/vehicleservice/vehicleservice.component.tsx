import React from 'react';
import Button from '@mui/material/Button';
import './vehicleservice.component.css';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

function VehicleServiceComponent(){
    return(

        <StyledEngineProvider injectFirst>
            <div>
                <Button 
                    className='button'
                    variant="contained"
                    onClick={()=>alert('I will return a table from database')}
                    >
                        Vehicle Serviced
                </Button>
                
                <Button 
                    className='button'
                    variant="contained"
                    onClick={()=>alert('I will return a table from database')}
                    >
                        Vehicles Waiting for Service
                </Button>
                
                <Button 
                    className='button'
                    variant="contained"
                    onClick={()=>alert('I will render two or more text-boxes ')}
                    >
                        Vehicles History of Components
                </Button>
                
                
            </div>
        </StyledEngineProvider>

    );
}

export default VehicleServiceComponent;