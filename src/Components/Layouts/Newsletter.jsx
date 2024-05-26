const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row my-6">
      <div className=" bg-slate-100 p-10 rounded-l-lg">
        <h2 className="font-serif text-2xl md:text-3xl">
          Sign Up for Our Newsletter
        </h2>
<p>Save up to 50% on tours and trips. Get instant access to lower prices.</p>
        <div className="my-4 text-left">
          <input
            type="email"
            className="py-3 rounded-l-lg lg:px-10"
            placeholder=" Your Email Address"
          />
          <input type="button"  className="py-3 text-white bg-orange-500 px-6 rounded-r-lg" value="Subscribe" />
        </div>
      </div>
      <div className=" bg-slate-200 p-10 rounded-r-lg space-y-3">
        <h1 className="font-serif text-2xl md:text-3xl">
          24/7 Customer Support
        </h1>
        <p>Contact us now to have all of your tour-related question answered.</p>
        <button className="btn py-4 px-8 text-white bg-yellow-600">Chat Now</button>
      </div>
    </div>
  );
};

export default Newsletter;
