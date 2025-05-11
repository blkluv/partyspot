import Button from "@/components/common/button";
import { Slider } from "@/components/common/slider";
import { amenities } from "@/data/amenities";

function Amenities() {
  return (
    <Slider className="w-full max-w-full md:max-w-3xl lg:max-w-4xl">
      {amenities.map((amenity) => (
        <Button
          key={amenity.id}
          variant="outline"
          size="sm"
          className="md:size-default text-xs whitespace-nowrap md:text-sm"
        >
          {amenity.name}
        </Button>
      ))}
    </Slider>
  );
}

export default Amenities;
