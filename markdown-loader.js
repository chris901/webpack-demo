
const marked = require("marked");
// const utils = require("loader-utils");
function markdownLoader(source) {
   

    const schema = {
        type: 'object', //options是一个对象
        properties: {
            headerIds: {
                type: 'boolean'
            },
        }
    }
    const options = this.getOptions(schema) || {}

    console.log(3333333, options);
    const html = marked.marked(source, options);
    return html;
    // const code = `module.exports = ${JSON.stringify(html)}`

    // return code;
}

module.exports = markdownLoader;

// zuih