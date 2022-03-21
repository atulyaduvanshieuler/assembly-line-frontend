import React from 'react';
import Button from '@mui/material/Button';
import './inventory.component.css';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";


function InventoryComponent(){

    return(
        <StyledEngineProvider injectFirst>
            <div className='button'>
                <Button 
                    className='single-button'
                    variant="contained"
                    onClick={()=>alert('I will return a table from database')}
                    >
                        Parts Available
                </Button>
                
                <Button 
                    className='single-button'
                    variant="contained"
                    onClick={()=>alert('I will return a table from database')}
                    >
                        Parts Shortage
                </Button>
                
                <Button 
                    className='single-button'
                    variant="contained"
                    onClick={()=>alert('I will render two or more text-boxes ')}
                    >
                        Issue Part
                </Button>
                
                <Button 
                    className='single-button'
                    variant="contained"
                    onClick={()=>alert('I will return a table from database')}
                    >
                        Previous Issued Parts
                </Button>
            </div>
        </StyledEngineProvider>
    )


}

export default InventoryComponent;