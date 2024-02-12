import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalForm from "./ModalForm/ModalForm";
import CloseIcon from "./CloseIcon/CloseIcon";
import { IconButton } from "@mui/material";
import { mainModalStyle, closeButtonStyle } from "./modalStyles";
import { AddTaskButtonBig } from "./AddTaskButton/AddTaskButton.styled";
import { FaPlus } from "react-icons/fa";

type AddTaskButtonProps = {
  status: string;
  columnIndex: number;
};

const AddTaskModal: FC<AddTaskButtonProps> = ({status, columnIndex}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AddTaskButtonBig onClick={handleOpen}>
        <FaPlus />
        Add task
      </AddTaskButtonBig>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={mainModalStyle}>
          <h2>Create Task</h2>
          <ModalForm
            handleClose={handleClose}
            status={status}
            columnIndex={columnIndex}
          />
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            style={closeButtonStyle}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default AddTaskModal;
