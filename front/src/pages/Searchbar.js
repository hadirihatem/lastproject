import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Space } from "antd";
import { getUsersList } from "../action/useraction";
import "./Searchbar.css";
const { Search } = Input;

const Searchbar = () => {
  const [filterdata, setFilterdata] = useState([]);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  const hundlefilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = users.filter((value) => {
      return value.firstname.includes(searchWord);
    });
    if (searchWord === "") {
      setFilterdata([]);
    } else {
      setFilterdata(newFilter);
    }
  };
  return (
    <div>
      <li className="nav-Item">
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            allowClear
            /*onSearch={onSearch}*/ onChange={hundlefilter}
            style={{
              width: "200px",
              marginTop: "10px",
            }}
          />
          {filterdata.length != 0 && (
            <div className="dataresulat">
              {filterdata &&
                filterdata.map((value, key) => {
                  return <a className="dataItem">{value.firstname}</a>;
                })}
            </div>
          )}
        </Space>
      </li>
    </div>
  );
};

export default Searchbar;
