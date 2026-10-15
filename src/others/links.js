// Web links open in a new tab; mailto: and other schemes open in place.
export const externalProps = (url) => (/^https?:\/\//.test(url)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {});

// "https://github.com/x/" -> "github.com/x", "mailto:a@b.c" -> "a@b.c"
export const readableUrl = (url) => url
    .replace(/^(https?:\/\/|mailto:)/, '')
    .replace(/\/$/, '');

// owner/repo from any github.com URL (repo, issue, pull request…), else ''
export const githubRepo = (url = '') => {
    const match = url.match(/^https?:\/\/(?:www\.)?github\.com\/([^/]+\/[^/#?]+)/);
    return match ? match[1] : '';
};
