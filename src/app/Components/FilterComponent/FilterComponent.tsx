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
  clearFilter,
} from "@/src/redux/searchSlice";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import useHero from "@Hooks/useHero";

interface FilterComponentProps {
  setClearFilterData: React.Dispatch<React.SetStateAction<boolean>>;
  clearFilterData: boolean;
  visible: boolean;
}

type Range = [number, number];
interface PowerState {
  intelligence: Range;
  speed: Range;
  power: Range;
  durability: Range;
}

export default function FilterComponent({
  setClearFilterData,
  clearFilterData,
  visible,
}: Readonly<FilterComponentProps>) {
  const { covertToArray } = useHero();

  const searchTimer: number = 2000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const [search, setSearch] = useState<string>("");
  const [gender, setGender] = useState<string>("all");
  const [alignment, setAlignment] = useState<string>("all");
  const [powerState, setPowerState] = useState<PowerState>({
    intelligence: [0, 100],
    speed: [0, 100],
    power: [0, 100],
    durability: [0, 100],
  });

  const addSearchParam = (key: string, value: string) => {
    if (pathname == "/list") {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      decodeURIComponent(params.toString());

      window.history.pushState(null, "", `?${params.toString()}`);
    }
  };

  const onchangeKeyword = (value: string) => {
    setSearch(value);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      addSearchParam("search", value);
      dispatch(searchBykeyword(value));
    }, searchTimer);
  };

  const onchangeGender = (value: string) => {
    setGender(value);
    addSearchParam("gender", value);
    dispatch(searchByGender(value));
  };

  const onchangeAlignment = (value: string) => {
    setAlignment(value);
    addSearchParam("alignment", value);
    dispatch(searchByAlignment(value));
  };

  const handleChangeSlider = (name: string, value: number[]) => {
    setPowerState((prev) => ({
      ...prev,
      [name]: covertToArray(value),
    }));
  };

  const handleChangeSliderEnter = (name: string, value: string | number[]) => {
    const stringData = Array.isArray(value) ? value.join(",") : value;

    addSearchParam(name, stringData);

    const data = covertToArray(value);

    if (name == "intelligence") dispatch(searchByIntelligence(data));
    if (name == "power") dispatch(searchByPower(data));
    if (name == "speed") dispatch(searchBySpeed(data));
    if (name == "durability") dispatch(searchByDurability(data));
  };

  const resetForm = (): void => {
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
    dispatch(clearFilter(""));
    searchParams.forEach((value, key) => {
      if (key === "search") {
        setSearch(value);
        dispatch(searchBykeyword(value));
      }
      if (key === "gender") {
        setGender(value);
        dispatch(searchByGender(value));
      }
      if (key === "alignment") {
        setAlignment(value);
        dispatch(searchByAlignment(value));
      }
      if (
        key === "intelligence" ||
        key === "power" ||
        key === "speed" ||
        key === "durability"
      ) {
        const data = covertToArray(value);
        setPowerState((prev) => ({ ...prev, [key]: data }));
        if (key === "intelligence") dispatch(searchByIntelligence(data));
        if (key === "power") dispatch(searchByPower(data));
        if (key === "speed") dispatch(searchBySpeed(data));
        if (key === "durability") dispatch(searchByDurability(data));
      }
    });
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (clearFilterData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      resetForm();
      setClearFilterData(false);
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
