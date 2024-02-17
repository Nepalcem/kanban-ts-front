import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { StyledEditIcon } from "./EditIcon.styled";
import ModalForm from "./ModalForm/ModalForm";
import CloseIcon from "./CloseIcon/CloseIcon";
import { mainModalStyle, closeButtonStyle } from "./modalStyles";

interface IEditBoardModal {
  hashedID: string;
  title: string;
}

const EditBoardModal: FC<IEditBoardModal> = ({ hashedID, title }) => {
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
          <h2>Update Board</h2>
          <ModalForm
            hashedID={hashedID}
            title={title}
            handleClose={handleClose}
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

export default EditBoardModal;