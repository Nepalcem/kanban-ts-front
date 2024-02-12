import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { StyledEditIcon } from "./EditIcon.styled";
import ModalForm from "./ModalForm/ModalForm";
import CloseIcon from "./CloseIcon/CloseIcon";
import { IconButton } from "@mui/material";
import { mainModalStyle, closeButtonStyle } from "./modalStyles";



type EditTaskButtonProps = {
  status: string;
  columnIndex: number;
  title: string;
  description: string;
};

const EditTaskModal: FC<EditTaskButtonProps> = ({ status, columnIndex, title, description }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledEditIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={mainModalStyle}>
          <h2>Update Task</h2>
          <ModalForm
            handleClose={handleClose}
            status={status}
            columnIndex={columnIndex}
            title={title}
            description={description}
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

export default EditTaskModal;