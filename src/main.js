import { createApp } from 'vue';
import App from './App.vue';
import baseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog'


const app = createApp(App);
app.component('base-card',baseCard);
app.component('base-button',BaseButton);
app.component('base-dialog',BaseDialog);
app.mount('#app');
