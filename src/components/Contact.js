const Contact = () => {
  return (
    <div>
      <h1 className="font-bold p-4 m-4 text-xl">Contact Us Page</h1>
      <input
        type="text"
        className="border border-black p-2 m-2"
        placeholder="message"
      ></input>
      <input
        type="text"
        className="border border-black p-2 m-2"
        placeholder="message"
      ></input>
      <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

export default Contact;
