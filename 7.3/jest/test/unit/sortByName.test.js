const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]
    const result = sorting.sortByName(input)

    expect(result).toEqual(expected);
  });
  test("Book titles should not be sorted", () => {
    const input = [
      "Гарри Поттер",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города"
    ];
    const expected = [
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input)
    expect(result).toEqual(expected);
  })
});

