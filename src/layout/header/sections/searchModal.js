import { Modal } from "antd";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { InputSearch } from "../../../components/common/inputSearch/inputSearch";

export const SearchModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex" onClick={showModal}>
        <BsSearch />
      </div>
      <Modal
        title=""
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        wrapClassName="searchModal"
      >
        <InputSearch setIsModalOpen={setIsModalOpen} showNumber={false} />
      </Modal>
    </div>
  );
};
