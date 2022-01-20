
import HelloWorld from '@/components/HelloWorld.vue';
import PwGenerator from '@/components/PwGenerator.vue';
import App from '@/App.vue';

import Vue from 'vue';
import Vuetify from 'vuetify';

import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
Vue.use(Vuetify);


describe('App.vue', () => {
  it('checks if pwgenerator is present in App', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent({name: "PwGenerator"}).exists()).toBe(true);
  });
});


describe('PwGenerator.vue', () => {
  const localVue = createLocalVue()
  let vuetify
  let wrapper;
  beforeEach(() => {
    vuetify = new Vuetify;
    wrapper = mount(PwGenerator, {
      localVue,
      vuetify
    });
  })
  it('checks if special characters filed is present in PwGenerator', () => {
    expect(wrapper.find("#Sonderzeichen").exists()).toBe(true);
  });

  it("check if change is in var", async () => {
    let input = wrapper.find("#Sonderzeichen")
    console.warn(input.html())
    await input.setValue("!§$%/()=*-_.:,;<>")
    expect(wrapper.vm.sonderzeichen).toBe("!§$%/()=*-_.:,;<>")
  })
  it('checks if slider is present in PwGenerator', () => {
    expect(wrapper.find("#Passwortlaenge").exists()).toBe(true);
  });

  it("checks if output field exists", () => {
    expect(wrapper.find("#output_password").exists()).toBe(true)
  })

  it("password output is stored in var", async () => {
    let input = wrapper.find("#output_password")
    await input.setValue("dummy")
    expect(wrapper.vm.password).toBe("dummy")
  })
  it("password is shown in output", async ()=>{
    wrapper.vm.password = "dummy"
    await localVue.nextTick()
    expect(wrapper.find("#output_password").element.value).toBe("dummy")
  })

  it("checks if hash field exists", () => {
    expect(wrapper.find("#output_hash").exists()).toBe(true)
  })
});







/*
  describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
      const msg = 'Welcome to Vuetify';
      const wrapper = shallowMount(HelloWorld, {
        propsData: { msg }
      });
      expect(wrapper.text()).toMatch(msg);
    });
  });
*/