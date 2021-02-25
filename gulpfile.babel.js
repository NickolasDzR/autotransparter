"use strict";

import gulp from "gulp";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/views/**/*.pug"
            ]
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            dist2: "./dist/js/example/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg,webp}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
                "!./src/img/svg/*.svg",
                "!./src/img/convert/*.{jpg,jpeg,png,gif,tiff,svg}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg, webp}"
        },
        webp: {
            convert: "./src/img/convert/**/*.{jpg,jpeg,png,gif}",
            webp: "./src/img/webp/",
            dist: "./dist/img/webp/"
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./src/img/favicon/*",
            dist: "./dist/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        }
    };

// eslint-disable-next-line no-unused-vars
const demoSvgEnable = production === true ? paths.views.src.push("!./src/views/pages/demo-svg.pug") : "";

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid", "webp",
    gulp.parallel(["views", "styles", "scripts", "images", "sprites", "fonts"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "sprites", "fonts", "favicons", "gzip"]));

export default development;
