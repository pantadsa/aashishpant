import { describe, expect, it } from "vitest";
import { shouldUseStaticMotion } from "@/lib/motion-policy";

describe("mobile motion policy", () => {
  it("disables non-essential motion at 320, 375, 390 and 414px", () => {
    for (const width of [320, 375, 390, 414]) expect(shouldUseStaticMotion(width, false, false)).toBe(true);
  });
  it("preserves desktop animations at 768px and above with a fine pointer", () => {
    for (const width of [768, 926, 1440]) expect(shouldUseStaticMotion(width, false, false)).toBe(false);
  });
  it("respects reduced motion on desktop", () => {
    expect(shouldUseStaticMotion(1440, false, true)).toBe(true);
  });
  it("disables desktop effects on touch devices including tablets", () => {
    expect(shouldUseStaticMotion(768, true, false)).toBe(true);
  });
});