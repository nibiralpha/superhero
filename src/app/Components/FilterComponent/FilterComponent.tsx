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
import { usePathname } from "next/navigation";

export default function FilterComponent({ clearFilterData, visible }) {
  let searchTimer = 2000;
  let timerRef = useRef(null);
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [alignment, setAlignment] = useState("all");
  const [powerState, setPowerState] = useState({
    intelligence: [0, 100],
    speed: [0, 100],
    power: [0, 100],
    durability: [0, 100],
  });

  const addSearchParam = (key, value) => {
    if (pathname == "/list") {
      
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      const cleanQueryString = decodeURIComponent(params.toString());

      router.push(`?${cleanQueryString}`, { scroll: false });
    }
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
    setGender(value);
    addSearchParam("gender", value);
    dispatch(searchByGender(value));
  };

  const onchangeAlignment = (value) => {
    setAlignment(value);
    addSearchParam("alignment", value);
    dispatch(searchByAlignment(value));
  };

  const handleChangeSlider = (name, value) => {
    setPowerState((prev) => ({
      ...prev,
      [name]: covertToArray(value),
    }));
  };

  const handleChangeSliderEnter = (name, value) => {
    let stringData;

    if (Array.isArray(value)) {
      stringData = value.join(",");
    } else {
      stringData = value;
    }

    addSearchParam(name, stringData);

    let data = covertToArray(value);

    if (name == "intelligence") dispatch(searchByIntelligence(data));
    if (name == "power") dispatch(searchByPower(data));
    if (name == "speed") dispatch(searchBySpeed(data));
    if (name == "durability") dispatch(searchByDurability(data));
  };

  const covertToArray = (data) => {
    if (Array.isArray(data)) {
      return data.map(Number);
    }

    return data.split(",").map(Number);
  };

  const resetForm = () => {
    setSearch("");
    setGender("all");
    setAlignment("all");
    setPowerState({
      intelligence: [0, 100],
      speed: [0, 100],
      power: [0, 100],
      durability: [0, 100],
    });
  };

  useEffect(() => {
    searchParams.forEach((value, key) => {
      if (key == "search") onchangeKeyword(value);
      if (key == "gender") onchangeGender(value);
      if (key == "alignment") onchangeAlignment(value);

      if (
        key == "intelligence" ||
        key == "power" ||
        key == "speed" ||
        key == "durability"
      ) {
        handleChangeSlider(key, value);

        handleChangeSliderEnter(key, value);
      }
    });
  }, []);

  useEffect(() => {

    if (clearFilterData) {
      resetForm();
    }
  }, [clearFilterData]);

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
                  onChange={(e) => onchangeKeyword(e.target.value)}
                  value={search}
                />
              </Col>
              <Col xs={24} md={4}>
                <div className={style.key}>Gender</div>
                <Select
                  value={gender}
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
                  value={alignment}
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
                  }}
                  onChangeComplete={(intelligence) => {
                    handleChangeSliderEnter("intelligence", intelligence);
                  }}
                  value={powerState.intelligence}
                />

                <div className={style.key}>Power</div>
                <Slider
                  range
                  onChange={(power) => {
                    handleChangeSlider("power", power);
                  }}
                  onChangeComplete={(power) => {
                    handleChangeSliderEnter("power", power);
                  }}
                  value={powerState.power}
                />
              </Col>
              <Col xs={24} md={5}>
                <div className={style.key}>Speed</div>
                <Slider
                  range
                  onChange={(speed) => {
                    handleChangeSlider("speed", speed);
                  }}
                  onChangeComplete={(speed) => {
                    handleChangeSliderEnter("speed", speed);
                  }}
                  value={powerState.speed}
                />
                <div className={style.key}>Durability</div>
                <Slider
                  range
                  onChange={(durability) => {
                    handleChangeSlider("durability", durability);
                  }}
                  onChangeComplete={(durability) => {
                    handleChangeSliderEnter("durability", durability);
                  }}
                  value={powerState.durability}
                />
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}
