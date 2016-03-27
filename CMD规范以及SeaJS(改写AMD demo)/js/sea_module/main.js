/**
 * Created by jiavan on 16-3-27.
 */
seajs.config({
    base: './js/sea_module',
    alias: {}
});

seajs.use('math', function (math) {
    math.add(1, 2);
});