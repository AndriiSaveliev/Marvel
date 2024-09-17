import Comics from "../Comics";

import './App.module.css';

class App {
    async render() {
        await Comics.render();
    }

}
export default new App();