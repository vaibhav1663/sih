const handle = (bookData, PDFData) => {
    const u = Object.values(bookData).flat();
    let i = 0;
    for (let key in PDFData) {
        const value = PDFData[key];
        for (let question in value) {
            const answer = value[question];
            
            if (answer instanceof Object) {

                for (let subquestion in answer) {
                    let newKey = question +" " +subquestion;
                    if("newKey" in PDFData){

                        PDFData[key][newKey] = [u[i]];
                    }else{
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