const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const {
    NativeFederationTestsHost,
} = require("@module-federation/native-federation-tests/webpack");

const deps = require("./package.json").dependencies;
const moduleFederationConfig = {
    name: "host",
    filename: "remoteEntry.js",
    remotes: {
        store: "store@http://localhost:3002/remoteEntry.js",
        nav: "nav@http://localhost:3001/remoteEntry.js",
    },
    exposes: {
        "./store": "./src/store",
    },
    shared: {
        ...deps,
        react: {
            singleton: true,
            requiredVersion: deps.react,
        },
        "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
        },
    },
};
module.exports = {
    output: {
        publicPath: "http://localhost:3000/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin(moduleFederationConfig),
        NativeFederationTestsHost({ moduleFederationConfig }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
};
