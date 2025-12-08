module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/static/images/uploads');
    eleventyConfig.addPassthroughCopy('./src/asset');
    eleventyConfig.addPassthroughCopy('./src/script.js');
    eleventyConfig.addPassthroughCopy('./src/admin');

    return{
        dir:{
            input: "src",            
            output: 'public'
        }
    };
}
