import {
  generateRowBackground,
  generateBorders,
  generateTableTexts,
  generateTableHeader,
  listAvailableFontsAsync,
} from "./generators/generators";
import * as Figma from "./utils/utils";

/* Objects */
type CreateMessage = import("./interfaces/interfaces").CreateMessage;

/* Constants */
const showUIOptions: ShowUIOptions = {
  width: 300,
  height: 545,
  visible: false,
};

// This shows the HTML page in "ui.html".
figma.showUI(__html__, showUIOptions);

// Generate available font options
listAvailableFontsAsync().then(fonts => {
  let fontOptions: string = "";
  let previousFont: string = "";
  fonts.forEach(font => {
    console.log(font.fontName);
    if (font.fontName.family !== previousFont) {
      fontOptions += `<option value="${font.fontName.family}" />`;
      previousFont = font.fontName.family;
    }
  });
  figma.ui.postMessage(fontOptions);
  figma.ui.show();
});

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  processMessage(msg);
};

function processMessage(message: CreateMessage): void {
  if (message.type === "create-table") {
    /* Generate Background */
    const oddRowBackgroundGroup: GroupNode = generateRowBackground(
      "Odd",
      message.rows,
      message.rowHeight,
      message.columnWidth * message.columns,
      message.alternateBackgrounds,
      message.header,
      message.primarybackgroundColor,
      message.stripedbackgroundColor,
      message.referenceCoordinates,
    );
    const evenRowBackgroundGroup: GroupNode = generateRowBackground(
      "Even",
      message.rows,
      message.rowHeight,
      message.columnWidth * message.columns,
      message.alternateBackgrounds,
      message.header,
      message.primarybackgroundColor,
      message.stripedbackgroundColor,
      message.referenceCoordinates,
    );
    const rowBackgroundNode: SceneNode[] = [oddRowBackgroundGroup, evenRowBackgroundGroup];
    const rowBackgroundGroup: GroupNode = Figma.groupNodes(rowBackgroundNode, figma.currentPage);
    rowBackgroundGroup.name = "Row Background";

    /* Generate Texts */
    const columnTextsGroup: GroupNode = generateTableTexts(
      message.rows,
      message.rowHeight,
      message.columns,
      message.columnWidth,
      message.tableFont,
      message.header,
      message.referenceCoordinates,
    );

    /* Generate Headers */
    const tableHeaderGroup: GroupNode = generateTableHeader(
      message.rows,
      message.rowHeight,
      message.columns,
      message.columnWidth,
      message.header,
      message.headerHeight,
      message.headerFont,
      message.floatingFilter,
      message.floatingFilterHeight,
      message.primarybackgroundColor,
      message.referenceCoordinates,
    );

    /* Generate Borders */
    const verticalLinesGroup: GroupNode = generateBorders(
      "Vertical",
      message.borders,
      message.columns,
      message.columnWidth,
      message.rows,
      message.rowHeight,
      message.header,
      message.headerHeight,
      message.borderColor,
      message.referenceCoordinates,
    );
    const horizontalLinesGroup: GroupNode = generateBorders(
      "Horizontal",
      message.borders,
      message.rows,
      message.rowHeight,
      message.columns,
      message.columnWidth,
      message.header,
      message.headerHeight,
      message.borderColor,
      message.referenceCoordinates,
    );
    const borderLinesNode: SceneNode[] = [verticalLinesGroup, horizontalLinesGroup];
    const borderLinesGroup: GroupNode = Figma.groupNodes(borderLinesNode, figma.currentPage);
    borderLinesGroup.name = "Borders";

    /* Sort Group Nodes */
    const tableGroup = Figma.groupNodes([rowBackgroundGroup], figma.currentPage);
    tableGroup.appendChild(columnTextsGroup);
    if (tableHeaderGroup !== null) {
      tableGroup.appendChild(tableHeaderGroup);
    }
    tableGroup.appendChild(borderLinesGroup);
    tableGroup.name = "Table";
    figma.currentPage.selection = [tableGroup];
    figma.viewport.scrollAndZoomIntoView([tableGroup]);

    /* Notify Success to User */
    figma.notify("👍 GridGen successfully generated your table");
    figma.closePlugin();
    return null;
  }
}
