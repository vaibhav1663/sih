const {sendMail} = require("../../lib/send_mail");

const ADMIN_MAIL = "satvikg7@pm.me"
exports.sendMail = async ({name,desc, date, referenceId, recomendedBy, files }) => {
    const subject = `Request for Book Review: ${name}; Recommended By:${recomendedBy}`;
    const receivers = [ADMIN_MAIL] // Admin 
    const body = `<pre>Dear [Admin],
    
    I trust this message finds you well. We have received a book review request for the following book:
    
    Book Name: ${name}
    Recommended By: ${recomendedBy}
    The book is currently not under review, and we believe your expertise would be invaluable in providing insightful feedback. Here are some additional details:
    Description: ${desc}
    Date:${date}
    Reference ID: ${referenceId}
    The recommender, ${recomendedBy}, has put forth this book for your consideration. If you are available and willing to undertake this review, please confirm your interest at your earliest convenience. Upon your confirmation, we will provide you with access to the necessary materials, including a digital copy of the book and any additional information provided by the author.</pre>
    `;
    const response = await sendMail({ subject, receivers, htmlBody:body })
    console.log({response})

}