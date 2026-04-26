"use client";

import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import { useRouter } from "next/navigation";
import { Switch } from "antd";
import style from "./Comics.module.css";

import "animate.css";
import { Col, Row } from "antd";

export default function ComicsComponent() {
  const router = useRouter();

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const changeRoute = () => {
    router.push("/details/11");
  };

  return (
    <div className={style.layout}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8} lg={6}>
          <div onClick={changeRoute} className={style.img_container}>
            <img src={"/10060.jpg"} />
            <div className={style.content}>
              <div className={style.name}>A-Bomb</div>
              <div className={style.team}>
                <div className={style.text}>Add to team</div>
                <div className={style.switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
              </div>
              <div className={style.rot_button}>
                <img src={"/details.svg"} width="25px" />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={8} lg={6}>
          <div className={style.img_container}>
            <img src={"/10060.jpg"} />
            <div className={style.content}>
              <div className={style.name}>A-Bomb</div>
              <div className={style.team}>
                <div className={style.text}>Add to team</div>
                <div className={style.switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
              </div>
              <div className={style.rot_button}>
                <img src={"/details.svg"} width="25px" />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={8} lg={6}>
          <div className={style.img_container}>
            <img src={"/10060.jpg"} />
            <div className={style.content}>
              <div className={style.name}>A-Bomb</div>
              <div className={style.team}>
                <div className={style.text}>Add to team</div>
                <div className={style.switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
              </div>
              <div className={style.rot_button}>
                <img src={"/details.svg"} width="25px" />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={8} lg={6}>
          <div className={style.img_container}>
            <img src={"/10060.jpg"} />
            <div className={style.content}>
              <div className={style.name}>A-Bomb</div>
              <div className={style.team}>
                <div className={style.text}>Add to team</div>
                <div className={style.switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
              </div>
              <div className={style.rot_button}>
                <img src={"/details.svg"} width="25px" />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={8} lg={6}>
          <div className={style.img_container}>
            <img src={"/10060.jpg"} />
            <div className={style.content}>
              <div className={style.name}>A-Bomb</div>
              <div className={style.team}>
                <div className={style.text}>Add to team</div>
                <div className={style.switch}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
              </div>
              <div className={style.rot_button}>
                <img src={"/details.svg"} width="25px" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
