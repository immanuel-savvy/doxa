"use client";

import React from "react";
import Stretch_button from "./stretch_button";
import { post_request } from "../assets/utils/services";
import { scroll_to_top } from "../sections/footer";

class Add_item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  edit = (item) => {
    this.setState({ ...item, item }, scroll_to_top);
  };

  calculate = async () => {
    let { new_item } = this.props;
    let { name, loading, quantity, description, price, id } = this.state;
    if (loading) return;

    this.setState({ loading: true });
    let item = {
      name,
      quantity,
      description,
      id,
      price,
    };
    let res = await post_request(
      `https://inventory.free.beeceptor.com/api/inventory/${id || ""}`,
      item,
      id ? { method: "PUT" } : null
    );

    new_item && new_item(item);

    this.setState({ done: true, loading: false });
  };

  render() {
    let { name, quantity, description, price, loading } = this.state;

    return (
      <div>
        <div className="crs_grid">
          <div className="modal-header">
            <h3 className="modal-title text-dark">Add item</h3>
          </div>

          <div className="modal-body">
            <div className="login-form">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control"
                        min="1"
                        placeholder="Name"
                        value={name}
                        onChange={({ target }) =>
                          this.setState({ name: target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Quantity</label>
                      <input
                        className="form-control"
                        type="number"
                        min="1"
                        placeholder="Number of items"
                        value={quantity}
                        onChange={({ target }) =>
                          this.setState({ quantity: target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>description</label>
                      <input
                        className="form-control"
                        placeholder="Number of items"
                        value={description}
                        onChange={({ target }) =>
                          this.setState({ description: target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>price</label>
                      <input
                        className="form-control"
                        type="number"
                        min="1"
                        placeholder="Number of items"
                        value={price}
                        onChange={({ target }) =>
                          this.setState({ price: target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <Stretch_button
                  title="Add"
                  disabled={!name || !price || !quantity || !description}
                  loading={loading}
                  style={{ backgroundColor: "yellow" }}
                  action={this.calculate}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add_item;
