import dayjs from 'dayjs';

const data = [
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/zhifanl/personal-site/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/zhifanl/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2115',
    link: 'https://github.com/zhifanl/personal-site/graphs/contributors',
  },
];

export default data;
