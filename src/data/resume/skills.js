const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering'],
  },
  {
    title: 'PySpark',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Snowflake',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'Airflow',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'DBT',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'Talend',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'AWS Glue',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Power BI',
    competency: 4,
    category: ['Visualization'],
  },
  {
    title: 'Tableau',
    competency: 4,
    category: ['Visualization'],
  },
  {
    title: 'Excel',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Jupyter Notebooks',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Linux',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'PowerShell',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Jira',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'BigQuery',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Redshift',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Spark',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Hive',
    competency: 3,
    category: ['Data Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3', // Languages
  '#37b1f5', // ML Engineering
  '#40494e', // Data Engineering
  '#515dd4', // Tools
  '#e47272', // Visualization
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories, skills };
