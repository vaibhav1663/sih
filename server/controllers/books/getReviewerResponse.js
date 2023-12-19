const book = require("../../model/bookSchema");
const ObjectId = require('mongodb').ObjectId;
exports.getReviewerResponse = async (req, res) => {
  const { _id } = req.body;
  try {
    const allBooks = await book.findOne({
      _id: new ObjectId(_id)
    });
    const keyMappings = {
        H:"Ethical issues(related to author editor and publishor)",
        A:"Author credibitlity",
        B:"Publisher credibitlity",
        C:"in general",
        D:"physical appearance structure and organisation",
        E:"subject matter",
        F:"Language",
        G:"Illustrations"
    };
    const keysToInclude = ["A", "B", "C", "D", "E", "F", "G"]

    if (!allBooks)
      return res.status(404).json({ error: "Book not found" });
    const reviewerResponse = [
        {
          "reviewerid": "657d341f5052a71110dd35e3",
          "a_total": 31,
          "b_total": 5,
          "c_total": 10,
          "d_total": 73,
          "e_total": 54,
          "g_total": 20,
          "H": [
            "true",
            "false",
            "true"
          ],
          "A": [
            6,
            2,
            1,
            2,
            20
          ],
          "B": 5,
          "C": [
            2,
            3,
            2,
            3
          ],
          "D": [
            3,
            5,
            3,
            4,
            4,
            3,
            4,
            3,
            3,
            4,
            5,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            3,
            3,
            4
          ],
          "E": [
            2,
            3,
            3,
            4,
            3,
            3,
            3,
            3,
            2,
            2,
            3,
            2,
            3,
            3,
            2,
            3,
            2,
            3,
            2,
            3,
            null
          ],
          "G": [
            10,
            3,
            2,
            3,
            2
          ],
          "PDFData": {
            "H": {
              "Plagiarism": "true",
              "Citation Bias": "false",
              "Fabrication & falsification of data": "true"
            },
            "A": {
              "Number of Authors": 6,
              "Qualification": 2,
              "Experience": 1,
              "Expertise": 2,
              "Number of books authored by the writer.": 20
            },
            "B": {
              "Publisher Credibility": 5
            },
            "C": {
              "Attractiveness of color page desgin": 2,
              "Uniqueness Level": 3,
              "Whether the uniqueness claimed by the author has been conveyed clearly?": 2,
              "Whether the book stayed focus on the uniqueness as claimed by the 3 authors?": 3,
              "Whether the book is dealing with the entire curriculum & syllabus?": 3
            },
            "D": {
              "Relevance of Cover Page Design": 5,
              "Size of the Book - Dimensions": 3,
              "Attractiveness of Cover Page": 4,
              "Size of the Book - Bulkiness": 4,
              "Paper Quality": 3,
              "Colours in Printing": 4,
              "Logical & Consistent page layout with appropriate line spacing & margins": 3,
              "Type of Font (Score out of 10)": 3,
              "Size of Font (Score out of 10)": 4,
              "Consistency in maintaining type & size of font (Score out of 10)": 5,
              "Number of Pages to teaching hours ratio.": 3,
              "Overview of learning objectives included at the beginning of chapters (Score out of 5)": 3,
              "Introductory Section to explain unique features and how to use the book (Score out of 5)": 3,
              "Well-Structured table of Contents (Score out of 5)": 3,
              "Inclusion of list of Abbreviations,index,etc. (Score out of 5)": 3,
              "Inclusion of summary (Score out of 5)": 3,
              "Text is structured as chapter titles, headings, captions, text boxes (Score out of 5)": 4,
              "Inclusion of meaningful activities, tasks, and exercises (Score out of 5)": 3,
              "Appropriate topic distribution and sequencing (Score out of 5)": 3,
              "Highlighted Key words and Concepts (Score out of 5)": 4,
              "Free from the mistakes and reiteration (Score out of 5)": 2
            },
            "E": {
              "Compilation of classical references": 3,
              "Appropriately interpreted, discussed and logically concluded (Score out of 5)": 3,
              "Added with recent and relevant advances (Score out of 5)": 4,
              "The concepts": {
                "Clear & Accurate (Score out of 5)": 3,
                "Comprehensiveness (Score out of 5)": 3,
                "Self-explanatory and do not require additional resources to understand (Score out of 5)": 3,
                "Supported with authoritative (Score out of 5)": 3,
                "Consistency of content to entire curriculum & syllabus (1 score for every 20% of content)": 2,
                "Understandable to all three types of learners (advance, medium and slow learners)": 2,
                "Is the matter facilitating students to learn directly and independently and construct meaning on their own (i.e., read to learn)": 3
              },
              "Is the content promoting": {
                "Higher-order thinking skills that require analysis, evaluation and judgement, and not just recalling and comprehension of facts": 2,
                "Deep processing, critical and creative thinking by providing less structured problems and more open-ended questions": 3,
                "Content is with well-formed presentation, discussion, and conclusion": 3,
                "Content reveals clear meaning & thought-provoking": 2,
                "Content is focussed on the main idea and no diversions, no irrelevant content": 3,
                "Definitions explained well with suitable examples": 2,
                "There are multiple perspectives and balanced viewpoints on issues": 3,
                "There is no bias in content, such as over-generalisation and stereotyping": 2,
                "The content and illustrations do not carry any form of discrimination on the grounds of gender, age, race, religion, culture, disability etc., nor do they suggest exclusion.": 3,
                "Included appropriate resources for further reading": 1,
                "Bibliography, References & Citations": 10
              }
            },
            "G": {
              "Color": 3,
              "Visibility of Illustrations: Clarity and Resolution": 2,
              "Visibility of Illustrations: Colour": 3,
              "Visibility of Illustrations: Labelling": 2
            }
          },
          "totalScore": 193,
          "isRecommended": false
        }
      ].map((x)=>Object.fromEntries(Object.entries(x).filter(([key,value])=>keysToInclude.indexOf(key)!=-1))).reduce((totalResponse, response)=>{
        console.log(response);
         (Object.entries(response).forEach((obj)=>{
            const [key,value] = obj;
            console.log({key,value})
            if(key == "B"){

                totalResponse[key]+= Number(value);
                return totalResponse
            }
            if( value instanceof Array && value){
                console.log(">>", {value})
                totalResponse[key] = value?.map((x, i)=>Number(x)+(totalResponse[key][i]?totalResponse[key][i]:0))
            };
        }))

        return totalResponse
      },({A:[],B:0,C:[],D:[],E:[],F:[], G:[]}));
    console.log({reviewerResponse})
    const detailedReviewerResponse = Object.entries(reviewerResponse).map(([key,value])=>{
        return [keyMappings[key
        ],value];
    })
    res.status(200).json(detailedReviewerResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
