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
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function FilterComponent({ clearFilterData, visible }) {
  let searchTimer = 5000;
  let timerRef = useRef(null);

  const [search, setSearch] = useState("");

  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const addSearchParam = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    const cleanQueryString = decodeURIComponent(params.toString());

    router.push(`?${cleanQueryString}`, { scroll: false });
  };

  const onchangeKeyword = (value) => {    
    setSearch(value);

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      addSearchParam("search", value);
      dispatch(searchBykeyword(value));
    }, searchTimer);
  };

  const onchangeGender = (value) => {
    addSearchParam("gender", value);
    dispatch(searchByGender(value));
  };

  const onchangeAlignment = (value) => {
    addSearchParam("alignment", value);
    dispatch(searchByAlignment(value));
  };

  const handleChangeSlider = (name, value) => {
    let val;
    typeof value === "string" ? (val = value) : (val = value.join(","));

    const data = val.split(",");

    addSearchParam(name, data);

    if (name == "intelligence") dispatch(searchByIntelligence(data));
    if (name == "power") dispatch(searchByPower(data));
    if (name == "speed") dispatch(searchBySpeed(data));
    if (name == "durability") dispatch(searchByDurability(data));
  };

  const covertToArray = (data) => {
    return data.split(",");
  };

  useEffect(() => {
    searchParams.forEach((value, key) => {
      if (key == "search") onchangeKeyword(value);
      if (key == "gender") onchangeGender(value);
      if (key == "alignment") onchangeAlignment(value);

      if (key == "intelligence") handleChangeSlider(key, value);
      if (key == "power") handleChangeSlider(key, value);
      if (key == "speed") handleChangeSlider(key, value);
      if (key == "durability") handleChangeSlider(key, value);
    });
  }, []);

  return (
    <>
      {visible && (
        <div className={style.bar}>
          <div className={style.filter_bar}>
            <Row gutter={[16, 24]}>
              <Col xs={24} md={5}>
                <div className={style.key}>Keyword</div>
                <Input
                  placeholder="Keyword"
                  // defaultValue={searchParams.get("search")}
                  onChange={(e) => onchangeKeyword(e.target.value)}
                  value={search}
                  // onChange={(e) => onchangeKeyword(e.target.value)}
                  // value={searchParams.get("search")}
                />
              </Col>
              <Col xs={24} md={4}>
                <div className={style.key}>Gender</div>
                <Select
                  defaultValue={
                    searchParams.get("gender") == null
                      ? "Choose Gender"
                      : searchParams.get("gender")
                  }
                  value={
                    searchParams.get("gender") == null
                      ? "Choose Gender"
                      : searchParams.get("gender")
                  }
                  style={{ width: "100%" }}
                  onChange={onchangeGender}
                  options={[
                    { value: "all", label: "Choose Gender" },
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
              </Col>
              <Col xs={24} md={4}>
                <div className={style.key}>Alignment</div>
                <Select
                  defaultValue={
                    searchParams.get("alignment") == null
                      ? "Choose Alignment"
                      : searchParams.get("alignment")
                  }
                  value={
                    searchParams.get("alignment") == null
                      ? "Choose Alignment"
                      : searchParams.get("alignment")
                  }
                  style={{ width: "100%" }}
                  onChange={onchangeAlignment}
                  options={[
                    { value: "all", label: "Choose Alignment" },
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
                  range
                  onChange={(intelligence) => {
                    handleChangeSlider("intelligence", intelligence);
                    searchParams.get("intelligence")
                      ? covertToArray(searchParams.get("intelligence")).map(
                          Number,
                        )
                      : [0, 100];
                  }}
                  value={
                    searchParams.get("intelligence")
                      ? covertToArray(searchParams.get("intelligence")).map(
                          Number,
                        )
                      : [0, 100]
                  }
                />

                <div className={style.key}>Power</div>
                <Slider
                  range
                  onChange={(power) => {
                    handleChangeSlider("power", power);
                    searchParams.get("power")
                      ? covertToArray(searchParams.get("power")).map(Number)
                      : [0, 100];
                  }}
                  value={
                    searchParams.get("power")
                      ? covertToArray(searchParams.get("power")).map(Number)
                      : [0, 100]
                  }
                />
              </Col>
              <Col xs={24} md={5}>
                <div className={style.key}>Speed</div>
                <Slider
                  range
                  onChange={(speed) => {
                    handleChangeSlider("speed", speed);
                    searchParams.get("speed")
                      ? covertToArray(searchParams.get("speed")).map(Number)
                      : [0, 100];
                  }}
                  value={
                    searchParams.get("speed")
                      ? covertToArray(searchParams.get("speed")).map(Number)
                      : [0, 100]
                  }
                />
                <div className={style.key}>Durability</div>
                <Slider
                  range
                  onChange={(durability) => {
                    handleChangeSlider("durability", durability);
                    searchParams.get("durability")
                      ? covertToArray(searchParams.get("durability")).map(
                          Number,
                        )
                      : [0, 100];
                  }}
                  value={
                    searchParams.get("durability")
                      ? covertToArray(searchParams.get("durability")).map(
                          Number,
                        )
                      : [0, 100]
                  }
                />
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}
