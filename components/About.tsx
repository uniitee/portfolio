"use client";

import FootstepTrail from "./FootstepTrail";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="grid grid-rows-2 gap-2">
          <div>grid 1</div>
          <div>grid 2</div>
        </div>
        <div className="grid grid-rows-3 gap-2">
          <div> grid 3</div>
          <div> grid 4</div>
          <div> grid 5</div>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div> grid 6</div>
          <div> grid 7</div>
        </div>
      </div>
    </div>
  );
}

export default About