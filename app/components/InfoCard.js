import HeartButton from "./HeartButton";
import { AiFillStar } from "react-icons/ai";

const InfoCard = (props) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            src={props.cover}
            alt={props.name}
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
          />
          <div className="
              absolute
              top-3
              right-3"
          >
            <HeartButton />
          </div>
        </div>



        <div className="font-semibold text-lg flex items-center justify-between gap-1">
          <span className="truncate">{props.location}</span>
          <div className="flex items-center gap-1">
            <AiFillStar className="h-5 w-5 text-yellow-500" />
            <span className="text-s">{props.rating}</span>
          </div>
        </div>

        {/* <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div> */}
        <div className="font-light text-l">{props.name}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">{props.price} €</div>
          <div className="font-light">par nuit</div>
        </div>

      </div>
    </div>
  );
};

export default InfoCard;