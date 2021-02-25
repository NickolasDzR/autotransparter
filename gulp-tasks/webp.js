"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import newer from "gulp-newer";
import debug from "gulp-debug";
import browsersync from "browser-sync";
import cwebp from "gulp-cwebp";

gulp.task("webp", () => {
    return gulp.src(paths.webp.convert)
        .pipe(newer(paths.webp.webp))
        .pipe(cwebp({
            q: 95
        }))
        .pipe(gulp.dest(paths.webp.webp))
        .pipe(debug({
            "title": "Webp images"
        }))
        .on("end", browsersync.reload);
});