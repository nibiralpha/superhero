"use client";

import { Col, Row, Input, Select, Slider } from "antd";

import style from "./Filter.module.css";
import {
  searchBykeyword,
  searchByGender,
  searchByAlignment,
  searchByIntelligence,
  searchByPower,
  searchBySpeed,
  searchByDurability,
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
    if (name == "intelligence") {
      dispatch(searchByIntelligence(value));
    }
    if (name == "power") {
      dispatch(searchByPower(value));
    }
    if (name == "speed") {
      dispatch(searchBySpeed(value));
    }
    if (name == "durability") {
      dispatch(searchByDurability(value));
    }
  };

  return (
    <div className={style.bar}>
      <div className={style.filter_bar}>
        <Row gutter={[16, 24]}>
          <Col xs={24} md={5}>
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
                { value: "all", label: "All" },
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
                { value: "all", label: "All" },
                { value: "good", label: "Good" },
                { value: "bad", label: "Bad" },
              ]}
            />
          </Col>
          {/* <Col xs={24} md={4}>
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
          </Col> */}
          <Col xs={24} md={5}>
            <div className={style.key}>Intelligence</div>
            <Slider
              onChangeComplete={(intelligence) =>
                handleChangeSlider("intelligence", intelligence)
              }
              range
              defaultValue={[0, 100]}
            />
            <div className={style.key}>Power</div>
            <Slider
              range
              onChangeComplete={(power) => handleChangeSlider("power", power)}
              defaultValue={[0, 100]}
            />
          </Col>
          <Col xs={24} md={5}>
            <div className={style.key}>Speed</div>
            <Slider
              range
              onChangeComplete={(intelligence) =>
                handleChangeSlider("speed", intelligence)
              }
              defaultValue={[0, 100]}
            />
            <div className={style.key}>Durability</div>
            <Slider
              range
              onChangeComplete={(durability) =>
                handleChangeSlider("durability", durability)
              }
              defaultValue={[0, 100]}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
