import React, { useState } from "react";
import "./networkControls.css";
export default function NetworkControls({ subnets, setSubnets }) {
  // const addNew = () => {
  //     props.setSubnets
  // }
  const [newMode, setNewMode] = useState(null);

  const setNewModeField = (field, value) => {
    setNewMode({
      ...newMode,
      [field]: value,
    });
  };

  const addNew = () => {
    setNewMode({ ec2_servers: [], key: Date.now(), new_ec2: "" });
  };

  const submitNewEc2 = () => {
    setNewMode({
      ...newMode,
      ec2_servers: [...newMode.ec2_servers, newMode.new_ec2],
      new_ec2: "",
    });
  };

  const submitNewSubnet = () => {
    console.log(newMode);
    setSubnets([
      ...subnets,
      newMode
    ]);
    setNewMode(null);
  }

  return (
    <div className="network-controls">
      <section>
        <h4>Submitted submets</h4>
        <ol>
          {subnets.map((s, i) => (
            <li key={i}>
              <strong>{s.name}</strong>
            </li>
          ))}
        </ol>
      </section>
      {!newMode && <button onClick={addNew}>Add new</button>}
      {newMode && (
        <>
          <section>
            <h5>Name</h5>
            <input
              value={newMode.name}
              onChange={(e) => setNewModeField("name", e.target.value)}
              maxLength="15"
              placeholder="Subnet name"
            />
            <h5>IP</h5>
            <input
              value={newMode.ip}
              onChange={(e) => setNewModeField("ip", e.target.value)}
              maxLength="15"
              placeholder="Subnet IP"
            />
          </section>
          <fieldset label="EC2 instances" className="instances-form">
            <ul>
              {newMode.ec2_servers.map((ec2, i) => (
                <li key={i} >{ec2}</li>
              ))}
            </ul>
            <input
              value={newMode.new_ec2}
              onChange={(e) => setNewModeField("new_ec2", e.target.value)}
              maxLength="15"
              placeholder="Instance IP"
            />
            {newMode && newMode.ec2_servers && newMode.ec2_servers.length < 20 && <button onClick={submitNewEc2}>Add IP</button>}
          </fieldset>
          {newMode && !!newMode.ec2_servers.length && <button onClick={submitNewSubnet}>Submit</button>}
        </>
      )}
    </div>
  );
}
