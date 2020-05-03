const fs = require('fs');
const { schemaPath } = JSON.parse(fs.readFileSync('.graphqlconfig', 'utf-8'));

module.exports = {
  src: './src',
  schema: schemaPath,
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
};

// module.exports = {
//   src: './src',
//   schema: './data/schema.graphql',
//   exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
// };
