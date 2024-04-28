import React from "react";
import "./Home.css";
import AboutJoe from "../assets/About Joe's Deli.png";

function Home() {
  return (
    <>
      <div class="container" style={{ textAlign: "center" }}>
        <h1 className="text-4xl font-bold">Order Your Food At our Deli!</h1>
        <p>
          <h3 className="text-xl my-5 font-bold">Joe’s Deli and Grill</h3>
          Provide a convenient one-stop location for essentials.
          <br />
          Offers groceries, household essentials, and a fresh grill with a
          diverse menu.
          <br />
          Fresh food options like sandwiches, meat plates, salads, smoothies,
          and more.
          <br />
          Deli offers items of all types to meet diverse customer needs.
        </p>

        <button class="order">
          <a href="">Order Now</a>
        </button>
      </div>
      <div class="container2" style={{ textAlign: "center" }}>
        <h1 className="text-4xl font-bold my-5"> About Joe's Deli</h1>
        <div class="centerT">
          <img
            class="pizza"
            src={AboutJoe}
            width="1000px"
            height="500px"
            style={{ margin: "0 auto" }}
          />
        </div>

        <div class="Joe's Deli">
          <h3 className="text-xl my-5 font-bold"> Joe's Deli</h3>
          <p style={{ fontSize: "large" }}>
            The name of the business is Joe’s Deli and Grill. Our goal is to
            develop a location where everyone can come and pick up their
            essentials without the need to wait. The deli offers everything you
            can possibly need. We have items of all types like groceries,
            household essentials, and a fresh grill that makes sandwiches, meat
            plates, salads, smoothies, and much more.
            <br />
            <br />
            The deli is around 3,000 square feet, and it is located in Downtown
            Brooklyn. Our goal is to have a signature dish that people from all
            over the world want to come try. However, it is a big inconvenience
            for people to go shopping and waste up to an hour or wait 20 minutes
            for a sandwich when they can order on the app and it’ll be ready
            when they come in.
            <br />
            <br />
            Shifting towards a cloud-based ordering system will necessitate
            changes in how the organization operates. This shift could result in
            the creation of roles and responsibilities related to overseeing
            inventory on the platform. To encourage staff participation in the
            system, strategies like offering performance incentives can be
            implemented.
            <br />
            <br />
            The transition might bring about changes in power dynamics between
            those managing physical store operations and online orders. It's
            crucial to establish communication channels and ensure everyone
            shares the objectives to avoid any internal conflicts. By the
            advantages of the system 3 and how it aligns with the delis vision,
            we will help create a positive cultural narrative around the change.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
