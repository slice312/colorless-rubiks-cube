const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pagesDir = `${path.resolve(__dirname, "src")}/pages/`;


const getPugPages = (dir, relativePath) => {
    return fs.readdirSync(dir)
        .flatMap(filename => {
            const filePath = path.join(dir, filename);
            if (fs.statSync(filePath).isDirectory())
                return getPugPages(filePath, path.join(relativePath, filename));

            return (relativePath)
                ? path.join(relativePath, filename)
                : filename;
        })
        .filter(fileName => fileName.endsWith(".pug"));
};


const pages = getPugPages(pagesDir, "");

module.exports = (env, argv) => {
    return (argv.mode === "production")
        ? {}
        : devConfig;
};


const devConfig = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build"),
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
    devServer: {
        port: 5007,
        static: "./build",
        hot: true,
        watchFiles: ["./src/index.pug"]
    },
    plugins: [
        ...pages.map((page) => {
            return new HtmlWebpackPlugin({
                template: path.join(pagesDir, page),
                filename: `./${path.basename(page.replace(/\.pug/, ".html"))}`,
            });
        }),
        new MiniCssExtractPlugin({
            filename: "index.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(pug)$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "pug-html-loader",
                        options: {
                            // exports: false, // TODO: хз для чего
                            pretty: true, // чтобы код html не минифицировался // TODO: хреново работает, между строками в паге в выходном файле нет пробелов
                            basedir: path.resolve(__dirname),
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
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