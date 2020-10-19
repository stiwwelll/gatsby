const {
  onCreateNode,
  unstable_shouldOnCreateNode,
} = require(`./on-node-create`)
exports.onCreateNode = onCreateNode
exports.unstable_shouldOnCreateNode = unstable_shouldOnCreateNode
exports.setFieldsOnGraphQLNodeType = require(`./extend-node-type`).default
