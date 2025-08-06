import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null if authorization header is missing", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if authorization format is wrong", () => {
    const headers = { authorization: "Bearer abc123" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns the API key if header is correctly formatted", () => {
    const headers = { authorization: "ApiKey abc123" };
    expect(getAPIKey(headers)).toBe("abc123"); // THIS WILL FAIL because return is commented
  });
});
