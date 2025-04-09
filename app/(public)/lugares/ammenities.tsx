import Button from "@/components/common/button";
import { Slider } from "@/components/common/slider";
import { ammenities } from "@/data/ammenities";

function Ammenities() {
  return (
    <Slider className="w-full max-w-full md:max-w-3xl lg:max-w-4xl">
      {ammenities.map((ammenity) => (
        <Button
          key={ammenity.id}
          variant="outline"
          size="sm"
          className="md:size-default text-xs whitespace-nowrap md:text-sm"
        >
          {ammenity.name}
        </Button>
      ))}
    </Slider>
  );
}

export default Ammenities;
