// 1. ライブラリのインストール
// 2. ライブラリの読み込み
// 3. 実行
// 変数の定義
// ライブラリの読み込み
let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps'); // dev toolからscssの何行目か確認
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename'); // rename
// 関数の実行
// task('コマンド', 実行する内容)
// コンパイル
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compact' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.task(['sass']));
});
// cssをminifyするタスク minify を作成
// cssフォルダ内のすべてのCSSを
// xx.min.cssというファイルにする
gulp.task('minify', function () {
  // minify
  return gulp.src("./assets/css/*.css")
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/css'));
});
