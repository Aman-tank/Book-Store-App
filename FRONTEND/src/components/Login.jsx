import { useState } from "react";
import { useForm } from "react-hook-form"

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} >
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            </form>

            <h3 className="font-bold text-2xl text-center">{currentState}</h3>
            <div className="flex flex-col justify-center mt-4 gap-2">
              {currentState === "Signup" ? (
                <>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="px-3 py-2 border rounded-md outline-none"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-red-600">This field is required*</span>}
                </>
              ) : (
                ""
              )}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-600">This field is required*</span>}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-600">This field is required*</span>}
            </div>
            <div className="flex items-center justify-between mt-6 px-4">
              <button className="bg-pink-500 text-white hover:bg-pink-600 duration-200 px-4 py-2 rounded-md">
                {currentState}
              </button>

              {currentState === "Login" ? (
                <p>
                  Not registered?{" "}
                  <span
                    onClick={() => setCurrentState("Signup")}
                    className="underline text-pink-500 hover:text-pink-600 cursor-pointer"
                  >
                    Signup
                  </span>
                </p>
              ) : (
                <p>
                  Already registered?{" "}
                  <span
                    onClick={() => setCurrentState("Login")}
                    className="underline text-pink-500 hover:text-pink-600 cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
