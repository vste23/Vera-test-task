import React, {useState} from "react";
import "./networkDiagram.css";
import NetworkControls from "./networkControls";
import SubnetsList from "./subnetsList";

const INITIAL_STATE = [
    {
        name: "subnet-1",
        ip: "192.168.1.1",
        ec2_servers: ["124.234.1.1", "124.234.1.1", "124.234.1.1"],
        key: Date.now()
    }
];

export default function NetworkDiagram(prop) {
    const [ subnets, setSubnets ] = useState(INITIAL_STATE);

    return (
        <>
            <NetworkControls subnets={subnets} setSubnets={setSubnets}/>
            <div className="network-wrap">
                <h3>Region</h3>
                <SubnetsList subnets={subnets}/>
            </div>
        </>
    );
}
