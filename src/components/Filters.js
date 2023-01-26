import Filter from "./Filter";

import { GiBoatFishing, GiFamilyHouse, GiForest} from "react-icons/gi";
import { FaSwimmingPool, FaKey } from "react-icons/fa";
import { MdLandscape, MdKayaking, MdWater, MdSurfing } from "react-icons/md";

function Filters() {

    const choice= [
        {
            title: 'Fishing',
            icon: <GiBoatFishing />
        },
        {
            title: 'Family House',
            icon: <GiFamilyHouse  />
        },
        {
            title: 'SwimmingPool',
            icon: <FaSwimmingPool />
        },
        {
            title: 'Private',
            icon: <FaKey />        
        },
        {
            title: 'National parks',
            icon: <GiForest />        
        },
        {
            title: 'Amazing views',
            icon: <MdLandscape />        
        },
        {
            title: 'Lakefront',
            icon: <MdWater />        
        },
        {
            title: 'Surfing',
            icon: <MdSurfing />        
        },
        {
            title: 'Kayak',
            icon: <MdKayaking />        
        },
    ]

    return (
        <div className="   ">
          <div className="p-4 m-0 flex align-center gap-3 mt-4  ">
            {choice.map((obj) => (
              <Filter title={obj.title} icon={obj.icon} />
            ))}
          </div>
        </div>
      );
};


export default Filters;
