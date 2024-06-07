"use client";

import React from "react";
import Text_btn from "./text_btn";
import Link from "next/link";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { item, edit, remove } = this.props;
    let { name, quantity, price, description, id } = item || new Object();

    return (
      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6">
        <div className="crs_cate_wrap style_2">
          {edit || remove ? (
            <>
              <br />
              <Text_btn text="Edit" icon="fa-edit" action={edit} />
              {remove ? (
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Text_btn text="Remove" action={remove} />
                </>
              ) : null}
            </>
          ) : null}
          <Link
            href={"#" || `/items/${id}`}
            onClick={() => {}}
            className="crs_cate_box"
          >
            <div className="crs_cate_icon">
              <i className={`fa fa-${"stamp"}`}></i>
            </div>
            <div className="crs_cate_caption text-center">
              <span>{name}</span>
            </div>
            <div className="crs_cate_count text-center">
              <span>{description}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Item;
