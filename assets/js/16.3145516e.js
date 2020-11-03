(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{371:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"axel-core"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axel-core"}},[t._v("#")]),t._v(" @axel/core")]),t._v(" "),s("h2",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("p",[t._v("Get started developing...")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install deps")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Setup environment (if present)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" .env.dist .env\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create the local configuration file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" api/src/config/local.js.dist api/src/config/local.js\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Edit config to add bd credentials in the sql db section")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" api/src/config/local.js\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run in development mode")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run tests")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"install-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[t._v("#")]),t._v(" Install Dependencies")]),t._v(" "),s("p",[t._v("Install all package dependencies (one time operation)")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h1",{attrs:{id:"setup-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-environment"}},[t._v("#")]),t._v(" Setup environment")]),t._v(" "),s("p",[t._v("Create the "),s("code",[t._v(".env")]),t._v(" file at the root (example can be found in the "),s("code",[t._v(".env.test")]),t._v(" file).")]),t._v(" "),s("p",[t._v("Enter the MySQL database config in "),s("code",[t._v("api/src/config/local.js")]),t._v(" ("),s("code",[t._v("sqldb")]),t._v(" section)")]),t._v(" "),s("h1",{attrs:{id:"synchronyze"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronyze"}},[t._v("#")]),t._v(" Synchronyze")]),t._v(" "),s("h2",{attrs:{id:"run-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-it"}},[t._v("#")]),t._v(" Run It")]),t._v(" "),s("h4",{attrs:{id:"run-in-development-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-in-development-mode"}},[t._v("#")]),t._v(" Run in "),s("em",[t._v("development")]),t._v(" mode:")]),t._v(" "),s("p",[t._v("Runs the application is development mode. Should not be used in production")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),s("p",[t._v("or debug it")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev:debug\n")])])]),s("h4",{attrs:{id:"run-in-production-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-in-production-mode"}},[t._v("#")]),t._v(" Run in "),s("em",[t._v("production")]),t._v(" mode:")]),t._v(" "),s("p",[t._v("Starts it in production mode.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start\n")])])]),s("h2",{attrs:{id:"test-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-it"}},[t._v("#")]),t._v(" Test It")]),t._v(" "),s("p",[t._v("Run the Mocha unit tests")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),s("p",[t._v("or debug them")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run test:debug\n")])])]),s("h2",{attrs:{id:"try-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#try-it"}},[t._v("#")]),t._v(" Try It")]),t._v(" "),s("ul",[s("li",[t._v("Open you're browser to "),s("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000"),s("OutboundLink")],1),t._v("\nYou should be in the axel manager")])]),t._v(" "),s("h2",{attrs:{id:"debug-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-it"}},[t._v("#")]),t._v(" Debug It")]),t._v(" "),s("h4",{attrs:{id:"debug-the-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-the-server"}},[t._v("#")]),t._v(" Debug the server:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm run dev:debug\n")])])]),s("h4",{attrs:{id:"debug-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-tests"}},[t._v("#")]),t._v(" Debug Tests")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm run test\n")])])]),s("h4",{attrs:{id:"debug-with-vscode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-with-vscode"}},[t._v("#")]),t._v(" Debug with VSCode")]),t._v(" "),s("p",[t._v("Add these "),s("a",{attrs:{href:"https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("contents"),s("OutboundLink")],1),t._v(" to your "),s("code",[t._v(".vscode/launch.json")]),t._v(" file")])])}),[],!1,null,null,null);e.default=n.exports}}]);