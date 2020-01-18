import "./ui.css";
import { ReferenceCoordinates } from "./interfaces/interfaces";
import * as Figma from "./utils/utils";

/* Constants */
const defaultInputsForModes: { [key: string]: string[] } = {
  "count-and-table-size": ["tableWidth", "tableHeight", "columns", "rows"],
  "count-and-cell-size": ["columnWidth", "rowHeight", "columns", "rows"],
  "cell-and-table-size": [
    "tableWidth",
    "tableHeight",
    "columnWidth",
    "rowHeight"
  ]
};
const defaultValuesForInputs: { [key: string]: string } = {
  tableWidth: "1024",
  tableHeight: "768",
  columnWidth: "100",
  rowHeight: "30",
  columns: "5",
  rows: "8"
};

/* State Changes Variable */
let isShiftHeld: boolean = false;
let isAltHeld: boolean = false;

/* Run after onLoad */
window.addEventListener("load", function() {
  (document.getElementById("tableWidth") as HTMLInputElement).select();
});

/* Toggle HTML Rendering */
function toggleEditable(
  htmlTagId: string,
  isPrerequisiteSelected: boolean,
  defaultValue: string
): void {
  const htmlTagById: HTMLInputElement = getHTMLInputElementById(htmlTagId);
  if (htmlTagById.checked) {
    htmlTagById.checked = false;
  }
  if (isPrerequisiteSelected) {
    htmlTagById.disabled = false;
    htmlTagById.value = defaultValue;
  } else {
    htmlTagById.disabled = true;
    htmlTagById.value = "N.A.";
  }
  return null;
}

/* Select HTML Elements */
// Generic HTML Element
function getHTMLElementById(htmlElement: string): HTMLElement {
  return document.getElementById(htmlElement) as HTMLElement;
}
// HTML Input Element
function getHTMLInputElementById(htmlElement: string): HTMLInputElement {
  return document.getElementById(htmlElement) as HTMLInputElement;
}

/* Reset Invalid CSS */
function resetInvalidInput(): void {
  const inputList: string[] = Object.keys(defaultValuesForInputs);
  for (let input of inputList) {
    getHTMLElementById(input).classList.remove("invalid");
  }
}

/* Set Invalid CSS by List */
function setInvalidInputs(mode: string): void {
  const inputList: string[] = defaultInputsForModes[mode];
  for (let input of inputList) {
    document.getElementById(input).classList.add("invalid");
  }
}

/* Toggle HTML Rendering */
function setDefault(mode: string) {
  const inputList: string[] = Object.keys(defaultValuesForInputs);
  for (let input of inputList) {
    if (defaultInputsForModes[mode].indexOf(input) > -1) {
      toggleEditable(input, true, defaultValuesForInputs[input]);
    } else {
      toggleEditable(input, false, defaultValuesForInputs[input]);
    }
  }
}

/* Validate User Input */
function validateUserInput(
  mode: string,
  columns: number,
  rows: number,
  columnWidth: number,
  rowHeight: number
): boolean {
  let validInput: boolean = true;
  // reset invalid CSS
  resetInvalidInput();
  // negative value check
  switch (mode) {
    case "count-and-table-size":
      if (!columns || columns < 0) {
        getHTMLInputElementById("columns").classList.add("invalid");
        validInput = false;
      }
      if (!rows || rows < 0) {
        getHTMLInputElementById("rows").classList.add("invalid");
        validInput = false;
      }
      if (!columnWidth || columnWidth < 0) {
        getHTMLInputElementById("columnWidth").classList.add("invalid");
        validInput = false;
      }
      if (!rowHeight || rowHeight < 0) {
        getHTMLInputElementById("rowHeight").classList.add("invalid");
        validInput = false;
      }
      getHTMLInputElementById("tableWidth").select();
      break;
    case "count-and-cell-size":
      if (!columns || columns <= 0) {
        getHTMLInputElementById("columns").classList.add("invalid");
        validInput = false;
      }
      if (!rows || rows <= 0) {
        getHTMLInputElementById("rows").classList.add("invalid");
        validInput = false;
      }
      if (!columnWidth || columnWidth <= 0) {
        getHTMLInputElementById("tableWidth").classList.add("invalid");
        validInput = false;
      }
      if (!rowHeight || rowHeight <= 0) {
        getHTMLInputElementById("tableHeight").classList.add("invalid");
        validInput = false;
      }
      getHTMLInputElementById("columns").select();
      break;
    case "cell-and-table-size":
      if (!columns || columns <= 0 || (columns > 0 && columnWidth <= 0)) {
        getHTMLInputElementById("tableWidth").classList.add("invalid");
        validInput = false;
      }
      if (!rows || rows <= 0 || (rows > 0 && rowHeight <= 0)) {
        getHTMLInputElementById("tableHeight").classList.add("invalid");
        validInput = false;
      }
      if (!columnWidth || columnWidth <= 0) {
        getHTMLInputElementById("columnWidth").classList.add("invalid");
        validInput = false;
      }
      if (!rowHeight || rowHeight <= 0) {
        getHTMLInputElementById("rowHeight").classList.add("invalid");
        validInput = false;
      }
      getHTMLInputElementById("tableWidth").select();
      break;
  }
  // limit check
  if (validInput) {
    if (
      columns * columnWidth > 5000 ||
      rows * rowHeight > 5000 ||
      columns > 100 ||
      rows > 100
    ) {
      setInvalidInputs(mode);
      switch (mode) {
        case "count-and-table-size":
          (document.getElementById("tableWidth") as HTMLInputElement).select();
          break;
        case "count-and-cell-size":
          (document.getElementById("columns") as HTMLInputElement).select();
          break;
        case "cell-and-table-size":
          (document.getElementById("tableWidth") as HTMLInputElement).select();
          break;
      }
      validInput = false;
    }
  }
  return validInput;
}

// Detect radio buttons state change
document.getElementById("count-and-table-size").onclick = () => {
  if (
    (document.getElementById("count-and-table-size") as HTMLInputElement)
      .checked
  ) {
    setDefault("count-and-table-size");
  }
};
document.getElementById("count-and-cell-size").onclick = () => {
  if (
    (document.getElementById("count-and-cell-size") as HTMLInputElement).checked
  ) {
    setDefault("count-and-cell-size");
  }
};
document.getElementById("cell-and-table-size").onclick = () => {
  if (
    (document.getElementById("cell-and-table-size") as HTMLInputElement).checked
  ) {
    setDefault("cell-and-table-size");
  }
};
// Detect header checkbox state change
document.getElementById("header").onchange = () => {
  toggleEditable(
    "floatingFilter",
    (document.getElementById("header") as HTMLInputElement).checked,
    ""
  );
  toggleEditable(
    "headerHeight",
    (document.getElementById("header") as HTMLInputElement).checked,
    "60"
  );
  toggleEditable(
    "floatingFilterHeight",
    (document.getElementById("floatingFilter") as HTMLInputElement).checked,
    ""
  );
};
// Detect floating filter checkbox state change
document.getElementById("floatingFilter").onchange = () => {
  toggleEditable(
    "floatingFilterHeight",
    (document.getElementById("floatingFilter") as HTMLInputElement).checked,
    "30"
  );
};
// Detect striped/alternate background checkbox state change
document.getElementById("alternateBackgrounds").onchange = () => {
  toggleEditable(
    "stripedbackgroundColor",
    (document.getElementById("alternateBackgrounds") as HTMLInputElement)
      .checked,
    "#FFFFFF"
  );
};
// Detect borders checkbox state change
document.getElementById("borders").onchange = () => {
  toggleEditable(
    "borderColor",
    (document.getElementById("borders") as HTMLInputElement).checked,
    "#C7C7C7"
  );
};
// Detect inputs state change
document.getElementById("columns").onchange = () => {
  document.getElementById("columns").classList.remove("invalid");
};
document.getElementById("rows").onchange = () => {
  document.getElementById("rows").classList.remove("invalid");
};
document.getElementById("tableWidth").onchange = () => {
  document.getElementById("tableWidth").classList.remove("invalid");
};
document.getElementById("tableHeight").onchange = () => {
  document.getElementById("tableHeight").classList.remove("invalid");
};
document.getElementById("columnWidth").onchange = () => {
  document.getElementById("columnWidth").classList.remove("invalid");
};
document.getElementById("rowHeight").onchange = () => {
  document.getElementById("rowHeight").classList.remove("invalid");
};

/* Keyboard Navigation */
document.onkeydown = keyDown => {
  let activeElement = document.activeElement as HTMLInputElement;
  if (keyDown.key === "Shift") {
    isShiftHeld = true;
  } else if (keyDown.key === "Alt") {
    isAltHeld = true;
  } else if (keyDown.key.match(/Arrow\w+/g)) {
    if (activeElement.type === "text") {
      let value: number = parseInt(activeElement.value);
      if (isShiftHeld === false) {
        switch (keyDown.key) {
          case "ArrowUp":
            value += 1;
            break;
          case "ArrowDown":
            value -= 1;
            break;
        }
      } else {
        switch (keyDown.key) {
          case "ArrowUp":
            value += 10;
            break;
          case "ArrowDown":
            value -= 10;
            break;
        }
      }
      (document.activeElement as HTMLInputElement).value = value.toString();
    }
  } else if (keyDown.key === "Tab") {
    // Selected Mode
    const mode: string = Figma.getValue("count-and-table-size", "boolean")
      ? "count-and-table-size"
      : Figma.getValue("count-and-cell-size", "boolean")
      ? "count-and-cell-size"
      : "cell-and-table-size";
    if (activeElement.id === "create" && isShiftHeld === false) {
      switch (mode) {
        case "count-and-table-size":
          (document.getElementById("tableWidth") as HTMLInputElement).select();
          break;
        case "count-and-cell-size":
          (document.getElementById("columns") as HTMLInputElement).select();
          break;
        case "cell-and-table-size":
          (document.getElementById("tableWidth") as HTMLInputElement).select();
          break;
      }
      keyDown.preventDefault();
    } else if (
      mode === "count-and-cell-size" &&
      activeElement.id === "columns" &&
      isShiftHeld === true
    ) {
      document.getElementById("create").focus();
      keyDown.preventDefault();
    } else if (activeElement.id === "tableWidth" && isShiftHeld === true) {
      document.getElementById("create").focus();
      keyDown.preventDefault();
    }
  } else if (keyDown.key === "Enter") {
    if (activeElement.type === "checkbox") {
      activeElement.checked = !activeElement.checked;
      if (activeElement.id === "header") {
        toggleEditable("floatingFilter", activeElement.checked, "");
        toggleEditable("headerHeight", activeElement.checked, "60");
      } else if (activeElement.id === "floatingFilter") {
        toggleEditable("floatingFilterHeight", activeElement.checked, "30");
      } else if (activeElement.id === "alternateBackgrounds") {
        toggleEditable(
          "stripedbackgroundColor",
          activeElement.checked,
          "#FFFFFF"
        );
      } else if (activeElement.id === "borders") {
        toggleEditable("borderColor", activeElement.checked, "#C7C7C7");
      }
    }
  } else if (
    keyDown.key === "1" ||
    keyDown.key === "2" ||
    keyDown.key === "3"
  ) {
    if (isAltHeld) {
      switch (keyDown.key) {
        case "1":
          (document.getElementById(
            "cell-and-table-size"
          ) as HTMLInputElement).checked = true;
          setDefault("cell-and-table-size");
          keyDown.preventDefault();
          break;
        case "2":
          (document.getElementById(
            "count-and-cell-size"
          ) as HTMLInputElement).checked = true;
          setDefault("count-and-cell-size");
          keyDown.preventDefault();
          break;
        case "3":
          (document.getElementById(
            "count-and-table-size"
          ) as HTMLInputElement).checked = true;
          setDefault("count-and-table-size");
          keyDown.preventDefault();
          break;
      }
    }
  }
};
document.onkeyup = keyUp => {
  if (keyUp.key === "Shift") {
    isShiftHeld = false;
  } else if (keyUp.key === "Alt") {
    isAltHeld = false;
  }
};

/* Process Input */
function processInputToMessage(isLoading: boolean): void {
  // Selected Mode
  const mode: string = Figma.getValue("count-and-table-size", "boolean")
    ? "count-and-table-size"
    : Figma.getValue("count-and-cell-size", "boolean")
    ? "count-and-cell-size"
    : "cell-and-table-size";
  // Header Info
  const header = Figma.getValue("header", "boolean");
  const headerHeight = header ? Figma.getValue("headerHeight", "number") : 0;
  const floatingFilter = Figma.getValue("floatingFilter", "boolean");
  const floatingFilterHeight = Figma.getValue("floatingFilterHeight", "number");
  // Properties and Customisations
  const borders = Figma.getValue("borders", "boolean");
  const alternateBackgrounds = Figma.getValue(
    "alternateBackgrounds",
    "boolean"
  );
  const primarybackgroundColor = Figma.getValue(
    "primarybackgroundColor",
    "string"
  );
  const stripedbackgroundColor = Figma.getValue(
    "stripedbackgroundColor",
    "string"
  );
  const borderColor = Figma.getValue("borderColor", "string");
  // Constraints Processing
  let columns: number = 0;
  let columnWidth: number = 0;
  let rows: number = 0;
  let rowHeight: number = 0;
  let referenceCoordinates: ReferenceCoordinates = { x: 0, y: 0 };
  switch (mode) {
    case "count-and-table-size":
      columns = Figma.getValue("columns", "number") as number;
      rows = Figma.getValue("rows", "number") as number;
      columnWidth =
        (Figma.getValue("tableWidth", "number") as number) / columns;
      rowHeight =
        ((Figma.getValue("tableHeight", "number") as number) -
          (headerHeight as number)) /
        rows;
      break;
    case "count-and-cell-size":
      columns = Figma.getValue("columns", "number") as number;
      rows = Figma.getValue("rows", "number") as number;
      columnWidth = Figma.getValue("columnWidth", "number") as number;
      rowHeight = Figma.getValue("rowHeight", "number") as number;
      break;
    case "cell-and-table-size":
      const tableWidth: number = Figma.getValue(
        "tableWidth",
        "number"
      ) as number;
      const tableHeight: number = Figma.getValue(
        "tableHeight",
        "number"
      ) as number;
      columnWidth = Figma.getValue("columnWidth", "number") as number;
      rowHeight = Figma.getValue("rowHeight", "number") as number;
      columns = Math.floor(tableWidth / columnWidth);
      rows = Math.floor(
        (tableHeight - (headerHeight as number)) / rowHeight + 1
      );
      referenceCoordinates.y = tableHeight % rowHeight;
      break;
  }
  // Validation
  const validWithinLimits: boolean = validateUserInput(
    mode,
    columns,
    rows,
    columnWidth,
    rowHeight
  );
  if (validWithinLimits) {
    setTimeout(() => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "create-table",
            columns: columns,
            columnWidth: columnWidth,
            rows: rows,
            rowHeight: rowHeight,
            borders: borders,
            alternateBackgrounds: alternateBackgrounds,
            header: header,
            headerHeight: headerHeight,
            floatingFilter: floatingFilter,
            floatingFilterHeight: floatingFilterHeight,
            primarybackgroundColor: primarybackgroundColor,
            stripedbackgroundColor: stripedbackgroundColor,
            borderColor: borderColor,
            referenceCoordinates: referenceCoordinates
          }
        },
        "*"
      );
    }, 100);
  } else {
    // Enable create button and hide loader
    (document.getElementById("create") as HTMLInputElement).disabled = false;
    (document.getElementById("lds") as HTMLElement).classList.remove(
      "is-visible"
    );
  }
}

/* Create Button Actions */
document.getElementById("create").onclick = () => {
  // Disable create button and display loader
  (document.getElementById("create") as HTMLInputElement).disabled = true;
  (document.getElementById("lds") as HTMLElement).classList.add("is-visible");
  // FIXME ensures that button is disabled and loader is displayed before processing input
  processInputToMessage(
    (document.getElementById("create") as HTMLInputElement).disabled
  );
};
