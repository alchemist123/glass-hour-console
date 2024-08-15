import dayjs, { Dayjs } from "dayjs";
import { create } from "zustand";

type NewState = { [key: string]: string | null };

interface PickerStoreState {
  date_string: Dayjs;
  date_array: NewState[];
  update_date_string: (new_state: Dayjs) => void;
  update_date_array: (new_state: NewState[]) => void;
}

const usePickerStore = create<PickerStoreState>((set) => ({
  date_string: dayjs(),
  date_array: [],

  update_date_string: (new_state: Dayjs) =>
    set(() => ({ date_string: new_state })),

  update_date_array: (new_state: NewState[]) =>
    set(() => ({ date_array: new_state })),
}));

export default usePickerStore;
