import { PrimaryButton, Stack } from "@fluentui/react";
import { useState } from "react";
import CustomModal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Stack>
      <Stack.Item>
        <PrimaryButton onClick={handleClick}>Open Modal</PrimaryButton>
      </Stack.Item>
      <Stack.Item>
        <CustomModal showModal={showModal} onClose={handleClose} />
      </Stack.Item>
    </Stack>
  );
}

export default ModalPage;
