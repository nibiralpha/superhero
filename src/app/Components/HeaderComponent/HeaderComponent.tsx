"use client";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Col, Row, Input, Select, Slider } from "antd";

import style from "./Header.module.css";

export default function HeaderComponent() {
  const handleChange = () => {};
  return (
    <div className={style.bar}>
      <div className={style.top_bar}>
        <div className={style.menu_bar}>
          <div className={style.left_side}>
            <div className={style.logo}>SUPERSEARCH</div>
            <div className={style.menus}>
              <div className={style.menu}>Super Heroes</div>
              <div className={style.menu}>Team</div>
            </div>
          </div>
          <div className={style.right_side}>
            <Button
            // style={{
            //   color: "#f9873d",
            //   borderColor: "#f9873d",
            // }}
            >
              <MenuUnfoldOutlined /> Filter
            </Button>
          </div>
        </div>
      </div>
      <div className={style.filter_bar}>
        <Row gutter={[16, 24]}>
          <Col xs={24} md={4}>
            <div className={style.key}>Keyword</div>
            <Input placeholder="Keyword" />
          </Col>
          <Col xs={24} md={4}>
            <div className={style.key}>Gender</div>
            <Select
              defaultValue="Choose Gender"
              style={{ width: "100%" }}
              // onChange={handleChange}
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
              // onChange={handleChange}
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
              onChange={handleChange}
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
            <Slider range defaultValue={[20, 50]} />
            <div className={style.key}>Power</div>
            <Slider range defaultValue={[20, 50]} />
          </Col>
          <Col xs={24} md={4}>
            <div className={style.key}>Speed</div>
            <Slider range defaultValue={[20, 50]} />
            <div className={style.key}>Durability</div>
            <Slider range defaultValue={[20, 50]} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
