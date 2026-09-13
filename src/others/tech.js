// Technology tags for a project card.
//
// projects.json intentionally stays the single source of truth and carries no
// `technologies` field, so tags are derived from the text that is already
// there: a term is only ever shown if the project's own title or description
// names it. Nothing is inferred or added.
const VOCABULARY = [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'MERN',
    'React',
    'Redux Toolkit',
    'Redux',
    'Node.js',
    'Express.js',
    'Express',
    'MongoDB',
    'Vite',
    'Docker',
    'Google OAuth',
    'JWT',
    'SSLCommerz',
    'Shopify',
    'Liquid',
    'WordPress',
    'WooCommerce',
    'Moodle',
    'REST API',
];

const MAX_TAGS = 6;

export const deriveTech = (project) => {
    const haystack = `${project.title} ${project.description}`.toLowerCase();

    const found = VOCABULARY
        .map((term) => ({ term, at: haystack.indexOf(term.toLowerCase()) }))
        .filter((entry) => entry.at !== -1);

    // Drop terms contained in a longer match, so "Redux Toolkit" does not also
    // yield "Redux", and "Express.js" does not also yield "Express".
    const specific = found.filter(({ term }) => !found.some(
        (other) => other.term !== term && other.term.toLowerCase().includes(term.toLowerCase()),
    ));

    return specific
        .sort((a, b) => a.at - b.at)
        .slice(0, MAX_TAGS)
        .map((entry) => entry.term);
};

export default deriveTech;
