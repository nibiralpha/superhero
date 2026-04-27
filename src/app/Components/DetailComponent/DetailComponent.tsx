"use client";

import React from "react";
import style from "./Detail.module.css";
import { Col, Row } from "antd";

export default function DetailComponent() {
  return (
    <div>
      <Row>
        <Col md={12}>
          <div className={style.box}>
            <div>
              <div className={`obelix ${style.title}`}>Powerstatee</div>
            </div>
            <div className={style.state_detail}>
              <div className={style.col_table}>
                <div className={style.data}>
                  <div className={style.name}>Intelligence:</div>
                  <div className={style.detail}>88</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Durability:</div>
                  <div className={style.detail}>88</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Strength:</div>
                  <div className={style.detail}>88</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Power:</div>
                  <div className={style.detail}>88</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Speed:</div>
                  <div className={style.detail}>88</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Combat:</div>
                  <div className={style.detail}>88</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div className={style.box}>
            <div>
              <div className={`obelix ${style.title}`}>Appearance</div>
            </div>
            <div className={style.state_detail}>
              <div className={style.col_table}>
                <div className={style.data}>
                  <div className={style.name}>Gender:</div>
                  <div className={style.detail}>Male</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Weight:</div>
                  <div className={style.detail}>145 lb, 65 kg,</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Race:</div>
                  <div className={style.detail}>Icthyo Sapien</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Eye Color:</div>
                  <div className={style.detail}>Blue</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Hair Color:</div>
                  <div className={style.detail}>No Hair</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={24}>
          <div className={style.box}>
            <div>
              <div className={`obelix ${style.title}`}>Biography</div>
            </div>

            <div className={style.state_detail}>
              <div className={style.col_table}>
                <div className={style.data}>
                  <div className={style.name}>Full Name:</div>
                  <div className={style.detail}>Abe Sapien</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Alter Egos:</div>
                  <div className={style.detail}>No alter egos found.</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Aliases:</div>
                  <div className={style.detail}>
                    "Langdon Everett Caul","Abraham Sapien","Langdon Caul"
                  </div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Place of Birth:</div>
                  <div className={style.detail}>~</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Alignment:</div>
                  <div className={style.detail}>good</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={24}>
          <div className={style.box}>
            <div>
              <div className={`obelix ${style.title}`}>Work</div>
            </div>

            <div className={style.state_detail}>
              <div className={style.col_table}>
                <div className={style.data}>
                  <div className={style.name}>Occupation:</div>
                  <div className={style.detail}>Paranormal Investigator</div>
                </div>
                <div className={style.data}>
                  <div className={style.name}>Base:</div>
                  <div className={style.detail}>-</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
