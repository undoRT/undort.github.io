/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "undoStudio", "index.html", [
    [ "What it does", "index.html#autotoc_md75", null ],
    [ "Requirements", "index.html#autotoc_md76", null ],
    [ "Build", "index.html#autotoc_md77", null ],
    [ "Run", "index.html#autotoc_md78", null ],
    [ "The Structured Text transpiler", "index.html#autotoc_md79", null ],
    [ "Tests", "index.html#autotoc_md80", null ],
    [ "Architecture", "index.html#autotoc_md81", null ],
    [ "Repository layout", "index.html#autotoc_md82", null ],
    [ "Documentation", "index.html#autotoc_md83", null ],
    [ "Autocomplete and signature help", "md_docs_2autocomplete.html", [
      [ "The three lists", "md_docs_2autocomplete.html#autotoc_md1", null ],
      [ "Parameters of a call", "md_docs_2autocomplete.html#autotoc_md2", null ],
      [ "Navigating a list", "md_docs_2autocomplete.html#autotoc_md3", null ],
      [ "Ctrl+Click goes to the declaration", "md_docs_2autocomplete.html#autotoc_md4", null ],
      [ "Tooltips", "md_docs_2autocomplete.html#autotoc_md5", null ]
    ] ],
    [ "The Editor panel", "md_docs_2editor.html", [
      [ "The tab bar", "md_docs_2editor.html#autotoc_md7", null ],
      [ "Which backend a file gets", "md_docs_2editor.html#autotoc_md8", null ],
      [ "Switching a <tt>.json</tt> between text and tree", "md_docs_2editor.html#autotoc_md9", null ],
      [ "Panels beside it", "md_docs_2editor.html#autotoc_md10", null ]
    ] ],
    [ "JSON", "md_docs_2json.html", [
      [ "Why two backends", "md_docs_2json.html#autotoc_md12", null ],
      [ "Switching", "md_docs_2json.html#autotoc_md13", null ],
      [ "The tree viewer", "md_docs_2json.html#autotoc_md14", null ],
      [ "The configuration files", "md_docs_2json.html#autotoc_md15", null ]
    ] ],
    [ "Keyboard", "md_docs_2keyboard.html", [
      [ "Global", "md_docs_2keyboard.html#autotoc_md17", null ],
      [ "In the Editor panel", "md_docs_2keyboard.html#autotoc_md18", null ],
      [ "In the ST document", "md_docs_2keyboard.html#autotoc_md19", null ],
      [ "In a completion list", "md_docs_2keyboard.html#autotoc_md20", null ],
      [ "In the terminal", "md_docs_2keyboard.html#autotoc_md21", null ],
      [ "In a popup", "md_docs_2keyboard.html#autotoc_md22", null ]
    ] ],
    [ "ST Output", "md_docs_2output.html", [
      [ "Compiling", "md_docs_2output.html#autotoc_md24", null ],
      [ "The panel", "md_docs_2output.html#autotoc_md25", null ],
      [ "The generated file is not the file you edit", "md_docs_2output.html#autotoc_md26", null ],
      [ "A POU is saved and compiled whole", "md_docs_2output.html#autotoc_md27", null ]
    ] ],
    [ "Projects", "md_docs_2projects.html", [
      [ "Creating one", "md_docs_2projects.html#autotoc_md29", null ],
      [ "The two toolbars", "md_docs_2projects.html#autotoc_md30", null ],
      [ "What a project is on disk", "md_docs_2projects.html#autotoc_md31", null ],
      [ "Without a project", "md_docs_2projects.html#autotoc_md32", null ],
      [ "The tree knows the roles", "md_docs_2projects.html#autotoc_md33", null ],
      [ "Recent projects", "md_docs_2projects.html#autotoc_md34", null ]
    ] ],
    [ "Recent projects and recent files", "md_docs_2recent.html", [
      [ "Opening one", "md_docs_2recent.html#autotoc_md36", null ],
      [ "Inside a popup", "md_docs_2recent.html#autotoc_md37", null ],
      [ "The files list", "md_docs_2recent.html#autotoc_md38", null ],
      [ "One limit, two lists", "md_docs_2recent.html#autotoc_md39", null ]
    ] ],
    [ "State between runs", "md_docs_2state.html", [
      [ "The state files are the IDE's, not the project's", "md_docs_2state.html#autotoc_md41", null ],
      [ "<tt>[recent] max</tt> is one number for two lists", "md_docs_2state.html#autotoc_md42", null ],
      [ "Why the working directory", "md_docs_2state.html#autotoc_md43", null ]
    ] ],
    [ "Structured Text", "md_docs_2structured-text.html", [
      [ "One POU, two panes", "md_docs_2structured-text.html#autotoc_md45", null ],
      [ "Methods", "md_docs_2structured-text.html#autotoc_md46", null ],
      [ "The toolbar", "md_docs_2structured-text.html#autotoc_md47", null ],
      [ "Semantic colouring", "md_docs_2structured-text.html#autotoc_md48", null ],
      [ "The outline", "md_docs_2structured-text.html#autotoc_md49", null ],
      [ "Keyboard", "md_docs_2structured-text.html#autotoc_md50", null ]
    ] ],
    [ "Terminal", "md_docs_2terminal.html", [
      [ "What it is", "md_docs_2terminal.html#autotoc_md52", null ],
      [ "Known limitation", "md_docs_2terminal.html#autotoc_md53", null ]
    ] ],
    [ "Testing", "md_docs_2testing.html", [
      [ "What each one covers", "md_docs_2testing.html#autotoc_md55", null ],
      [ "Driving the GUI without a window", "md_docs_2testing.html#autotoc_md56", null ],
      [ "The four things that are not obvious", "md_docs_2testing.html#autotoc_md57", null ],
      [ "What the tests are for", "md_docs_2testing.html#autotoc_md58", null ]
    ] ],
    [ "undoApps", "md_docs_2undoapps.html", [
      [ "What an undoApp is", "md_docs_2undoapps.html#autotoc_md60", null ],
      [ "Writing one", "md_docs_2undoapps.html#autotoc_md61", null ],
      [ "The ones that exist", "md_docs_2undoapps.html#autotoc_md62", null ],
      [ "The ones that are meant to", "md_docs_2undoapps.html#autotoc_md63", null ],
      [ "The ecosystem around it", "md_docs_2undoapps.html#autotoc_md64", null ],
      [ "Design goals", "md_docs_2undoapps.html#autotoc_md65", null ]
    ] ],
    [ "Workspace", "md_docs_2workspace.html", [
      [ "With no project open", "md_docs_2workspace.html#autotoc_md67", null ],
      [ "With a project open", "md_docs_2workspace.html#autotoc_md68", null ],
      [ "The tree", "md_docs_2workspace.html#autotoc_md69", [
        [ "The context menu, on a file", "md_docs_2workspace.html#autotoc_md70", null ],
        [ "The context menu, on a folder", "md_docs_2workspace.html#autotoc_md71", null ]
      ] ],
      [ "Renaming moves everything", "md_docs_2workspace.html#autotoc_md72", null ],
      [ "Project configuration", "md_docs_2workspace.html#autotoc_md73", null ]
    ] ],
    [ "Changelog", "md__c_h_a_n_g_e_l_o_g.html", [
      [ "[0.1.2] - 2026-10-01", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md85", [
        [ "Added", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md86", null ],
        [ "Changed", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md87", null ],
        [ "Fixed", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md88", null ]
      ] ],
      [ "[0.1.1] - 2026-10-01", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md89", [
        [ "Added", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md90", null ],
        [ "Changed", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md91", null ],
        [ "Fixed", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md92", null ],
        [ "Known issues", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md93", null ]
      ] ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_application_8cpp.html",
"classundo_app_1_1_editor_1_1_editor_app.html#ab57ac88aee14ec218706117dc4bef1d8",
"classundo_app_1_1_s_t_1_1_s_t_app.html#a3fa0eeb2e4cd08e749693863fb3755f0",
"classundo_app_1_1_s_t_1_1_s_t_app.html#ad7d8745a801119824ecf3b126ed276fb",
"classundo_app_1_1_terminal_1_1_terminal_view.html#a1fd5c7c16cf353415d4064203516124c",
"classundo_studio_1_1core_1_1_project_manager.html#ac1c7a4dbc6e443808591f088220c7162",
"classundo_studio_1_1ui_1_1_im_gui_manager.html#ab031075a4fa41b19291a574a79562d98",
"namespaceundo_app_1_1_s_t.html#a02cf10768ac9027ce6c8ceff6457ab82",
"structundo_app_1_1_s_t_1_1_file_node.html#a831774b56cc9c169d27729668af5b653",
"structundo_app_1_1_terminal_1_1_cell.html#a7c3b09daa19cb5434b09a04d76e491e3"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';