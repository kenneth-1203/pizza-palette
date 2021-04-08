import React from "react";

const Announcements = () => {
  return (
    <>
      <h1 className="py-2" style={{ fontFamily: "'Pacifico', cursive" }}>
        Welcome
      </h1>
      <p>
        <b>READ ME:</b>
        <br />
        Greetings, test users/developers. This notice is for local admin rights
        only. Before testing out the system, especially for ordering products,
        please follow the steps mentioned below:
      </p>
      <ol style={{ fontWeight: "300" }}>
        <li>Create an account and make sure you are signed in.</li>
        <li>Add items to your cart on the Menu page.</li>
        <li>
          Go to the Cart page, hover your cursor on the summary footer in the
          cart page, and click on the checkout button.
        </li>
      </ol>
      <p>
        <b>IMPORTANT:</b>
        <br />
        When directed to the checkout page, enter card information by using the
        card number{" "}
        <code
          style={{
            background: "#1d1d1d",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          4242
        </code>{" "}
        repeatedly, card expiry date must be in the future, and any number for
        the CVC is acceptable. Or click{" "}
        <a
          href="https://stripe.com/docs/testing"
          style={{ textDecoration: "underline" }}
        >
          here
        </a>{" "}
        for more information on basic test card numbers.
        <br />
        <b>
          * NOTE THAT ALL PERSONAL INFORMATION WILL BE KEPT FOR TESTING PURPOSES
          ONLY.
          <br />* Making payments do not work on mobile platforms.
        </b>{" "}
      </p>
    </>
  );
};

export default Announcements;
