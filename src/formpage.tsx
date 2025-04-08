import { useState } from "react";
import { submitForm } from "./redux/features/FormSlice";
import { useAppDispatch } from "./redux/App/hooks";
import UserData from "./UserData";
interface datatype {
  name: string;
  email: string;
  phone: string;
  age: string;
}

function StaticForm() {
  const disatch = useAppDispatch();
  const [formdata, setformdata] = useState<datatype>({
    name: "",
    email: "",
    phone: "",
    age: "",
  });
  const [submittedForm, setSubmittedForm] = useState<datatype>();

  const handalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.reload();

    setSubmittedForm(formdata);
    setformdata({
      name: "",
      age: "",
      phone: "",
      email: "",
    });
    disatch(submitForm(formdata));
    alert("Form Submitted");
  };
  const handalchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(submittedForm);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Static User Form</h2>
      <form className="space-y-3" onSubmit={handalSubmit}>
        <input
          type="text"
          name="name"
          value={formdata.name}
          placeholder="Name"
          onChange={handalchange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handalchange}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          value={formdata.phone}
          onChange={handalchange}
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formdata.age}
          onChange={handalchange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      <UserData />
    </div>
  );
}

export default StaticForm;
