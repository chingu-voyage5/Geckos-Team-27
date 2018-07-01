import React from "react";
import Footer from "./Footer";
import ButtonIconText from "../../UI/ButtonIconText/ButtonIconText";
import { mount } from "enzyme";

describe("<Footer />", () => {
  const wrapper = mount(<Footer />);
  it("initially renders <ButtonIconText /> with globe icon", () => {
    const btn = wrapper.find(ButtonIconText);
    expect(btn.exists()).toBe(true);
    expect(btn.prop("icon")).toBe("fas fa-globe");
  });
});
