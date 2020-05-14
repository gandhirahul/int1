import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
// I left this file here just in case I find a way to make it work.
// I've tried different configurations but doesn't seem to take the file in account so I need to use it in each file :(
