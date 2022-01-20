import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import PwGenerator from '@/components/PwGenerator.vue';
import App from '@/App.vue';

import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vuetify';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe('App.vue', () => {
  it('checks if pwgenerator is present in App', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent({name: "PwGenerator"}).exists()).toBe(true);
  });
});

describe('PwGenerator.vue', () => {
  it('checks if special characters filed is present in PwGenerator', () => {
    const wrapper = shallowMount(PwGenerator);
    expect(wrapper.get("[label=Sonderzeichen]").exists()).toBe(true);
  });
});

describe('PwGenerator.vue', () => {
  it('checks if slider is present in PwGenerator', () => {
    const wrapper = shallowMount(PwGenerator);
    expect(wrapper.get("[label=Passwortlänge]").exists()).toBe(true);
  });
});
