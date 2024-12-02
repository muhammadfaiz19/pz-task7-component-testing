import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "../components/Form";
import "@testing-library/jest-dom"

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

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

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

    // Klik tombol kirim
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    // Tunggu dan pastikan alert dipanggil setelah submit
    await waitFor(() => expect(global.alert).toHaveBeenCalledWith("Your message has been sent successfully!"));

    // Pastikan form sudah direset
fireEvent.change(screen.getByPlaceholderText("Your Name") as HTMLInputElement, {
  target: { value: "John Doe" },
});
fireEvent.change(screen.getByPlaceholderText("Your Email") as HTMLInputElement, {
  target: { value: "john.doe@example.com" },
});
fireEvent.change(screen.getByPlaceholderText("Your Message") as HTMLTextAreaElement, {
  target: { value: "Hello, this is a test message." },
});

  });
});
