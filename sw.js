/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/Deferred.js":
/*!**********************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/Deferred.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js":
/*!**************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/assert.js":
/*!********************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/assert.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/cacheNames.js":
/*!************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/cacheNames.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!************************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!****************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!****************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js":
/*!********************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/timeout.js":
/*!*********************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/timeout.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/waitUntil.js":
/*!***********************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/waitUntil.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js":
/*!*************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js ***!
  \*************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/copyResponse.js":
/*!*****************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/copyResponse.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!*************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/models/messages/messages.js":
/*!*****************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/models/messages/messages.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*******************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheController.js":
/*!***********************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheController.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!***************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheRoute.js":
/*!******************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*********************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_types.js":
/*!***********************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_types.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js":
/*!*************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js ***!
  \*************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/addPlugins.js":
/*!***************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/addPlugins.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/addRoute.js":
/*!*************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/addRoute.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!**************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!****************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**********************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/index.js":
/*!**********************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/index.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/matchPrecache.js":
/*!******************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/matchPrecache.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/precache.js":
/*!*************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/precache.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/precacheAndRoute.js":
/*!*********************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!********************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!****************************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!******************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!******************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!************************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/RegExpRoute.js":
/*!**********************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/RegExpRoute.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/Route.js":
/*!****************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/Route.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/Router.js":
/*!*****************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/Router.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/_version.js":
/*!*******************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/_version.js ***!
  \*******************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/registerRoute.js":
/*!************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/registerRoute.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/constants.js":
/*!**************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/constants.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/normalizeHandler.js":
/*!*********************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../.yarn/cache/workbox-routing-npm-6.5.4-7e767a784d-7198c50b90.zip/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/Strategy.js":
/*!*************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/Strategy.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/StrategyHandler.js":
/*!********************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/StrategyHandler.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../.yarn/cache/workbox-core-npm-6.5.4-a956387c31-d973cc6c1c.zip/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/_version.js":
/*!*************************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-strategies-npm-6.5.4-8bc6258bfc-52134ecd6c.zip/node_modules/workbox-strategies/_version.js ***!
  \*************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/index.mjs":
/*!***********************************************************************************************************************!*\
  !*** ../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/index.mjs ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************************************************************************************************************************************************************!*\
  !*** ../.yarn/__virtual__/@docusaurus-plugin-pwa-virtual-62581cbfc8/0/cache/@docusaurus-plugin-pwa-npm-2.2.0-e752696a85-9dd7cefbaa.zip/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \***************************************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "../.yarn/cache/workbox-precaching-npm-6.5.4-69d8a56e94-15ef24ffb0.zip/node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"27958db458ee3474e4e105688ca836b3","url":"404.html"},{"revision":"c80a36f5bc3b68aad9c81a66a860553b","url":"assets/css/styles.8ca5bdf5.css"},{"revision":"212fb25ab3ff51bbffe11002e4a27b93","url":"assets/js/0002b41b.9bb5fd28.js"},{"revision":"c69764555ac6e5d11d723041300a57c6","url":"assets/js/002be2e3.20ffc78a.js"},{"revision":"c10577b889b08959a2ca439c1814c906","url":"assets/js/009abb66.0563ebc4.js"},{"revision":"0d12e9e3e48dfeac5d04ae81abe040be","url":"assets/js/00b35529.d526e64b.js"},{"revision":"57298972293a7b345f0e582221b4a05a","url":"assets/js/016d3eb4.f8341d97.js"},{"revision":"28a8bab85600d50a99806df4f3e6d6d8","url":"assets/js/01a85c17.ffd96b8e.js"},{"revision":"7989a436cdfc2bdec381dd0a173b444d","url":"assets/js/01c479f0.5c98be95.js"},{"revision":"16ac5dadbd942e7fdd52f5e5b6c67e73","url":"assets/js/035fd0c1.0a6bac5f.js"},{"revision":"e094378d03de0d98cb0858b7ca9cadc5","url":"assets/js/04c3832a.d6de7e61.js"},{"revision":"572fb10ba570d2f2cdbada6a83a627d0","url":"assets/js/06b928e4.b0edcd95.js"},{"revision":"9348168752a6ca55231d416044657713","url":"assets/js/078bd448.f6bbfdfc.js"},{"revision":"8d9b234abacc27ac2eeef594e729236f","url":"assets/js/07c1cec8.366d38c9.js"},{"revision":"064190cab7bcdfedaa53811583c347ff","url":"assets/js/08950870.e2c00e11.js"},{"revision":"9586c604900bec74fa50e0586306c3ac","url":"assets/js/08e34796.495b2ec0.js"},{"revision":"90bc2a3651611c101615403817c851a1","url":"assets/js/09378fcb.97aa0bec.js"},{"revision":"8fe794d9c69ffcb86c3d6fcbc751d438","url":"assets/js/096cde7d.8d6916e8.js"},{"revision":"59466ff80c299fae9542388974ff53e2","url":"assets/js/0ac801d4.78134e62.js"},{"revision":"cc0ac82b08b177146fa024e1e090302c","url":"assets/js/0c732905.dde61427.js"},{"revision":"07fd2fe56049116e2cdb90279d2f7a0e","url":"assets/js/0cd51957.49615290.js"},{"revision":"203c55830ae270bc86259b523161b337","url":"assets/js/0d745c78.32ffb260.js"},{"revision":"80f4c4b9603c5e8958b8026a2c26a1aa","url":"assets/js/0ef5c700.4efd66df.js"},{"revision":"c036aa3e58f989e45d5f7dfffc0109d8","url":"assets/js/1032ae12.3b26b1a9.js"},{"revision":"5801bbd66cf71a51eab75b4fd63d45b8","url":"assets/js/107e5d9c.e5287288.js"},{"revision":"82927e1eb079ddc36266a941d57fcb5a","url":"assets/js/1317a93b.0fe75acc.js"},{"revision":"9896c94f149c2c1ded7bd08f7220056a","url":"assets/js/1319b7a8.1c7920fd.js"},{"revision":"a6a94025c55202ca65170c4b0fdf7b99","url":"assets/js/15bbcbb8.9449b45b.js"},{"revision":"15de487891903e621975cee1fca384d7","url":"assets/js/162dbb44.26396f2e.js"},{"revision":"c0ea5f7ed3a9e53633c4057a336fcd61","url":"assets/js/16599d59.759ba201.js"},{"revision":"fe28b7eee5cbfbc4fa8b631007d9c3c3","url":"assets/js/17896441.cc55ce03.js"},{"revision":"726e37ce447a5cda3669dee328a73259","url":"assets/js/1790.1f490167.js"},{"revision":"06914f3d8876028658930dacbadbaaeb","url":"assets/js/18172085.bcb1b4a5.js"},{"revision":"a60deddf3df94007f08b4f37a0462d6f","url":"assets/js/1940.1928a8b7.js"},{"revision":"f610333ab95f3c26ba3a86cf4d6d25d4","url":"assets/js/1a4e3797.8cbb6d67.js"},{"revision":"ad67114941eead74a59dbd3dfab52bda","url":"assets/js/1ba17ee6.bbd3a411.js"},{"revision":"25858ff1f792958d923272b66a36261f","url":"assets/js/1be78505.6b2fcfb5.js"},{"revision":"dd5f54c281fbff15d7fc8c29de8c7b53","url":"assets/js/1d300601.c367bd21.js"},{"revision":"1fb8548a104644869e57cd928cb27a82","url":"assets/js/1dd7e653.7ba2e6a5.js"},{"revision":"32d42664559bfd3722341791d38c2acf","url":"assets/js/1ddfcba6.96bee605.js"},{"revision":"7c4550d501889b9e3914ed7579799b77","url":"assets/js/1e8ae766.4d8fb2e6.js"},{"revision":"596fb0a150e70bc0340340327693c849","url":"assets/js/1edcb9f3.f0d27762.js"},{"revision":"cd68fffebdedc50308d1d36fb37076ba","url":"assets/js/1f391b9e.306f0277.js"},{"revision":"ac437f50a3701acd4ede5b30bd7ef94f","url":"assets/js/1fb96049.de4479de.js"},{"revision":"ea55c098d26cc6622d4fe2b9f4c549f7","url":"assets/js/2069d9da.165f935f.js"},{"revision":"696e5491ab3a70c6fbc0b14d06b862f0","url":"assets/js/20745762.7413b2fb.js"},{"revision":"cda23c5d139d434029f58793a0951ed0","url":"assets/js/2275ea3b.092ddc5c.js"},{"revision":"274b6ea108bb5db7298af60b95476cb0","url":"assets/js/22ecef17.31a170fb.js"},{"revision":"b3ef42991875ed7dc6b1af961ecc8a3d","url":"assets/js/235e5445.70a54efb.js"},{"revision":"c065bcd2817237e3b8f7b34d1577ca77","url":"assets/js/263c62ba.fdf0f235.js"},{"revision":"11e7223cc27a0c46b4f05480398674d4","url":"assets/js/278094fc.903a188c.js"},{"revision":"5f8c0a53b6c0c19d02ed51d2780d64ea","url":"assets/js/28688e85.5d4c11d7.js"},{"revision":"31979b76a59137bf9d6206d016aff489","url":"assets/js/29a36bd7.7d0c738f.js"},{"revision":"9d8d52f31119ca036e7cc392aa650ce1","url":"assets/js/2c8e0cdd.cdcfbaa4.js"},{"revision":"f7efed6560c908b4a447cba4618b006e","url":"assets/js/2d7db855.496f8395.js"},{"revision":"ebb18571c952336631bccd76ee841d9f","url":"assets/js/2f1321a2.bb5be422.js"},{"revision":"cf3995c81c46eb3bb0fdfebc293d98c5","url":"assets/js/2f4dcada.e654dc72.js"},{"revision":"6e9bc067c313ea235dfd43c65a62bd22","url":"assets/js/2ff04138.f1e5f950.js"},{"revision":"7a662f80e2f99496f24284b2743f864d","url":"assets/js/34159caf.8293e894.js"},{"revision":"1cbcc9eec1e6ce197fdfc8f9f9afb645","url":"assets/js/35a083ee.0b14f93d.js"},{"revision":"27cb49ac59725afe1847575c10ad8959","url":"assets/js/35ec15fb.83c57c13.js"},{"revision":"7b0493cdf47d6cab20db6e7f18c4a7c0","url":"assets/js/3686.8c4739dd.js"},{"revision":"1de27b3daf45a6747aac01803fc048f4","url":"assets/js/3720c009.e09304fc.js"},{"revision":"19b9e00143ba8c19eae4f6ad4d4c3abd","url":"assets/js/393be207.92c405ea.js"},{"revision":"c334d10a8ea6e3a77fbe84c497220610","url":"assets/js/395541e0.be894982.js"},{"revision":"508705225dbb1814b214bcfb41a1f929","url":"assets/js/3ace2f0b.49b6ac5a.js"},{"revision":"58c85bf78b63b82f7b9aab644e192501","url":"assets/js/3bb41b1f.44aa0e4c.js"},{"revision":"e63be31acfcffc303b58e011fde1e8a3","url":"assets/js/3c047d5f.e5189d86.js"},{"revision":"514d7214c6da8e5ea10fc1577c549435","url":"assets/js/3e836f96.1c0e6b4f.js"},{"revision":"f50f7c787ac2a80f2fd572739e4a990f","url":"assets/js/3f9f49d0.5883a9bc.js"},{"revision":"c7210b044cbc427693db86394cceec66","url":"assets/js/4005c0a3.ecf275fc.js"},{"revision":"8d808920c48bcf7b19c5d15ef7947a4b","url":"assets/js/40f25bbe.2cc21197.js"},{"revision":"2e3b06f956358d3c7b3f2bcda78384e2","url":"assets/js/41e92d67.c7fbd642.js"},{"revision":"3cd92754f4d4452ffe699b2b65099b3f","url":"assets/js/4473a798.0328436b.js"},{"revision":"41cf3975f67bc7897e92a5304cb95c22","url":"assets/js/460a3b6a.d5a33af3.js"},{"revision":"bb06ad09dfbc7fab6b0f56517e307d85","url":"assets/js/46426fe5.35d30f47.js"},{"revision":"3a3ef5ffa1bceea3252104dfb07582a5","url":"assets/js/469c924f.bc30c9de.js"},{"revision":"b48680cbb3926e24b41fd41d6156ab56","url":"assets/js/46b7a73a.ba39720d.js"},{"revision":"8a26da2919088c1bc3064a933bfdf1c0","url":"assets/js/48508832.106e0211.js"},{"revision":"9f20b7996d0c9c87e89da6d2d48c169a","url":"assets/js/48cd2988.92fba632.js"},{"revision":"c5eab9dadda84873e4a962cd3fa942dd","url":"assets/js/48d96faf.42aab37d.js"},{"revision":"46c90da75b9d6283f90b3217aeeaea3b","url":"assets/js/49522f6d.a718c2b7.js"},{"revision":"064bbfd69886fe949d189b44656a2ddc","url":"assets/js/49ea1a83.eed2a576.js"},{"revision":"8880c20ae9fb0803bd323091b6ec1ed7","url":"assets/js/4a0a35f2.2cf95369.js"},{"revision":"ba836b1fa15410f3aa62fd35cb0ad94a","url":"assets/js/4b39ea20.3e2f9f6d.js"},{"revision":"7ff818ee99bbbb71e0cfe169571929e3","url":"assets/js/4bbe7096.6fe87ec1.js"},{"revision":"19883d46d04538c0d4b9e9d618f16110","url":"assets/js/4c134f1f.4f5dad9b.js"},{"revision":"437265768da6506e546747645db1fa76","url":"assets/js/4cfadbe1.59c273ad.js"},{"revision":"43e075b2c2a1c48328be43fec0cf5378","url":"assets/js/4e9d1570.1cdcaae1.js"},{"revision":"c3fff5eef0f9310ef0c2d5587d72f63e","url":"assets/js/4ecc0a29.15b5dee0.js"},{"revision":"e25410dbb2bd5d511d6a18c859181008","url":"assets/js/51658ad1.be941e45.js"},{"revision":"f2d9406c374e3216e15b20f34696bc5a","url":"assets/js/51f2bfad.e23c8727.js"},{"revision":"6782b0e5eddd52e200599a4dd9dee211","url":"assets/js/543aa851.4d2976ab.js"},{"revision":"624ae19ab8dc993549fc029047c7d136","url":"assets/js/546fe433.1d0ed131.js"},{"revision":"cf6558d3f50bc1e91baac74e30f9202f","url":"assets/js/54c6565b.048b49d9.js"},{"revision":"59d36db546d0826ee140b4f3157cd626","url":"assets/js/5575.4081e77a.js"},{"revision":"3c6aa5e47df65443ddb831ea976b6473","url":"assets/js/55960ee5.611829af.js"},{"revision":"2192e9cf4f241c71327db8f342ef14ba","url":"assets/js/56449c55.dba8e0b0.js"},{"revision":"a9eafe46d33a7e5bf03862df4b006b06","url":"assets/js/56a41e28.583aea34.js"},{"revision":"c8099cf2ea508f0c0d818da1a86883b1","url":"assets/js/5721.e475eeee.js"},{"revision":"8c724803f00b5e5833b75e4116f114f5","url":"assets/js/5827.44a71931.js"},{"revision":"c2c3709884eadf5cbecfc1014cfb015b","url":"assets/js/595b56ba.1114ccb2.js"},{"revision":"5a65ac80e04e3e273dfd4b805d10c792","url":"assets/js/5d04037f.db6596ab.js"},{"revision":"9c5e26aca0b7dc35d186d6b9e3c89190","url":"assets/js/5dae8549.600f7f99.js"},{"revision":"2884304df987bdbabe9d067431839c2e","url":"assets/js/5e823926.b5bd2c3e.js"},{"revision":"92046f9c8246f0ed2bac4eb84d38012e","url":"assets/js/604afdbc.95612564.js"},{"revision":"01cd54a9f5c4a2afb74fd4ad4892bcc2","url":"assets/js/60aa2857.13cbcd54.js"},{"revision":"efa878ebc4104277d24dfef1a09007ee","url":"assets/js/60fa687c.d2659a87.js"},{"revision":"dda442b8fcf168ef825b0e581b2ea1d2","url":"assets/js/61ef2b1e.da9691c8.js"},{"revision":"8919ad9ec16cf0fd7d3092aa7d198e83","url":"assets/js/62a24752.d6c76f8c.js"},{"revision":"294c8892011a5caf9352a55ca55eb5e9","url":"assets/js/6494.1593cadb.js"},{"revision":"e925b478cda7ef0f8a76a13044d09c77","url":"assets/js/661132b8.1122cd36.js"},{"revision":"34e09de6e429fc29c336edf5b37d16cf","url":"assets/js/674a4398.d5836d98.js"},{"revision":"d5a412ec6c65f1da2bf4dea94800b19a","url":"assets/js/67c00b1a.7062429f.js"},{"revision":"53d6d5749a5ff4b4e632d2baae0bd8a4","url":"assets/js/6855260d.0ea215df.js"},{"revision":"b94c42b4387a1d6d51981c5d35e1b3ae","url":"assets/js/6875c492.81a073ec.js"},{"revision":"2cd0c34096e987fb85fb3573027ad866","url":"assets/js/68d0df65.a6b67787.js"},{"revision":"defe0236358b23bfdeca0ead78ec8358","url":"assets/js/68e7f14e.18950c68.js"},{"revision":"c36006b067f2605a7c410cbfb45c32a6","url":"assets/js/6a5b1314.c14029f3.js"},{"revision":"b97092e6f6553c2d9840adf1852e1721","url":"assets/js/6af11c41.a0dc7cd1.js"},{"revision":"e290eeb2a88d8f736da169f7e3c0ddbb","url":"assets/js/6d10921d.ab95f96d.js"},{"revision":"23f2b58528c102368fe3f9a17130548a","url":"assets/js/6d78ef69.3fbe4630.js"},{"revision":"3db573b483f4225a2a864005e954a224","url":"assets/js/6e2a825c.7c3bb5c7.js"},{"revision":"5b7c13ca1f3f59b6c5dfa1ac44bcfcc5","url":"assets/js/6e4c03af.f7b5db34.js"},{"revision":"b4cf2acefa05d0c3689497d8123ec860","url":"assets/js/7046.4f00ec78.js"},{"revision":"203031aebe36109951b44c538c9490c0","url":"assets/js/714d8c52.21b3390d.js"},{"revision":"f4bf0042f2a3b23287777b52b1a130fc","url":"assets/js/722af778.504381fa.js"},{"revision":"e54c14ee9b3cea5953718f1c0c1fc451","url":"assets/js/72a45f58.2605061a.js"},{"revision":"ebdbce7373e301dd9bb6a4384a2c9641","url":"assets/js/7326.c73ed20e.js"},{"revision":"04de645aac24e3ff2ddfdf82e19a9ccb","url":"assets/js/73446445.329596d1.js"},{"revision":"3341e52aa565e6cabaef7e3839a45624","url":"assets/js/73595bd0.6fd44b94.js"},{"revision":"8df200ae0502aba675e5f83644a20e6c","url":"assets/js/73888242.90246e46.js"},{"revision":"235ef2e85249d7131a10c3048e8e7cef","url":"assets/js/7485731d.053133cb.js"},{"revision":"8df12f51e761e00e4962ffb0ef9ae797","url":"assets/js/74cbf03b.db1d7f2c.js"},{"revision":"eae361775c6af80f3bf09b16ef11913d","url":"assets/js/75151ea0.ac93a7bd.js"},{"revision":"b7561801c92bc20781bc4a25bf69af62","url":"assets/js/7557.93b2e8f1.js"},{"revision":"9a216de1997139b620d99c4b7d797bcc","url":"assets/js/773311c1.5f342d67.js"},{"revision":"110bff96039038ba5e6e4f791663693f","url":"assets/js/774e8031.9a386328.js"},{"revision":"7fe134d5d0b283788405710660c37185","url":"assets/js/77ef72bf.0517fec6.js"},{"revision":"9e62a9d24ad32f7def2a4122739ec260","url":"assets/js/787d4cb6.89728606.js"},{"revision":"0c08aca53742182547a61233e897be10","url":"assets/js/79c773b9.eb8dc335.js"},{"revision":"3b431c5a548bfb26c0a126deb9ac7b8c","url":"assets/js/7cdd33c9.c8fc1860.js"},{"revision":"3109a7c5340b8d1911a0cd122bdb9a27","url":"assets/js/7ddc4283.2debd687.js"},{"revision":"9d907e3daca32a1802143d0de9971cbb","url":"assets/js/7e850b8a.2014cf50.js"},{"revision":"30a11ab8eda4c0a11d4e2a63932a3cf6","url":"assets/js/7f4a4884.d7f9515d.js"},{"revision":"310673218aeee0c137d69ac99eae0ff0","url":"assets/js/8061921e.46536cb5.js"},{"revision":"7b3ee56baca441008b5ded51459a29be","url":"assets/js/814f3328.63bcfe8c.js"},{"revision":"befb70bbe9e2abb1aefd1ce645824cb7","url":"assets/js/826f46a1.09cae5d2.js"},{"revision":"73fddad90b485d37acfa1e3f480a40b2","url":"assets/js/82c64401.1302d7a5.js"},{"revision":"7de616d4aab34241fdca8dce2b82612e","url":"assets/js/82ed06a1.cbdd920e.js"},{"revision":"2ef08f692beb4e343811bc9d91302b50","url":"assets/js/8372.6f2bf789.js"},{"revision":"e1e563c2dace6597072f002ad452ece2","url":"assets/js/852.5a213f4b.js"},{"revision":"2ca85d05d351d516a4e3390f912d1b98","url":"assets/js/890bedec.891603d2.js"},{"revision":"fc7916687cb41513214b9b28e45155c8","url":"assets/js/8a3c2dff.c6737312.js"},{"revision":"4ceac7cc4e63c288100df0d0fb396b76","url":"assets/js/8b44d626.a00582fa.js"},{"revision":"1ca1d7e3c056501140df91934d09113d","url":"assets/js/8bbd4c7b.e8921894.js"},{"revision":"e1069c35369f6607c5dfd055c367a903","url":"assets/js/8c51f1ae.4e20e550.js"},{"revision":"54f1b58ba289460120c55197ef548dd2","url":"assets/js/8e6ef78c.4729cfc0.js"},{"revision":"2e4e910270295e5cc4451b790372def7","url":"assets/js/8f2a73d2.b649d317.js"},{"revision":"ad1b50b9a5896bf3223ff95896123edd","url":"assets/js/9152f265.8f273080.js"},{"revision":"7c93ad3d4393862318f7efde48771f0b","url":"assets/js/91c51a55.99e6ff8e.js"},{"revision":"a6a2267074e4a6d95c647910db052022","url":"assets/js/920ac423.967f05e6.js"},{"revision":"9bf1f71ee532460c38b27b6c5a1cc2ef","url":"assets/js/921fbefc.521f23b0.js"},{"revision":"7303eaf0888771ea6569fc0dc5957793","url":"assets/js/922a8b64.358dc305.js"},{"revision":"3a2723b17fd0ef8d16e093463d735ee4","url":"assets/js/933a69d3.8630e690.js"},{"revision":"0b8fca3518230a88a9697385d14c13ca","url":"assets/js/935f2afb.a7b5fbf9.js"},{"revision":"0772d68a884c4609ef3697764846554a","url":"assets/js/942ead0b.e7e6dde7.js"},{"revision":"40ee82c7c52f74a5e3c6dd7124295cbd","url":"assets/js/95fc0e2f.b1032be2.js"},{"revision":"021cb88636944791fdd179e9031ca394","url":"assets/js/988a9b03.31db9737.js"},{"revision":"5afe108b297745cf1752a7fd703526bf","url":"assets/js/98fc4f50.b0a7091e.js"},{"revision":"6dcb18e61eeeb42c6f44bdfda1c13eb4","url":"assets/js/9b0cdaa4.5cd54471.js"},{"revision":"fca88366ce6352b6a88346dd1a3a5099","url":"assets/js/9b650fc1.a8e7190f.js"},{"revision":"37b18d5145351250fa85fcb165281d8b","url":"assets/js/9b7e147f.76d2f509.js"},{"revision":"9471db29f8fd160527386a1548094f29","url":"assets/js/9c712c42.b4411129.js"},{"revision":"6019d02e05e59eedec9e554373bde8a8","url":"assets/js/9c8c7124.f1e8de99.js"},{"revision":"a4da9a0c50d8c2e4db775c9abe8b7a02","url":"assets/js/9ca386eb.461d7b93.js"},{"revision":"73ad8feafe882cbbff7b55ccbd96195c","url":"assets/js/9cfc3689.751c433f.js"},{"revision":"8160119fb7f12746c810d579e70bbe16","url":"assets/js/9e4087bc.a90e6670.js"},{"revision":"0deff1c3e07a02c80bff48ee9465a00c","url":"assets/js/9eaa6034.bc55585b.js"},{"revision":"75426743108a54212a532d5de56a6a8e","url":"assets/js/9ff4672a.31041715.js"},{"revision":"f7e1c6ed393fc716a5f2108a9004c548","url":"assets/js/a0fa76ed.5828f4ea.js"},{"revision":"d4e5c322d1e4c3f3fc6c63b32d4f9925","url":"assets/js/a21270c3.3c257c07.js"},{"revision":"ba879eb9a95a9a4473f5fb6b6fa2ab7a","url":"assets/js/a22b7fb9.80f4a175.js"},{"revision":"fdae41af6c8b47f3e1a1095353a045c6","url":"assets/js/a2a7ac93.d77477cf.js"},{"revision":"e22b77fdc095de58b9937f14eb67b476","url":"assets/js/a2d9ecdf.ff516180.js"},{"revision":"1ed7a9ed33c8721e4a42d89571dc29c7","url":"assets/js/a33fc653.daa3455f.js"},{"revision":"7db8938e1e106a3b03a5d9294b4f16e5","url":"assets/js/a3a90ad0.7e74a751.js"},{"revision":"bb1811c605cd4d4e835ca0825a67f1c8","url":"assets/js/a455e557.486b2539.js"},{"revision":"c66ef7bc93d110815e7417319b2a3e8e","url":"assets/js/a5657520.6fb47e0d.js"},{"revision":"25c1142906322be12ca34c09d98849eb","url":"assets/js/a568aa12.c7e63feb.js"},{"revision":"b4a36bcc16e2efc9fc6ce2fe88d860fe","url":"assets/js/a5d66faf.60ae485d.js"},{"revision":"753c6f4f2b35c71b06e7fee8feaeafe8","url":"assets/js/a63fd5ef.bc7da17f.js"},{"revision":"b3d45d917d424c6c74e1b2fd9cf53643","url":"assets/js/a6aa9e1f.31c9fc76.js"},{"revision":"92ca2421c2d49b062f18093a07cf21c6","url":"assets/js/a6dafb19.2c058d34.js"},{"revision":"d03af6797e99055de4e1adedabe9eb55","url":"assets/js/a7023ddc.f487e86c.js"},{"revision":"46a8b3470bae8cfaecd1d40545fd25c4","url":"assets/js/a71237df.50d8fd9b.js"},{"revision":"35d0b46351d960354f3bcde151df62f6","url":"assets/js/a72e8bb2.9b84607c.js"},{"revision":"93a2a1b03dfcfe45d7830fb99c1b2ee4","url":"assets/js/a77ccc88.edb90338.js"},{"revision":"53ad6c0f00c5e00422432b4b77bdbcea","url":"assets/js/a8cafbb7.35a95855.js"},{"revision":"49215c0717fafac612cd611eef4203ef","url":"assets/js/a9033d9d.f63d4740.js"},{"revision":"70fd42847b641272789e684811a9bb33","url":"assets/js/a914fdf8.752ba0d2.js"},{"revision":"b92e6b5d09e37976966eeb5129c7f811","url":"assets/js/a992b57b.2dc30b50.js"},{"revision":"6f28c4796292c0a4d2939f878c69fcf2","url":"assets/js/a9c28c7a.ce3fd372.js"},{"revision":"21c9aa536d080f4192c8c92cc1981607","url":"assets/js/aa08bde3.7230ef49.js"},{"revision":"5b0d955514a13f40df39d7d312fb1a16","url":"assets/js/aa36ac14.8cb579aa.js"},{"revision":"c969b6b7ac1e22da38c7d104830e28fc","url":"assets/js/aa51974f.a40e31de.js"},{"revision":"ed91d08b07f8392cc53770d5ae61fa5a","url":"assets/js/aa6f9a1c.0470768f.js"},{"revision":"01c29e1311b11bc9ef2290031c50c5cb","url":"assets/js/aacd5a67.8d3afc70.js"},{"revision":"533a23d538175e06c5919b13869f5e69","url":"assets/js/ac6d39d9.2af8038b.js"},{"revision":"c3f3f9074e98f72db1a49b8d58bba9a9","url":"assets/js/adf5ba20.1c5c46a4.js"},{"revision":"35e7fe3b94fd123d7618286275290cb3","url":"assets/js/aec46ee6.2d30067c.js"},{"revision":"e324dcdcc8baf6f077485c172783064f","url":"assets/js/b0b79613.ac3e87ff.js"},{"revision":"88ff74971282d95ee77b41c260a107c7","url":"assets/js/b1686ed4.5d257a41.js"},{"revision":"d7316cef7729b08db37cef2d15ab17c7","url":"assets/js/b1e45e9c.1f05cfa9.js"},{"revision":"f9fed17fd5168fb813bda1d90f885b1e","url":"assets/js/b2b675dd.3f00d49f.js"},{"revision":"83a6cd44ec3a08827b69f5e82d08e37b","url":"assets/js/b2e890b8.2fa49bac.js"},{"revision":"5db56db24e1c9785d0fc6a6c591404db","url":"assets/js/b2f554cd.8ec14e0a.js"},{"revision":"b20f817e9cff93d9684e370118234aaa","url":"assets/js/b4abb1a9.0fd7ee84.js"},{"revision":"21058195fd313ba7f08f3bc0ace698b9","url":"assets/js/b4ecb1de.954ab190.js"},{"revision":"0d6491da5446d01c05c837196bafab82","url":"assets/js/b759525b.099c5f9b.js"},{"revision":"ca4840a5e0c233c09001b02afcd09783","url":"assets/js/b8915b05.9b462dd7.js"},{"revision":"be71433c0f514b8c5c130b7260eb3d0a","url":"assets/js/b90a26fe.b775dbea.js"},{"revision":"cc8e72cc362448c89cfb6bd448aa2e07","url":"assets/js/ba2e5b43.a08bd03a.js"},{"revision":"990200ec32569bdf99d05b41c97131b1","url":"assets/js/ba399d07.3262ea60.js"},{"revision":"e8b3ebb01ebf4a39618ab590e2d10924","url":"assets/js/bc0d87db.2ccfc582.js"},{"revision":"78515d91dc352d4765e0020a519cf79d","url":"assets/js/bc50dbac.a6052922.js"},{"revision":"a8ba7953734cd4f0efeec5f592481ac8","url":"assets/js/bcd9ac64.d041776c.js"},{"revision":"8d9cf200a5e92adea536e679f9a17c82","url":"assets/js/bfdba96f.93718bba.js"},{"revision":"73cd48ca7b7af66d0fb45121b31f4f18","url":"assets/js/c01a889a.cdb19504.js"},{"revision":"9d1bec117aa9659013611d058dbc0fb6","url":"assets/js/c11f557c.10d8b09a.js"},{"revision":"9e3774c87014f9c0388a30196f6a83a0","url":"assets/js/c1763002.1c37f80f.js"},{"revision":"5925aeddc23d9d441162fecbe13234a9","url":"assets/js/c347d83d.8e7620db.js"},{"revision":"4d0585a07056f61b9567f3ad22cd1bb5","url":"assets/js/c4f5d8e4.08efccac.js"},{"revision":"8285de4ba2b7d713495512ddcf5df31b","url":"assets/js/c7794043.5c13c4e8.js"},{"revision":"40f540671f58aacdd5a4be5d6f12d8cb","url":"assets/js/c85bf930.778378f0.js"},{"revision":"2eadc411452331f5c3235928f059bb81","url":"assets/js/c8f98dc3.fbdb7dc4.js"},{"revision":"742e8433cf39b97fcc6a6d20b3dfab1c","url":"assets/js/ca1627e4.a0452007.js"},{"revision":"bc0a224e1b8caeccf49098bd02df1c3a","url":"assets/js/cb17b1a2.d93f858e.js"},{"revision":"0f48e285fbaecf507c86a838ade9b873","url":"assets/js/cbb58231.171c0c5f.js"},{"revision":"5e24a04b3e7dd5adf4b2bbe3816fc9fb","url":"assets/js/ccc49370.9fe3a011.js"},{"revision":"7a8b2e0bdf33706ee4472eb7194d8921","url":"assets/js/cced5e9c.b51013c4.js"},{"revision":"7d921aa085a952275c68da9f1999cf3f","url":"assets/js/ceddf6c5.b20a83c2.js"},{"revision":"cddced6bf1214bca056f0bd84db03bf2","url":"assets/js/cf59a740.e65bed56.js"},{"revision":"452dff36d7092da2f19497ba7328aaa2","url":"assets/js/cf7140a7.2777a1bc.js"},{"revision":"6d52aab63cbe12b12b48769410939c25","url":"assets/js/d029ad68.e9ce5290.js"},{"revision":"7aeafd440b5b757e993631b773c31904","url":"assets/js/d0530dec.e3e4a44b.js"},{"revision":"f94d52bd67364d8e75d5e82f8941dc6a","url":"assets/js/d0728c43.623e18fe.js"},{"revision":"e09cc08d54d13a1f4c69355b748cd20d","url":"assets/js/d096c6b2.e365b3ef.js"},{"revision":"51e7245ed5f016bdf8c71cd4ec120e3f","url":"assets/js/d2b77108.6ed10eaf.js"},{"revision":"d296b328e3c6e9088c0760fd6b48075f","url":"assets/js/d319bc02.555c5cc3.js"},{"revision":"c2d5ae03b071a44e4babf72cfddf6f5d","url":"assets/js/d43114ab.34e186a7.js"},{"revision":"69546e5b2df744c2ce1cee173b329cdd","url":"assets/js/d9a14692.a5e88ffd.js"},{"revision":"ef19a8a846d930c16b823cd52c6a4413","url":"assets/js/dcf54f0c.b98d2900.js"},{"revision":"d6a47e2d2d8113c658a68c6d2026e13c","url":"assets/js/dde38aa2.292ba684.js"},{"revision":"9a0bf87e19db9e45131209d03123e2b3","url":"assets/js/de043e40.4a5c21e0.js"},{"revision":"d4a037157e7cac2369ffdd127bf817de","url":"assets/js/df203c0f.d0e8f0b5.js"},{"revision":"1ed9134035947c19f09e8524eeb1dd40","url":"assets/js/dfe161e8.bc44b032.js"},{"revision":"2646fbec917d7d8890cec9a88c7d054c","url":"assets/js/dfec48fa.d667b17f.js"},{"revision":"9ce06edceca6b49cb5c667519a44441b","url":"assets/js/dfef8aa1.064567c0.js"},{"revision":"607a417c394c56c6b63baeac6be7e2d7","url":"assets/js/e09253cf.476055eb.js"},{"revision":"88af20707a69deadd13a70365327f4d2","url":"assets/js/e0b4c9a6.6ce0538f.js"},{"revision":"baef9f0767982bc332cf07ac14c024c4","url":"assets/js/e0c4b8f2.a91a7a91.js"},{"revision":"8079beaa3f0d02adb9e884f62de95c3f","url":"assets/js/e11a2e89.172a77de.js"},{"revision":"54a47c00e5329ba28569ac09534bb890","url":"assets/js/e15f0930.9e130a03.js"},{"revision":"17dd6f2afd269619c6d865568f637594","url":"assets/js/e1e3e09e.1d2e1b33.js"},{"revision":"f35ffd29465c48c1e1ad265e8332794f","url":"assets/js/e2cafc5f.71292f42.js"},{"revision":"86328f32bbf3af6990c960a1100fcf1f","url":"assets/js/e3466da6.58ddfacb.js"},{"revision":"4d69a432db29cec12922edb56f631b45","url":"assets/js/e34b26bd.2ce83c0b.js"},{"revision":"31ac0b9ef7e5316c749068b1e89dd540","url":"assets/js/e3984eef.66542d58.js"},{"revision":"8a9ba82bfda3f7c5c1e3e10e95520408","url":"assets/js/e39eff86.9a74662b.js"},{"revision":"60f3fab8bc9983a49801d0e076296356","url":"assets/js/e40d0ada.56807f78.js"},{"revision":"beea3ed6e49b7fdad5fedc5ef56ebe55","url":"assets/js/e44429ef.55c4714a.js"},{"revision":"309fa4bd4353a5c177fafe67474b25f0","url":"assets/js/e47f5c2b.06ba5547.js"},{"revision":"d1dface7edb1b8bcfa676a92b321755a","url":"assets/js/e4d5ed91.05374f20.js"},{"revision":"633448410bea6caa4dde8abe21d91417","url":"assets/js/e5182240.6f1ee7b4.js"},{"revision":"ffa77458f21ca21061ea9ad608b530d9","url":"assets/js/e574887a.be9b253a.js"},{"revision":"c8402b8acfa1023201439078a10d47af","url":"assets/js/e8911fb6.dd817f65.js"},{"revision":"1e926f6b09dab02f4af7f25b4eccbce9","url":"assets/js/ebb54efe.e3d04460.js"},{"revision":"2cf87e2acf3ef78fc74cf05130120f31","url":"assets/js/ebe9b8d5.b90d794f.js"},{"revision":"025d9e5a654b1a707d9239c07acd5b41","url":"assets/js/ed290190.246dc1aa.js"},{"revision":"16cc0bfb93e6102955d2b60c4df6cf30","url":"assets/js/ed3658b8.7abfb853.js"},{"revision":"542ad67d8b475ee097687ad2b48e2bec","url":"assets/js/ef9a3c0c.2c2fa3eb.js"},{"revision":"58ee5b27010bf1dff1d117c87a66fc1e","url":"assets/js/f11de383.a7ce3f9c.js"},{"revision":"8b09ba540afc9d92263049f74e966634","url":"assets/js/f12188d4.b1daf0cd.js"},{"revision":"65d4c351f421c4dd722c31935efca205","url":"assets/js/f1c6b032.723a48d9.js"},{"revision":"a6d906a956940593db09e1f1c254ded4","url":"assets/js/f386d126.b4d22b70.js"},{"revision":"ea60a1d8e9cf748966baade95aa54f3c","url":"assets/js/f611ecfc.0d1e3e9a.js"},{"revision":"bb2c67d94085514ab9bb7533f72f14f7","url":"assets/js/f6309443.91c7992e.js"},{"revision":"3f29733b75b0dae2a3efc3cd7a673687","url":"assets/js/f86a675c.20c60be5.js"},{"revision":"1b3416d64acd70f916821d029e13a0f2","url":"assets/js/f8b7d379.907273cb.js"},{"revision":"42f232782e92994b5ee8ff2556e678ae","url":"assets/js/f997f396.45e6a403.js"},{"revision":"4b31d5f1e04f8c62775334e728a606a7","url":"assets/js/fa4734c0.5ae14f78.js"},{"revision":"9622e6a4504e96ade309de2e543e0872","url":"assets/js/fb9b4356.ae6ed726.js"},{"revision":"107ce7ddf4d8153cca1e852884817e51","url":"assets/js/fd393f03.292ce872.js"},{"revision":"cc36ddd851617e2a2733b57a5f2b5fcd","url":"assets/js/fd90625c.18d667e4.js"},{"revision":"927e8306bde37af570cdeaa57888405d","url":"assets/js/fea437f9.c7baf963.js"},{"revision":"c9fe4b65eeb463b04025e004d6dc513c","url":"assets/js/ffafe356.10e5a2ae.js"},{"revision":"5e8163102ed6901dbd54ae96d471ed13","url":"assets/js/main.ab476759.js"},{"revision":"0bb1481cd0d25e71b22b5b6200695836","url":"assets/js/runtime~main.8cc43467.js"},{"revision":"dccd2f50a1d2cd786868ebda04d37e46","url":"blog/archive/index.html"},{"revision":"6d3097f9619ff3b8888b34a3d968ab6b","url":"blog/experimental-release-30088c/index.html"},{"revision":"3e296d9298b2e42cba9a7cbdc56c800b","url":"blog/index.html"},{"revision":"d96e4208f78c4049c5f81467c2bad91a","url":"blog/tags/0-0-0-experimental-30088-c-20220809/index.html"},{"revision":"217f6874eb0cb9dd893755807cbef38c","url":"blog/tags/design-tokens/index.html"},{"revision":"b3e9493bd90aec214d344f67bc759afc","url":"blog/tags/development/index.html"},{"revision":"c87e1b2be5375722579d6f6c584c407c","url":"blog/tags/headless-styles/index.html"},{"revision":"524fcd7cc7c3553b158a5aceaf335176","url":"blog/tags/index.html"},{"revision":"7ee51b48023092457a25fdf17bb8a1d2","url":"blog/tags/pluralsight/index.html"},{"revision":"111d1c7e5c95654555e40be9879af927","url":"blog/tags/react-utils/index.html"},{"revision":"a27830abab5e1fb9955e5dc8346b5ad0","url":"blog/tags/ui-library/index.html"},{"revision":"f40d5b531687f13c8018c000b38efe0c","url":"blog/tags/v-0-1-0-alpha-release/index.html"},{"revision":"dc3d476653c87bfb134a91e94cdc5bd5","url":"blog/v0.1.0-alpha-release/index.html"},{"revision":"0cf5532d96855344c2e62092eea86074","url":"docs/design/color/index.html"},{"revision":"6cc525ca7980cc23b0ca5cb1705215e1","url":"docs/development/discover-more/contributing/index.html"},{"revision":"ae47d35aeaa56ba9583d366990a57527","url":"docs/development/discover-more/faq/index.html"},{"revision":"877e5fca9295a121cfe77401480363f0","url":"docs/development/discover-more/roadmap/index.html"},{"revision":"c5e7ee50d2b7c9379d67f5e1ab06c069","url":"docs/development/discover-more/versions/index.html"},{"revision":"3b7de112864767810383f26480115ab5","url":"docs/development/discover-more/vision/index.html"},{"revision":"e099776887d378347b30babf3dde626a","url":"docs/development/getting-started/installation/index.html"},{"revision":"30573ce3156eeca89ebfcda73600ae35","url":"docs/development/getting-started/migration/index.html"},{"revision":"961c8f48457eeb3d677512bdf8328f28","url":"docs/development/getting-started/platforms/index.html"},{"revision":"27130ef444286f18afc412936e825ed1","url":"docs/development/getting-started/support/index.html"},{"revision":"e5e7de88fb2c17358f655f7664147ad8","url":"docs/development/getting-started/usage/index.html"},{"revision":"1ca06d257165b6fde5c21e6faef41da3","url":"docs/development/headless-styles/Admonition/index.html"},{"revision":"83d54e645f11089e3c00cc7caf4a921e","url":"docs/development/headless-styles/Avatar/index.html"},{"revision":"cf6b519779cee4d01bfc3028a2253c98","url":"docs/development/headless-styles/Badge/index.html"},{"revision":"08bdec99a703ef7f90f946f87edc7ca1","url":"docs/development/headless-styles/Button/index.html"},{"revision":"5593bb2bf3f1dbf858aa76171ae9980e","url":"docs/development/headless-styles/Checkbox/index.html"},{"revision":"136f9c27d1625344f0d045d7568d3c04","url":"docs/development/headless-styles/CircularProgress/index.html"},{"revision":"0df522a329bfd7b0452b9cb2d18342b4","url":"docs/development/headless-styles/ConfirmDialog/index.html"},{"revision":"3fabca2e556442c287cb14a1769a48da","url":"docs/development/headless-styles/FormControl/index.html"},{"revision":"2807ae83e05070f16bee82923c11363a","url":"docs/development/headless-styles/Icon/index.html"},{"revision":"33dceb86a9a1b7b795f1283cc7664ea1","url":"docs/development/headless-styles/IconButton/index.html"},{"revision":"91357b470b13eb744ea2033e68178af1","url":"docs/development/headless-styles/Input/index.html"},{"revision":"d23961b4ef3a6785b57ebec5da70c3f9","url":"docs/development/headless-styles/intro/index.html"},{"revision":"b25651300e00d3be029616a08c9e07ee","url":"docs/development/headless-styles/Progress/index.html"},{"revision":"e910475e49b422e6a4bc94e5fe57cbe8","url":"docs/development/headless-styles/Radio/index.html"},{"revision":"244ec0b42edb5074be525d5b147c44bb","url":"docs/development/headless-styles/Skeleton/index.html"},{"revision":"fda09368c2ad30d75745184df09a794f","url":"docs/development/headless-styles/Switch/index.html"},{"revision":"9e93aeddc5a2fb4377f5db948a2d28c9","url":"docs/development/headless-styles/Tag/index.html"},{"revision":"4fb16cb9f056e6f0c30e67a8da056b21","url":"docs/development/headless-styles/Textarea/index.html"},{"revision":"2ebf31a2a89564cf78fdbf5f3e1c4c3d","url":"docs/development/headless-styles/TextLink/index.html"},{"revision":"099fe5f8ecba262a45df30461e787cf9","url":"docs/development/headless-styles/Typography/index.html"},{"revision":"26b2d2f38319eb28c619b5ee3b5039d7","url":"docs/development/icons/iconsList/index.html"},{"revision":"16a176d0fdd1424860e71a71902b84cd","url":"docs/development/icons/intro/index.html"},{"revision":"adb739c97b7ff5f95bd743c471c9c032","url":"docs/development/icons/usage/index.html"},{"revision":"4df2ff4acd3c3b237c2da6d092315c2f","url":"docs/development/react-utils/use-esc-to-close/index.html"},{"revision":"de8a582115693b1325d29de54fca17ba","url":"docs/development/react-utils/use-focus-trap/index.html"},{"revision":"62391194951da8a60c4c9b0dcca53a27","url":"docs/development/tokens/colors/index.html"},{"revision":"920cf67fb81d69607976fcb8c3da6313","url":"docs/development/tokens/intro/index.html"},{"revision":"21ca4c4bcfa2daa932945acba0ffd267","url":"docs/next/design/color/index.html"},{"revision":"25a6497b6e2ac181942dcff00868695b","url":"docs/next/design/select/index.html"},{"revision":"0455cbf31ab25a8914a75be77a166066","url":"docs/next/development/discover-more/contributing/index.html"},{"revision":"b20561a6b621811f8461b6f3c02d75a1","url":"docs/next/development/discover-more/faq/index.html"},{"revision":"7c47373794b49249b1a9ed2610cdbc3f","url":"docs/next/development/discover-more/roadmap/index.html"},{"revision":"e743003c5ffac53f2ff701fbecd4fd4c","url":"docs/next/development/discover-more/versions/index.html"},{"revision":"ba6d1f6bbecf4ff935c1519d3d758acc","url":"docs/next/development/discover-more/vision/index.html"},{"revision":"f5431b8e4a6b55d4fcdcbcba33005d1f","url":"docs/next/development/getting-started/installation/index.html"},{"revision":"e6493278022058007e3d5ca6afbab28a","url":"docs/next/development/getting-started/migration/index.html"},{"revision":"876ee5910dc328f8d596d1eaf6a5cac9","url":"docs/next/development/getting-started/platforms/index.html"},{"revision":"a8ec9402336e7334ab1b918aaf58a78d","url":"docs/next/development/getting-started/support/index.html"},{"revision":"63c7104b616f12c7d0101b3ec552ca46","url":"docs/next/development/getting-started/usage/index.html"},{"revision":"ab6c2ce2007b9989b74798b2b4a1ffc5","url":"docs/next/development/headless-styles/Admonition/index.html"},{"revision":"b2a5e326ae5a9368c8db8a2dea569790","url":"docs/next/development/headless-styles/Avatar/index.html"},{"revision":"40da8a51f93f69db7b5e7409179b6aeb","url":"docs/next/development/headless-styles/Badge/index.html"},{"revision":"5d7d53563bfa855ad2433f43a7be21be","url":"docs/next/development/headless-styles/Button/index.html"},{"revision":"3901c987e3ca45352099bd091014b98c","url":"docs/next/development/headless-styles/Checkbox/index.html"},{"revision":"169a2a737bf57ab89f9d75cd4c51f6f1","url":"docs/next/development/headless-styles/CircularProgress/index.html"},{"revision":"4f6433e43539a7fea989f82fde054d0d","url":"docs/next/development/headless-styles/ConfirmDialog/index.html"},{"revision":"468404124f40d0e72340b9609b775f76","url":"docs/next/development/headless-styles/FormControl/index.html"},{"revision":"e2f277e4e422930f62f6346478a5f731","url":"docs/next/development/headless-styles/Icon/index.html"},{"revision":"72fb627b7953c1aa6ac335e9c721353a","url":"docs/next/development/headless-styles/IconButton/index.html"},{"revision":"56b7028a68e228fe119d38d66ffa25f5","url":"docs/next/development/headless-styles/Input/index.html"},{"revision":"df69f2529a6365bbccbe1c819d2caa90","url":"docs/next/development/headless-styles/intro/index.html"},{"revision":"a70c18b7f4747c4ac8b8356f9613c98d","url":"docs/next/development/headless-styles/Menu/index.html"},{"revision":"8e372e9dab43972e1e6be160b41203d3","url":"docs/next/development/headless-styles/Modal/index.html"},{"revision":"92664b123e3989ab3d48d0a4a06e4b35","url":"docs/next/development/headless-styles/Pagination/index.html"},{"revision":"a29cb105588256d46a7e4d9aee8e4936","url":"docs/next/development/headless-styles/Progress/index.html"},{"revision":"30265136c0392fe461d617ca51e6d17d","url":"docs/next/development/headless-styles/Radio/index.html"},{"revision":"624566f35dced772761d9e46bb2af439","url":"docs/next/development/headless-styles/Select/index.html"},{"revision":"82e97b1c95f4d012c63b310d0d599a94","url":"docs/next/development/headless-styles/Skeleton/index.html"},{"revision":"2dc5f32191e93715fbcfac69968cb837","url":"docs/next/development/headless-styles/Switch/index.html"},{"revision":"503b3af573e879b9b8630c833f8ded0e","url":"docs/next/development/headless-styles/Table/index.html"},{"revision":"7fa86710b0580710636c996f3933f583","url":"docs/next/development/headless-styles/Tabs/index.html"},{"revision":"f548c6387f67c483ba59933a4095f7e0","url":"docs/next/development/headless-styles/Tag/index.html"},{"revision":"6273a19ceef673ebcee8162bb9d945d0","url":"docs/next/development/headless-styles/Textarea/index.html"},{"revision":"0ef61089c9541df783ad723faeb3d0b6","url":"docs/next/development/headless-styles/TextLink/index.html"},{"revision":"f94e7274ac904937f9582f9e9d13c9cf","url":"docs/next/development/headless-styles/Tooltip/index.html"},{"revision":"c1264ea940d1e52f9a865398e52a294b","url":"docs/next/development/headless-styles/Typography/index.html"},{"revision":"d5966e631ba9c10a157d950e0291cc03","url":"docs/next/development/icons/iconsList/index.html"},{"revision":"84c3ba630674ac382d7aa3e206a44106","url":"docs/next/development/icons/intro/index.html"},{"revision":"4705144dad26a0f9c12b4fdb917f109f","url":"docs/next/development/icons/usage/index.html"},{"revision":"5f82ac4ecbf8c95e4a65cfb36dabed6b","url":"docs/next/development/react-utils/use-esc-to-close/index.html"},{"revision":"9884dcb8528c537f7eb9adcddfc990d8","url":"docs/next/development/react-utils/use-focus-trap/index.html"},{"revision":"1e43a7d3f0bddfef29d20abdb7b2e066","url":"docs/next/development/react-utils/use-preloaded-img/index.html"},{"revision":"34fe8474ffb6521c8489ba03287e2404","url":"docs/next/development/react-utils/use-tabs/index.html"},{"revision":"47f01a3e55876b66f5ec906ae85d15fb","url":"docs/next/development/tokens/colors/index.html"},{"revision":"3773d653fc7ee0c1288b4078de0d243b","url":"docs/next/development/tokens/intro/index.html"},{"revision":"15411d1296a9a75f65d9a140ee996826","url":"docs/next/start/a11y-standards/index.html"},{"revision":"073f872a02ada9dadd2a8ce86621ef4c","url":"docs/next/start/get-started/index.html"},{"revision":"e9b23e9dce0caeb02b81ac6fed95a0a6","url":"docs/next/tags/a-11-y/index.html"},{"revision":"8f1aa0f457cbde71034824e095815a1e","url":"docs/next/tags/accessibility-standards/index.html"},{"revision":"2cb3d6763bc731d17f385046b678102d","url":"docs/next/tags/admonition/index.html"},{"revision":"7fb66ef2b680ab6d133594fa74bf6252","url":"docs/next/tags/assets/index.html"},{"revision":"51624327a19ab7f926cfeb44a9e6240a","url":"docs/next/tags/avatar/index.html"},{"revision":"f0b9f9c7366edfcf2f5f077c4d5a0a5a","url":"docs/next/tags/badge/index.html"},{"revision":"5f5d61d7cc1f1113b5b9f02ea5187115","url":"docs/next/tags/button/index.html"},{"revision":"69ae526935fb8d88a00d017494589cf6","url":"docs/next/tags/checkbox/index.html"},{"revision":"821b928cd5f236ba8309b1b86ca866c0","url":"docs/next/tags/choose/index.html"},{"revision":"645e1d1119d378d2f9bc044fc88b11c0","url":"docs/next/tags/colors/index.html"},{"revision":"bc3a9d8f57201fbbba1ad53726604af7","url":"docs/next/tags/components/index.html"},{"revision":"53fe6c4f2a9969ec9f27c591f2a132d3","url":"docs/next/tags/confirm-dialog/index.html"},{"revision":"d4e94e7f742554189290924f03b9524e","url":"docs/next/tags/contributing/index.html"},{"revision":"3714a4326f9e34b844b9185f70c002af","url":"docs/next/tags/deprecation-policy/index.html"},{"revision":"519e68ec970477c63b7da915c4cf66db","url":"docs/next/tags/design/index.html"},{"revision":"a037ce7eb5cbb3af69c3acb5c4f2851d","url":"docs/next/tags/development/index.html"},{"revision":"49a8960f10d8d960f9bd5add48057ad8","url":"docs/next/tags/discover-more/index.html"},{"revision":"fa42909c3e44c1b310e53740fb3c7177","url":"docs/next/tags/dropdown/index.html"},{"revision":"a05df2caa759539101e0629aed4e5f4b","url":"docs/next/tags/error-message/index.html"},{"revision":"155fdf82b34bfd22af7107a3f86a3226","url":"docs/next/tags/faq/index.html"},{"revision":"e967a4f09c36d0c3c3ac2e95afd20c64","url":"docs/next/tags/fonts/index.html"},{"revision":"750de5a46a382f66712e34ff7292abd9","url":"docs/next/tags/form-control/index.html"},{"revision":"0cf30abf5db67b1f506a1c261c502c00","url":"docs/next/tags/form-label/index.html"},{"revision":"a9d2f742e9e5c542d79cbca1fde8acaa","url":"docs/next/tags/forms/index.html"},{"revision":"12923c0ba8ca5ae3e7a0f98a70ce2711","url":"docs/next/tags/getting-started/index.html"},{"revision":"17e4c48902c9cb881749a4fd38c36d7f","url":"docs/next/tags/github/index.html"},{"revision":"a3116a3daf7ad9250e1446bf43847814","url":"docs/next/tags/headless-styles/index.html"},{"revision":"dfea7f877dc95ae6bb79b9b5e447db6d","url":"docs/next/tags/hooks/index.html"},{"revision":"6e68af6c094f56b33b77979090582253","url":"docs/next/tags/icon-button/index.html"},{"revision":"fc32af46dea0ac54bf4d5dc0e9b928d6","url":"docs/next/tags/icon/index.html"},{"revision":"a0f59319f8eaf46777dc76245a185caa","url":"docs/next/tags/icons/index.html"},{"revision":"b6f0b8ded62dec71938dfc093adf83da","url":"docs/next/tags/ie-11/index.html"},{"revision":"a0b2ded61f42afce73beb937940eb79b","url":"docs/next/tags/index.html"},{"revision":"3f2d3b09d4118aa905918864f432687f","url":"docs/next/tags/input/index.html"},{"revision":"65cf7aca64c1fc16a069d79003a7f49c","url":"docs/next/tags/installation/index.html"},{"revision":"e8f559cc2460213ba8f1ff65aa0ac707","url":"docs/next/tags/intro/index.html"},{"revision":"24fe202a0ec23e6a51807d8d5bd351b9","url":"docs/next/tags/issues/index.html"},{"revision":"315d2dd6f5579a1272313078e53726ee","url":"docs/next/tags/link/index.html"},{"revision":"a338dbb2fa17b9221b93e0698c072f4f","url":"docs/next/tags/list-of-icons/index.html"},{"revision":"264f38dd715f504db57e521e5b0ef20d","url":"docs/next/tags/menu/index.html"},{"revision":"948409cab2a70181d96b7b5244839d84","url":"docs/next/tags/migration/index.html"},{"revision":"ddc496a049f14b199b72b2e718b9650c","url":"docs/next/tags/modal/index.html"},{"revision":"62484db3e334bda5611785f7217aaf89","url":"docs/next/tags/normalize/index.html"},{"revision":"5649a93fc9f8d846339eec06453acc5c","url":"docs/next/tags/packages/index.html"},{"revision":"a429b1e3f7124941737e6164bb5caf71","url":"docs/next/tags/pagination/index.html"},{"revision":"53a74ee1f05d05ed96fca5513140880a","url":"docs/next/tags/platforms/index.html"},{"revision":"3cf2d79381c5c55ea1f98dd9a10d7c99","url":"docs/next/tags/progress/index.html"},{"revision":"09a018233716224976c8461f070a0851","url":"docs/next/tags/psds-classic/index.html"},{"revision":"d4bf83e4dc2f284c51e366e100aa5a0f","url":"docs/next/tags/radio/index.html"},{"revision":"9aae502d183fc3abdeae205b1019ca52","url":"docs/next/tags/react-native/index.html"},{"revision":"af2460986c3cedb32f4394ebf8fc473c","url":"docs/next/tags/react-utils/index.html"},{"revision":"20a9df3a29b8fcb9d56ee0a8baffad83","url":"docs/next/tags/react/index.html"},{"revision":"8de7120f57a9d5a168106a4c16ce65d7","url":"docs/next/tags/release-frequency/index.html"},{"revision":"dccb4a976336f68eb490de93d3ef393a","url":"docs/next/tags/roadmap/index.html"},{"revision":"07182a9a7604afd7b8af499b0089be5f","url":"docs/next/tags/select/index.html"},{"revision":"d4ff1f0212971daeb2cfa71fbcb055a4","url":"docs/next/tags/server/index.html"},{"revision":"bb94538c6294e07973d9357cb2e10943","url":"docs/next/tags/setup/index.html"},{"revision":"25659210eec3fa4709867c790f4bfb5f","url":"docs/next/tags/skeleton/index.html"},{"revision":"7b3c00a6e4a3ad5c3bcecb7711ad8f7e","url":"docs/next/tags/start-here/index.html"},{"revision":"7fb756660e86a300d9cb6f3a28a49ad9","url":"docs/next/tags/support/index.html"},{"revision":"33a61781b61cd6ac1608593934e79173","url":"docs/next/tags/switch/index.html"},{"revision":"af28673656ade517e71bee12d7ff7995","url":"docs/next/tags/table/index.html"},{"revision":"db532aae7a27be34601be0cd5bc4eaed","url":"docs/next/tags/tabs/index.html"},{"revision":"a2975d611e7983b168933016a25d7f6d","url":"docs/next/tags/tag/index.html"},{"revision":"2e1989ef6c6fc9a551ef83a065ba8722","url":"docs/next/tags/text-link/index.html"},{"revision":"49a669f23c999100e969b2545d10f8c1","url":"docs/next/tags/textarea/index.html"},{"revision":"be7b7c263a3ccdf9ee49baa80da20635","url":"docs/next/tags/theme/index.html"},{"revision":"e9f6693e5e486fd14522e751eb0bf368","url":"docs/next/tags/tokens/index.html"},{"revision":"4c8723cc00712d19d1c06f34dd4418b3","url":"docs/next/tags/tooltip/index.html"},{"revision":"df21f484335d7b827fa97bd0164692f8","url":"docs/next/tags/twitter/index.html"},{"revision":"9422200407b97e668eecdd299e04b013","url":"docs/next/tags/typescript/index.html"},{"revision":"080691374ec10a8939bcffd6e18135ee","url":"docs/next/tags/typography/index.html"},{"revision":"5b5d2c4b078fdafd979b18b49fbd2eed","url":"docs/next/tags/usage/index.html"},{"revision":"b9c2a9e50df8ae56629f48fd21234323","url":"docs/next/tags/use-esc-to-close/index.html"},{"revision":"5e7a66fd7a4177f2bf8c383120b6b1ed","url":"docs/next/tags/use-focus-trap/index.html"},{"revision":"77858c9e07019a737eec292f5f172649","url":"docs/next/tags/use-preloaded-image/index.html"},{"revision":"dc8b7bdc5dfe21726e5043a645f22d3e","url":"docs/next/tags/use-tabs/index.html"},{"revision":"a520b710d7506f6c7dde37d9f9a84135","url":"docs/next/tags/version-strategy/index.html"},{"revision":"8ea8a9474c67c61bc3f65ae7917c1631","url":"docs/next/tags/versions/index.html"},{"revision":"680d1b44a71872a78342eb7d2689c3d8","url":"docs/next/tags/vision/index.html"},{"revision":"3abddd93fb9f3233bb865247b8d5ca46","url":"docs/next/tags/web/index.html"},{"revision":"be57e9c814c72556de45c445d4992eaf","url":"docs/next/team/index.html"},{"revision":"4a99a665e5f7265039045c3b37d8db30","url":"docs/start/a11y-standards/index.html"},{"revision":"136d1db087238356d1a9f0abac70bbfb","url":"docs/start/get-started/index.html"},{"revision":"ffea90aab964e2d063d56e6a82e9d4cb","url":"docs/tags/a-11-y/index.html"},{"revision":"fed98e15e22eb978e0b08e158974e335","url":"docs/tags/accessibility-standards/index.html"},{"revision":"f6fecb31fb3f57f9fe3700462604c56f","url":"docs/tags/admonition/index.html"},{"revision":"795a0be58102a4b9db37e3358c91fa73","url":"docs/tags/assets/index.html"},{"revision":"87542ee89dd951258e522e01529f6728","url":"docs/tags/avatar/index.html"},{"revision":"8a99f71cf6a1a1b579d14a0865b816ba","url":"docs/tags/badge/index.html"},{"revision":"ff40b7277da78a469b4090c12e92d76f","url":"docs/tags/button/index.html"},{"revision":"eef8d8cd2c61c3094fbb240600ecf3bb","url":"docs/tags/checkbox/index.html"},{"revision":"c023e4e7870dddaea26e36284c293bdc","url":"docs/tags/colors/index.html"},{"revision":"b7826b5000aea1df8b9d712ba61d662e","url":"docs/tags/components/index.html"},{"revision":"5dbdda330cdd184a60f4aa67e86e1a08","url":"docs/tags/confirm-dialog/index.html"},{"revision":"b05908b09a98b783fd949c4b73155754","url":"docs/tags/contributing/index.html"},{"revision":"f3f7f4a5d04a1ac48f44e7b65975ae00","url":"docs/tags/deprecation-policy/index.html"},{"revision":"7ac94d54ca98ba52c2d1aac01891069b","url":"docs/tags/design/index.html"},{"revision":"543c7098a3f261320d1e161109449be6","url":"docs/tags/development/index.html"},{"revision":"9417d75c6bff472917ad5a8bbbc64f01","url":"docs/tags/discover-more/index.html"},{"revision":"4b254a02251c132cbb3452715e51ccb0","url":"docs/tags/error-message/index.html"},{"revision":"970075544b899259aabcdf5f1cb90fe4","url":"docs/tags/faq/index.html"},{"revision":"3ea0ec70a2d1d7e98f753f58de91dd8c","url":"docs/tags/fonts/index.html"},{"revision":"091f9ff97499c8a8fe7158e2f8a05552","url":"docs/tags/form-control/index.html"},{"revision":"cb1c22efc1c590c3fb265a8329ee2833","url":"docs/tags/form-label/index.html"},{"revision":"d7a1885953c521edcc26a2ac363fd43b","url":"docs/tags/getting-started/index.html"},{"revision":"24a7f6b279d29122018bda2e549fc6ab","url":"docs/tags/github/index.html"},{"revision":"e08ea77295a8c84fe60808e14c2dde84","url":"docs/tags/headless-styles/index.html"},{"revision":"4aeabedf353b2359b7477bcb1e051295","url":"docs/tags/icon-button/index.html"},{"revision":"a2d53c0187667bbae75f04ae1c7f4beb","url":"docs/tags/icon/index.html"},{"revision":"5d9ff95de685f9239aa41ec0d8660596","url":"docs/tags/icons/index.html"},{"revision":"a9b39625104733c0e5e989546dc4ff45","url":"docs/tags/ie-11/index.html"},{"revision":"c6acba906d9dee8b68d5f9ab8ea8d8f7","url":"docs/tags/index.html"},{"revision":"d1ae2474d8e8ad8e0f12c9332bc64cc8","url":"docs/tags/input/index.html"},{"revision":"20364fac3d6a61238b8d785d531e166e","url":"docs/tags/installation/index.html"},{"revision":"4d8dbfffb3f8eff75f4cfd220f842e89","url":"docs/tags/intro/index.html"},{"revision":"c9a42df75fe5ece32b643952e11a8903","url":"docs/tags/issues/index.html"},{"revision":"363f4d295057a250118f118b57c4adf1","url":"docs/tags/link/index.html"},{"revision":"ca51a008a9eeebb750fc2d0461b93f97","url":"docs/tags/list-of-icons/index.html"},{"revision":"68b0fe57a58e108d76b8c0a44c9534a7","url":"docs/tags/migration/index.html"},{"revision":"871737175f5fecc670d4dc613fa7203c","url":"docs/tags/normalize/index.html"},{"revision":"88e0aca927988bd89d4b452703e4160b","url":"docs/tags/packages/index.html"},{"revision":"0f52666536fe06b6ca52800841ecb393","url":"docs/tags/platforms/index.html"},{"revision":"3472a3875f9a67624bb7f193e5e6222e","url":"docs/tags/progress/index.html"},{"revision":"709037756d857fa9ea38b0fdd4dae37f","url":"docs/tags/psds-classic/index.html"},{"revision":"cba7ecde5270ca55b51390ac360d927a","url":"docs/tags/radio/index.html"},{"revision":"a3d5909c1b355dca98f178d7ae81f53e","url":"docs/tags/react-native/index.html"},{"revision":"aaeefb7e404900790c6dddaf4aa264f1","url":"docs/tags/react-utils/index.html"},{"revision":"fdc35196cad2e1f64a876594bfdb6950","url":"docs/tags/react/index.html"},{"revision":"6a01ce7f27cce63d6ee1e623c98f7146","url":"docs/tags/release-frequency/index.html"},{"revision":"3be9fa455a33b2ca938b92475bc7e913","url":"docs/tags/roadmap/index.html"},{"revision":"170d46df7d598f10663056602cb536b1","url":"docs/tags/server/index.html"},{"revision":"3509d3a9f54beed42d01ec07d72f2233","url":"docs/tags/setup/index.html"},{"revision":"98919df2c66551bb6c54528ff318f2da","url":"docs/tags/skeleton/index.html"},{"revision":"50e2bd095a702c61dfdcee6ebae768b9","url":"docs/tags/start-here/index.html"},{"revision":"adb4fef40ea69c3d0054cae3358e845c","url":"docs/tags/support/index.html"},{"revision":"71a63e23fb3f6e494dd26a5f2ec5744b","url":"docs/tags/switch/index.html"},{"revision":"47fb544a3944a35620c284963ed885fe","url":"docs/tags/tag/index.html"},{"revision":"9fbbe0d054dc66ce8bb3641854e70f4b","url":"docs/tags/text-link/index.html"},{"revision":"171092f7ec8b75131f45d1c7353515f7","url":"docs/tags/textarea/index.html"},{"revision":"8bc64575358bd3377622c0573fc89713","url":"docs/tags/tokens/index.html"},{"revision":"64596cab7367b0c62c3f455b76de456d","url":"docs/tags/twitter/index.html"},{"revision":"fefb4b0bb9608e37f883032e0d33d292","url":"docs/tags/typescript/index.html"},{"revision":"a253ce6363bf590e222dc53ed3ce37ec","url":"docs/tags/typography/index.html"},{"revision":"5a45c3d78056f1287f5cde8e1f3476f1","url":"docs/tags/usage/index.html"},{"revision":"5be13bf3b34f3877583d3c42e8da1225","url":"docs/tags/use-esc-to-close/index.html"},{"revision":"fae61a8d4bbab8d708892c55a8499256","url":"docs/tags/use-focus-trap/index.html"},{"revision":"a352c6c66f3319988cf82258fe3a76d2","url":"docs/tags/version-strategy/index.html"},{"revision":"eb8c6292946dbbd7412c389c3ee3144c","url":"docs/tags/versions/index.html"},{"revision":"b822f886a1845f5665bb336ee6fbac0a","url":"docs/tags/vision/index.html"},{"revision":"cdc25e45a72f4a8803b8c7fb925dcef6","url":"docs/tags/web/index.html"},{"revision":"6bcf5c1283db7ab2f85202c7c5e9ed2f","url":"docs/team/index.html"},{"revision":"b248ea28026b5eeded36c38d12f558ad","url":"index.html"},{"revision":"4e91b4c3f3551b252ad3fb10b7aff8f9","url":"manifest.json"},{"revision":"569e583f64da064a4a868ec017f1aaf8","url":"markdown-page/index.html"},{"revision":"069ac6d8bd3fd1ad7e210278ae41e223","url":"search/index.html"},{"revision":"66cd6a086998f794051f48546ffba6a0","url":"img/hs-ss.png"},{"revision":"47fcaf202ceac03bd59bb40889ae3d6e","url":"img/installation-ss.png"},{"revision":"0cfddf86fe5641ceba52923858d9af64","url":"img/logo-192.png"},{"revision":"2c7deae724e0523c85d2eff0b98d7584","url":"img/logo-512.png"},{"revision":"a86c8a97fe317c1f616c705a5f093d4e","url":"img/logo-background.svg"},{"revision":"b9219c97d5d4d83bd24ef425075248b9","url":"img/logo-full-color.svg"},{"revision":"b84bebed8c9e07ab1ca6b3c11a588653","url":"img/logo.svg"},{"revision":"ace5eced279232fc509db2509248a8a8","url":"img/ps-icon.png"},{"revision":"9bf0b0befcad186f1e6e6a98735b756e","url":"img/ps-icon.svg"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map