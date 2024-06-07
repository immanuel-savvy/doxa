"use client";

import React from "react";
import Add_item from "../components/add_item";
import Items from "./items";

class Items_manager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="sec-heading center">
                <h2>
                  New <span className="theme-cl">Item</span>
                </h2>
                {/* <p>Unlock Your Potential with Our Top Calculators!</p> */}
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <Add_item
              ref={(add) => (this.add = add)}
              new_item={(item) => this.items?.new_item(item)}
            />
          </div>
        </div>

        <section className="gray">
          <Items
            edit={(item) => this.add?.edit(item)}
            ref={(items) => (this.items = items)}
          />
        </section>
      </>
    );
  }
}

export default Items_manager;
