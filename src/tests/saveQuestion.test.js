import { _saveQuestion } from "../utils/_DATA";

describe("_saveQuestion", () => {
  it("successfully saves a new question", async () => {
    const question = {
      optionOneText: "Test option one",
      optionTwoText: "Test option two",
      author: "sarahedo",
    };

    const result = await _saveQuestion(question);

    expect(result).toMatchObject({
      id: expect.any(String),
      timestamp: expect.any(Number),
      author: "sarahedo",
      optionOne: {
        votes: [],
        text: "Test option one",
      },
      optionTwo: {
        votes: [],
        text: "Test option two",
      },
    });
  });

  it("rejects with an error message for invalid input", async () => {
    // Provide invalid input (e.g., missing optionOneText, optionTwoText, or author)
    const question = {
      optionOneText: "",
      optionTwoText: "",
      author: "",
    };

    try {
      await _saveQuestion(question);
    } catch (error) {
      expect(error).toBe(
        "Please provide optionOneText, optionTwoText, and author"
      );
    }
  });
});
