import Form from "../../components/Form";

const Contact = () => {
  return (
    <div className="min-h-screen bg-primary flex justify-center items-center py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center text-text mb-6">
          Contact Me
        </h1>
        <p className="text-lg text-center text-text mb-6">
          Feel free to reach out! I'd love to hear from you.
        </p>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
