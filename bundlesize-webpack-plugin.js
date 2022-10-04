const fs = require("fs");
const { resolve } = require("path");
class BundleSizeWebpackPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        const { sizeLimit } = this.options;
        console.log('BundleSizeWebpackPlugin use');
        compiler.hooks.compile.tap('BundleSizePlugin', (compilationParams) => {
            console.log('compile', compilationParams)
        })

        compiler.hooks.done.tap('BundleSizePlugin', (stats) => {
            const { path, filename } = stats.compilation.outputOptions;
            const bundlePath = resolve(path, filename);
            const { size } = fs.statSync(bundlePath);
            const bundleSize = size / 1024;
            console.log(33333, bundleSize)
            if (bundleSize < sizeLimit) {
                console.log("safe-bundleSize");
            } else {
                console.error("unsafe-bundleSize");
            }
        })

    }
}

module.exports = BundleSizeWebpackPlugin;