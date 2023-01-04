import { h2 } from "./typography";
import { palette } from "./colors";

export const primaryBtn = {
    ...h2,
    backgroundColor: palette.frostbite,
    color: palette.lavenderBlush,
};

export const secondaryBtn = {
    backgroundColor: 'none',
    ...h2,
};