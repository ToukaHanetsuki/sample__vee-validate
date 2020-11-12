import { VueConstructor } from 'vue/types/umd';
import { ValidationRule } from 'vee-validate/dist/types/types';
import * as rules from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja';
import {
  ValidationProvider,
  extend,
  localize
} from 'vee-validate';

// location
localize('ja', ja);

// rules
// import preset
Object.keys(rules).forEach((key: string) => {
  extend(key, (<Record<string, ValidationRule>>rules)[key]);
});

export default {
  install(Vue: VueConstructor) {
    Vue.component('ValidationProvider', ValidationProvider);
  }
};
