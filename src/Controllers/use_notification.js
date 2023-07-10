import {toast} from "react-toastify";

const settings = {
    position: "top-left",
    theme: "light",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
const notification = (msg, type) => {
    if (type === "success") {
        return toast.success(msg, settings)
    } else if (type === "warn") {
        return toast.warn(msg, settings)
    } else if (type === 'error') {
        return toast.error(msg, settings)
    }
}
export default notification