import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { toggleSidebar } from "../../state/slices/uiSlice";

export const useSidebar = () => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector(
        (state: RootState) => state.ui.isSidebarOpen
    );

    const toggle = () => dispatch(toggleSidebar());

    return { isSidebarOpen, toggle };
};