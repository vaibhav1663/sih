

exports.getGeneralOverview = async (req, res) => {
    const { bookName } = req.body

    const prompt = encodeURI(`summarise in 100 words review of the book ${bookName}`)
    
};