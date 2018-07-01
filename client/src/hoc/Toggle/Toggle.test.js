import React from "react";
import Toggle from "./Toggle";
import { mount } from "enzyme";

describe("<Toggle /> Render Prop", () => {
  const renderFn = jest.fn().mockReturnValue(null);
  const wrapper = mount(<Toggle>{renderFn}</Toggle>);
  it("calls the render prop function", () => {
    expect(renderFn.mock.calls.length).toBe(1);
    expect(wrapper.state("on")).toBe(false);
  });
  it("passes getStateAndHelpers to renderFn", () => {
    expect(wrapper.instance().getStateAndHelpers()).toEqual({
      on: false,
      toggle: expect.any(Function),
      backdrop: expect.any(Function)
    });
  });
  it("toggle on", () => {
    wrapper.instance().toggle();
    expect(wrapper.state("on")).toBe(true);
  });
  it("toggle off", () => {
    wrapper.instance().toggle();
    expect(wrapper.state("on")).toBe(false);
  });
});
