class AssetsFilterWebpackPlugin {
  constructor(cb) {
    this.cb = cb;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('AssetsFilterWebpackPlugin', (compilation, callback) => {

      this.cb && this.cb(compilation, callback);
    });
  }
}



module.exports = AssetsFilterWebpackPlugin;