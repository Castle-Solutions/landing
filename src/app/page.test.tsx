import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Landing Page Seam", () => {
  it("renders the Castle Solutions brand title", () => {
    render(<Page />);
    const heading = screen.getByRole("heading", { level: 1, name: /Castle Solutions/i });
    expect(heading).toBeDefined();
  });

  it("renders the value proposition headline", () => {
    render(<Page />);
    expect(screen.getByText(/Ingeniería de Software & Soluciones de Inteligencia Artificial/i)).toBeDefined();
  });

  it("renders the Coming Soon indicator badge", () => {
    render(<Page />);
    expect(screen.getByText(/Próximamente/i)).toBeDefined();
  });

  it("renders a direct contact email link pointing to contacto@castlesolutions.com.co", () => {
    render(<Page />);
    const contactLinks = screen.getAllByRole("link");
    const mailtoLink = contactLinks.find((link) =>
      link.getAttribute("href")?.startsWith("mailto:contacto@castlesolutions.com.co")
    );
    expect(mailtoLink).toBeDefined();
  });

  it("renders the core capability cards", () => {
    render(<Page />);
    expect(screen.getByRole("heading", { level: 3, name: /Arquitectura de Software/i })).toBeDefined();
    expect(screen.getByRole("heading", { level: 3, name: /Inteligencia Artificial Aplicada/i })).toBeDefined();
    expect(screen.getByRole("heading", { level: 3, name: /Infraestructura Cloud & DevOps/i })).toBeDefined();
  });
});
