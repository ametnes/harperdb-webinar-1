const TEST_NAMES = [
    'Tommy Pickles'
];

module.exports = (directors) => directors.filter(director =>
    !TEST_NAMES.includes(director.name)
);
