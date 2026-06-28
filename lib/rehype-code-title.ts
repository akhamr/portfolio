import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

/**
 * Custom rehype plugin that adds title support to code blocks.
 *
 * Usage in MDX:
 * ```js title="filename.js"
 * const x = 1;
 * ```
 *
 * The `title` is extracted from the code block's meta string
 * (parsed by rehype-prism-plus into data.meta) and rendered
 * as a <div class="code-title"> element inside <pre>, before <code>.
 */
export default function rehypeCodeTitle() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      // Find <code> nodes that are direct children of <pre>
      if (
        node.tagName !== "code" ||
        !parent ||
        parent.type !== "element" ||
        parent.tagName !== "pre" ||
        typeof index !== "number"
      ) {
        return;
      }

      // rehype-prism-plus stores the meta string in data.meta
      const meta = (node.data as { meta?: string } | undefined)?.meta;
      if (!meta) return;

      // Parse title="..." from the meta string
      const titleMatch = meta.match(/title="([^"]*)"/);
      if (!titleMatch) return;

      const title = titleMatch[1];

      // Create the title element
      const titleNode: Element = {
        type: "element",
        tagName: "div",
        properties: { className: ["code-title"] },
        children: [{ type: "text", value: title }],
      };

      // Insert the title div before <code> inside <pre>
      parent.children.splice(index, 0, titleNode);
    });
  };
}
