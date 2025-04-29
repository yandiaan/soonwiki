import type { Gradient } from "@/types/ui/gradient";

export function generateGradientClass(gradient?: Gradient): string {
  if (!gradient) {
    return "";
  }

  const darkGradient = `dark:from-${gradient.dark.from} dark:to-${gradient.dark.to}`;
  const lightGradient = `from-${gradient.light.from} to-${gradient.light.to}`;

  return `${lightGradient} ${darkGradient}`;
}

function isHexColor(color: string): boolean {
  return /^#([0-9A-Fa-f]{3}){1,2}$/.test(color);
}

function convertHexToTailwindColor(hex: string): string {
  if (!isHexColor(hex)) {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  return `[${hex}]`;
}

export function generateGradientClassUnified(gradient?: Gradient): string {
  if (!gradient) {
    return "";
  }

  const formatColor = (color: string) =>
    isHexColor(color) ? convertHexToTailwindColor(color) : color;

  const darkGradient = `dark:from-${formatColor(gradient.dark.from)} dark:to-${formatColor(gradient.dark.to)}`;
  const lightGradient = `from-${formatColor(gradient.light.from)} to-${formatColor(gradient.light.to)}`;

  return `${lightGradient} ${darkGradient}`;
}
