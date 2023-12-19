const data= {
    "Ethical issues(related to author editor and publishor)": {
        "Plagiarism": "true",
        "Citation Bias": "false",
        "Number of Authors": "true"
    },
    "Author credibitlity": {
        "Number of Authors": 6,
        "Qualification": 2,
        "Experience": 1,
        "Expertise": 2,
        "Number of books authored by the writer.": 20
    },
    "Publisher credibitlity": {
        "Publisher Credibility": 5
    },
    "in general": {
        "Attractiveness of color page desgin": 2,
        "Uniqueness Level": 3,
        "Whether the uniqueness claimed by the author has been conveyed clearly?": 2,
        "Whether the book stayed focus on the uniqueness as claimed by the 3 authors?": 3,
        "Whether the book is dealing with the entire curriculum & syllabus?": 3
    },
    "physical appearance structure and organisation": {
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
    "subject matter": {
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
            "Included appropriate resources for further reading": null,
            "Bibliography, References & Citations": 10
        }
    },
    "Illustrations": {
        "Color": 3,
        "Visibility of Illustrations: Clarity and Resolution": 2,
        "Visibility of Illustrations: Colour": 3,
        "Visibility of Illustrations: Labelling": 2
    }
}
console.log(JSON.stringify(data).replace("\n"," ").replace(/"/g, '\\\\\\\"'));
