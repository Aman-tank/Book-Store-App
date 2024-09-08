const Contact = () => {
  return (
    <div className="flex items-center justify-center max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="m-28 w-[540px] px-20 py-8 flex flex-col gap-8 border-[2px] rounded-lg shadow-lg">
        <form action="">
          <h1 className="text-center text-2xl font-bold">Contact Us</h1>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="px-3 py-2 border rounded-md outline-none"
            />
            <label htmlFor="name">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-3 py-2 border rounded-md outline-none"
            />
            <label htmlFor="name">Message</label>
            <textarea
              placeholder="Enter your Message"
              className="px-3 py-2 border rounded-md outline-none"
            ></textarea>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button className="bg-pink-500 text-white px-4 py-2 w-full rounded-md hover:bg-pink-600 duration-300 hover:scale-95">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
