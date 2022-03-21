import React from 'react';
import Button from '@mui/material/Button';
//import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import UpdateFeature from './update_feature.component';
import AddFeature from './add_feature.component';

const RenderFeatures=(props: any)=>{

    const handleUpdateClick=(emch: any, componentName: any)=>{
        return(
            <UpdateFeature emch={emch} componentName={componentName} />
        )
    }

    const handleAddClick=(emch: any, componentName: any)=>{
        return(
            <AddFeature emch={emch} componentName={componentName} />
        )
    }

    if(props.componentId==""){
        return(
            <></>
        );
    }else{
        if(props.componentId=="None"){
            return(
                //Add
                <div>
                    <table>
                        <tr>
                        <th>Component Name</th>
                        <th>Component Id</th>
                        </tr>                        
                        <tr>
                        <td>{props.componentName}</td>
                        <td>{props.componentId}</td>
                        </tr>
                    </table>
                    <Button
                        className='button'
                        variant="contained"
                        value= {props.componentName}
                        onClick={()=>handleAddClick(props.emch, props.componentName)}
                        >
                            Add
                    </Button>
                </div>
            );
        }else{
            //update
            return(
                    <div>
                    <table>
                        <tr>
                        <th>Component Name</th>
                        <th>Component Id</th>
                        </tr>                        
                        <tr>
                        <td>{props.componentName}</td>
                        <td>{props.componentId}</td>
                        </tr>
                    </table>
                    <Button
                        className='button'
                        variant="contained"
                        value={props.componentName}
                        onClick={()=>handleUpdateClick(props.emch, props.componentName )}
                        >
                            Update
                    </Button>
                </div>
            )
        }
    }
}

export default RenderFeatures;