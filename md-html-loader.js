const TurnDownService = require("turndown");

function markdownHtmlLoader(source) {
    console.log(source)
    const turnDownService = new TurnDownService(this.query);
    const markdown = turnDownService.turndown(source);
    const code = `module.exports = ${JSON.stringify(markdown)}`;
    return code; 
}

module.exports = markdownHtmlLoader;