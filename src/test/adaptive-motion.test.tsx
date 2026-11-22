import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { motion } from "@/components/adaptive-motion";

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

it("renders mobile content immediately at its final width without motion styles", () => {
  vi.stubGlobal("matchMedia", vi.fn(() => ({
    matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn(),
  })));
  render(<motion.div data-testid="bar" initial={{ opacity: 0, width: 0, y: 30 }}
    whileInView={{ opacity: 1, width: "85%", y: 0 }} viewport={{ once: true }} />);
  const element = screen.getByTestId("bar");
  expect(element.style.width).toBe("85%");
  expect(element.style.opacity).toBe("");
  expect(element.style.transform).toBe("");
  expect(element.hasAttribute("whileInView")).toBe(false);
});