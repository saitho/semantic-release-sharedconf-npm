module.exports = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/npm',
            {tarballDir: 'release'}
        ],
        [
            '@semantic-release/exec',
            {prepareCmd: 'pnpm run docs:build'}
        ],
        [
            '@semantic-release/git',
            {assets: ['package.json']}
        ],
        [
            '@semantic-release/github',
            {assets: 'release/*.tgz'}
        ],
        '@qiwi/semantic-release-gh-pages-plugin'
    ],
};