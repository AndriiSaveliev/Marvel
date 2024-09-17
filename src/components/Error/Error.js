  import {ROOT_INDEX} from "../../constants/root";

  import classes from './Error.module.css'


    class Error {
        render() {
            const htnlWrapper = `
                <div class="${classes.error__container}">
                    <span>
                        <p class="${classes.error__alert}">Произошла ошибка</p>
                        <p class="${
                classes.error__alert
            }">Попробуйте зайти позже</p>
                    </span>
                </div>
            `;
            ROOT_INDEX.innerHTML = htnlWrapper;
        }

    }

    export default new Error();