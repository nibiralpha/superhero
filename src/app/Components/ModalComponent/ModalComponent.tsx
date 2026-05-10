import style from "./Modal.module.css";

import React from "react";
import { Modal } from "antd";

const ModalComponent: React.FC = ({ openModal, setOpenModal, message }) => {
  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        title=""
        open={openModal}
        onCancel={handleCancel}
        footer={null}
        styles={{
          body: {
            borderRadius: 0,
            height: "250px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
        }}
      >
        <div className={style.content}>
          <div className={`${style.title} obelix`}>{message.mainText}</div>
          <div>{message.subText}</div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
