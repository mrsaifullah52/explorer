import create, { State } from "zustand";
import produce from "immer";

interface SearchState extends State {
  notifications: Array<{
    type: string
    message: string
    description?: string
    txid?: string
  }>
  set: (x: any) => void
}

const useNotificationStore = create<SearchState>((set, _get) => ({
  notifications: [],
  set: (fn) => set(produce(fn)),
}))

export default useNotificationStore
