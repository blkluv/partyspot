import Button from "@/src/components/common/button";
import { Slider } from "@/src/components/common/slider";
import { ammenities } from "@/src/data/ammenities";

function Ammenities() {
  return (
    <Slider className="max-w-4xl">
      {ammenities.map((ammenity) => (
        <Button key={ammenity.id} variant="outline" size="default">
          {ammenity.name}
        </Button>
      ))}
    </Slider>
  );
}

export default Ammenities;
