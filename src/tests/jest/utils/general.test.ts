import { classNames, formatUnix } from "../../../utils/general";

test("classNames", () => {
  const class1 = "flex";
  const class2 = "items-center";
  expect(classNames(class1, class2)).toBe("flex items-center");
});

test("formatUnix", () => {
  const timestamp = 1668007710;
  expect(formatUnix(timestamp)).toBe("November 9th, 2022 at 10:28:30 AM GMT-5");
});
