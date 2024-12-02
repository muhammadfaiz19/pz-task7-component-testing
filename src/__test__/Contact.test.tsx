import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../pages/Contact"; 

describe("Contact Page", () => {
  it("submits the form with valid data", async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Your Name"), {
      target: { value: "Muhammad Faiz" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Email"), {
      target: { value: "faiz@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Message"), {
      target: { value: "This is a test message!" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Send Message"));

    // Wait for the form submission to trigger console.log
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith(
        "Form Data Submitted:", // The first argument
        expect.objectContaining({
          name: "Muhammad Faiz",
          email: "faiz@example.com",
          message: "This is a test message!",
        }) // The second argument (the form data)
      );
    });
  });
});
