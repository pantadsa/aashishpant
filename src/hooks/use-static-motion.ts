import { useSyncExternalStore } from "react";
import { STATIC_MOTION_QUERY } from "@/lib/motion-policy";

let media: MediaQueryList | undefined;
const listeners = new Set<() => void>();
const getMedia = () => media ??= window.matchMedia(STATIC_MOTION_QUERY);
const notify = () => listeners.forEach((listener) => listener());
const subscribe = (listener: () => void) => {
  const query = getMedia();
  if (listeners.size === 0) query.addEventListener("change", notify);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) query.removeEventListener("change", notify);
  };
};
const getSnapshot = () => getMedia().matches;

export const useStaticMotion = () => useSyncExternalStore(subscribe, getSnapshot, () => true);