// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../Cargo.toml":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__wbg_url_1c013f0875e97715 = exports.__wbg_toString_7be108a12ef03bc2 = exports.__wbg_toString_73c9b562dccf34bd = exports.__wbg_then_cedad20fbbd9418a = exports.__wbg_then_11f7a54d67b4bfad = exports.__wbg_text_1169d752cc697903 = exports.__wbg_textContent_77bd294928962f93 = exports.__wbg_subtreeid_e348577f7ef777e3 = exports.__wbg_stringify_d6471d300ded9b68 = exports.__wbg_status_c4ef3dd591e63435 = exports.__wbg_stack_658279fe44541cf6 = exports.__wbg_setvalue_e5b519cca37d82a7 = exports.__wbg_setvalue_df64bc6794c098f2 = exports.__wbg_setsubtreeid_d32e6327eef1f7fc = exports.__wbg_setsearch_40007c2a91333011 = exports.__wbg_setnodeValue_4077cafeefd0725e = exports.__wbg_setlistenerid_3183aae8fa5840fb = exports.__wbg_setinnerHTML_32081d8a164e6dc4 = exports.__wbg_setchecked_f1e1f3e62cdca8e7 = exports.__wbg_setcachekey_80183b7cfc421143 = exports.__wbg_set_bf3f89b92d5a34bf = exports.__wbg_setAttribute_d8436c14a59ab1af = exports.__wbg_self_6d479506f72c6a71 = exports.__wbg_search_afb25c63fe262036 = exports.__wbg_resolve_99fe17964f31ffc0 = exports.__wbg_removeEventListener_b10f1a66647f3aa0 = exports.__wbg_removeChild_6751e9ca5d9aaf00 = exports.__wbg_removeAttribute_beaed7727852af78 = exports.__wbg_reload_7d09a33ced11e6b5 = exports.__wbg_parentNode_e397bbbe28be7b28 = exports.__wbg_parentElement_0cffb3ceb0f107bd = exports.__wbg_outerHTML_bf662bdff92e5910 = exports.__wbg_next_aaef7c8aa5e212ac = exports.__wbg_next_579e583d33566a86 = exports.__wbg_nextSibling_62338ec2a05607b4 = exports.__wbg_newwithstrandinit_05d7180788420c40 = exports.__wbg_newwithstr_fdce36db91ec5f92 = exports.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = exports.__wbg_newnoargs_b5b063fc6c2f0376 = exports.__wbg_new_ca4d3a3eca340210 = exports.__wbg_new_abda76e883ba8a5f = exports.__wbg_new_8c3f0052272a457a = exports.__wbg_new_7d95b89914e4d377 = exports.__wbg_new_2d0053ee81e4dd2a = exports.__wbg_new_0b9bfdd97583284e = exports.__wbg_new0_a57059d72c5b7aee = exports.__wbg_namespaceURI_e19c7be2c60e5b5c = exports.__wbg_name_48eda3ae6aa697ca = exports.__wbg_message_fe2af63ccc8985bc = exports.__wbg_log_de258f66ad9eb784 = exports.__wbg_location_8cc8ccf27e342c0a = exports.__wbg_listenerid_12315eee21527820 = exports.__wbg_length_6e3bbe7c8bd4dbd8 = exports.__wbg_lastChild_a2f5ed739809bb31 = exports.__wbg_iterator_6f9d4f28845f426c = exports.__wbg_is_40a66842732708e7 = exports.__wbg_instanceof_WorkerGlobalScope_16bb97a4549a3f21 = exports.__wbg_instanceof_Window_acc97ff9f5d2c7b4 = exports.__wbg_instanceof_ShadowRoot_76b32ccdae10a710 = exports.__wbg_instanceof_Response_eaa426220848a39e = exports.__wbg_instanceof_Error_56b496a10a56de66 = exports.__wbg_instanceof_Element_33bd126d58f2021b = exports.__wbg_insertBefore_9f2d2defb9471006 = exports.__wbg_innerHTML_ab79c5e519527826 = exports.__wbg_info_d60a960a4e955dc2 = exports.__wbg_host_57eec05a2624bc1b = exports.__wbg_headers_fd64ad685cf22e5d = exports.__wbg_has_8359f114ce042f5a = exports.__wbg_global_ba75c50d1cf384f4 = exports.__wbg_globalThis_7f206bda628d5286 = exports.__wbg_get_765201544a2b6869 = exports.__wbg_get_57245cc7d7c7619d = exports.__wbg_getTimezoneOffset_89bd4275e1ca8341 = exports.__wbg_getTime_cb82adb2556ed13e = exports.__wbg_getElementById_3a708b83e4f034d7 = exports.__wbg_from_7ce3cb27cb258569 = exports.__wbg_fetch_749a56934f95c96c = exports.__wbg_fetch_3894579f6e2af3be = exports.__wbg_fetch_0fe04905cccfc2aa = exports.__wbg_error_f851667af71bcfc6 = exports.__wbg_error_ef9a0be47931175f = exports.__wbg_error_71d6845bf00a930f = exports.__wbg_error_00c5d571f754f629 = exports.__wbg_done_1b73b0672e15f234 = exports.__wbg_document_3ead31dbcad65886 = exports.__wbg_debug_64711eb2fc6980ef = exports.__wbg_createTextNode_300f845fab76642f = exports.__wbg_createElement_976dbb84fe1661b5 = exports.__wbg_createElementNS_1561aca8ee3693c0 = exports.__wbg_composedPath_160ed014dc4d787f = exports.__wbg_children_67776b4810f38b6a = exports.__wbg_cancelBubble_8c0bdf21c08f1717 = exports.__wbg_call_97ae9d8645dc388b = exports.__wbg_cachekey_b61393159c57fd7b = exports.__wbg_buffer_3f3d764d4747d564 = exports.__wbg_bubbles_03eed164b4feeaf1 = exports.__wbg_body_3cb4b4042b9a632b = exports.__wbg_append_de37df908812970d = exports.__wbg_appendChild_e513ef0e5098dfdd = exports.__wbg_addEventListener_1fc744729ac6dc27 = void 0;
exports.run = exports.default = exports.__wbindgen_throw = exports.__wbindgen_string_new = exports.__wbindgen_string_get = exports.__wbindgen_object_drop_ref = exports.__wbindgen_object_clone_ref = exports.__wbindgen_memory = exports.__wbindgen_is_undefined = exports.__wbindgen_is_object = exports.__wbindgen_is_function = exports.__wbindgen_debug_string = exports.__wbindgen_closure_wrapper9371 = exports.__wbindgen_closure_wrapper8980 = exports.__wbindgen_cb_drop = exports.__wbg_window_f2557cc78490aceb = exports.__wbg_warn_be542501a57387a5 = exports.__wbg_value_ccb32485ee1b3928 = exports.__wbg_value_b2a620d34c663701 = exports.__wbg_value_1ccc36bc03462d71 = exports.__wbg_url_74285ddf2747cb3d = void 0;
var _yew_app_bg = _interopRequireDefault(require("./pkg/yew_app_bg.wasm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _yew_app_bg.default;
exports.default = _default;
var run = _yew_app_bg.default.run;
exports.run = run;
var __wbindgen_is_undefined = _yew_app_bg.default.__wbindgen_is_undefined;
exports.__wbindgen_is_undefined = __wbindgen_is_undefined;
var __wbindgen_string_new = _yew_app_bg.default.__wbindgen_string_new;
exports.__wbindgen_string_new = __wbindgen_string_new;
var __wbindgen_object_clone_ref = _yew_app_bg.default.__wbindgen_object_clone_ref;
exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;
var __wbg_fetch_3894579f6e2af3be = _yew_app_bg.default.__wbg_fetch_3894579f6e2af3be;
exports.__wbg_fetch_3894579f6e2af3be = __wbg_fetch_3894579f6e2af3be;
var __wbindgen_cb_drop = _yew_app_bg.default.__wbindgen_cb_drop;
exports.__wbindgen_cb_drop = __wbindgen_cb_drop;
var __wbindgen_string_get = _yew_app_bg.default.__wbindgen_string_get;
exports.__wbindgen_string_get = __wbindgen_string_get;
var __wbg_listenerid_12315eee21527820 = _yew_app_bg.default.__wbg_listenerid_12315eee21527820;
exports.__wbg_listenerid_12315eee21527820 = __wbg_listenerid_12315eee21527820;
var __wbg_setlistenerid_3183aae8fa5840fb = _yew_app_bg.default.__wbg_setlistenerid_3183aae8fa5840fb;
exports.__wbg_setlistenerid_3183aae8fa5840fb = __wbg_setlistenerid_3183aae8fa5840fb;
var __wbg_subtreeid_e348577f7ef777e3 = _yew_app_bg.default.__wbg_subtreeid_e348577f7ef777e3;
exports.__wbg_subtreeid_e348577f7ef777e3 = __wbg_subtreeid_e348577f7ef777e3;
var __wbg_setsubtreeid_d32e6327eef1f7fc = _yew_app_bg.default.__wbg_setsubtreeid_d32e6327eef1f7fc;
exports.__wbg_setsubtreeid_d32e6327eef1f7fc = __wbg_setsubtreeid_d32e6327eef1f7fc;
var __wbg_cachekey_b61393159c57fd7b = _yew_app_bg.default.__wbg_cachekey_b61393159c57fd7b;
exports.__wbg_cachekey_b61393159c57fd7b = __wbg_cachekey_b61393159c57fd7b;
var __wbg_setcachekey_80183b7cfc421143 = _yew_app_bg.default.__wbg_setcachekey_80183b7cfc421143;
exports.__wbg_setcachekey_80183b7cfc421143 = __wbg_setcachekey_80183b7cfc421143;
var __wbg_error_f851667af71bcfc6 = _yew_app_bg.default.__wbg_error_f851667af71bcfc6;
exports.__wbg_error_f851667af71bcfc6 = __wbg_error_f851667af71bcfc6;
var __wbg_new_abda76e883ba8a5f = _yew_app_bg.default.__wbg_new_abda76e883ba8a5f;
exports.__wbg_new_abda76e883ba8a5f = __wbg_new_abda76e883ba8a5f;
var __wbg_stack_658279fe44541cf6 = _yew_app_bg.default.__wbg_stack_658279fe44541cf6;
exports.__wbg_stack_658279fe44541cf6 = __wbg_stack_658279fe44541cf6;
var __wbindgen_object_drop_ref = _yew_app_bg.default.__wbindgen_object_drop_ref;
exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;
var __wbindgen_is_object = _yew_app_bg.default.__wbindgen_is_object;
exports.__wbindgen_is_object = __wbindgen_is_object;
var __wbg_error_71d6845bf00a930f = _yew_app_bg.default.__wbg_error_71d6845bf00a930f;
exports.__wbg_error_71d6845bf00a930f = __wbg_error_71d6845bf00a930f;
var __wbg_instanceof_Window_acc97ff9f5d2c7b4 = _yew_app_bg.default.__wbg_instanceof_Window_acc97ff9f5d2c7b4;
exports.__wbg_instanceof_Window_acc97ff9f5d2c7b4 = __wbg_instanceof_Window_acc97ff9f5d2c7b4;
var __wbg_document_3ead31dbcad65886 = _yew_app_bg.default.__wbg_document_3ead31dbcad65886;
exports.__wbg_document_3ead31dbcad65886 = __wbg_document_3ead31dbcad65886;
var __wbg_location_8cc8ccf27e342c0a = _yew_app_bg.default.__wbg_location_8cc8ccf27e342c0a;
exports.__wbg_location_8cc8ccf27e342c0a = __wbg_location_8cc8ccf27e342c0a;
var __wbg_fetch_0fe04905cccfc2aa = _yew_app_bg.default.__wbg_fetch_0fe04905cccfc2aa;
exports.__wbg_fetch_0fe04905cccfc2aa = __wbg_fetch_0fe04905cccfc2aa;
var __wbg_body_3cb4b4042b9a632b = _yew_app_bg.default.__wbg_body_3cb4b4042b9a632b;
exports.__wbg_body_3cb4b4042b9a632b = __wbg_body_3cb4b4042b9a632b;
var __wbg_createElement_976dbb84fe1661b5 = _yew_app_bg.default.__wbg_createElement_976dbb84fe1661b5;
exports.__wbg_createElement_976dbb84fe1661b5 = __wbg_createElement_976dbb84fe1661b5;
var __wbg_createElementNS_1561aca8ee3693c0 = _yew_app_bg.default.__wbg_createElementNS_1561aca8ee3693c0;
exports.__wbg_createElementNS_1561aca8ee3693c0 = __wbg_createElementNS_1561aca8ee3693c0;
var __wbg_createTextNode_300f845fab76642f = _yew_app_bg.default.__wbg_createTextNode_300f845fab76642f;
exports.__wbg_createTextNode_300f845fab76642f = __wbg_createTextNode_300f845fab76642f;
var __wbg_getElementById_3a708b83e4f034d7 = _yew_app_bg.default.__wbg_getElementById_3a708b83e4f034d7;
exports.__wbg_getElementById_3a708b83e4f034d7 = __wbg_getElementById_3a708b83e4f034d7;
var __wbg_addEventListener_1fc744729ac6dc27 = _yew_app_bg.default.__wbg_addEventListener_1fc744729ac6dc27;
exports.__wbg_addEventListener_1fc744729ac6dc27 = __wbg_addEventListener_1fc744729ac6dc27;
var __wbg_removeEventListener_b10f1a66647f3aa0 = _yew_app_bg.default.__wbg_removeEventListener_b10f1a66647f3aa0;
exports.__wbg_removeEventListener_b10f1a66647f3aa0 = __wbg_removeEventListener_b10f1a66647f3aa0;
var __wbg_instanceof_WorkerGlobalScope_16bb97a4549a3f21 = _yew_app_bg.default.__wbg_instanceof_WorkerGlobalScope_16bb97a4549a3f21;
exports.__wbg_instanceof_WorkerGlobalScope_16bb97a4549a3f21 = __wbg_instanceof_WorkerGlobalScope_16bb97a4549a3f21;
var __wbg_fetch_749a56934f95c96c = _yew_app_bg.default.__wbg_fetch_749a56934f95c96c;
exports.__wbg_fetch_749a56934f95c96c = __wbg_fetch_749a56934f95c96c;
var __wbg_parentNode_e397bbbe28be7b28 = _yew_app_bg.default.__wbg_parentNode_e397bbbe28be7b28;
exports.__wbg_parentNode_e397bbbe28be7b28 = __wbg_parentNode_e397bbbe28be7b28;
var __wbg_parentElement_0cffb3ceb0f107bd = _yew_app_bg.default.__wbg_parentElement_0cffb3ceb0f107bd;
exports.__wbg_parentElement_0cffb3ceb0f107bd = __wbg_parentElement_0cffb3ceb0f107bd;
var __wbg_lastChild_a2f5ed739809bb31 = _yew_app_bg.default.__wbg_lastChild_a2f5ed739809bb31;
exports.__wbg_lastChild_a2f5ed739809bb31 = __wbg_lastChild_a2f5ed739809bb31;
var __wbg_nextSibling_62338ec2a05607b4 = _yew_app_bg.default.__wbg_nextSibling_62338ec2a05607b4;
exports.__wbg_nextSibling_62338ec2a05607b4 = __wbg_nextSibling_62338ec2a05607b4;
var __wbg_setnodeValue_4077cafeefd0725e = _yew_app_bg.default.__wbg_setnodeValue_4077cafeefd0725e;
exports.__wbg_setnodeValue_4077cafeefd0725e = __wbg_setnodeValue_4077cafeefd0725e;
var __wbg_textContent_77bd294928962f93 = _yew_app_bg.default.__wbg_textContent_77bd294928962f93;
exports.__wbg_textContent_77bd294928962f93 = __wbg_textContent_77bd294928962f93;
var __wbg_appendChild_e513ef0e5098dfdd = _yew_app_bg.default.__wbg_appendChild_e513ef0e5098dfdd;
exports.__wbg_appendChild_e513ef0e5098dfdd = __wbg_appendChild_e513ef0e5098dfdd;
var __wbg_insertBefore_9f2d2defb9471006 = _yew_app_bg.default.__wbg_insertBefore_9f2d2defb9471006;
exports.__wbg_insertBefore_9f2d2defb9471006 = __wbg_insertBefore_9f2d2defb9471006;
var __wbg_removeChild_6751e9ca5d9aaf00 = _yew_app_bg.default.__wbg_removeChild_6751e9ca5d9aaf00;
exports.__wbg_removeChild_6751e9ca5d9aaf00 = __wbg_removeChild_6751e9ca5d9aaf00;
var __wbg_reload_7d09a33ced11e6b5 = _yew_app_bg.default.__wbg_reload_7d09a33ced11e6b5;
exports.__wbg_reload_7d09a33ced11e6b5 = __wbg_reload_7d09a33ced11e6b5;
var __wbg_instanceof_Response_eaa426220848a39e = _yew_app_bg.default.__wbg_instanceof_Response_eaa426220848a39e;
exports.__wbg_instanceof_Response_eaa426220848a39e = __wbg_instanceof_Response_eaa426220848a39e;
var __wbg_url_74285ddf2747cb3d = _yew_app_bg.default.__wbg_url_74285ddf2747cb3d;
exports.__wbg_url_74285ddf2747cb3d = __wbg_url_74285ddf2747cb3d;
var __wbg_status_c4ef3dd591e63435 = _yew_app_bg.default.__wbg_status_c4ef3dd591e63435;
exports.__wbg_status_c4ef3dd591e63435 = __wbg_status_c4ef3dd591e63435;
var __wbg_headers_fd64ad685cf22e5d = _yew_app_bg.default.__wbg_headers_fd64ad685cf22e5d;
exports.__wbg_headers_fd64ad685cf22e5d = __wbg_headers_fd64ad685cf22e5d;
var __wbg_text_1169d752cc697903 = _yew_app_bg.default.__wbg_text_1169d752cc697903;
exports.__wbg_text_1169d752cc697903 = __wbg_text_1169d752cc697903;
var __wbg_new_2d0053ee81e4dd2a = _yew_app_bg.default.__wbg_new_2d0053ee81e4dd2a;
exports.__wbg_new_2d0053ee81e4dd2a = __wbg_new_2d0053ee81e4dd2a;
var __wbg_append_de37df908812970d = _yew_app_bg.default.__wbg_append_de37df908812970d;
exports.__wbg_append_de37df908812970d = __wbg_append_de37df908812970d;
var __wbg_new_ca4d3a3eca340210 = _yew_app_bg.default.__wbg_new_ca4d3a3eca340210;
exports.__wbg_new_ca4d3a3eca340210 = __wbg_new_ca4d3a3eca340210;
var __wbg_instanceof_Element_33bd126d58f2021b = _yew_app_bg.default.__wbg_instanceof_Element_33bd126d58f2021b;
exports.__wbg_instanceof_Element_33bd126d58f2021b = __wbg_instanceof_Element_33bd126d58f2021b;
var __wbg_namespaceURI_e19c7be2c60e5b5c = _yew_app_bg.default.__wbg_namespaceURI_e19c7be2c60e5b5c;
exports.__wbg_namespaceURI_e19c7be2c60e5b5c = __wbg_namespaceURI_e19c7be2c60e5b5c;
var __wbg_innerHTML_ab79c5e519527826 = _yew_app_bg.default.__wbg_innerHTML_ab79c5e519527826;
exports.__wbg_innerHTML_ab79c5e519527826 = __wbg_innerHTML_ab79c5e519527826;
var __wbg_setinnerHTML_32081d8a164e6dc4 = _yew_app_bg.default.__wbg_setinnerHTML_32081d8a164e6dc4;
exports.__wbg_setinnerHTML_32081d8a164e6dc4 = __wbg_setinnerHTML_32081d8a164e6dc4;
var __wbg_outerHTML_bf662bdff92e5910 = _yew_app_bg.default.__wbg_outerHTML_bf662bdff92e5910;
exports.__wbg_outerHTML_bf662bdff92e5910 = __wbg_outerHTML_bf662bdff92e5910;
var __wbg_children_67776b4810f38b6a = _yew_app_bg.default.__wbg_children_67776b4810f38b6a;
exports.__wbg_children_67776b4810f38b6a = __wbg_children_67776b4810f38b6a;
var __wbg_removeAttribute_beaed7727852af78 = _yew_app_bg.default.__wbg_removeAttribute_beaed7727852af78;
exports.__wbg_removeAttribute_beaed7727852af78 = __wbg_removeAttribute_beaed7727852af78;
var __wbg_setAttribute_d8436c14a59ab1af = _yew_app_bg.default.__wbg_setAttribute_d8436c14a59ab1af;
exports.__wbg_setAttribute_d8436c14a59ab1af = __wbg_setAttribute_d8436c14a59ab1af;
var __wbg_value_ccb32485ee1b3928 = _yew_app_bg.default.__wbg_value_ccb32485ee1b3928;
exports.__wbg_value_ccb32485ee1b3928 = __wbg_value_ccb32485ee1b3928;
var __wbg_setvalue_df64bc6794c098f2 = _yew_app_bg.default.__wbg_setvalue_df64bc6794c098f2;
exports.__wbg_setvalue_df64bc6794c098f2 = __wbg_setvalue_df64bc6794c098f2;
var __wbg_url_1c013f0875e97715 = _yew_app_bg.default.__wbg_url_1c013f0875e97715;
exports.__wbg_url_1c013f0875e97715 = __wbg_url_1c013f0875e97715;
var __wbg_newwithstr_fdce36db91ec5f92 = _yew_app_bg.default.__wbg_newwithstr_fdce36db91ec5f92;
exports.__wbg_newwithstr_fdce36db91ec5f92 = __wbg_newwithstr_fdce36db91ec5f92;
var __wbg_newwithstrandinit_05d7180788420c40 = _yew_app_bg.default.__wbg_newwithstrandinit_05d7180788420c40;
exports.__wbg_newwithstrandinit_05d7180788420c40 = __wbg_newwithstrandinit_05d7180788420c40;
var __wbg_instanceof_ShadowRoot_76b32ccdae10a710 = _yew_app_bg.default.__wbg_instanceof_ShadowRoot_76b32ccdae10a710;
exports.__wbg_instanceof_ShadowRoot_76b32ccdae10a710 = __wbg_instanceof_ShadowRoot_76b32ccdae10a710;
var __wbg_host_57eec05a2624bc1b = _yew_app_bg.default.__wbg_host_57eec05a2624bc1b;
exports.__wbg_host_57eec05a2624bc1b = __wbg_host_57eec05a2624bc1b;
var __wbg_search_afb25c63fe262036 = _yew_app_bg.default.__wbg_search_afb25c63fe262036;
exports.__wbg_search_afb25c63fe262036 = __wbg_search_afb25c63fe262036;
var __wbg_setsearch_40007c2a91333011 = _yew_app_bg.default.__wbg_setsearch_40007c2a91333011;
exports.__wbg_setsearch_40007c2a91333011 = __wbg_setsearch_40007c2a91333011;
var __wbg_new_7d95b89914e4d377 = _yew_app_bg.default.__wbg_new_7d95b89914e4d377;
exports.__wbg_new_7d95b89914e4d377 = __wbg_new_7d95b89914e4d377;
var __wbg_debug_64711eb2fc6980ef = _yew_app_bg.default.__wbg_debug_64711eb2fc6980ef;
exports.__wbg_debug_64711eb2fc6980ef = __wbg_debug_64711eb2fc6980ef;
var __wbg_error_ef9a0be47931175f = _yew_app_bg.default.__wbg_error_ef9a0be47931175f;
exports.__wbg_error_ef9a0be47931175f = __wbg_error_ef9a0be47931175f;
var __wbg_error_00c5d571f754f629 = _yew_app_bg.default.__wbg_error_00c5d571f754f629;
exports.__wbg_error_00c5d571f754f629 = __wbg_error_00c5d571f754f629;
var __wbg_info_d60a960a4e955dc2 = _yew_app_bg.default.__wbg_info_d60a960a4e955dc2;
exports.__wbg_info_d60a960a4e955dc2 = __wbg_info_d60a960a4e955dc2;
var __wbg_log_de258f66ad9eb784 = _yew_app_bg.default.__wbg_log_de258f66ad9eb784;
exports.__wbg_log_de258f66ad9eb784 = __wbg_log_de258f66ad9eb784;
var __wbg_warn_be542501a57387a5 = _yew_app_bg.default.__wbg_warn_be542501a57387a5;
exports.__wbg_warn_be542501a57387a5 = __wbg_warn_be542501a57387a5;
var __wbg_setchecked_f1e1f3e62cdca8e7 = _yew_app_bg.default.__wbg_setchecked_f1e1f3e62cdca8e7;
exports.__wbg_setchecked_f1e1f3e62cdca8e7 = __wbg_setchecked_f1e1f3e62cdca8e7;
var __wbg_value_b2a620d34c663701 = _yew_app_bg.default.__wbg_value_b2a620d34c663701;
exports.__wbg_value_b2a620d34c663701 = __wbg_value_b2a620d34c663701;
var __wbg_setvalue_e5b519cca37d82a7 = _yew_app_bg.default.__wbg_setvalue_e5b519cca37d82a7;
exports.__wbg_setvalue_e5b519cca37d82a7 = __wbg_setvalue_e5b519cca37d82a7;
var __wbg_bubbles_03eed164b4feeaf1 = _yew_app_bg.default.__wbg_bubbles_03eed164b4feeaf1;
exports.__wbg_bubbles_03eed164b4feeaf1 = __wbg_bubbles_03eed164b4feeaf1;
var __wbg_cancelBubble_8c0bdf21c08f1717 = _yew_app_bg.default.__wbg_cancelBubble_8c0bdf21c08f1717;
exports.__wbg_cancelBubble_8c0bdf21c08f1717 = __wbg_cancelBubble_8c0bdf21c08f1717;
var __wbg_composedPath_160ed014dc4d787f = _yew_app_bg.default.__wbg_composedPath_160ed014dc4d787f;
exports.__wbg_composedPath_160ed014dc4d787f = __wbg_composedPath_160ed014dc4d787f;
var __wbg_get_57245cc7d7c7619d = _yew_app_bg.default.__wbg_get_57245cc7d7c7619d;
exports.__wbg_get_57245cc7d7c7619d = __wbg_get_57245cc7d7c7619d;
var __wbg_from_7ce3cb27cb258569 = _yew_app_bg.default.__wbg_from_7ce3cb27cb258569;
exports.__wbg_from_7ce3cb27cb258569 = __wbg_from_7ce3cb27cb258569;
var __wbg_length_6e3bbe7c8bd4dbd8 = _yew_app_bg.default.__wbg_length_6e3bbe7c8bd4dbd8;
exports.__wbg_length_6e3bbe7c8bd4dbd8 = __wbg_length_6e3bbe7c8bd4dbd8;
var __wbg_instanceof_Error_56b496a10a56de66 = _yew_app_bg.default.__wbg_instanceof_Error_56b496a10a56de66;
exports.__wbg_instanceof_Error_56b496a10a56de66 = __wbg_instanceof_Error_56b496a10a56de66;
var __wbg_message_fe2af63ccc8985bc = _yew_app_bg.default.__wbg_message_fe2af63ccc8985bc;
exports.__wbg_message_fe2af63ccc8985bc = __wbg_message_fe2af63ccc8985bc;
var __wbg_name_48eda3ae6aa697ca = _yew_app_bg.default.__wbg_name_48eda3ae6aa697ca;
exports.__wbg_name_48eda3ae6aa697ca = __wbg_name_48eda3ae6aa697ca;
var __wbg_toString_73c9b562dccf34bd = _yew_app_bg.default.__wbg_toString_73c9b562dccf34bd;
exports.__wbg_toString_73c9b562dccf34bd = __wbg_toString_73c9b562dccf34bd;
var __wbg_newnoargs_b5b063fc6c2f0376 = _yew_app_bg.default.__wbg_newnoargs_b5b063fc6c2f0376;
exports.__wbg_newnoargs_b5b063fc6c2f0376 = __wbg_newnoargs_b5b063fc6c2f0376;
var __wbg_call_97ae9d8645dc388b = _yew_app_bg.default.__wbg_call_97ae9d8645dc388b;
exports.__wbg_call_97ae9d8645dc388b = __wbg_call_97ae9d8645dc388b;
var __wbg_next_aaef7c8aa5e212ac = _yew_app_bg.default.__wbg_next_aaef7c8aa5e212ac;
exports.__wbg_next_aaef7c8aa5e212ac = __wbg_next_aaef7c8aa5e212ac;
var __wbg_next_579e583d33566a86 = _yew_app_bg.default.__wbg_next_579e583d33566a86;
exports.__wbg_next_579e583d33566a86 = __wbg_next_579e583d33566a86;
var __wbg_done_1b73b0672e15f234 = _yew_app_bg.default.__wbg_done_1b73b0672e15f234;
exports.__wbg_done_1b73b0672e15f234 = __wbg_done_1b73b0672e15f234;
var __wbg_value_1ccc36bc03462d71 = _yew_app_bg.default.__wbg_value_1ccc36bc03462d71;
exports.__wbg_value_1ccc36bc03462d71 = __wbg_value_1ccc36bc03462d71;
var __wbg_getTime_cb82adb2556ed13e = _yew_app_bg.default.__wbg_getTime_cb82adb2556ed13e;
exports.__wbg_getTime_cb82adb2556ed13e = __wbg_getTime_cb82adb2556ed13e;
var __wbg_getTimezoneOffset_89bd4275e1ca8341 = _yew_app_bg.default.__wbg_getTimezoneOffset_89bd4275e1ca8341;
exports.__wbg_getTimezoneOffset_89bd4275e1ca8341 = __wbg_getTimezoneOffset_89bd4275e1ca8341;
var __wbg_new0_a57059d72c5b7aee = _yew_app_bg.default.__wbg_new0_a57059d72c5b7aee;
exports.__wbg_new0_a57059d72c5b7aee = __wbg_new0_a57059d72c5b7aee;
var __wbg_is_40a66842732708e7 = _yew_app_bg.default.__wbg_is_40a66842732708e7;
exports.__wbg_is_40a66842732708e7 = __wbg_is_40a66842732708e7;
var __wbg_new_0b9bfdd97583284e = _yew_app_bg.default.__wbg_new_0b9bfdd97583284e;
exports.__wbg_new_0b9bfdd97583284e = __wbg_new_0b9bfdd97583284e;
var __wbg_toString_7be108a12ef03bc2 = _yew_app_bg.default.__wbg_toString_7be108a12ef03bc2;
exports.__wbg_toString_7be108a12ef03bc2 = __wbg_toString_7be108a12ef03bc2;
var __wbg_iterator_6f9d4f28845f426c = _yew_app_bg.default.__wbg_iterator_6f9d4f28845f426c;
exports.__wbg_iterator_6f9d4f28845f426c = __wbg_iterator_6f9d4f28845f426c;
var __wbg_resolve_99fe17964f31ffc0 = _yew_app_bg.default.__wbg_resolve_99fe17964f31ffc0;
exports.__wbg_resolve_99fe17964f31ffc0 = __wbg_resolve_99fe17964f31ffc0;
var __wbg_then_11f7a54d67b4bfad = _yew_app_bg.default.__wbg_then_11f7a54d67b4bfad;
exports.__wbg_then_11f7a54d67b4bfad = __wbg_then_11f7a54d67b4bfad;
var __wbg_then_cedad20fbbd9418a = _yew_app_bg.default.__wbg_then_cedad20fbbd9418a;
exports.__wbg_then_cedad20fbbd9418a = __wbg_then_cedad20fbbd9418a;
var __wbg_globalThis_7f206bda628d5286 = _yew_app_bg.default.__wbg_globalThis_7f206bda628d5286;
exports.__wbg_globalThis_7f206bda628d5286 = __wbg_globalThis_7f206bda628d5286;
var __wbg_self_6d479506f72c6a71 = _yew_app_bg.default.__wbg_self_6d479506f72c6a71;
exports.__wbg_self_6d479506f72c6a71 = __wbg_self_6d479506f72c6a71;
var __wbg_window_f2557cc78490aceb = _yew_app_bg.default.__wbg_window_f2557cc78490aceb;
exports.__wbg_window_f2557cc78490aceb = __wbg_window_f2557cc78490aceb;
var __wbg_global_ba75c50d1cf384f4 = _yew_app_bg.default.__wbg_global_ba75c50d1cf384f4;
exports.__wbg_global_ba75c50d1cf384f4 = __wbg_global_ba75c50d1cf384f4;
var __wbg_new_8c3f0052272a457a = _yew_app_bg.default.__wbg_new_8c3f0052272a457a;
exports.__wbg_new_8c3f0052272a457a = __wbg_new_8c3f0052272a457a;
var __wbg_newwithbyteoffsetandlength_d9aa266703cb98be = _yew_app_bg.default.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be;
exports.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = __wbg_newwithbyteoffsetandlength_d9aa266703cb98be;
var __wbindgen_is_function = _yew_app_bg.default.__wbindgen_is_function;
exports.__wbindgen_is_function = __wbindgen_is_function;
var __wbg_stringify_d6471d300ded9b68 = _yew_app_bg.default.__wbg_stringify_d6471d300ded9b68;
exports.__wbg_stringify_d6471d300ded9b68 = __wbg_stringify_d6471d300ded9b68;
var __wbg_buffer_3f3d764d4747d564 = _yew_app_bg.default.__wbg_buffer_3f3d764d4747d564;
exports.__wbg_buffer_3f3d764d4747d564 = __wbg_buffer_3f3d764d4747d564;
var __wbg_get_765201544a2b6869 = _yew_app_bg.default.__wbg_get_765201544a2b6869;
exports.__wbg_get_765201544a2b6869 = __wbg_get_765201544a2b6869;
var __wbg_has_8359f114ce042f5a = _yew_app_bg.default.__wbg_has_8359f114ce042f5a;
exports.__wbg_has_8359f114ce042f5a = __wbg_has_8359f114ce042f5a;
var __wbg_set_bf3f89b92d5a34bf = _yew_app_bg.default.__wbg_set_bf3f89b92d5a34bf;
exports.__wbg_set_bf3f89b92d5a34bf = __wbg_set_bf3f89b92d5a34bf;
var __wbindgen_debug_string = _yew_app_bg.default.__wbindgen_debug_string;
exports.__wbindgen_debug_string = __wbindgen_debug_string;
var __wbindgen_throw = _yew_app_bg.default.__wbindgen_throw;
exports.__wbindgen_throw = __wbindgen_throw;
var __wbindgen_memory = _yew_app_bg.default.__wbindgen_memory;
exports.__wbindgen_memory = __wbindgen_memory;
var __wbindgen_closure_wrapper8980 = _yew_app_bg.default.__wbindgen_closure_wrapper8980;
exports.__wbindgen_closure_wrapper8980 = __wbindgen_closure_wrapper8980;
var __wbindgen_closure_wrapper9371 = _yew_app_bg.default.__wbindgen_closure_wrapper9371;
exports.__wbindgen_closure_wrapper9371 = __wbindgen_closure_wrapper9371;
},{"./pkg/yew_app_bg.wasm":"../pkg/yew_app_bg.wasm"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Cargo_toml_1 = require("../Cargo.toml");
Cargo_toml_1.run();
},{"../Cargo.toml":"../Cargo.toml"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64651" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;
function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }
  var id = bundles[bundles.length - 1];
  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }
    throw err;
  }
}
function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}
var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}
module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }
  if (bundles[bundle]) {
    return bundles[bundle];
  }
  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }
      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}
function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}
LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};
LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/parcel-plugin-wasm.rs/wasm-loader.js":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/Users/niclasdoege/Desktop/YEW/my-app/node_modules/parcel-plugin-wasm.rs";
var wasm;const __exports = {};

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error('expected a boolean argument');
    }
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (typeof(arg) !== 'string') throw new Error('expected a string argument');

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}

function logError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        let error = (function () {
            try {
                return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
            } catch(_) {
                return "<failed to stringify thrown value>";
            }
        }());
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
        throw e;
    }
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}
function __wbg_adapter_24(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he4b1056b1501b365(arg0, arg1, addHeapObject(arg2));
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
function __wbg_adapter_27(arg0, arg1, arg2) {
    try {
        _assertNum(arg0);
        _assertNum(arg1);
        wasm._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__haf6506d7ab6176cb(arg0, arg1, addBorrowedObject(arg2));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
*/
__exports. run = function() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.run(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

let cachedUint32Memory0 = new Uint32Array();

function getUint32Memory0() {
    if (cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function getArrayJsValueFromWasm0(ptr, len) {
    const mem = getUint32Memory0();
    const slice = mem.subarray(ptr / 4, ptr / 4 + len);
    const result = [];
    for (let i = 0; i < slice.length; i++) {
        result.push(takeObject(slice[i]));
    }
    return result;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

__exports. __wbindgen_is_undefined = function(arg0) {
    const ret = getObject(arg0) === undefined;
    _assertBoolean(ret);
    return ret;
};

__exports. __wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

__exports. __wbindgen_object_clone_ref = function(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
};

__exports. __wbg_fetch_3894579f6e2af3be = function() { return logError(function (arg0) {
    const ret = fetch(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    const ret = false;
    _assertBoolean(ret);
    return ret;
};

__exports. __wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports. __wbg_listenerid_12315eee21527820 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).__yew_listener_id;
    if (!isLikeNone(ret)) {
        _assertNum(ret);
    }
    getInt32Memory0()[arg0 / 4 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
}, arguments) };

__exports. __wbg_setlistenerid_3183aae8fa5840fb = function() { return logError(function (arg0, arg1) {
    getObject(arg0).__yew_listener_id = arg1 >>> 0;
}, arguments) };

__exports. __wbg_subtreeid_e348577f7ef777e3 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).__yew_subtree_id;
    if (!isLikeNone(ret)) {
        _assertNum(ret);
    }
    getInt32Memory0()[arg0 / 4 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
}, arguments) };

__exports. __wbg_setsubtreeid_d32e6327eef1f7fc = function() { return logError(function (arg0, arg1) {
    getObject(arg0).__yew_subtree_id = arg1 >>> 0;
}, arguments) };

__exports. __wbg_cachekey_b61393159c57fd7b = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).__yew_subtree_cache_key;
    if (!isLikeNone(ret)) {
        _assertNum(ret);
    }
    getInt32Memory0()[arg0 / 4 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
}, arguments) };

__exports. __wbg_setcachekey_80183b7cfc421143 = function() { return logError(function (arg0, arg1) {
    getObject(arg0).__yew_subtree_cache_key = arg1 >>> 0;
}, arguments) };

__exports. __wbg_error_f851667af71bcfc6 = function() { return logError(function (arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
}, arguments) };

__exports. __wbg_new_abda76e883ba8a5f = function() { return logError(function () {
    const ret = new Error();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_stack_658279fe44541cf6 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

__exports. __wbindgen_is_object = function(arg0) {
    const val = getObject(arg0);
    const ret = typeof(val) === 'object' && val !== null;
    _assertBoolean(ret);
    return ret;
};

__exports. __wbg_error_71d6845bf00a930f = function() { return logError(function (arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 4);
    console.error(...v0);
}, arguments) };

__exports. __wbg_instanceof_Window_acc97ff9f5d2c7b4 = function() { return logError(function (arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Window;
    } catch {
        result = false;
    }
    const ret = result;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_document_3ead31dbcad65886 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_location_8cc8ccf27e342c0a = function() { return logError(function (arg0) {
    const ret = getObject(arg0).location;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_fetch_0fe04905cccfc2aa = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).fetch(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_body_3cb4b4042b9a632b = function() { return logError(function (arg0) {
    const ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_createElement_976dbb84fe1661b5 = function() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_createElementNS_1561aca8ee3693c0 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    const ret = getObject(arg0).createElementNS(arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_createTextNode_300f845fab76642f = function() { return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).createTextNode(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_getElementById_3a708b83e4f034d7 = function() { return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_addEventListener_1fc744729ac6dc27 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
}, arguments) };

__exports. __wbg_removeEventListener_b10f1a66647f3aa0 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), arg4 !== 0);
}, arguments) };

__exports. __wbg_instanceof_WorkerGlobalScope_16bb97a4549a3f21 = function() { return logError(function (arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof WorkerGlobalScope;
    } catch {
        result = false;
    }
    const ret = result;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_fetch_749a56934f95c96c = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).fetch(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_parentNode_e397bbbe28be7b28 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).parentNode;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_parentElement_0cffb3ceb0f107bd = function() { return logError(function (arg0) {
    const ret = getObject(arg0).parentElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_lastChild_a2f5ed739809bb31 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).lastChild;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_nextSibling_62338ec2a05607b4 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).nextSibling;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_setnodeValue_4077cafeefd0725e = function() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).nodeValue = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
}, arguments) };

__exports. __wbg_textContent_77bd294928962f93 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).textContent;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_appendChild_e513ef0e5098dfdd = function() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_insertBefore_9f2d2defb9471006 = function() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).insertBefore(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_removeChild_6751e9ca5d9aaf00 = function() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).removeChild(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_reload_7d09a33ced11e6b5 = function() { return handleError(function (arg0) {
    getObject(arg0).reload();
}, arguments) };

__exports. __wbg_instanceof_Response_eaa426220848a39e = function() { return logError(function (arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Response;
    } catch {
        result = false;
    }
    const ret = result;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_url_74285ddf2747cb3d = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).url;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_status_c4ef3dd591e63435 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).status;
    _assertNum(ret);
    return ret;
}, arguments) };

__exports. __wbg_headers_fd64ad685cf22e5d = function() { return logError(function (arg0) {
    const ret = getObject(arg0).headers;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_text_1169d752cc697903 = function() { return handleError(function (arg0) {
    const ret = getObject(arg0).text();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_new_2d0053ee81e4dd2a = function() { return handleError(function () {
    const ret = new Headers();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_append_de37df908812970d = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments) };

__exports. __wbg_new_ca4d3a3eca340210 = function() { return handleError(function () {
    const ret = new URLSearchParams();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_instanceof_Element_33bd126d58f2021b = function() { return logError(function (arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Element;
    } catch {
        result = false;
    }
    const ret = result;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_namespaceURI_e19c7be2c60e5b5c = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).namespaceURI;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_innerHTML_ab79c5e519527826 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).innerHTML;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_setinnerHTML_32081d8a164e6dc4 = function() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).innerHTML = getStringFromWasm0(arg1, arg2);
}, arguments) };

__exports. __wbg_outerHTML_bf662bdff92e5910 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).outerHTML;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_children_67776b4810f38b6a = function() { return logError(function (arg0) {
    const ret = getObject(arg0).children;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_removeAttribute_beaed7727852af78 = function() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).removeAttribute(getStringFromWasm0(arg1, arg2));
}, arguments) };

__exports. __wbg_setAttribute_d8436c14a59ab1af = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments) };

__exports. __wbg_value_ccb32485ee1b3928 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).value;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_setvalue_df64bc6794c098f2 = function() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
}, arguments) };

__exports. __wbg_url_1c013f0875e97715 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).url;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_newwithstr_fdce36db91ec5f92 = function() { return handleError(function (arg0, arg1) {
    const ret = new Request(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_newwithstrandinit_05d7180788420c40 = function() { return handleError(function (arg0, arg1, arg2) {
    const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_instanceof_ShadowRoot_76b32ccdae10a710 = function() { return logError(function (arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof ShadowRoot;
    } catch {
        result = false;
    }
    const ret = result;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_host_57eec05a2624bc1b = function() { return logError(function (arg0) {
    const ret = getObject(arg0).host;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_search_afb25c63fe262036 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).search;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_setsearch_40007c2a91333011 = function() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).search = getStringFromWasm0(arg1, arg2);
}, arguments) };

__exports. __wbg_new_7d95b89914e4d377 = function() { return handleError(function (arg0, arg1) {
    const ret = new URL(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_debug_64711eb2fc6980ef = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.debug(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_error_ef9a0be47931175f = function() { return logError(function (arg0) {
    console.error(getObject(arg0));
}, arguments) };

__exports. __wbg_error_00c5d571f754f629 = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.error(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_info_d60a960a4e955dc2 = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.info(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_log_de258f66ad9eb784 = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.log(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_warn_be542501a57387a5 = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.warn(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_setchecked_f1e1f3e62cdca8e7 = function() { return logError(function (arg0, arg1) {
    getObject(arg0).checked = arg1 !== 0;
}, arguments) };

__exports. __wbg_value_b2a620d34c663701 = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).value;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_setvalue_e5b519cca37d82a7 = function() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
}, arguments) };

__exports. __wbg_bubbles_03eed164b4feeaf1 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).bubbles;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_cancelBubble_8c0bdf21c08f1717 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).cancelBubble;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_composedPath_160ed014dc4d787f = function() { return logError(function (arg0) {
    const ret = getObject(arg0).composedPath();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_get_57245cc7d7c7619d = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_from_7ce3cb27cb258569 = function() { return logError(function (arg0) {
    const ret = Array.from(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_length_6e3bbe7c8bd4dbd8 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).length;
    _assertNum(ret);
    return ret;
}, arguments) };

__exports. __wbg_instanceof_Error_56b496a10a56de66 = function() { return logError(function (arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Error;
    } catch {
        result = false;
    }
    const ret = result;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_message_fe2af63ccc8985bc = function() { return logError(function (arg0) {
    const ret = getObject(arg0).message;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_name_48eda3ae6aa697ca = function() { return logError(function (arg0) {
    const ret = getObject(arg0).name;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_toString_73c9b562dccf34bd = function() { return logError(function (arg0) {
    const ret = getObject(arg0).toString();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_newnoargs_b5b063fc6c2f0376 = function() { return logError(function (arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_call_97ae9d8645dc388b = function() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_next_aaef7c8aa5e212ac = function() { return handleError(function (arg0) {
    const ret = getObject(arg0).next();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_next_579e583d33566a86 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).next;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_done_1b73b0672e15f234 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).done;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_value_1ccc36bc03462d71 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).value;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_getTime_cb82adb2556ed13e = function() { return logError(function (arg0) {
    const ret = getObject(arg0).getTime();
    return ret;
}, arguments) };

__exports. __wbg_getTimezoneOffset_89bd4275e1ca8341 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).getTimezoneOffset();
    return ret;
}, arguments) };

__exports. __wbg_new0_a57059d72c5b7aee = function() { return logError(function () {
    const ret = new Date();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_is_40a66842732708e7 = function() { return logError(function (arg0, arg1) {
    const ret = Object.is(getObject(arg0), getObject(arg1));
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_new_0b9bfdd97583284e = function() { return logError(function () {
    const ret = new Object();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_toString_7be108a12ef03bc2 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).toString();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_iterator_6f9d4f28845f426c = function() { return logError(function () {
    const ret = Symbol.iterator;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_resolve_99fe17964f31ffc0 = function() { return logError(function (arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_then_11f7a54d67b4bfad = function() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_then_cedad20fbbd9418a = function() { return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_globalThis_7f206bda628d5286 = function() { return handleError(function () {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_self_6d479506f72c6a71 = function() { return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_window_f2557cc78490aceb = function() { return handleError(function () {
    const ret = window.window;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_global_ba75c50d1cf384f4 = function() { return handleError(function () {
    const ret = global.global;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_new_8c3f0052272a457a = function() { return logError(function (arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_newwithbyteoffsetandlength_d9aa266703cb98be = function() { return logError(function (arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
}, arguments) };

__exports. __wbindgen_is_function = function(arg0) {
    const ret = typeof(getObject(arg0)) === 'function';
    _assertBoolean(ret);
    return ret;
};

__exports. __wbg_stringify_d6471d300ded9b68 = function() { return handleError(function (arg0) {
    const ret = JSON.stringify(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_buffer_3f3d764d4747d564 = function() { return logError(function (arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_get_765201544a2b6869 = function() { return handleError(function (arg0, arg1) {
    const ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_has_8359f114ce042f5a = function() { return handleError(function (arg0, arg1) {
    const ret = Reflect.has(getObject(arg0), getObject(arg1));
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_set_bf3f89b92d5a34bf = function() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbindgen_debug_string = function(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports. __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

__exports. __wbindgen_memory = function() {
    const ret = wasm.memory;
    return addHeapObject(ret);
};

__exports. __wbindgen_closure_wrapper8980 = function() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 639, __wbg_adapter_24);
    return addHeapObject(ret);
}, arguments) };

__exports. __wbindgen_closure_wrapper9371 = function() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 660, __wbg_adapter_27);
    return addHeapObject(ret);
}, arguments) };



      function init(wasm_path) {
          const fetchPromise = fetch(wasm_path);
          let resultPromise;
          if (typeof WebAssembly.instantiateStreaming === 'function') {
              resultPromise = WebAssembly.instantiateStreaming(fetchPromise, { './yew_app_bg.js': __exports });
          } else {
              resultPromise = fetchPromise
              .then(response => response.arrayBuffer())
              .then(buffer => WebAssembly.instantiate(buffer, { './yew_app_bg.js': __exports }));
          }
          return resultPromise.then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      };
      function init_node(wasm_path) {
          const fs = require('fs');
          return new Promise(function(resolve, reject) {
              fs.readFile(__dirname + wasm_path, function(err, data) {
                  if (err) {
                      reject(err);
                  } else {
                      resolve(data.buffer);
                  }
              });
          })
          .then(data => WebAssembly.instantiate(data, { './yew_app_bg': __exports }))
          .then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      }
      const wasm_bindgen = Object.assign(false ? init_node : init, __exports);
      module.exports = function loadWASMBundle(bundle) {
            return wasm_bindgen(bundle).then(() => __exports)
      }
    
},{"fs":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("wasm",require("../node_modules/parcel-plugin-wasm.rs/wasm-loader.js"));b.load([["yew_app_bg.a31f2430.wasm","../pkg/yew_app_bg.wasm"]]).then(function(){require("index.ts");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/static.77de5100.js.map