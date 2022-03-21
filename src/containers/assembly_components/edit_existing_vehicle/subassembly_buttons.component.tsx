import React,{useState} from 'react';
import Button from '@mui/material/Button';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import RenderComponents from './component_buttons.component';
import BUTTONS from './subassembly_buttons';


function SubAssemblyButtonsComponent(props: any){

    const [currentSubAssembly, updateCurrentSubAssembly]=useState("")

    const selectedSubAssembly=(event:any)=>{
        //console.log(value,value.target.value)
        updateCurrentSubAssembly(event.target.value)
    }

    return(

        <StyledEngineProvider injectFirst>
            <div>
                {BUTTONS.map((x: any, key: number) =>
                    <Button
                        key={key}
                        className='button'
                        variant="contained"
                        value= {x.value}
                        onClick={selectedSubAssembly}
                        >
                            {x.button_name}
                    </Button>
                )}
            </div>
            <br />
            <br />
            <RenderComponents subassembly={currentSubAssembly} emch={props.emch} />
        </StyledEngineProvider>

    );
}

export default SubAssemblyButtonsComponent;