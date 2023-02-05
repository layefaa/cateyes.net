import React from 'react';
import {routes} from "@/constants";
import {MorvaText, NavLink} from "@/components/atoms";

const Links: React.FC = () => {
  return (
      <div>
        <MorvaText>
          {routes.map((r, index) => (
              <NavLink key={index} name={r.name} route={r.route}/>
          ))}
        </MorvaText>
      </div>
  );
};

export default Links;

