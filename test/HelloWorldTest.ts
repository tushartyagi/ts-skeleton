import hello from "../src/HelloWorld";
import { assert, expect } from "chai";

describe("HelloWorld", () => {
    it("should greet", () => {
        var result = hello();
        expect(result).to.equal("Hello World");
    });
});
