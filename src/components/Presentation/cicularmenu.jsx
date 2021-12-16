import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

export default function TestMenuComponent() {
  return (
    <div>
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={2}
        radius={5}
        /**
         * rotationAngleInclusive (default true)
         * Whether to include the ending angle in rotation because an
         * item at 360deg is the same as an item at 0deg if inclusive.
         * Leave this prop for angles other than 360deg unless otherwise desired.
         */
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip="Email"
          tooltipPlacement="right"
        >
          <MailIcon />
        </CircleMenuItem>
        <CircleMenuItem tooltip="Help">
          <HelpOutlineIcon />
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
}
