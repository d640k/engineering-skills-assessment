const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the event's exisiting partitionKey", () => {
    const partitionKey = "existing-partition-key";

    expect(deterministicPartitionKey({ partitionKey })).toEqual(partitionKey);
  });

  it("Returns a stringified exisiting partitionKey", () => {
    const partitionKey = 1234567890;

    expect(deterministicPartitionKey({ partitionKey })).toEqual(
      `${partitionKey}`
    );
  });

  it("Creates a new key if event has no partitionKey", () => {
    const expected =
      "a419a15de4a65c3dba49c38b4485cd4dce1dde4d18f5b965d90f0649bef54252ec4e76dbcaa603708e8e8ebbe848ba484e81e23b7823808b5b8e5f4222d122e8";

    expect(deterministicPartitionKey({ foo: "bar" })).toEqual(expected);
  });

  test("Creates a new key if existing key is too long", () => {
    const partitionKey = "".padStart(257, "*");
    const expected =
      "0be4731b05091958b16e476fa52260ff728eb91ebc759a4dbe8531fe076116c3f6b245976887df0e683c60a7b15af0909a4a088e89dd7f045f985d3fb5a93fd2";

    expect(deterministicPartitionKey({ partitionKey })).toEqual(expected);
  });
});
