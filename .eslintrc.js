module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    globals: {
        module: "readonly",
    },
    extends: ['eslint:recommended', 'prettier'],
};
