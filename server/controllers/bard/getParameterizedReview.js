const { getPrompt } = require("./prompt1");
exports.getParameterizedReview = async (req, res) => {
  const { parameters } = await req.body;
  const buff = `[Summarize the key strengths and weaknesses identified in the review, drawing from the various data points]. Consider mentioning factors that may influence the book's suitability for different types of readers or specific learning contexts. Ultimately, this review strives to provide a balanced and informative assessment of [Book Title], allowing readers to make informed decisions about its value and potential contribution to their intellectual pursuits.Note: Remember to replace the bracketed information with specific details from your book and data set. Additionally, you can adjust the tone and formality of the review further to match the requirements of the textbook it will be included in.`;
  const jsonString = JSON.stringify(parameters).replace("\n"," ");
  const first = encodeURI("This review examines the book through a detailed analysis of its various aspects, as captured in the following data set:")
  const second = encodeURI('Ethical Considerations:The presence of plagiarism, as indicated by the "true" value for "Plagiarism" in the data set, raises concerns about the books academic integrity. Further investigation may be necessary to fully understand the extent of this issue. Additionally, the high number of authors (6) warrants scrutiny, as it can complicate questions of responsibility and contribution. Author and Publisher Credibility:The data reveals [summarize findings about author and publisher credibility, including qualifications, experience, expertise, and publication history, drawing from relevant key-value pairs in the "Author credibitlity" and "Publisher credibitlity" sections]. This information allows readers to assess the authors and publishers authority and competence within the subject matter. Content Depth and Engagement:The data indicates [mention key findings about content clarity, comprehensiveness, self-explanatory nature, authoritativeness, and alignment with curriculum, referencing relevant entries in the "subject matter" section]. Additionally, the data assesses the books ability to promote higher-order thinking skills, critical and creative thinking, and deep processing through [highlight data points related to these aspects]. These insights offer valuable indicators of the books pedagogical strength and its potential to engage and challenge readers. Organization and Visual Elements:The data analyzes various aspects of the books physical appearance and structural organization, including [mention key findings about cover page design, book size, paper quality, font choices, page layout, table of contents, chapter structure, inclusion of learning objectives, and visual elements, referring to the "physical appearance structure and organisation" section]. These details combine to reveal whether the book presents itself in a professional and reader-friendly manner. Overall Assessment')
  const prompt = `${first}${jsonString}${second}`
  const response = await getPrompt({ promptText: prompt });
  console.log(response);
  res.status(200).json(response);
};
