"use client";

import { Col, Row, Input, Select, Slider } from "antd";

import style from "./Filter.module.css";
import {
  searchBykeyword,
  searchByGender,
  searchByAlignment,
} from "@/src/redux/searchSlice";
import { useDispatch } from "react-redux";

export default function FilterComponent() {
  const dispatch = useDispatch();

  const onchangeKeyword = (input) => {
    dispatch(searchBykeyword(input.target.value));
  };

  const onchangeGender = (value) => {
    dispatch(searchByGender(value));
  };

  const onchangeAlignment = (value) => {
    dispatch(searchByAlignment(value));
  };

  const handleChangeSlider = (name, value) => {
    console.log("zzzzzzzzzz", name, value);
  };

  return (
    <div className={style.bar}>
      <div className={style.filter_bar}>
        <Row gutter={[16, 24]}>
          <Col xs={24} md={4}>
            <div className={style.key}>Keyword</div>
            <Input placeholder="Keyword" onChange={onchangeKeyword} />
          </Col>
          <Col xs={24} md={4}>
            <div className={style.key}>Gender</div>
            <Select
              defaultValue="Choose Gender"
              style={{ width: "100%" }}
              onChange={onchangeGender}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
          </Col>
          <Col xs={24} md={4}>
            <div className={style.key}>Alignment</div>
            <Select
              defaultValue="Choose Alignment"
              style={{ width: "100%" }}
              onChange={onchangeAlignment}
              options={[
                { value: "good", label: "Good" },
                { value: "bad", label: "Bad" },
              ]}
            />
          </Col>
          <Col xs={24} md={4}>
            <div className={style.key}>Powerstats</div>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              // defaultValue={["a10", "c12"]}
              // onChange={handleChangeSlider}
              options={[
                { label: "Speed", value: "speed" },
                { label: "Intelligence", value: "intelligence" },
                { label: "Power", value: "power" },
                { label: "Durability", value: "durability" },
              ]}
            />
          </Col>
          <Col xs={24} md={4}>
            <div className={style.key}>Intelligence</div>
            <Slider
              onChange={(intelligence) =>
                handleChangeSlider("intelligence", intelligence)
              }
              range
              defaultValue={[20, 50]}
            />
            <div className={style.key}>Power</div>
            <Slider
              range
              onChange={(power) =>
                handleChangeSlider("intellipowergence", power)
              }
              defaultValue={[20, 50]}
            />
          </Col>
          <Col xs={24} md={4}>
            <div className={style.key}>Speed</div>
            <Slider
              range
              onChange={(intelligence) =>
                handleChangeSlider("speed", intelligence)
              }
              defaultValue={[20, 50]}
            />
            <div className={style.key}>Durability</div>
            <Slider
              range
              onChange={(durability) =>
                handleChangeSlider("durability", durability)
              }
              defaultValue={[20, 50]}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
