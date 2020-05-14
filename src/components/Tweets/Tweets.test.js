import React from "react";
import { shallow } from "enzyme";
import { Tweets } from "./Tweets";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Tweets", () => {
  let wrapper;
  beforeEach(() => {
    const mockTweets = [
      {
        id: 1,
        image: "imgSrc1",
        username: "ana",
        text: "hello"
      },
      {
        id: 2,
        image: "imgSrc2",
        username: "anaP",
        text: "hello to you too"
      }
    ];
    wrapper = shallow(<Tweets tweets={mockTweets} />);
  });
  test("should render 2 Tweets", () => {
    expect(wrapper.find("Memo(Tweet)")).toHaveLength(2);
  });

  describe("when no tweets are passed in", () => {
    beforeEach(() => {
      const mockTweets = [];
      wrapper = shallow(<Tweets tweets={mockTweets} />);
    });
    test("should render Loading", () => {
      expect(wrapper.find('[className$="loadingState"]')).toHaveLength(1);
    });
  });
});
