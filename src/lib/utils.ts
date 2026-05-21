import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Register the custom type-ramp utilities defined in src/app/globals.css
// so tailwind-merge knows they are font-size classes (not text-color),
// and doesn't drop them when colocated with text-foreground / text-muted-foreground.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-1",
            "display-2",
            "display-3",
            "subhead",
            "lead",
            "body-lg",
            "label",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
