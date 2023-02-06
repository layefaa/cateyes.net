import React from 'react';
import {routes} from "@/constants";
import {NavLink} from "@/components/atoms";

const Links: React.FC = () => {
  return (

      <div className={'flex flex-col items-center justify-between md:flex-row  h-full w-full'}>
        {routes.map((r, index) => (
            <NavLink key={index} name={r.name} route={r.route}/>
        ))}
      </div>
  );
};

export default Links;

