import React from "react";
import { shallow } from "enzyme";
import { Home } from "./Home";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
    jest.useFakeTimers();
  });

  test("should render Tweets", () => {
    expect(wrapper.find("Memo(Tweets)")).toHaveLength(1);
  });

  test("should send the right props to Tweets", () => {
    expect(wrapper.find("Memo(Tweets)").prop("tweets")).toEqual([]);
  });
});
// I've tried to test the behaviour for fetch but couldn't mock the api calls
// from what I've found seems like codesandbox has some limitation for jest
