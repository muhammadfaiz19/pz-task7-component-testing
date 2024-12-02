import { useFormik } from "formik";
import * as Yup from "yup"; // To validate with Yup
import Button from "../Button";

const Form: React.FC = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
      alert("Your message has been sent successfully!");

      // Optionally clear the form after submission
      formik.resetForm();
    },
  });

  return (
    <form
      className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
      onSubmit={formik.handleSubmit}
    >
      {/* Name Input */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        )}
      </div>

      <Button
        type="submit"
        title="Send Message"
        onClick={formik.handleSubmit}
        width="w-full"
      />
    </form>
  );
};

export default Form;
