import React,{useState} from 'react';
import {TextField} from "@mui/material";
import { postBodyRequest } from '../../../api-service';
import { UPDATE_LINKS } from './component_links';

//add it later

const UpdateFeature=(props: any)=>{

    const [componentId , updateComponentId] = useState('');

    const handleComponentIdInput = (event: any) =>{
        updateComponentId(event.target.value)
    }

    //const [renderButtons, updateRenderButtons]=useState(false);
    
    
    ////need to remove this
    


    const submitButton = (emch:any, componentName: any, componentId:any) =>{
        let link= UPDATE_LINKS[componentName];

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

export default UpdateFeature;