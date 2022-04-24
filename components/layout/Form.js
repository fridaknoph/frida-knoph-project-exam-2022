import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your First Name")
    .min(3, "Must be at least 3 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your Message")
    .min(10, "Must be at least 10 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>Name</div>
        <input className="form__input" {...register("firstname")} />
        {errors.firstname && <span>{errors.firstname.message}</span>}

        <div>Email</div>
        <input className="form__input" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <div>Your Message</div>
        <input className="form__input__message" {...register("message")} />
        {errors.message && <span>{errors.message.message}</span>}

        <button className="default__button">Send</button>
      </form>
    </div>
  );
}
