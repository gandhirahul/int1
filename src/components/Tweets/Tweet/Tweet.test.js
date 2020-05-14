import React from "react";
import { shallow } from "enzyme";
import { Tweet } from "./Tweet";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Tweet", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      image: "imgSrc",
      username: "ana",
      text: "hello"
    };
    wrapper = shallow(<Tweet {...props} />);
  });

  test("should render tweetImage with right src", () => {
    expect(wrapper.find('[className$="tweetImage"]').prop("src")).toBe(
      "imgSrc"
    );
  });

  test("should render the title with right username", () => {
    expect(wrapper.find('[className$="tweetContent"] > h2').text()).toBe("ana");
  });

  test("should render tweetText with right prop", () => {
    expect(wrapper.find('[className$="tweetText"]').text()).toBe("hello");
  });
});
