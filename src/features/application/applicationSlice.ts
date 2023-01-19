import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export enum AppModal {
  LOOKUP_APP_MODAL,
  LOOKUP_DATASET_MODAL,
  LOOKUP_WORKERPOOL_MODAL,
}

export interface ApplicationState {
  openModal: AppModal | null;
}

const initialState: ApplicationState = {
  openModal: null,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
  },
});

export const selectOpenModal = (state: RootState) => state.application.openModal;
export const { setOpenModal } = applicationSlice.actions;
export default applicationSlice.reducer;
