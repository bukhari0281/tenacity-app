import { describe, it, expect } from "vitest";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight,
  hoverScale,
  tapScale,
  cardHover,
} from "@/lib/animations";

describe("Animation Variants", () => {
  describe("fadeInUp", () => {
    it("should have hidden state with opacity 0 and y offset", () => {
      expect(fadeInUp.hidden).toEqual({ opacity: 0, y: 30 });
    });

    it("should have visible state with full opacity and no offset", () => {
      expect(fadeInUp.visible).toMatchObject({ opacity: 1, y: 0 });
    });

    it("should have easeOut transition in visible state", () => {
      const visible = fadeInUp.visible as { transition: { duration: number; ease: string } };
      expect(visible.transition.ease).toBe("easeOut");
      expect(visible.transition.duration).toBe(0.6);
    });
  });

  describe("fadeIn", () => {
    it("should have hidden state with only opacity 0", () => {
      expect(fadeIn.hidden).toEqual({ opacity: 0 });
    });

    it("should have visible state with full opacity", () => {
      expect(fadeIn.visible).toMatchObject({ opacity: 1 });
    });

    it("should have correct transition properties", () => {
      const visible = fadeIn.visible as { transition: { duration: number; ease: string } };
      expect(visible.transition.duration).toBe(0.5);
      expect(visible.transition.ease).toBe("easeOut");
    });
  });

  describe("staggerContainer", () => {
    it("should have hidden state with opacity 0", () => {
      expect(staggerContainer.hidden).toEqual({ opacity: 0 });
    });

    it("should have staggerChildren and delayChildren in transition", () => {
      const visible = staggerContainer.visible as {
        transition: { staggerChildren: number; delayChildren: number };
      };
      expect(visible.transition.staggerChildren).toBe(0.1);
      expect(visible.transition.delayChildren).toBe(0.1);
    });
  });

  describe("scaleUp", () => {
    it("should have hidden state with reduced scale", () => {
      expect(scaleUp.hidden).toEqual({ opacity: 0, scale: 0.8 });
    });

    it("should have visible state with full scale", () => {
      expect(scaleUp.visible).toMatchObject({ opacity: 1, scale: 1 });
    });
  });

  describe("slideInLeft", () => {
    it("should have hidden state with negative x offset", () => {
      expect(slideInLeft.hidden).toEqual({ opacity: 0, x: -50 });
    });

    it("should have visible state with x at 0", () => {
      expect(slideInLeft.visible).toMatchObject({ opacity: 1, x: 0 });
    });
  });

  describe("slideInRight", () => {
    it("should have hidden state with positive x offset", () => {
      expect(slideInRight.hidden).toEqual({ opacity: 0, x: 50 });
    });

    it("should have visible state with x at 0", () => {
      expect(slideInRight.visible).toMatchObject({ opacity: 1, x: 0 });
    });
  });

  describe("hoverScale", () => {
    it("should scale up slightly on hover", () => {
      expect(hoverScale.scale).toBe(1.02);
    });

    it("should have quick transition duration", () => {
      expect(hoverScale.transition.duration).toBe(0.3);
    });
  });

  describe("tapScale", () => {
    it("should scale down slightly on tap", () => {
      expect(tapScale.scale).toBe(0.98);
    });
  });

  describe("cardHover", () => {
    it("should move up on hover", () => {
      expect(cardHover.y).toBe(-8);
    });

    it("should have box shadow effect", () => {
      expect(cardHover.boxShadow).toContain("rgb(0 0 0 / 0.1)");
    });

    it("should have proper transition with easeOut (as const)", () => {
      // This tests that the 'as const' assertion is properly typed
      expect(cardHover.transition.ease).toBe("easeOut");
      expect(cardHover.transition.duration).toBe(0.3);
    });

    it('should have ease property typed as literal "easeOut" not string', () => {
      // TypeScript compile-time check - this would fail if ease was typed as 'string'
      const ease: "easeOut" = cardHover.transition.ease;
      expect(ease).toBe("easeOut");
    });
  });
});

describe("Animation Type Safety", () => {
  it("all Variants should have hidden and visible states", () => {
    const variants = [fadeInUp, fadeIn, staggerContainer, scaleUp, slideInLeft, slideInRight];

    variants.forEach((variant) => {
      expect(variant).toHaveProperty("hidden");
      expect(variant).toHaveProperty("visible");
    });
  });

  it("all visible states with transitions should use easeOut", () => {
    const variantsWithTransition = [fadeInUp, fadeIn, scaleUp, slideInLeft, slideInRight];

    variantsWithTransition.forEach((variant) => {
      const visible = variant.visible as { transition: { ease: string } };
      expect(visible.transition.ease).toBe("easeOut");
    });
  });
});
