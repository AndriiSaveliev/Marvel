import { ROOT_MODAL } from "../../constants/root";
import classes from './Notification.module.css';
import imgCloseBlack from './img/close-black.svg'
class Notification {
    render() {
        const htmlWrapper = `
            <div class="${classes.notification__container}">
                <span>Not Content</span>
                <button
                    class=" btn bg-contain ${classes.notification__close}"
                    onclick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseBlack})"
                ></button>
           </div>
        `;
        ROOT_MODAL.innerHTML = htmlWrapper;
    }

}
export default new Notification();