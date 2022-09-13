import { addClass, removeClass, Browser } from "@syncfusion/ej2-base";
import {
  RichTextEditorComponent,
  Toolbar,
  Inject,
  Image,
  Link,
  HtmlEditor,
  Count,
  QuickToolbar,
  Table,
} from "@syncfusion/ej2-react-richtexteditor";
import { FileManager } from "@syncfusion/ej2-react-richtexteditor";
import { createElement } from "@syncfusion/ej2-base";
import * as CodeMirror from "codemirror";
import { useEffect, useState } from "react";

export const RTE = () => {
  const [rteObj, setRteObj] = useState();
  const [getVal, setGetVal] = useState();

  const hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
  // Rich Text Editor items list
  const items = [
    "Bold",
    "Italic",
    "Underline",
    "StrikeThrough",
    "FontName",
    "FontSize",
    "FontColor",
    "BackgroundColor",
    "LowerCase",
    "UpperCase",
    "|",
    "Formats",
    "Alignments",
    "NumberFormatList",
    "BulletFormatList",
    "Outdent",
    "Indent",
    "SuperScript",
    "SubScript",
    "|",
    "CreateTable",
    "CreateLink",
    "Image",
    "FileManager",
    "|",
    "ClearFormat",
    "Print",
    "SourceCode",
    "FullScreen",
    "|",
    "Undo",
    "Redo",
  ];

  const image = [
    "Replace",
    "Align",
    "Caption",
    "Remove",
    "InsertLink",
    "OpenImageLink",
    "-",
    "EditImageLink",
    "RemoveImageLink",
    "Display",
    "AltText",
    "Dimension",
    {
      tooltipText: "Rotate Left",
      template:
        '<button class="e-tbar-btn e-btn" id="roatateLeft"><span class="e-btn-icon e-icons e-rotate-left"></span>',
    },
    {
      tooltipText: "Rotate Right",
      template:
        '<button class="e-tbar-btn e-btn" id="roatateRight"><span class="e-btn-icon e-icons e-rotate-right"></span>',
    },
  ];

  const fileManagerSettings = {
    enable: true,
    path: "/Pictures/Food",
    ajaxSettings: {
      url: hostUrl + "api/FileManager/FileOperations",
      getImageUrl: hostUrl + "api/FileManager/GetImage",
      uploadUrl: hostUrl + "api/FileManager/Upload",
      downloadUrl: hostUrl + "api/FileManager/Download",
    },
  };

  const quickToolbarSettings = {
    table: [
      "TableHeader",
      "TableRows",
      "TableColumns",
      "TableCell",
      "-",
      "BackgroundColor",
      "TableRemove",
      "TableCellVerticalAlign",
      "Styles",
    ],
    image: image,
  };

  //Rich Text Editor ToolbarSettings
  const toolbarSettings = {
    items: items,
  };
  let textArea;
  let myCodeMirror;

  const insertImageSetting = {
    saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
  };

  const mirrorConversion = (e) => {
    textArea = rteObj.contentModule.getEditPanel();
    let id = rteObj.getID() + "mirror-view";
    let mirrorView = rteObj.element.querySelector("#" + id);
    let charCount = rteObj.element.querySelector(".e-rte-character-count");
    if (e.targetItem === "Preview") {
      textArea.style.display = "block";
      mirrorView.style.display = "none";
      textArea.innerHTML = myCodeMirror.getValue();
      charCount.style.display = "block";
    } else {
      if (!mirrorView) {
        mirrorView = createElement("div", { className: "e-content" });
        mirrorView.id = id;
        textArea.parentNode.appendChild(mirrorView);
      } else {
        mirrorView.innerHTML = "";
      }
      textArea.style.display = "none";
      mirrorView.style.display = "block";
      renderCodeMirror(mirrorView, rteObj.value);
      charCount.style.display = "none";
    }
  };
  const renderCodeMirror = (mirrorView, content) => {
    myCodeMirror = CodeMirror(mirrorView, {
      value: content,
      lineNumbers: true,
      mode: "text/html",
      lineWrapping: true,
    });

    console.log("myCodeMirror", myCodeMirror);
  };
  const handleFullScreen = (e) => {
    let sbCntEle = document.querySelector(".sb-content.e-view");
    let sbHdrEle = document.querySelector(".sb-header.e-view");
    let leftBar;
    let transformElement;
    if (Browser.isDevice) {
      leftBar = document.querySelector("#right-sidebar");
      transformElement = document.querySelector(
        ".sample-browser.e-view.e-content-animation",
      );
    } else {
      leftBar = document.querySelector("#left-sidebar");
      transformElement = document.querySelector("#right-pane");
    }
    if (e.targetItem === "Maximize") {
      if (Browser.isDevice && Browser.isIos) {
        addClass([sbCntEle, sbHdrEle], ["hide-header"]);
      }
      addClass([leftBar], ["e-close"]);
      removeClass([leftBar], ["e-open"]);
      if (!Browser.isDevice) {
        transformElement.style.marginLeft = "0px";
      }
      transformElement.style.transform = "inherit";
    } else if (e.targetItem === "Minimize") {
      if (Browser.isDevice && Browser.isIos) {
        removeClass([sbCntEle, sbHdrEle], ["hide-header"]);
      }
      removeClass([leftBar], ["e-close"]);
      if (!Browser.isDevice) {
        addClass([leftBar], ["e-open"]);
        transformElement.style.marginLeft = leftBar.offsetWidth + "px";
      }
      transformElement.style.transform = "translateX(0px)";
    }
  };
  const actionCompleteHandler = (e) => {
    if (
      e.targetItem &&
      (e.targetItem === "SourceCode" || e.targetItem === "Preview")
    ) {
      rteObj.sourceCodeModule.getPanel().style.display = "none";
      mirrorConversion(e);
    } else {
      setTimeout(() => {
        rteObj.toolbarModule.refreshToolbarOverflow();
      }, 1000);
    }
  };

  const save = () => {
    console.log("save", rteObj.value);
    const formData = new FormData();
    formData.append("about", rteObj.value);
    fetch("http://localhost/thorient/information/about/edit-about", {
      method: "POST",
      //   headers: { "Content-Type": "application/json" },
      body: formData,
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  };
  return (
    <div className='control-pane'>
      <div className='control-section' id='rteTools'>
        <div className='rte-control-section'>
          <RichTextEditorComponent
            insertImageSettings={insertImageSetting}
            id='toolsRTE'
            ref={(richtexteditor) => {
              setRteObj(richtexteditor);
            }}
            showCharCount={true}
            actionBegin={handleFullScreen}
            actionComplete={actionCompleteHandler}
            maxLength={2000}
            toolbarSettings={toolbarSettings}
            fileManagerSettings={fileManagerSettings}
            quickToolbarSettings={quickToolbarSettings}>
            <Inject
              services={[
                Toolbar,
                Image,
                Link,
                HtmlEditor,
                Count,
                QuickToolbar,
                Table,
                FileManager,
              ]}
            />
          </RichTextEditorComponent>
        </div>
      </div>
      <div>
        <button
          id='getVal'
          ref={(btn) => {
            setGetVal(btn);
          }}
          onClick={save}>
          Save
        </button>
      </div>
    </div>
  );
};
