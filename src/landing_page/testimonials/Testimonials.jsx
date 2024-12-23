import React from "react";
const Testimonials = () => {
  return (
    <div className="w-full flex flex-col span_bg p-4 mt-8">
      <h1 className="font-bold text-2xl">Why Choose DonateVerse?</h1>
      <div className="lg:w-full md:w-full flex flex-col-reverse md:flex-row lg:flex-row justify-between gap-2">
        <div className="lg:w-1/2 md:w-1/2 text-balance mt-4">
          <p>
            Join a secure fundraising DApp where you can create campaigns and
            donate with confidence. Our platform ensures transparency with a
            chat feature to connect with campaign creators and rewards for your
            generosity. Together, we support the poor, needy, and those in need
            of help.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-1/2 flex justify-between">
          <span className="hidden lg:flex md:flex"></span>
          <img src="/poor.png" alt="" className="size-64" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
