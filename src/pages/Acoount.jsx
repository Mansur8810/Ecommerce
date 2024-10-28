import React from "react";
import AccountForm from "../Components/AccountForm";
import Footer from "../Components/Footer";

const Acoount = () => {
  return (
    <section className="container">
      
      <div >
      <article className="flex  justify-between items-center">
  <div className="flex  items-center space-x-2">
    <a href="home" className="text-gray-400">
      Home
    </a>
    <span className="text-gray-400">/</span>
    <a href="my-account">My Account</a>
  </div>

  <a href="welcome" className="text-gray-600">
    Welcome! <span className="text-primary">Md Rimel</span>
  </a>
</article>

      <div className=" flex flex-wrap justify-between items-center">

        <article className="space-y-4 flex flex-col md:justify-center">
          <div className="flex-col  items-center space-y-2">
            <h3 className="text-lg font-medium">Manage My Account</h3>
            <ul className="*:cursor-pointer *:text-sm   px-6">
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
          <div className="flex-col justify-center items-center space-y-2">
            <h3 className="text-lg font-medium">My Orders</h3>
            <ul className="*:cursor-pointer *:text-sm px-6">
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>
          <h3 className="text-lg font-medium">My WishList</h3>
        </article>
        <AccountForm/>
      </div>
    </div>
      <Footer/>
    </section>
  );
};

export default Acoount;
