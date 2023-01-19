import AppBar from "../../components/AppBar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { AppModal, selectOpenModal } from "./applicationSlice";
import AppLookUpModal from "../newTask/AppLookUpModal";
import DatasetLookUpModal from "../newTask/DatasetLookUpModal";
import WorkerpoolLookUpModal from "../newTask/WorkerpoolLookUpModal";
import { useAppSelector } from "../../app/hooks";
import { Toaster } from "react-hot-toast";

function App() {
  const openModal = useAppSelector(selectOpenModal);
  return (
    <>
      <AppBar />
      <Container sx={{ paddingTop: "50px" }}>
        <Outlet />
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #FCD15A",
              padding: "16px",
              backgroundColor: "black",
              color: "white",
            },
          }}
        />
        {openModal === AppModal.LOOKUP_DATASET_MODAL && <DatasetLookUpModal />}
        {openModal === AppModal.LOOKUP_APP_MODAL && <AppLookUpModal />}
        {openModal === AppModal.LOOKUP_WORKERPOOL_MODAL && <WorkerpoolLookUpModal />}
      </Container>
    </>
  );
}

export default App;
