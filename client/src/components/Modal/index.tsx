import React from "react";
import Modal from "react-modal";
import { FormModal, HeaderModal } from "./styles";
import { MdOutlineClose } from "react-icons/md";

interface IModalCommon {
  modalOpen: boolean;
  setModalOpen: any;
  children: any;
  title: string;
}

const ModalCommon: React.FC<IModalCommon> = ({
  modalOpen,
  setModalOpen,
  children,
  title,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <FormModal>
        <HeaderModal>
          <h2>{title}</h2>
          <MdOutlineClose onClick={() => setModalOpen(false)} />
        </HeaderModal>
        {children}
      </FormModal>
    </Modal>
  );
};

export default ModalCommon;
