// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
// @generated file from wasmbuild -- do not edit
// deno-lint-ignore-file
// deno-fmt-ignore-file
// source-hash: ef32db77ca93a1263c5b1afcec0772d65a4b2636
let wasm;

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
  if (cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
 * @param {number} val
 * @returns {Uint8Array}
 */
export function encode_u32(val) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.encode_u32(retptr, val);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}

/**
 * @param {bigint} val
 * @returns {Uint8Array}
 */
export function encode_u64(val) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.encode_u64(retptr, val);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1);
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
/**
 * @param {Uint8Array} buff
 * @returns {number}
 */
export function decode_u32(buff) {
  const ptr0 = passArray8ToWasm0(buff, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.decode_u32(ptr0, len0);
  return ret >>> 0;
}

/**
 * @param {Uint8Array} buff
 * @returns {bigint}
 */
export function decode_u64(buff) {
  const ptr0 = passArray8ToWasm0(buff, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.decode_u64(ptr0, len0);
  return BigInt.asUintN(64, ret);
}

const imports = {
  __wbindgen_placeholder__: {},
};

/** Instantiates an instance of the Wasm module returning its functions.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 */
export function instantiate() {
  return instantiateWithInstance().exports;
}

let instanceWithExports;

/** Instantiates an instance of the Wasm module along with its exports.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 * @returns {{
 *   instance: WebAssembly.Instance;
 *   exports: { encode_u32: typeof encode_u32; encode_u64: typeof encode_u64; decode_u32: typeof decode_u32; decode_u64: typeof decode_u64 }
 * }}
 */
export function instantiateWithInstance() {
  if (instanceWithExports == null) {
    const instance = instantiateInstance();
    wasm = instance.exports;
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    instanceWithExports = {
      instance,
      exports: { encode_u32, encode_u64, decode_u32, decode_u64 },
    };
  }
  return instanceWithExports;
}

/** Gets if the Wasm module has been instantiated. */
export function isInstantiated() {
  return instanceWithExports != null;
}

function instantiateInstance() {
  const wasmBytes = base64decode(
"\
AGFzbQEAAAABtYCAgAAKYAAAYAF/AGABfwF/YAF/AX5gAn9/AGACf38Bf2ACf38BfmADf39/AGADf3\
9/AX9gAn9+AAOggICAAB8CAQQFBQgEAQQJBAcFBgQBCAAABAQCAQIEAgQIAwABBIWAgIAAAXABBAQF\
g4CAgAABABEGiYCAgAABfwFBgIDAAAsHhoGAgAAIBm1lbW9yeQIACmVuY29kZV91MzIACAplbmNvZG\
VfdTY0AAkKZGVjb2RlX3UzMgAMCmRlY29kZV91NjQADR9fX3diaW5kZ2VuX2FkZF90b19zdGFja19w\
b2ludGVyABkPX193YmluZGdlbl9mcmVlABgRX193YmluZGdlbl9tYWxsb2MAFQmJgICAAAEAQQELAw\
QeHAq13oCAAB/gIwIIfwF+AkACQAJAAkACQCAAQfUBSQ0AQQAhASAAQc3/e08NBCAAQQtqIgBBeHEh\
AkEAKALkg0AiA0UNA0EAIQQCQCACQYACSQ0AQR8hBCACQf///wdLDQAgAkEGIABBCHZnIgBrdkEBcS\
AAQQF0a0E+aiEEC0EAIAJrIQECQCAEQQJ0QfCFwABqKAIAIgBFDQBBACEFIAJBAEEZIARBAXZrQR9x\
IARBH0YbdCEGQQAhBwNAAkAgACgCBEF4cSIIIAJJDQAgCCACayIIIAFPDQAgCCEBIAAhByAIDQBBAC\
EBIAAhBwwECyAAQRRqKAIAIgggBSAIIAAgBkEddkEEcWpBEGooAgAiAEcbIAUgCBshBSAGQQF0IQYg\
AA0ACwJAIAVFDQAgBSEADAMLIAcNAwtBACEHIANBAiAEdCIAQQAgAGtycSIARQ0DIABBACAAa3FoQQ\
J0QfCFwABqKAIAIgANAQwDCwJAAkACQAJAAkBBACgC4INAIgZBECAAQQtqQXhxIABBC0kbIgJBA3Yi\
AXYiAEEDcQ0AIAJBACgC8IZATQ0HIAANAUEAKALkg0AiAEUNByAAQQAgAGtxaEECdEHwhcAAaigCAC\
IHKAIEQXhxIQECQCAHKAIQIgANACAHQRRqKAIAIQALIAEgAmshBQJAIABFDQADQCAAKAIEQXhxIAJr\
IgggBUkhBgJAIAAoAhAiAQ0AIABBFGooAgAhAQsgCCAFIAYbIQUgACAHIAYbIQcgASEAIAENAAsLIA\
coAhghBCAHKAIMIgEgB0cNAiAHQRRBECAHQRRqIgEoAgAiBhtqKAIAIgANA0EAIQEMBAsCQAJAIABB\
f3NBAXEgAWoiAkEDdCIFQfCDwABqKAIAIgBBCGoiBygCACIBIAVB6IPAAGoiBUYNACABIAU2AgwgBS\
ABNgIIDAELQQAgBkF+IAJ3cTYC4INACyAAIAJBA3QiAkEDcjYCBCAAIAJqIgAgACgCBEEBcjYCBCAH\
DwsCQAJAQQIgAUEfcSIBdCIFQQAgBWtyIAAgAXRxIgBBACAAa3FoIgFBA3QiB0Hwg8AAaigCACIAQQ\
hqIggoAgAiBSAHQeiDwABqIgdGDQAgBSAHNgIMIAcgBTYCCAwBC0EAIAZBfiABd3E2AuCDQAsgACAC\
QQNyNgIEIAAgAmoiBSABQQN0IgEgAmsiAkEBcjYCBCAAIAFqIAI2AgACQEEAKALwhkAiAEUNACAAQQ\
N2IgZBA3RB6IPAAGohAUEAKAL4hkAhAAJAAkBBACgC4INAIgdBASAGdCIGcUUNACABKAIIIQYMAQtB\
ACAHIAZyNgLgg0AgASEGCyABIAA2AgggBiAANgIMIAAgATYCDCAAIAY2AggLQQAgBTYC+IZAQQAgAj\
YC8IZAIAgPCyAHKAIIIgAgATYCDCABIAA2AggMAQsgASAHQRBqIAYbIQYDQCAGIQgCQCAAIgFBFGoi\
BigCACIADQAgAUEQaiEGIAEoAhAhAAsgAA0ACyAIQQA2AgALAkAgBEUNAAJAAkAgBygCHEECdEHwhc\
AAaiIAKAIAIAdGDQAgBEEQQRQgBCgCECAHRhtqIAE2AgAgAUUNAgwBCyAAIAE2AgAgAQ0AQQBBACgC\
5INAQX4gBygCHHdxNgLkg0AMAQsgASAENgIYAkAgBygCECIARQ0AIAEgADYCECAAIAE2AhgLIAdBFG\
ooAgAiAEUNACABQRRqIAA2AgAgACABNgIYCwJAAkAgBUEQSQ0AIAcgAkEDcjYCBCAHIAJqIgIgBUEB\
cjYCBCACIAVqIAU2AgACQEEAKALwhkAiAEUNACAAQQN2IgZBA3RB6IPAAGohAUEAKAL4hkAhAAJAAk\
BBACgC4INAIghBASAGdCIGcUUNACABKAIIIQYMAQtBACAIIAZyNgLgg0AgASEGCyABIAA2AgggBiAA\
NgIMIAAgATYCDCAAIAY2AggLQQAgAjYC+IZAQQAgBTYC8IZADAELIAcgBSACaiIAQQNyNgIEIAcgAG\
oiACAAKAIEQQFyNgIECyAHQQhqDwsDQCAAKAIEQXhxIgUgAk8gBSACayIIIAFJcSEGAkAgACgCECIF\
DQAgAEEUaigCACEFCyAAIAcgBhshByAIIAEgBhshASAFIQAgBQ0ACyAHRQ0BCwJAQQAoAvCGQCIAIA\
JJDQAgASAAIAJrTw0BCyAHKAIYIQQCQAJAAkAgBygCDCIFIAdHDQAgB0EUQRAgB0EUaiIFKAIAIgYb\
aigCACIADQFBACEFDAILIAcoAggiACAFNgIMIAUgADYCCAwBCyAFIAdBEGogBhshBgNAIAYhCAJAIA\
AiBUEUaiIGKAIAIgANACAFQRBqIQYgBSgCECEACyAADQALIAhBADYCAAsCQCAERQ0AAkACQCAHKAIc\
QQJ0QfCFwABqIgAoAgAgB0YNACAEQRBBFCAEKAIQIAdGG2ogBTYCACAFRQ0CDAELIAAgBTYCACAFDQ\
BBAEEAKALkg0BBfiAHKAIcd3E2AuSDQAwBCyAFIAQ2AhgCQCAHKAIQIgBFDQAgBSAANgIQIAAgBTYC\
GAsgB0EUaigCACIARQ0AIAVBFGogADYCACAAIAU2AhgLAkACQCABQRBJDQAgByACQQNyNgIEIAcgAm\
oiACABQQFyNgIEIAAgAWogATYCAAJAIAFBgAJJDQAgACABEAYMAgsgAUEDdiIBQQN0QeiDwABqIQIC\
QAJAQQAoAuCDQCIFQQEgAXQiAXFFDQAgAigCCCEBDAELQQAgBSABcjYC4INAIAIhAQsgAiAANgIIIA\
EgADYCDCAAIAI2AgwgACABNgIIDAELIAcgASACaiIAQQNyNgIEIAcgAGoiACAAKAIEQQFyNgIECyAH\
QQhqDwsCQAJAAkACQAJAAkACQAJAAkACQAJAAkBBACgC8IZAIgAgAk8NAEEAKAL0hkAiACACSw0EQQ\
AhASACQa+ABGoiBUEQdkAAIgBBf0YiBw0MIABBEHQiBkUNDEEAQQAoAoCHQEEAIAVBgIB8cSAHGyII\
aiIANgKAh0BBAEEAKAKEh0AiASAAIAEgAEsbNgKEh0BBACgC/IZAIgFFDQFBiIfAACEAA0AgACgCAC\
IFIAAoAgQiB2ogBkYNAyAAKAIIIgANAAwECwtBACgC+IZAIQECQAJAIAAgAmsiBUEPSw0AQQBBADYC\
+IZAQQBBADYC8IZAIAEgAEEDcjYCBCABIABqIgAgACgCBEEBcjYCBAwBC0EAIAU2AvCGQEEAIAEgAm\
oiBjYC+IZAIAYgBUEBcjYCBCABIABqIAU2AgAgASACQQNyNgIECyABQQhqDwtBACgCnIdAIgBFDQMg\
ACAGSw0DDAgLIAAoAgwNACAFIAFLDQAgBiABSw0DC0EAQQAoApyHQCIAIAYgACAGSRs2ApyHQCAGIA\
hqIQVBiIfAACEAAkACQAJAA0AgACgCACAFRg0BIAAoAggiAA0ADAILCyAAKAIMRQ0BC0GIh8AAIQAC\
QANAAkAgACgCACIFIAFLDQAgBSAAKAIEaiIFIAFLDQILIAAoAgghAAwACwtBACAGNgL8hkBBACAIQV\
hqIgA2AvSGQCAGIABBAXI2AgQgBiAAakEoNgIEQQBBgICAATYCmIdAIAEgBUFgakF4cUF4aiIAIAAg\
AUEQakkbIgdBGzYCBEEAKQKIh0AhCSAHQRBqQQApApCHQDcCACAHIAk3AghBACAINgKMh0BBACAGNg\
KIh0BBACAHQQhqNgKQh0BBAEEANgKUh0AgB0EcaiEAA0AgAEEHNgIAIAUgAEEEaiIASw0ACyAHIAFG\
DQggByAHKAIEQX5xNgIEIAEgByABayIAQQFyNgIEIAcgADYCAAJAIABBgAJJDQAgASAAEAYMCQsgAE\
EDdiIFQQN0QeiDwABqIQACQAJAQQAoAuCDQCIGQQEgBXQiBXFFDQAgACgCCCEFDAELQQAgBiAFcjYC\
4INAIAAhBQsgACABNgIIIAUgATYCDCABIAA2AgwgASAFNgIIDAgLIAAgBjYCACAAIAAoAgQgCGo2Ag\
QgBiACQQNyNgIEIAUgBiACaiIAayECAkBBACgC/IZAIAVGDQBBACgC+IZAIAVGDQQgBSgCBCIBQQNx\
QQFHDQUCQAJAIAFBeHEiB0GAAkkNACAFEAcMAQsCQCAFQQxqKAIAIgggBUEIaigCACIERg0AIAQgCD\
YCDCAIIAQ2AggMAQtBAEEAKALgg0BBfiABQQN2d3E2AuCDQAsgByACaiECIAUgB2ohBQwFC0EAIAA2\
AvyGQEEAQQAoAvSGQCACaiICNgL0hkAgACACQQFyNgIEDAULQQAgACACayIBNgL0hkBBAEEAKAL8hk\
AiACACaiIFNgL8hkAgBSABQQFyNgIEIAAgAkEDcjYCBCAAQQhqIQEMBwtBACAGNgKch0AMBAsgACAH\
IAhqNgIEQQBBACgC/IZAIgBBD2pBeHEiAUF4ajYC/IZAQQAgACABa0EAKAL0hkAgCGoiBWpBCGoiBj\
YC9IZAIAFBfGogBkEBcjYCACAAIAVqQSg2AgRBAEGAgIABNgKYh0AMBAtBACAANgL4hkBBAEEAKALw\
hkAgAmoiAjYC8IZAIAAgAkEBcjYCBCAAIAJqIAI2AgAMAQsgBSAFKAIEQX5xNgIEIAAgAkEBcjYCBC\
AAIAJqIAI2AgACQCACQYACSQ0AIAAgAhAGDAELIAJBA3YiAUEDdEHog8AAaiECAkACQEEAKALgg0Ai\
BUEBIAF0IgFxRQ0AIAIoAgghAQwBC0EAIAUgAXI2AuCDQCACIQELIAIgADYCCCABIAA2AgwgACACNg\
IMIAAgATYCCAsgBkEIag8LQQBB/x82AqCHQEEAIAg2AoyHQEEAIAY2AoiHQEEAQeiDwAA2AvSDQEEA\
QfCDwAA2AvyDQEEAQeiDwAA2AvCDQEEAQfiDwAA2AoSEQEEAQfCDwAA2AviDQEEAQYCEwAA2AoyEQE\
EAQfiDwAA2AoCEQEEAQYiEwAA2ApSEQEEAQYCEwAA2AoiEQEEAQZCEwAA2ApyEQEEAQYiEwAA2ApCE\
QEEAQZiEwAA2AqSEQEEAQZCEwAA2ApiEQEEAQaCEwAA2AqyEQEEAQZiEwAA2AqCEQEEAQQA2ApSHQE\
EAQaiEwAA2ArSEQEEAQaCEwAA2AqiEQEEAQaiEwAA2ArCEQEEAQbCEwAA2AryEQEEAQbCEwAA2AriE\
QEEAQbiEwAA2AsSEQEEAQbiEwAA2AsCEQEEAQcCEwAA2AsyEQEEAQcCEwAA2AsiEQEEAQciEwAA2At\
SEQEEAQciEwAA2AtCEQEEAQdCEwAA2AtyEQEEAQdCEwAA2AtiEQEEAQdiEwAA2AuSEQEEAQdiEwAA2\
AuCEQEEAQeCEwAA2AuyEQEEAQeCEwAA2AuiEQEEAQeiEwAA2AvSEQEEAQfCEwAA2AvyEQEEAQeiEwA\
A2AvCEQEEAQfiEwAA2AoSFQEEAQfCEwAA2AviEQEEAQYCFwAA2AoyFQEEAQfiEwAA2AoCFQEEAQYiF\
wAA2ApSFQEEAQYCFwAA2AoiFQEEAQZCFwAA2ApyFQEEAQYiFwAA2ApCFQEEAQZiFwAA2AqSFQEEAQZ\
CFwAA2ApiFQEEAQaCFwAA2AqyFQEEAQZiFwAA2AqCFQEEAQaiFwAA2ArSFQEEAQaCFwAA2AqiFQEEA\
QbCFwAA2AryFQEEAQaiFwAA2ArCFQEEAQbiFwAA2AsSFQEEAQbCFwAA2AriFQEEAQcCFwAA2AsyFQE\
EAQbiFwAA2AsCFQEEAQciFwAA2AtSFQEEAQcCFwAA2AsiFQEEAQdCFwAA2AtyFQEEAQciFwAA2AtCF\
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\
IAJBqIHAADYCDCACQYCDwAA2AgggAkEIahAWAAs1AQF/IABBFGooAgAhAgJAAkAgAEEEaigCAA4CAA\
ABCyACDQAgAS0AEBAPAAsgAS0AEBAPAAsjAAJAIABBfEsNAAJAIAANAEEEDwsgABAAIgBFDQAgAA8L\
AAsOACAAKAIIEBcgABAaAAsOAAJAIAANABARAAsgAAsOAAJAIAFFDQAgABABCwsLACAAIwBqJAAjAA\
sJACAAIAEQFAALCgAgACABIAIQBQsNAEKksbTUvr71pMMACwMAAAsCAAsL4oOAgAABAEGAgMAAC9gD\
c3JjL2xpYi5ycwAAAAAQAAoAAAAjAAAAEAAAAGxpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnNjYX\
BhY2l0eSBvdmVyZmxvdwAAADgAEAARAAAAHAAQABwAAAAGAgAABQAAAGluZGV4IG91dCBvZiBib3Vu\
ZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAABkABAAIAAAAIQAEAASAAAAAgAAAAAAAA\
ABAAAAAwAAADAwMDEwMjAzMDQwNTA2MDcwODA5MTAxMTEyMTMxNDE1MTYxNzE4MTkyMDIxMjIyMzI0\
MjUyNjI3MjgyOTMwMzEzMjMzMzQzNTM2MzczODM5NDA0MTQyNDM0NDQ1NDY0NzQ4NDk1MDUxNTI1Mz\
U0NTU1NjU3NTg1OTYwNjE2MjYzNjQ2NTY2Njc2ODY5NzA3MTcyNzM3NDc1NzY3Nzc4Nzk4MDgxODI4\
Mzg0ODU4Njg3ODg4OTkwOTE5MjkzOTQ5NTk2OTc5ODk5Y2FsbGVkIGBPcHRpb246OnVud3JhcCgpYC\
BvbiBhIGBOb25lYCB2YWx1ZWxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnMAqwEQABwAAABHAgAA\
HgAAAACki4CAAARuYW1lAZmLgIAAHwA6ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6bW\
FsbG9jOjpoMzZhNDIwZTBjNWFkOWNkOAE4ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6\
ZnJlZTo6aGYzYjFkOGZiNTcyZDkyMzgCQWRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46Om\
Rpc3Bvc2VfY2h1bms6OmhjZWU1ODIzZjZmM2YxODhiAw5fX3J1c3RfcmVhbGxvYwROY29yZTo6Zm10\
OjpudW06OmltcDo6PGltcGwgY29yZTo6Zm10OjpEaXNwbGF5IGZvciB1MzI+OjpmbXQ6Omg4OGRmYz\
lkOWM0MTEzYzAyBTFjb21waWxlcl9idWlsdGluczo6bWVtOjptZW1jcHk6OmhiNGJlNWU5OGE4Yzk3\
MTU2BkZkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjppbnNlcnRfbGFyZ2VfY2h1bms6Om\
gyMjJjYmQ1NmU0MWNjMmQ1B0ZkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+Ojp1bmxpbmtf\
bGFyZ2VfY2h1bms6OmhmMDFiMTdhYWUyOGJlZThiCAplbmNvZGVfdTMyCQplbmNvZGVfdTY0CkBhbG\
xvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfZm9yX3B1c2g6Omg3ZmUwZDFiMzcyNTMw\
NjExCy5hbGxvYzo6cmF3X3ZlYzo6ZmluaXNoX2dyb3c6Omg3OTE4ZTBkZjZlN2YzMDk2DApkZWNvZG\
VfdTMyDQpkZWNvZGVfdTY0DjZjb3JlOjpwYW5pY2tpbmc6OnBhbmljX2JvdW5kc19jaGVjazo6aDA3\
ZjhlNDg2YjE2ZTYyNzcPN3N0ZDo6cGFuaWNraW5nOjpydXN0X3BhbmljX3dpdGhfaG9vazo6aGIwOT\
E1NGZhMjNlMDZjMzcQQ2NvcmU6OmZtdDo6Rm9ybWF0dGVyOjpwYWRfaW50ZWdyYWw6OndyaXRlX3By\
ZWZpeDo6aDFkZjU4ZDgzMDlhZmVkZjURKWNvcmU6OnBhbmlja2luZzo6cGFuaWM6Omg2ZjUwMjRhNT\
djYThkYTg2EjRhbGxvYzo6cmF3X3ZlYzo6Y2FwYWNpdHlfb3ZlcmZsb3c6Omg5NDAwOTRmOTgyM2Fj\
MjI3Ey1jb3JlOjpwYW5pY2tpbmc6OnBhbmljX2ZtdDo6aDllMjI5NzQ4ZTNhZTlmOWQUQ3N0ZDo6cG\
FuaWNraW5nOjpiZWdpbl9wYW5pY19oYW5kbGVyOjp7e2Nsb3N1cmV9fTo6aDYwOTFjMTk3ZjBkMDhi\
ZjAVEV9fd2JpbmRnZW5fbWFsbG9jFhFydXN0X2JlZ2luX3Vud2luZBcyY29yZTo6b3B0aW9uOjpPcH\
Rpb248VD46OnVud3JhcDo6aDBkN2YwZmNiNTgxYTJkMzYYD19fd2JpbmRnZW5fZnJlZRkfX193Ymlu\
ZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlchpJc3RkOjpzeXNfY29tbW9uOjpiYWNrdHJhY2U6Ol9fcn\
VzdF9lbmRfc2hvcnRfYmFja3RyYWNlOjpoMDA0YWZiM2U2YTg2N2M0MBsGbWVtY3B5HDE8VCBhcyBj\
b3JlOjphbnk6OkFueT46OnR5cGVfaWQ6Omg4OTJiODY3M2NlNzViNzUyHQpydXN0X3BhbmljHm9jb3\
JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8JmNvcmU6Oml0ZXI6OmFkYXB0ZXJzOjpjb3BpZWQ6OkNvcGll\
ZDxjb3JlOjpzbGljZTo6aXRlcjo6SXRlcjx1OD4+Pjo6aGEzMGJkN2VlZmNjMDZmNWYA74CAgAAJcH\
JvZHVjZXJzAghsYW5ndWFnZQEEUnVzdAAMcHJvY2Vzc2VkLWJ5AwVydXN0Yx0xLjY0LjAgKGE1NWRk\
NzFkNSAyMDIyLTA5LTE5KQZ3YWxydXMGMC4xOS4wDHdhc20tYmluZGdlbgYwLjIuODM=\
",
  );
  const wasmModule = new WebAssembly.Module(wasmBytes);
  return new WebAssembly.Instance(wasmModule, imports);
}

function base64decode(b64) {
  const binString = atob(b64);
  const size = binString.length;
  const bytes = new Uint8Array(size);
  for (let i = 0; i < size; i++) {
    bytes[i] = binString.charCodeAt(i);
  }
  return bytes;
}
