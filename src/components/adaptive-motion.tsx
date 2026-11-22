import { createElement, forwardRef } from "react";
import { isValidMotionProp, motion as animatedMotion, type HTMLMotionProps } from "framer-motion";
import { useStaticMotion } from "@/hooks/use-static-motion";

// Keep the same markup and final progress-bar width, but do not mount Motion
// observers, animation drivers, or entrance transforms on mobile.
function adaptive<Tag extends "div" | "span" | "article" | "form" | "p">(tag: Tag) {
  return forwardRef<HTMLElement, HTMLMotionProps<Tag>>((props, ref) => {
    const staticMotion = useStaticMotion();
    if (!staticMotion) return createElement(animatedMotion[tag], { ...props, ref } as never);

    const domProps: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(props)) {
      if (!isValidMotionProp(key)) domProps[key] = value;
    }
    const motionProps = props as HTMLMotionProps<"div">;
    const target = motionProps.whileInView ?? motionProps.animate;
    if (target && typeof target === "object" && "width" in target) {
      domProps.style = { ...motionProps.style, width: target.width };
    }
    return createElement(tag, { ...domProps, ref });
  });
}

export const motion = {
  div: adaptive("div"), span: adaptive("span"), article: adaptive("article"),
  form: adaptive("form"), p: adaptive("p"),
};