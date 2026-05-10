import style from "./Modal.module.css";

import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalComponent: React.FC = ({ openModal, setOpenModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [isModalOpen, setIsModalOpen] = useState(openModal);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // setIsModalOpen(false);
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
          },
        }}
      >
        <div className={style.content}>
          <div className={`${style.title} obelix`}>
            Ops! You have too many team members
          </div>
          <div>You may only select 8 team members at a time</div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
