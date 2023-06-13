export function convertMapToMd(root) {
  let accumulator = "";
  const logNode = (node, level = 0) => {
    if (level > 0) accumulator += `${"	".repeat(level - 1)}- ${node.topic}\r\n`;
    if (node.children) {
      const nextLevel = level + 1;
      for (let i = 0; i < node.children.length; i++) {
        logNode(node.children[i], nextLevel);
      }
    }
  };
  logNode(root);
  return accumulator;
}
