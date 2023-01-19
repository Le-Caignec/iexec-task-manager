import { ReactNode } from "react";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AppModal, selectOpenModal, setOpenModal } from "./applicationSlice";
import Image from "../../background.png";
import Grid from "@mui/material/Unstable_Grid2";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundImage: `url(${Image})`,
  minHeight: "400px",
  borderColor: "#FCD15A",
  borderRadius: "8px",
  borderStyle: "solid",
};

export default function IEModal(props: { kind: AppModal; children: ReactNode }) {
  const dispatch = useAppDispatch();
  // const handleOpen = () => dispatch(setOpenModal(props.kind));
  const handleClose = () => dispatch(setOpenModal(null));

  const open = useAppSelector(selectOpenModal) === props.kind;

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container>
          <Grid xs={10} sm={10} md={6} sx={style}>
            {props.children}
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
