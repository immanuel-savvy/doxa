"use client";
import React from "react";
import { get_request } from "../assets/utils/services";
import Item from "../components/item";

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let items = await get_request(
      `https://inventory.free.beeceptor.com/api/inventory`,
      null,
      true
    );

    this.setState({ items });
  };

  new_item = (item) => {
    let { items } = this.state;
    if (item.id) {
      items = items.map((i) => (i.id === item.id ? item : i));
    } else items = [item, ...items];

    this.setState({ items });
  };

  edit = (item) => {
    let { edit } = this.props;

    edit(item);
  };

  remove = async (item) => {
    if (!window.confirm("Are you sure to remove item?")) return;

    let { items } = this.state;
    items = items.filter((cal) => cal.id !== item);

    this.setState({ items });

    await fetch(`https://inventory.free.beeceptor.com/api/inventory/${item}`, {
      method: "delete",
    }).then((data) => data.json());
  };

  render() {
    let { items } = this.state;

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="sec-heading center">
              <h2>
                <span className="theme-cl">Items</span>
              </h2>
              {/* <p>Unlock Your Potential with Our Top Calculators!</p> */}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {items?.map((item) => (
            <Item
              item={item}
              key={item.id}
              remove={() => this.remove(item.id)}
              edit={() => this.edit(item)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Items;
