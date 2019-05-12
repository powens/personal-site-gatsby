export const blogCardQuery = `
  node {
    frontmatter {
      path
      date(formatString: "DD MMMM, YYYY")
      computerDate: date(formatString: "YYYY-MM-DD")
      title
      excerpt
    }
    timeToRead
  }
`;
