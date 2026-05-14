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
import { useEffect } from "react";

export default function FilterComponent({ visible }) {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const addSearchParam = (key, value) => {
    // console.log("addSearchParam", key, value);

    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    const cleanQueryString = decodeURIComponent(params.toString());

    router.push(`?${cleanQueryString}`, { scroll: false });
  };

  const onchangeKeyword = (value) => {
    addSearchParam("search", value);
    dispatch(searchBykeyword(value));
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
    if (typeof value === "string") {
      val = value;
    } else {
      val = value.join(",");
    }

    const data = val.split(",");

    addSearchParam(name, data);

    if (name == "intelligence") {
      dispatch(searchByIntelligence(data));
    }
    if (name == "power") {
      dispatch(searchByPower(data));
    }
    if (name == "speed") {
      dispatch(searchBySpeed(data));
    }
    if (name == "durability") {
      dispatch(searchByDurability(data));
    }
  };

  useEffect(() => {
    searchParams.forEach((value, key) => {
      if (key == "search") {
        onchangeKeyword(value);
      }

      if (key == "gender") {
        onchangeGender(value);
      }

      if (key == "alignment") {
        onchangeAlignment(value);
      }

      if (key == "intelligence") {
        handleChangeSlider(key, value);
      }
      if (key == "power") {
        handleChangeSlider(key, value);
      }
      if (key == "speed") {
        handleChangeSlider(key, value);
      }
      if (key == "durability") {
        handleChangeSlider(key, value);
      }
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
                  onChange={(e) => onchangeKeyword(e.target.value)}
                />
              </Col>
              <Col xs={24} md={4}>
                <div className={style.key}>Gender</div>
                <Select
                  defaultValue="Choose Gender"
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
                  defaultValue="Choose Alignment"
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
                  onChangeComplete={(intelligence) =>
                    handleChangeSlider("intelligence", intelligence)
                  }
                  range
                  defaultValue={[0, 100]}
                />
                <div className={style.key}>Power</div>
                <Slider
                  range
                  onChangeComplete={(power) =>
                    handleChangeSlider("power", power)
                  }
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
      )}
    </>
  );
}
