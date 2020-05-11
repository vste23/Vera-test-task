import React from "react";
import "./subnetList.css";

export default function SubnetList(props) {
  return (
    <div className="subnet-list-wrap">
      {props.subnets.map((s) => (
        <div
          className="subnet-wrap"
          key={s.key}
          onClick={() => alert(`CLICKED ON SUBNET: ${s.name}`)}
        >
          <div className="subnet-ec2">
            <div className="subnet-ec2-ips">
              {s.ec2_servers.map((ec2_ip, i) => (
                <span key={i}>{ec2_ip}</span>
              ))}
            </div>
            <div className="subnet-ec2-icons">
              {s.ec2_servers.map((ec2_ip, i) => (
                <div
                  key={i}
                  className="ec2-icon"
                  onClick={(e) => {alert(`CLICKED ON EC2 INSTANCE: ${ec2_ip}`); e.stopPropagation();}}
                  style={{ marginLeft: 10 * ++i }}
                ></div>
              ))}
              <div className="ec2-icons-label">Ec2 instances</div>
            </div>
          </div>
          <div className="subnet-stats">
            <div className="subnet-name">{s.name}</div>
            <div className="subnet-ip">{s.ip}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
