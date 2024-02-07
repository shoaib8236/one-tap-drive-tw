"use client";

import { useState } from "react";
import Modal from "../Modal/Modal";

const Faq = () => {
  const [visible, setVisible] = useState(false);

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
       setVisible(false);
  };

  console.log(visible, "visible")

  return (
    <div>
      <button onClick={onOpen}>Open Modal</button>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
      voluptate accusantium blanditiis doloremque nobis facilis ad accusamus,
      voluptates quia eos consequatur est veniam error odio debitis laboriosam
      deleniti earum cum!
      <Modal visible={visible} onClose={onClose}>
        <div className="w-[2000px]">
          <h1>FAQ</h1>
        </div>
      </Modal>
    </div>
  );
};

export default Faq;
