
const book = require("../../model/userSchema");
const recommendedBooks = require("../../model/recommendedBooks");
const { sendMail } = require("../../lib/send_mail");
const guidelines = `**Guidelines:**
Please adhere to the following guidelines during your review:
1. Evaluate the content, writing style, and overall presentation.
2. Share your thoughts on the book's impact and relevance.
3. Provide constructive criticism where necessary.`
exports.sendMailAllocate = async ({ reviewerId, bookId, bookTitle, desc }) => {
    const subject = `Request for Book Review: ${bookTitle}`;
    const { name, email } = await book.findById(reviewerId)
    // Sample Variables
    console.log({ name, email })

    const receivers = [email]

    // JavaScript String Template
    let mailContent = `<pre>
Subject: Invitation to Review: "${bookTitle}" 

Dear ${name},

I trust this message finds you well. We are excited to inform you about a special event where your expertise as a reviewer is highly valued. Our esteemed admin has selected you to review the book titled "${bookTitle}" and bookId "${bookId}".

**Book Details:**
- **Title:** ${bookTitle}
- **Description:** ${desc}

**Your Role:**
As a selected reviewer, your thoughtful analysis and feedback will contribute significantly to the author's work and the literary community at large. Your task is to provide a fair and comprehensive review of the book, highlighting its strengths and offering constructive insights.

${guidelines}

**Submission:**
Submit your review via email by the specified deadline. If you encounter any challenges or require additional information, feel free to reach out.

Your contribution is invaluable, and we appreciate your time and dedication to supporting authors in their literary endeavors.

Thank you for being a part of this exciting event. We look forward to reading your insightful review.

Best regards,
</pre>
`;

    // Output the interpolated string

    const response = await sendMail({ subject, receivers, htmlBody: mailContent });

}
exports.sendMailReject = async ({ bookId, deadline, message }) => {

    const { recomendedBy: teacherId, name: bookName } = await recommendedBooks.findById(bookId)
    const subject = `Revision Request for "${bookName}" - Book ID: ${bookId}`;
    // Sample Variables
    const { name: teacherName, email: teacherEmail } = await book.findById(teacherId);

    console.log({ teacherEmail, teacherName })

    const receivers = [teacherEmail]

    // JavaScript String Template
    let mailContent = `<pre>
Dear ${teacherName},

I hope this message finds you well. I am writing to inform you that, unfortunately, the book with the title "${bookName}" (Book ID: ${bookId}) has been reviewed, and we are requesting a revision.

**Rejection Message:**
The reviewer has provided the following feedback on the book:

> ${message}

**Revision Deadline:**
To address the reviewer's concerns and enhance the manuscript, we kindly request that you make the necessary revisions and resubmit the book by the following deadline:

- **Revision Deadline:** ${deadline} days

Please take the reviewer's comments into consideration and ensure that the necessary improvements are made within the specified timeframe. We believe that your commitment to refining the content will contribute to the overall quality of the book.

If you have any questions or require further clarification regarding the reviewer's comments, please feel free to reach out. We appreciate your dedication to the improvement of your work and value your contributions to our literary community.

Thank you for your understanding, and we look forward to receiving the revised manuscript.

Best regards,
</pre>
`;
    
    const response = await sendMail({ subject, receivers, htmlBody: mailContent });
    console.log({response})
}