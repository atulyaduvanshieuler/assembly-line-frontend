import React,{useState} from 'react';
import {TextField} from "@mui/material";
import { postBodyRequest } from '../../../api-service';
import { ADD_LINKS } from './component_links';

//add it later

const AddFeature=(props: any)=>{

    const [componentId , updateComponentId] = useState('');

    const handleComponentIdInput = (event: any) =>{
        updateComponentId(event.target.value)
    }


    const submitButton = (emch:any, componentName: any, componentId:any) =>{
        let link= ADD_LINKS[componentName];
        //let backendComponentId = componentName+"_id";

        let paramsObject = {};
        paramsObject[`${componentName}_id`] = componentId;

        console.log("atul", componentId);
        postBodyRequest(link,{
            "emch":emch,
            ...paramsObject
            
        }).then((data)=>{
            //below code will change depending onn the structure of data
            if(data["message"]){
                alert(data["message"])
            }
        }) 
    }

    return(
        <div>
            <TextField
						title={'Enter new Component Id'}
						placeholder={'Enter Component Id here'}
						type={'text'}
						value={componentId}
						label={'Component Id'}
						variant={'outlined'}
						onChange={handleComponentIdInput}
					/>
            <br/>
            <button onClick={()=>submitButton(props.emch, props.componentName, componentId)}>Submit Now</button>
            
        </div>
    )

}

export default AddFeature;