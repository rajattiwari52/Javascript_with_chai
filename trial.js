const obj = [
    {
        lang: 'javascript',
        framework: 'react',
        library: 'redux'
    },
    {
        lang: 'python',
        framework: 'django',
        library: 'pandas'
    }
];

obj.forEach((item) => {
    console.log(item.lang, item.framework, item.library);
});