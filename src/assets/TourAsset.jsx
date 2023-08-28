import { MdOutlineTour, MdTour } from "react-icons/md";

export default function TourAsset(isSelected) {
  return (
    <div className="w-full h-full">
      {isSelected ? <MdOutlineTour size="24" /> : <MdTour size="24" />}
    </div>
  );
}
