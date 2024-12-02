import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import Form from "../components/Form";
import "@testing-library/jest-dom";

global.alert = jest.fn();

describe("Form Component", () => {
  it("renders form elements correctly", () => {
    render(<Form />);

    // Memastikan input untuk name, email, dan message muncul
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Message")).toBeInTheDocument();
  });

  it("shows validation errors when the form is submitted with missing data", async () => {
    render(<Form />);

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    });

    // Memastikan pesan kesalahan muncul untuk field yang kosong
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/message is required/i)).toBeInTheDocument();
  });

  it("submits the form correctly when all fields are filled", async () => {
    render(<Form />);

    // Mengisi form dengan data valid
    fireEvent.change(screen.getByPlaceholderText("Your Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Message"), {
      target: { value: "Hello, this is a test message." },
    });

    // Klik tombol kirim di dalam act()
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    });

    // Tunggu dan pastikan alert dipanggil setelah submit
    await waitFor(() =>
      expect(global.alert).toHaveBeenCalledWith(
        "Your message has been sent successfully!"
      )
    );

    // For input elements
    const nameInput = screen.getByPlaceholderText(
      "Your Name"
    ) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText(
      "Your Email"
    ) as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText(
      "Your Message"
    ) as HTMLTextAreaElement;

    // Then use `value` safely
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });
});
