import type { Image } from "@xcpcio/types";
import zzuli_logo from "@board/assets/zzuli.png";

export function GET_LOGO_ZZULI(): Image {
  const image: Image = {};
  image.url = zzuli_logo;

  return image;
}
