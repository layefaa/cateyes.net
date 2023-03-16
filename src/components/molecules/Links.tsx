'use client'
import {routes} from "@/constants";
import {NavLink} from "@/components/atoms";
import {m} from "framer-motion";
import {parentVariants} from "@/utils/motion";

const Links = () => {
  return (
      <m.div variants={parentVariants(.5)}
                  className={'flex flex-col items-center justify-between md:flex-row  h-full w-full'}>
        {routes.map((r, index) => (
            <NavLink key={index} name={r.name} route={r.route}/>
        ))}
      </m.div>
  );
};

export default Links;

