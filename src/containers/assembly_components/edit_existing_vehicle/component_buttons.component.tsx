import React,{useState} from 'react';
import Button from '@mui/material/Button';
//import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import COMPONENTS from './component_buttons';
//mport {SEE_LINKS} from './component_links';
import { getRequest } from '../../../api-service';
import RenderFeatures from './render_feature.component';

const RenderComponents=(props:any)=>{

    const [componentId, updateComponentId]= useState("")

    const [currentComponent, updateCurrentComponent] = useState("")


    const handleClick=(componentName: any,emchNumber:any)=>{

        updateCurrentComponent(componentName)

        //let link=SEE_LINKS[componentName];

        getRequest('seeregisteredcomponent',{
            "emch":emchNumber,
            "component_name":componentName
        }).then((data)=>{
            //below code will change depending onn the structure of data
            if(data["message"]!= null){
                updateComponentId(data["message"])

            }else{
                updateComponentId('None')
            }
        })
    }

    let no_component_subassemblies=["vehicle_harness","biw" , "mark", "telematics", "load_body"];
    

    if(props.subassembly==""){
        return(
            <div>
            </div>
        )
    }if(no_component_subassemblies.includes(props.subassembly) ){
        //handleClick()
        handleClick(props.subassembly,props.emch)
        console.log(props.subassembly);
        return(
            <div>
                <RenderFeatures componentName={currentComponent} componentId={componentId} emch={props.emch} />
            </div>
        )
    }else {
        let subassembly_component = COMPONENTS[props.subassembly];
        return(
            <div>                
                {subassembly_component.map((x:any, key:number)=>
                    <Button
                        key={key}
                        className='button'
                        variant="contained"
                        value= {x}
                        onClick={()=>handleClick(x,props.emch)}
                        >
                            {x}
                    </Button>
                )
                }
                <RenderFeatures componentName={currentComponent} componentId={componentId} emch={props.emch} />
            </div>
            
        )

    }

}

export default RenderComponents;