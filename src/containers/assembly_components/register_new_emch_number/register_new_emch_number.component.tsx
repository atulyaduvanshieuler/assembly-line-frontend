import React, {useState} from 'react';
import {TextField} from "@mui/material";
import { postBodyRequest } from '../../../api-service';


const RegisterVehicleComponent=()=> {
    
    const [emchNumber , updateEmchNumber] = useState('');

    const handleEmchInput = (event: any) =>{
        updateEmchNumber(event.target.value)
    }

    const submitButton = () =>{
        console.log("atul", emchNumber);
        postBodyRequest('registervehicle',{
            "emch":emchNumber
        }).then((data)=>{
            alert("request sent");
        })  //here we will take input from backend
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
                <button onClick={submitButton}>Submit Now</button>
            
            <br/>
            
        </div>
    )
}

export default RegisterVehicleComponent;