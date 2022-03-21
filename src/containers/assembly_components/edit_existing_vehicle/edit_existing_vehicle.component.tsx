import React, {useState,useEffect} from 'react';
import {TextField} from "@mui/material";
import { getRequest } from '../../../api-service';
import SubAssemblyButtonsComponent from './subassembly_buttons.component';

function RenderSubAssemblies(props:any){

    if(props.rendersubs==true){
        return <SubAssemblyButtonsComponent emch={props.emch}/>;
    }else{
        return(
            <div>

            </div>
        )
    }
}

const EditVehicleComponent=()=> {
    
    const [emchNumber , updateEmchNumber] = useState('');

    const handleEmchInput = (event: any) =>{
        updateEmchNumber(event.target.value)
    }
    const [renderButtons, updateRenderButtons]=useState(false);
    
    
    ////need to remove this
    useEffect(()=>{
        updateRenderButtons(true)
    },[])


    const submitButton = () =>{
        console.log("atul", emchNumber);
        getRequest('editvehicle',{
            "emch":emchNumber
        }).then((data)=>{
            //below code will change depending onn the structure of data
            if(data["message"]==true){
                updateRenderButtons(true)

            }else{
                alert('Wrong Emch Number')
            }
        }) 
    }

    return (
        <div>
            <TextField
						title={'EMCH Number'}
						placeholder={'Enter EMCH number here'}
						type={'text'}
						value={emchNumber}
						label={'EMCH Number'}
						variant={'outlined'}
						onChange={handleEmchInput}
					/>
            <br/>
            <button onClick={submitButton}>Submit Now</button>
            <div>
                <RenderSubAssemblies rendersubs={renderButtons} emch={emchNumber} />
            </div>
        </div>
    )
}

export default EditVehicleComponent;