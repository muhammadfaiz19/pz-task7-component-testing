import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../components/Hero";

describe("Hero Component", () => {
  it("renders profile image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const profileImage = screen.getByTestId("profile-image");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("alt", "profile");
  });

  it("renders heading with typing effect", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const heading = screen.getByTestId("hero-heading");
    expect(heading).toBeInTheDocument();
  });

  it("navigates to contact page on button click", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const button = screen.getByText("Get in Touch");
    fireEvent.click(button);
  });

  it("renders social media icons", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const socialIcons = screen.getByTestId("social-icons");
    expect(socialIcons).toBeInTheDocument();
  });
});
