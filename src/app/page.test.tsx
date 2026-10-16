import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LandingPage from "./page";
import { siteConfig } from "@/config/site";

describe("Landing Page Seam", () => {
  it("renders the Castle Solutions brand title into the document", () => {
    render(<LandingPage />);
    const heading = screen.getByRole("heading", { level: 1, name: /Castle Solutions/i });
    expect(document.body.contains(heading)).toBe(true);
  });

  it("renders the value proposition headline into the document", () => {
    render(<LandingPage />);
    const headline = screen.getByText(new RegExp(siteConfig.tagline, "i"));
    expect(document.body.contains(headline)).toBe(true);
  });

  it("renders the Coming Soon indicator badge", () => {
    render(<LandingPage />);
    const badge = screen.getByText(/Próximamente/i);
    expect(document.body.contains(badge)).toBe(true);
  });

  it("renders a direct contact email link pointing to contacto@castlesolutions.com.co", () => {
    render(<LandingPage />);
    const contactLinks = screen.getAllByRole("link");
    const mailtoLink = contactLinks.find((link) =>
      link.getAttribute("href")?.startsWith(`mailto:${siteConfig.contactEmail}`)
    );
    expect(mailtoLink).toBeTruthy();
    expect(mailtoLink?.getAttribute("href")).toContain(siteConfig.contactEmail);
    expect(document.body.contains(mailtoLink!)).toBe(true);
  });

  it("renders the core capability cards with non-vacuous DOM verification", () => {
    render(<LandingPage />);
    for (const pillar of siteConfig.pillars) {
      const cardHeading = screen.getByRole("heading", { level: 3, name: new RegExp(pillar.title, "i") });
      expect(document.body.contains(cardHeading)).toBe(true);
    }
  });
});
