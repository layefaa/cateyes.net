'use client'
import {routes} from "@/constants";
import {NavLink} from "@/components/atoms";
import {motion} from "framer-motion";
import {parentVariants} from "@/utils/motion";

const Links = () => {
  return (
      <motion.div variants={parentVariants(.5)}
                  className={'flex flex-col items-center justify-between md:flex-row  h-full w-full'}>
        {routes.map((r, index) => (
            <NavLink key={index} name={r.name} route={r.route}/>
        ))}
      </motion.div>
  );
};

export default Links;

