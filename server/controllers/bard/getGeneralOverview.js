
const {getPrompt} = require("./prompt")
exports.getGeneralOverview = async (req, res) => {
    const { book } = req.body

    const prompt = `General overview of ${book} in 100 words.`
    const response = await getPrompt({promptText:prompt});
    console.log(response)
    res.status(200).json(response)
    
};