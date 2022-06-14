const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pagesDir = `${path.resolve(__dirname, "src")}/pages/`;

const enumerate = (dir, f) => {
    const pages = fs.readdirSync(dir)
        .flatMap(filename => {
            const pa = path.join(dir, filename);
            const stat = fs.statSync(pa);
            if (stat.isDirectory())
                return enumerate(pa, path.join(f, filename));
            return (f)
                ? path.join(f, filename)
                : filename;
        })
        .filter(fileName => fileName.endsWith(".pug"));

    return pages;

    console.log("alo");
};


const pagesss = enumerate(pagesDir, "");

module.exports = (env, argv) => {
    return (argv.mode === "production")
        ? {}
        : devConfig;
};


console.log("ROOT", path.resolve(__dirname, "src"));
console.log("ASSETS", path.resolve(__dirname, "src", "assets"));

const devConfig = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build"),
        // publicPath: path.resolve(__dirname, "src"),
        clean: true,
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/");
            return `${filepath}/[name][ext][query]`;
        }
    },
    // resolve: {
    //     modules: [
    //         path.resolve(__dirname, "src")
    //     ],
    //     alias: {
    //         assets: path.resolve(__dirname, "src/assets")
    //     }
    // },
    devServer: {
        port: 5007,
        static: "./build",
        hot: true,
        watchFiles: ["./src/index.pug"]
    },
    plugins: [
        ...pagesss.map(
            (page) => {
                return new HtmlWebpackPlugin({
                    template: path.join(pagesDir, page),
                    filename: `./${path.basename(page.replace(/\.pug/, ".html"))}`,
                });
            }
        ),
        new MiniCssExtractPlugin({
            filename: "index.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(pug)$/, // TODO: тут если че добавить html в регекс
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "pug-html-loader",
                        options: {
                            // exports: false, // TODO: хз для чего
                            pretty: true, // чтобы код html не минифицировался
                            basedir: path.resolve(__dirname),
                        }
                    }
                ]
            },
            {
                test: /\.(s)?css$/,
                use: [
                    // MiniCssExtractPlugin.loader, // TODO: вернуть этот лоадер и убрать style-loader в итоговом билде
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }
        ]
    }
};