(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: run, __wbindgen_json_parse, __wbindgen_json_serialize, __wbg_instanceof_Response_328c03967a8e8902, __wbg_json_c1da28dd861e0e1c, __wbg_headers_d4301f4888b4640a, __wbg_newwithstrandinit_d1de1bfcd175e38a, __wbg_instanceof_Window_adf3196bdc02b386, __wbg_fetch_91f098921cc7cca8, __wbg_set_e0c72ee4d5eea3d5, __wbindgen_string_new, __wbindgen_object_clone_ref, __wbindgen_cb_drop, __wbg_set_304f2ec1a3ab3b79, __wbindgen_object_drop_ref, __wbindgen_is_undefined, __wbg_newnoargs_f3b8a801d5d4b079, __wbg_call_8e95613cc6524977, __wbg_call_d713ea0274dfc6d2, __wbg_new_3e06d4f36713e4cb, __wbg_new_d0c63652ab4d825c, __wbg_resolve_2529512c3bb73938, __wbg_then_4a7a614abbbe6d81, __wbg_then_3b7ac098cfda2fa5, __wbg_globalThis_b9277fc37e201fe5, __wbg_self_07b2f89e82ceb76d, __wbg_window_ba85d88572adc0dc, __wbg_global_e16303fe83e1d57f, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_closure_wrapper858 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"run\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_json_parse\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_serialize\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_json_serialize\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Response_328c03967a8e8902\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_Response_328c03967a8e8902\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_json_c1da28dd861e0e1c\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_json_c1da28dd861e0e1c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_headers_d4301f4888b4640a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_headers_d4301f4888b4640a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithstrandinit_d1de1bfcd175e38a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithstrandinit_d1de1bfcd175e38a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_adf3196bdc02b386\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_Window_adf3196bdc02b386\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fetch_91f098921cc7cca8\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_fetch_91f098921cc7cca8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_e0c72ee4d5eea3d5\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_e0c72ee4d5eea3d5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_cb_drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_304f2ec1a3ab3b79\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_304f2ec1a3ab3b79\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_f3b8a801d5d4b079\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_f3b8a801d5d4b079\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_8e95613cc6524977\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_8e95613cc6524977\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_d713ea0274dfc6d2\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_d713ea0274dfc6d2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_3e06d4f36713e4cb\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_3e06d4f36713e4cb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_d0c63652ab4d825c\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_d0c63652ab4d825c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_2529512c3bb73938\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_resolve_2529512c3bb73938\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_4a7a614abbbe6d81\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_then_4a7a614abbbe6d81\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_3b7ac098cfda2fa5\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_then_3b7ac098cfda2fa5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_b9277fc37e201fe5\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_b9277fc37e201fe5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_07b2f89e82ceb76d\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_07b2f89e82ceb76d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_ba85d88572adc0dc\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_ba85d88572adc0dc\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_e16303fe83e1d57f\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_e16303fe83e1d57f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper858\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper858\"]; });\n\n\n\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/*! exports provided: run, __wbindgen_json_parse, __wbindgen_json_serialize, __wbg_instanceof_Response_328c03967a8e8902, __wbg_json_c1da28dd861e0e1c, __wbg_headers_d4301f4888b4640a, __wbg_newwithstrandinit_d1de1bfcd175e38a, __wbg_instanceof_Window_adf3196bdc02b386, __wbg_fetch_91f098921cc7cca8, __wbg_set_e0c72ee4d5eea3d5, __wbindgen_string_new, __wbindgen_object_clone_ref, __wbindgen_cb_drop, __wbg_set_304f2ec1a3ab3b79, __wbindgen_object_drop_ref, __wbindgen_is_undefined, __wbg_newnoargs_f3b8a801d5d4b079, __wbg_call_8e95613cc6524977, __wbg_call_d713ea0274dfc6d2, __wbg_new_3e06d4f36713e4cb, __wbg_new_d0c63652ab4d825c, __wbg_resolve_2529512c3bb73938, __wbg_then_4a7a614abbbe6d81, __wbg_then_3b7ac098cfda2fa5, __wbg_globalThis_b9277fc37e201fe5, __wbg_self_07b2f89e82ceb76d, __wbg_window_ba85d88572adc0dc, __wbg_global_e16303fe83e1d57f, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_closure_wrapper858 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, module, TextEncoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return __wbindgen_json_parse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_serialize\", function() { return __wbindgen_json_serialize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Response_328c03967a8e8902\", function() { return __wbg_instanceof_Response_328c03967a8e8902; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_json_c1da28dd861e0e1c\", function() { return __wbg_json_c1da28dd861e0e1c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_headers_d4301f4888b4640a\", function() { return __wbg_headers_d4301f4888b4640a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithstrandinit_d1de1bfcd175e38a\", function() { return __wbg_newwithstrandinit_d1de1bfcd175e38a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_adf3196bdc02b386\", function() { return __wbg_instanceof_Window_adf3196bdc02b386; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fetch_91f098921cc7cca8\", function() { return __wbg_fetch_91f098921cc7cca8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_e0c72ee4d5eea3d5\", function() { return __wbg_set_e0c72ee4d5eea3d5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_304f2ec1a3ab3b79\", function() { return __wbg_set_304f2ec1a3ab3b79; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_f3b8a801d5d4b079\", function() { return __wbg_newnoargs_f3b8a801d5d4b079; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_8e95613cc6524977\", function() { return __wbg_call_8e95613cc6524977; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_d713ea0274dfc6d2\", function() { return __wbg_call_d713ea0274dfc6d2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_3e06d4f36713e4cb\", function() { return __wbg_new_3e06d4f36713e4cb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_d0c63652ab4d825c\", function() { return __wbg_new_d0c63652ab4d825c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_2529512c3bb73938\", function() { return __wbg_resolve_2529512c3bb73938; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_4a7a614abbbe6d81\", function() { return __wbg_then_4a7a614abbbe6d81; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_3b7ac098cfda2fa5\", function() { return __wbg_then_3b7ac098cfda2fa5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_b9277fc37e201fe5\", function() { return __wbg_globalThis_b9277fc37e201fe5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_07b2f89e82ceb76d\", function() { return __wbg_self_07b2f89e82ceb76d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_ba85d88572adc0dc\", function() { return __wbg_window_ba85d88572adc0dc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_e16303fe83e1d57f\", function() { return __wbg_global_e16303fe83e1d57f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper858\", function() { return __wbindgen_closure_wrapper858; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1, dtor };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) {\n                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].get(state.dtor)(a, state.b);\n\n            } else {\n                state.a = a;\n            }\n        }\n    };\n    real.original = state;\n\n    return real;\n}\n\nfunction logError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n                } catch(_) {\n                    return \"<failed to stringify thrown value>\";\n                }\n            }());\n            console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n            throw e;\n        }\n    };\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\nfunction __wbg_adapter_20(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h02fbb74469208f8f\"](arg0, arg1, addHeapObject(arg2));\n}\n\n/**\n* @param {string} repo\n* @returns {any}\n*/\nfunction run(repo) {\n    var ptr0 = passStringToWasm0(repo, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run\"](ptr0, len0);\n    return takeObject(ret);\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\nfunction __wbg_adapter_46(arg0, arg1, arg2, arg3) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"wasm_bindgen__convert__closures__invoke2_mut__h7367e88f015d76da\"](arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));\n}\n\nconst __wbindgen_json_parse = function(arg0, arg1) {\n    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_json_serialize = function(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = JSON.stringify(obj === undefined ? null : obj);\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbg_instanceof_Response_328c03967a8e8902 = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof Response;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_json_c1da28dd861e0e1c = handleError(function(arg0) {\n    var ret = getObject(arg0).json();\n    return addHeapObject(ret);\n});\n\nconst __wbg_headers_d4301f4888b4640a = logError(function(arg0) {\n    var ret = getObject(arg0).headers;\n    return addHeapObject(ret);\n});\n\nconst __wbg_newwithstrandinit_d1de1bfcd175e38a = handleError(function(arg0, arg1, arg2) {\n    var ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_instanceof_Window_adf3196bdc02b386 = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof Window;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_fetch_91f098921cc7cca8 = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).fetch(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_set_e0c72ee4d5eea3d5 = handleError(function(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));\n});\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_cb_drop = function(arg0) {\n    const obj = takeObject(arg0).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    var ret = false;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbg_set_304f2ec1a3ab3b79 = handleError(function(arg0, arg1, arg2) {\n    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbg_newnoargs_f3b8a801d5d4b079 = logError(function(arg0, arg1) {\n    var ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_call_8e95613cc6524977 = handleError(function(arg0, arg1) {\n    var ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_call_d713ea0274dfc6d2 = handleError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_new_3e06d4f36713e4cb = logError(function() {\n    var ret = new Object();\n    return addHeapObject(ret);\n});\n\nconst __wbg_new_d0c63652ab4d825c = logError(function(arg0, arg1) {\n    try {\n        var state0 = {a: arg0, b: arg1};\n        var cb0 = (arg0, arg1) => {\n            const a = state0.a;\n            state0.a = 0;\n            try {\n                return __wbg_adapter_46(a, state0.b, arg0, arg1);\n            } finally {\n                state0.a = a;\n            }\n        };\n        var ret = new Promise(cb0);\n        return addHeapObject(ret);\n    } finally {\n        state0.a = state0.b = 0;\n    }\n});\n\nconst __wbg_resolve_2529512c3bb73938 = logError(function(arg0) {\n    var ret = Promise.resolve(getObject(arg0));\n    return addHeapObject(ret);\n});\n\nconst __wbg_then_4a7a614abbbe6d81 = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).then(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_then_3b7ac098cfda2fa5 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_globalThis_b9277fc37e201fe5 = handleError(function() {\n    var ret = globalThis.globalThis;\n    return addHeapObject(ret);\n});\n\nconst __wbg_self_07b2f89e82ceb76d = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_window_ba85d88572adc0dc = handleError(function() {\n    var ret = window.window;\n    return addHeapObject(ret);\n});\n\nconst __wbg_global_e16303fe83e1d57f = handleError(function() {\n    var ret = global.global;\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_closure_wrapper858 = logError(function(arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 45, __wbg_adapter_20);\n    return addHeapObject(ret);\n});\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, run, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h02fbb74469208f8f, __wbindgen_exn_store, wasm_bindgen__convert__closures__invoke2_mut__h7367e88f015d76da */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);