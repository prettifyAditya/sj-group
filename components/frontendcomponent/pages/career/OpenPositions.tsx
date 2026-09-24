import type { Ref } from "react";
import PoistionsCol from "@/components/frontendcomponent/molecules/PoistionsCol";

interface OpenPositionsProps {
  ref?: Ref<HTMLDivElement>;
}

export default function OpenPositions({ ref }: OpenPositionsProps) {
  return (
    <section>
      <div className="open_positions_sec sec-pad" ref={ref}>
        <div className="container">
          <div className="main_wrapper">
            <div className="heading">
              <p>Open positions(16)</p>
              <h2>Find a Position That Suits You</h2>
            </div>
            <div className="open_wrapper">
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
              <PoistionsCol
                positionName="Digital Designer"
                positionLoc="Gurgaon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
