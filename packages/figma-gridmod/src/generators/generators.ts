import { SelectedGrid } from "../models/interfaces";

export const editColumns = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  editBorders(selectedGrid, decrease, false, amount, all, index);
  editBackgrounds(selectedGrid, selectedGrid.rows, decrease, true, amount, all, index);
  // TODO: create editRowBackgrounds, editTexts, editTableHeader
  return null;
};

export const editRows = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  editBorders(selectedGrid, decrease, true, amount, all, index);
  editBackgrounds(selectedGrid, selectedGrid.rows, decrease, true, amount, all, index);
  // TODO: create editRowBackgrounds, editTexts, editTableHeader
  return null;
};

export const getBorderTypesId = (selectedGrid: SelectedGrid): { [key: string]: string } => {
  const allBorders: { [key: string]: string } = {};
  (figma.getNodeById(selectedGrid.bordersId) as GroupNode).children.forEach(
    sceneNode => (allBorders[sceneNode.name] = sceneNode.id),
  );
  return allBorders;
};

const editBorders = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  row: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  const allBorders: { [key: string]: string } = getBorderTypesId(selectedGrid);
  row
    ? (resizeBorders(allBorders["Vertical"], decrease, amount, selectedGrid.rows, all),
      moveBorders(allBorders["Horizontal"], decrease, amount, all, index))
    : (resizeBorders(allBorders["Horizontal"], decrease, amount, selectedGrid.columns, all),
      moveBorders(allBorders["Vertical"], decrease, amount, all, index));
};

const resizeBorders = (id: string, decrease: boolean, amount: number, multiplier: number, all: boolean): void => {
  const toAdd: number = decrease ? -1 * amount : amount;
  (figma.getNodeById(id) as GroupNode).children.forEach((child: LineNode) => {
    all ? child.resize(child.width + toAdd * multiplier, 0) : child.resize(child.width + toAdd, 0);
  });
};

const moveBorders = (id: string, decrease: boolean, amount: number, all: boolean, index?: number): void => {
  const bordersToMove: GroupNode = figma.getNodeById(id) as GroupNode;
  const bordersToMoveGroupName = bordersToMove.name;
  const startIndex: number = !all ? index : 1;
  let toAdd: number = amount;
  // Top to bottom logic not needed as reference coordinate is always {0,0}
  if (bordersToMoveGroupName === "Vertical") {
    for (let i: number = startIndex; i < bordersToMove.children.length; i++) {
      // for Vertical borders, increase === add as rightward is +ve
      !decrease ? (bordersToMove.children[i].x += toAdd) : (bordersToMove.children[i].x -= toAdd);
      toAdd += amount;
    }
  } else {
    for (let i: number = startIndex; i < bordersToMove.children.length; i++) {
      // for Horizontal borders, increase === subtract as upward is negative
      !decrease ? (bordersToMove.children[i].y -= toAdd) : (bordersToMove.children[i].y += toAdd);
      toAdd += amount;
    }
  }
};

const editBackgrounds = (
  selectedGrid: SelectedGrid,
  totalBackgroundsCount: number,
  decrease: boolean,
  row: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  const toAdd: number = decrease ? -1 * amount : amount;
  const oddBackgrounds: GroupNode = (figma.getNodeById(selectedGrid.rowBackgroundId) as GroupNode)
    .children[0] as GroupNode;
  const evenBackgrounds: GroupNode = (figma.getNodeById(selectedGrid.rowBackgroundId) as GroupNode)
    .children[1] as GroupNode;
  if (all) {
    for (let i: number = 0; i < totalBackgroundsCount; i++) {
      console.log("Math.round(i / 2) :", Math.floor(i / 2));
      // if rowCount without header is odd
      if (totalBackgroundsCount % 2 !== 0) {
        i % 2 === 0
          ? row
            ? (oddBackgrounds.children[Math.floor(i / 2)].y += toAdd) // TODO and clone
            : (oddBackgrounds.children[Math.floor(i / 2)].x += toAdd)
          : row
          ? (evenBackgrounds.children[i / 2].y += toAdd)
          : (evenBackgrounds.children[i / 2].x += toAdd);
        // else if rowCount without header is even
      } else {
        i % 2 !== 0
          ? row
            ? (oddBackgrounds.children[Math.floor(i / 2)].y += toAdd)
            : (oddBackgrounds.children[Math.floor(i / 2)].x += toAdd)
          : row
          ? (evenBackgrounds.children[i / 2].y += toAdd)
          : (evenBackgrounds.children[i / 2].x += toAdd);
      }
    }
  } else {
    // if rowCount without header is odd
    if (totalBackgroundsCount % 2 !== 0) {
      index % 2 === 0
        ? row
          ? (oddBackgrounds.children[Math.round(index / 2)].y += toAdd)
          : (oddBackgrounds.children[Math.round(index / 2)].x += toAdd)
        : row
        ? (evenBackgrounds.children[index / 2].y += toAdd)
        : (evenBackgrounds.children[index / 2].x += toAdd);
      // else if rowCount without header is even
    } else {
      index % 2 !== 0
        ? row
          ? (oddBackgrounds.children[Math.round(index / 2)].y += toAdd)
          : (oddBackgrounds.children[Math.round(index / 2)].x += toAdd)
        : row
        ? (evenBackgrounds.children[index / 2].y += toAdd)
        : (evenBackgrounds.children[index / 2].x += toAdd);
    }
  }
};
