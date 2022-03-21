import React from 'react';
import InventoryComponent from '../inventory/inventory.component';
import VehicleServiceComponent from '../vehicleservice/vehicleservice.component';
import EmchEntryComponent from '../assembly_components/assembly_main_page/assembly_main_page.component';


const DeptComponent=(props: any)=>{
    console.log(props.dept)
    if(props.dept!=null){
        console.log(props.dept)
        if(props.dept=='Servicing'){
            return(
                <div>
                    <InventoryComponent />
                    <VehicleServiceComponent />
                </div>
                );
        }
        else if(props.dept=="Assembly"){
            return(
                <div>
                    <EmchEntryComponent />
                </div>
            )
        }
        else{
            return <div>Hasn't Prepared yet</div>
        }
    }else{
        return <div>Please select your department.</div>
    }
}
 export default DeptComponent;