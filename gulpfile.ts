import * as gulp from 'gulp';
import * as webpackStream from 'webpack-stream';
import config from './webpack.config';

export function build()
{
    return gulp.src(`./test/add.spec.ts`).pipe(webpackStream(config)).pipe(gulp.dest('./dist'));
}

export default build;