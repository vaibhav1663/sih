let PDFData = {
    H: {
        Plagiarism: null,
        "Citation Bias": null,
        "Number of Authors": null,
    },
    A: {
        "Number of Authors": null,
        Qualification: null,
        Experience: null,
        Expertise: null,
        "Number of books authored by the writer.": null,
    },
    B: {
        "Publisher Credibility": null,
    },
    C: {
        "Attractiveness of color page desgin": null,
        "Uniqueness Level": null,
        "Whether the uniqueness claimed by the author has been conveyed clearly?":
            null,
        "Whether the book stayed focus on the uniqueness as claimed by the 3 authors?":
            null,
        "Whether the book is dealing with the entire curriculum & syllabus?":
            null,
    },
    D: {
        "Relevance of Cover Page Design": null,
        "Size of the Book - Dimensions": null,
        "Attractiveness of Cover Page": null,
        "Size of the Book - Bulkiness": null,
        "Paper Quality": null,
        "Colours in Printing": null,
        "Logical & Consistent page layout with appropriate line spacing & margins":
            null,
        "Type of Font (Score out of 10)": null,
        "Size of Font (Score out of 10)": null,
        "Consistency in maintaining type & size of font (Score out of 10)":
            null,
        "Number of Pages to teaching hours ratio.": null,
        "Overview of learning objectives included at the beginning of chapters (Score out of 5)":
            null,
        "Introductory Section to explain unique features and how to use the book (Score out of 5)":
            null,
        "Well-Structured table of Contents (Score out of 5)": null,
        "Inclusion of list of Abbreviations,index,etc. (Score out of 5)":
            null,
        "Inclusion of summary (Score out of 5)": null,
        "Text is structured as chapter titles, headings, captions, text boxes (Score out of 5)":
            null,
        "Inclusion of meaningful activities, tasks, and exercises (Score out of 5)":
            null,
        "Appropriate topic distribution and sequencing (Score out of 5)":
            null,
        "Highlighted Key words and Concepts (Score out of 5)": null,
        "Free from the mistakes and reiteration (Score out of 5)": null,
    },
    E: {
        "Compilation of classical references": null,
        "Appropriately interpreted, discussed and logically concluded (Score out of 5)":
            null,
        "Added with recent and relevant advances (Score out of 5)":
            null,

        "The concepts": {
            "Clear & Accurate (Score out of 5)": null,
            "Comprehensiveness (Score out of 5)": null,
            "Self-explanatory and do not require additional resources to understand (Score out of 5)":
                null,
            "Supported with authoritative (Score out of 5)": null,
            "Consistency of content to entire curriculum & syllabus (1 score for every 20% of content)":
                null,
            "Understandable to all three types of learners (advance, medium and slow learners)":
                null,
            "Is the matter facilitating students to learn directly and independently and construct meaning on their own (i.e., read to learn)":
                null,
        },
        "Is the content promoting": {
            "Higher-order thinking skills that require analysis, evaluation and judgement, and not just recalling and comprehension of facts":
                null,
            "Deep processing, critical and creative thinking by providing less structured problems and more open-ended questions":
                null,
            "Content is with well-formed presentation, discussion, and conclusion":
                null,
            "Content reveals clear meaning & thought-provoking": null,
            "Content is focussed on the main idea and no diversions, no irrelevant content":
                null,
            "Definitions explained well with suitable examples": null,
            "There are multiple perspectives and balanced viewpoints on issues":
                null,
            "There is no bias in content, such as over-generalisation and stereotyping":
                null,
            "The content and illustrations do not carry any form of discrimination on the grounds of gender, age, race, religion, culture, disability etc., nor do they suggest exclusion.":
                null,
            "Included appropriate resources for further reading": null,
            "Bibliography, References & Citations": null,
        },
    },
    F: {
        "Is the language used in the text is simple?": null,
        "Usage of Standard Technical Terminology": null,
        "Usage of Standard Punctuation Marks & Symbols": null,
        "The language is accurate and precise": null,
        "Can the audience determine meanings of difficult or technical terms through context clues?":
            null,
        "Is the text free from Grammatical mistakes, redundancies,wordiness, highfalutin and sexist language?":
            null,
        "Is the text free from fragments, run-on, and overly complex sentences?":
            null,
        "Are capitalization, spelling, and paragraphs used correctly?":
            null,
    },
    G: {
        Color: null,
        "Visibility of Illustrations: Clarity and Resolution": null,
        "Visibility of Illustrations: Colour": null,
        "Visibility of Illustrations: Labelling": null,
        "Relevance to the content": null,
    },
};

const handle = (bookData) => {
    const keyMappings = {
        H: "Ethical issues(related to author editor and publishor)",
        A: "Author credibitlity",
        B: "Publisher credibitlity",
        C: "in general",
        D: "physical appearance structure and organisation",
        E: "subject matter",
        F: "Language",
        G: "Illustrations"
    };
    let u = Object.values(bookData).flat();
    let i = 0;
    let j = 0;
    for (let key in PDFData) {
        const value = PDFData[key];
        for (let question in value) {
            const answer = value[question];

            if (answer instanceof Object) {
                for (let subquestion in answer) {
                    PDFData[key][question][subquestion] = u[i];
                    i++;
                }
            } else {
                PDFData[key][question] = u[i];
                i++;
            }
        }
    }
    PDFData = Object.fromEntries(Object.entries(PDFData).map(([k,v])=>[keyMappings[k],v]));
    console.log({PDFData})

    i = 0;
    for (let key in PDFData) {
        const value = PDFData[key];
        for (let question in value) {
            const answer = value[question];

            if (answer instanceof Object) {

                for (let subquestion in answer) {
                    let newKey = question + " " + subquestion;
                    if ("newKey" in PDFData) {

                        PDFData[key][newKey] = [u[i]];
                    } else {
                        PDFData[key][newKey].push(u[i])
                    }
                    i++;
                }
            } else {

                PDFData[key][question] = u[i];
                i++;
            }
        }
    }
    return PDFData;
}