function markdownMindmapToObjectArray(markdown) {
    const lines = markdown.split('\n');
    const nodes = [];
    for (const line of lines) {
        if (line.length) {
            if (line.startsWith('##')) {
                const node = {
                    title: line.substring(3),
                    children: [],
                };
                nodes.push(node);
            } else if (!line.startsWith('# ')) {
                const childNode = {
                    title: line.startsWith('  ') ? line.substring(4) : line.substring(2),
                    children: [],
                };
                nodes[nodes.length - 1].children.push(childNode);
            }
        }
    }
    return nodes;
}
export default markdownMindmapToObjectArray;