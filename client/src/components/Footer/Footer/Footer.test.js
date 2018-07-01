import React from "react";
import Footer from "./Footer";
import LargeFooter from "./LargeFooter";
import ButtonIconText from "../../UI/ButtonIconText/ButtonIconText";
import { mount } from "enzyme";

describe("<Footer />", () => {
  const wrapper = mount(<Footer />);
  it("initially renders <ButtonIconText /> with globe icon", () => {
    const btn = wrapper.find(ButtonIconText);
    expect(btn.exists()).toBe(true);
    expect(btn.prop("icon")).toBe("fas fa-globe");
  });
  it("Toggle on & off <LargeFooter />", () => {
    // off
    expect(wrapper.find(LargeFooter).exists()).toBe(false);
    // find button & click
    wrapper
      .find("div .ft-tgg")
      .find("button")
      .simulate("click");
    // toggle on
    expect(wrapper.find(LargeFooter).exists()).toBe(true);
    // find button & click
    wrapper
      .find("div .ft-tgg")
      .find("button")
      .simulate("click");
    // back to off
    expect(wrapper.find(LargeFooter).exists()).toBe(false);
  });
  it("Toggle on: <ButtonIconText /> with globe icon does not render", () => {
    // toggle on
    wrapper
      .find("div .ft-tgg")
      .find("button")
      .simulate("click");
    const btn = wrapper.find(ButtonIconText);
    expect(btn.exists()).toBe(true);
    expect(btn.prop("icon")).not.toBe("fas fa-globe");
  });
});
