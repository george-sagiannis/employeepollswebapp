import { _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestionAnswer", () => {
  it("successfully saves a user's answer", async () => {
    const authedUser = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionOne";

    const result = await _saveQuestionAnswer({ authedUser, qid, answer });

    expect(result).toBe(true);
  });

  it("rejects with an error message for invalid input", async () => {
    // Provide invalid input (e.g., missing authedUser, qid, or answer)
    const authedUser = "";
    const qid = "";
    const answer = "";

    try {
      await _saveQuestionAnswer({ authedUser, qid, answer });
    } catch (error) {
      expect(error).toBe("Please provide authedUser, qid, and answer");
    }
  });
});
