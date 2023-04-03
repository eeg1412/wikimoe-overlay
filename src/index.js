import Overlay from './components/Overlay.vue';

export default {
    install (app, options = {}) {
        app.component('wikimoe-overlay', Overlay);
    }
};