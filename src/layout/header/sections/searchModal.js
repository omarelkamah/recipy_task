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
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        wrapClassName="searchModal"
      >
        <InputSearch />
        <div className="searchCardss">
          <div className="searchCard">
            <div className={`image`}>
              <img
                src="/photos/product.jpg"
                alt=""
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <h3>Decadent Raspberry and Cream Cake</h3>
          </div>
          <div className="searchCard">
            <div className={`image`}>
              <img
                src="/photos/product.jpg"
                alt=""
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <h3>Decadent Raspberry and Cream Cake</h3>
          </div>
        </div>
      </Modal>
    </div>
  );
};
