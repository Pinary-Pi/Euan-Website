module.exports = async function(eleventyConfig) {
    const { RenderPlugin } = await import("@11ty/eleventy");

    eleventyConfig.addPlugin(RenderPlugin, {
        tagName: "renderTemplate",
        tagNameFile: "renderFile",
        filterName: "renderContent"
    })
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images"); // where you'll keep your background & icons
    return {
        dir: {
            input: "src",
            output: "_site"
        },
        serverOptions: {
        port: 5001,
        host: "172.23.138.19" // allows access from phone on same Wi-Fi
        }
    };
};