import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import './l5_vehicle_deployment.component.css'
import Box from '@mui/material/Box';
import { postRequest } from "../../api-service";


const formComponent=()=>{

    const HUB_NAMES=['Faridabad','Greater Noida','GurGaon-Kataria Chowk','Gurgaon-SPR', 'Gurgaon-Flipkart','Gurgaon-Hero Honda Chowk','Noida-Sector 80','Noida-Sector 63','Delhi-Ghazipur','Delhi-Wazirpur','Delhi-Dwarka-Matiala','Gurgaon-Wazirabad','Delhi-Punjabi Bagh','Delhi-Peeragarhi','Delhi-Okhla Phase 2','Delhi- Mandoli','Ghaziabad-Mohan Nagar','Haryana Chandu','Noida-Sector 67','Test-Hub'];
    {HUB_NAMES.map((x:any,key:any)=>{
        <MenuItem value={x} key={key}>{x}</MenuItem>

    })}
    

    const [telemetryIMEI, updateTelemetryIMEI] = useState("")

    const handleTelemetryIMEI=(event:any)=>{
        updateTelemetryIMEI(event.target.value)
    }


    const [vehicleRegNo, updateVehicleRegNo] = useState("")

    const handleVehicleRegNo=(event:any)=>{
        updateVehicleRegNo(event.target.value)
    }

    const [vehicleChassisNo, updateChassisNo] = useState("")

    const handleChassisNo=(event:any)=>{
        updateChassisNo(event.target.value)
    }

    const [batteryEBIN, updateBatteryEBIN] = useState("")

    const handleBatteryEBIN=(event:any)=>{
        updateBatteryEBIN(event.target.value)
    }

    const [chargerSNo, updateChargerSNo] = useState("")

    const handleChargerSNo=(event:any)=>{
        updateChargerSNo(event.target.value)
    }
    
    const [passCode, updatePassCode] = useState("")

    const handlePassCode=(event:any)=>{
        updatePassCode(event.target.value)
    }

    const [telemetryVendor, updateTelemetryVendor] = useState("")

    const handleTelemetryVendor = (event:any) =>{
        updateTelemetryVendor(event.target.value)
    }

    const [hubName, updateHubName] = useState("")

    const handleHubName = (event:any) =>{
        updateHubName(event.target.value)
    }

    const[clientName, updateClientName] =useState("")

    const handleClientName = (event:any)=>{
        updateClientName(event.target.value)
    }

    const[clientHubName, updateClientHubName] =useState("")

    const handleClientHubName = (event:any)=>{
        updateClientHubName(event.target.value)
    }

    const[registerer, updateregisterer] = useState("")

    const handleRegisterer=(event:any)=>{
        updateregisterer(event.target.value)
    }


    const onSubmit=()=>{
        if(telemetryIMEI==null){
            alert('Please Enter Telemetry IMEI')
        }else if(vehicleRegNo==null){
            alert('Please Enter Vehicle Registration Number')
        }else if(vehicleChassisNo==""){
            alert('Please Enter Vehicle Chassis Number')
        }else if(batteryEBIN==""){
            alert('Please Enter Battery EBIN')
        }else if(chargerSNo==""){
            alert("Please Enter Charger Serial Number")
        }else if(passCode==""){
            alert("Please Enter Pass Code")
        }else if(telemetryVendor==""){
            alert("Please Enter Telemetry Vendor")
        }else if(hubName==""){
            alert("Please Enter Hub Name")
        }else if(clientName==""){
            alert("Please Enter Client Name")
        }else if(clientHubName==""){
            alert("Please Enter Client Hub Name")
        }else if(telemetryIMEI.length!=15){
            alert("enter Correct Telemetry IMEI")
        }else{
            postRequest('register',{

                "telemetry_imei":telemetryIMEI,
                "telemetry_vendor_id":telemetryVendor,
                "vehicle_registration_number":vehicleRegNo,
                "vehicle_chassis_number": vehicleChassisNo,
                "ebin": batteryEBIN,
                "charger_serial_number":chargerSNo,
                "hub_id":hubName,
                "client_id":clientName,
                "client_hub_id":clientHubName,
                "password":passCode
                
                
            }).then((data)=>{
                //below code will change depending onn the structure of data
                alert(data);
            }) 
        }
    }


    return(
        <Box sx={{marginLeft:20,overflowY:'scroll', maxHeight:'100vh'}}>
        <h2>l-5 Vehicle Deployment Form</h2>
        
        <div className="form-area">
        

        <Grid key={1} container direction={"row"} spacing={3}>
            <Grid item  md={3}>
                <InputLabel id="telemetry-imei">Telemetry IMEI</InputLabel>
            </Grid>
            <Grid item md={3}>
                <TextField
                    title={' Telemetry IMEI: '}
                    placeholder={'Enter Telemetry IMEI here'}
                    helperText="It should be a 10 digit string"
                    type={'text'}
                    value={telemetryIMEI}
                    label={'Enter Telemetry IMEI here'}
                    variant={'outlined'}
                    onChange={handleTelemetryIMEI}
                    size={"small"}
                />
            </Grid>
        </Grid>
        <br />
        <Grid key={2} container direction={"row"} spacing={3}>
            <Grid item md={3}>
                <InputLabel id="telemetry-vendor">Telemetry Vendor</InputLabel>
            </Grid>
            <Grid item md={3}>
                <Select
                    labelId="telemetry-vendor-label"
                    id="telemetry-vendor-id"
                    value={telemetryVendor}
                    label="Telemetry Vendor"
                    onChange={handleTelemetryVendor}
                    size={"small"}
                    sx={{minWidth: 2/3}}
                >
                    <MenuItem value={'Teltonika'}>Teltonika</MenuItem>
                    <MenuItem value={'Antzer'}>Antzer</MenuItem>
                </Select>
            </Grid>
        </Grid>
        <br />  
        <Grid container direction={"row"} spacing={3}>
                
            <Grid item md={3}>
                <InputLabel id="vehicle-registration-number">Vehicle Registration Number</InputLabel>
            </Grid>
            <Grid item md={3}>
                <TextField
                    title={' Vehicle Registration Number: '}
                    placeholder={'Enter Vehicle Registration Number here'}
                    helperText={"It should be a 9/10 digit string"}
                    type={'text'}
                    value={vehicleRegNo}
                    label={'Enter Vehicle Registration Number here'}
                    variant={'outlined'}
                    onChange={handleVehicleRegNo}
                    size={"small"}
                />
            </Grid>
        </Grid>
        <br />
        <Grid key={3} container direction={"row"} spacing={3}>

            <Grid item md={3}>
                <InputLabel id="vehicle-chassis-number">Vehicle Chassis Number</InputLabel>
            </Grid>
            <Grid item md={3}>
                <TextField
                    title={' Vehicle Chassis Number: '}
                    placeholder={'Enter Vehicle Chassis Number here'}
                    type={'text'}
                    value={vehicleChassisNo}
                    label={'Enter Vehicle Chassis Number here'}
                    variant={'outlined'}
                    onChange={handleChassisNo}
                    size={"small"}
                />
            </Grid>
        </Grid>
        <br />
        <Grid key={10} container direction={"row"} spacing={3}>
                
            <Grid item md={3}>
                <InputLabel id="battery-ebin">Battery EBIN</InputLabel>
            </Grid>
            <Grid item md={3}>
                <TextField
                    title={' Battery EBIN: '}
                    placeholder={'Enter Battery EBIN here'}
                    type={'text'}
                    value={batteryEBIN}
                    label={'Enter Battery EBIN here'}
                    variant={'outlined'}
                    onChange={handleBatteryEBIN}
                    size={"small"}
                />
            </Grid>    
        </Grid>
        <br />
        <Grid key={4} container direction={"row"} spacing={3}>

            <Grid item md={3}>
                <InputLabel id="charger-serial-number">Charger Serial Number</InputLabel>
            </Grid>
            <Grid item md={3}>
                <TextField
                    title={' Charger Serial Number: '}
                    placeholder={'Enter Charger Serial Number here'}
                    type={'text'}
                    value={chargerSNo}
                    label={'Enter Charger Serial Number here'}
                    variant={'outlined'}
                    onChange={handleChargerSNo}
                    size={"small"}
                />
            </Grid>
        </Grid>
        <br />
        <Grid key={5} container direction={"row"} spacing={3}>

            <Grid item md={3} >
                <InputLabel id="hub-name">Hub Name</InputLabel>
            </Grid>
            <Grid item md={3}>
                <Select
                    labelId="hub-name-labelid"
                    id="hub-name-id"
                    value={hubName}
                    label="Hub Name"
                    onChange={handleHubName}
                    size={"small"}
                    sx={{minWidth: 2/3}}
                >
                    {HUB_NAMES.map((x:any,key:any)=>
                        <MenuItem value={x} key={key}>{x}</MenuItem>

                    )}
                    
                    
                </Select>
            </Grid>
        </Grid>
        <br />
        <Grid key={6} container direction={"row"} spacing={3}>

            <Grid item md={3} >
                <InputLabel id="client-name">Client Name</InputLabel>
            </Grid>
            <Grid item md={3}>
                <Select
                    labelId="client-name-labelid"
                    id="client-name-id"
                    value={clientName}
                    label="Client Name"
                    onChange={handleClientName}
                    size={"small"}
                    sx={{minWidth: 2/3}}
                >
                    
                    <MenuItem value="Euler Lease">Euler Lease</MenuItem>
                	<MenuItem value="Big Basket">Big Basket</MenuItem>
                	<MenuItem value="Delhivery">Delhivery</MenuItem>
                	<MenuItem value="Licious">Licious</MenuItem>
                	<MenuItem value="ECom">ECom</MenuItem>
                	<MenuItem value="Flipkart">Flipkart</MenuItem>
                	<MenuItem value="Jiomart">Jiomart</MenuItem>
                	<MenuItem value="Udaan">Udaan</MenuItem>
                	<MenuItem value="Peel-Works">Peel-Works</MenuItem>
                	<MenuItem value="Panasonic">Panasonic</MenuItem>
                	<MenuItem value="Udaan Electronics">Udaan Electronics</MenuItem>
                	<MenuItem value="Amplus">Amplus</MenuItem>
                </Select>
            </Grid>
        </Grid>
        <br />
        <Grid  key={7} container direction={"row"} spacing={3}>

            <Grid item md={3}>
                <InputLabel id="client-hub-name">Client Hub Name</InputLabel>
            </Grid>
            <Grid item md={3}>
                <Select
                    labelId="client-hub-name-labelid"
                    id="client-hub-name-id"
                    value={clientHubName}
                    label="Client Hub Name"
                    onChange={handleClientHubName}
                    size={"small"}
                    sx={{minWidth: 2/3}}
                >

                    <MenuItem value="Big Basket-Okhla">Big Basket-Okhla</MenuItem>
                	<MenuItem value="Big Basket-Mohan Estate">Big Basket-Mohan Estate</MenuItem>
                	<MenuItem value="Big Basket-SPR">Big Basket-SPR</MenuItem>
                	<MenuItem value="Big Basket-Wazirabad">Big Basket-Wazirabad</MenuItem>
                	<MenuItem value="Big Basket-Katariya">Big Basket-Katariya</MenuItem>
                	<MenuItem value="Licious-Kalkaji">Licious-Kalkaji</MenuItem>
                	<MenuItem value="Licious-Lajpat Nagar">Licious-Lajpat Nagar</MenuItem>
                	<MenuItem value="Licious-Sikanderpur">Licious-Sikanderpur</MenuItem>
                	<MenuItem value="ECom-Mohan Estate">ECom-Mohan Estate</MenuItem>
                	<MenuItem value="ECom-Chakkarpur">ECom-Chakkarpur</MenuItem>
                	<MenuItem value="Flipkart-Hero Honda Chowk">Flipkart-Hero Honda Chowk</MenuItem>
                	<MenuItem value="Jiomart-Sector 15">Jiomart-Sector 15</MenuItem>
                	<MenuItem value="Jiomart-Sector 31">Jiomart-Sector 31</MenuItem>
                	<MenuItem value="Euler Lease-Okhla">Euler Lease-Okhla</MenuItem>
                	<MenuItem value="Euler Lease-Gurgaon">Euler Lease-Gurgaon</MenuItem>
                	<MenuItem value="Big Basket-Ghazipur">Big Basket-Ghazipur</MenuItem>
                	<MenuItem value="Big Basket-Mohan Nagar">Big Basket-Mohan Nagar</MenuItem>
                	<MenuItem value="Big Basket-Noida Sector 63">Big Basket-Noida Sector 63</MenuItem>
                	<MenuItem value="Big Basket-Noida Sector 80">Big Basket-Noida Sector 80</MenuItem>
                	<MenuItem value="Big Basket-Greater Noida">Big Basket-Greater Noida</MenuItem>
                	<MenuItem value="Peel-Works-Mandoli">Peel-Works-Mandoli</MenuItem>
                	<MenuItem value="Licious-Ghaziabad">Licious-Ghaziabad</MenuItem>
                	<MenuItem value="Licious-West Vinor Nagar">Licious-West Vinor Nagar</MenuItem>                	
                	<MenuItem value="Flipkart-Sahibabad Site 4">Flipkart-Sahibabad Site 4</MenuItem>                	
                	<MenuItem value="ECom-Patparganj">ECom-Patparganj</MenuItem>                	
                	<MenuItem value="Euler Lease-Ghazipur">Euler Lease-Ghazipur</MenuItem>                	
                	<MenuItem value="Euler Lease-Mandoli">Euler Lease-Mandoli</MenuItem>
                	<MenuItem value="Euler Lease-Mohan Nagar">Euler Lease-Mohan Nagar</MenuItem>
                	<MenuItem value="Big Basket-Peeragarhi">Big Basket-Peeragarhi</MenuItem>
                	<MenuItem value="Licious-Patel Nagar">Licious-Patel Nagar</MenuItem>
                	<MenuItem value="Licious-Paschim Vihar">Licious-Paschim Vihar</MenuItem>
                	<MenuItem value="Euler Lease-Punjabi Bagh">Euler Lease-Punjabi Bagh</MenuItem>
                	<MenuItem value="Flipkart-Wazirpur">Flipkart-Wazirpur</MenuItem>
                	<MenuItem value="Udaan-Okhla">Udaan-Okhla</MenuItem>
                	<MenuItem value="Big Basket-Lawrence Road">Big Basket-Lawrence Road</MenuItem>
                	<MenuItem value="Udaan-Mandoli">Udaan-Mandoli</MenuItem>
                	<MenuItem value="Peel-Works-Dwarka">Peel-Works-Dwarka</MenuItem>
                	<MenuItem value="Big Basket-Chandu">Big Basket-Chandu</MenuItem>
                	<MenuItem value="Panasonic-Udyog Vihar-Gurugram">Panasonic-Udyog Vihar-Gurugram</MenuItem>
                	<MenuItem value="Flipkart-Okhla Phase 1">Flipkart-Okhla Phase 1</MenuItem>
                	<MenuItem value="Udaan Electronics-Praladpur">Udaan Electronics-Praladpur</MenuItem>
                	<MenuItem value="ECom-Samalka">ECom-Samalka</MenuItem>
                </Select>
            </Grid>
        </Grid>
        <br />
        <Grid key={8}  container direction={"row"} spacing={3}>
            <Grid item md={3}>
                <InputLabel id="pass-code">Pass Code</InputLabel>
            </Grid>
            <Grid item md={3}>
                <TextField
                    title={' Pass Code to submit data: '}
                    placeholder={'Enter Pass Code here'}
                    type={'text'}
                    value={passCode}
                    label={'Enter Pass Code here'}
                    variant={'outlined'}
                    onChange={handlePassCode}
                    size={"small"}
                />
            </Grid>    
        </Grid>

        <br></br>

        <Grid key={9} container direction={"row"} spacing={3}>
            <Grid item  md={3}>
                <InputLabel id="registerer">Registerer</InputLabel>
            </Grid>
            <Grid item md={3}>
                <TextField
                    title={' Registerer: '}
                    placeholder={'Enter Your Name Here'}
                    type={'text'}
                    value={registerer}
                    label={'Enter Your Name here'}
                    variant={'outlined'}
                    onChange={handleRegisterer}
                    size={"small"}
                />
            </Grid>
        </Grid>
        <br />

        <Button
            className='button'
            variant="contained"
            onClick={onSubmit}
            >
                Submit
        </Button>


        </div>
    </Box>
    )

}

export default formComponent;


