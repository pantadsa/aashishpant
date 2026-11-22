export const STATIC_MOTION_QUERY = "(max-width: 767px), (pointer: coarse), (prefers-reduced-motion: reduce)";

export function shouldUseStaticMotion(width: number, coarsePointer: boolean, reducedMotion: boolean) {
  return width < 768 || coarsePointer || reducedMotion;
}