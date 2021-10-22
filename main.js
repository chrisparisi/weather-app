/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function view(data) {

    const city = document.getElementById('city');
    const temperature = document.getElementById('temperature');
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    city.innerText = data.name;
    temperature.innerText = data.temperature;
    feelsLike.innerText = data.feelsLike;
    humidity.innerText = data.humidity;
    wind.innerText = data.wind;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {    
    function convertData(initialData) {
        let name = initialData.name;
        let temperature = initialData.main.temp;
        let feelsLike = initialData.main.feels_like;
        let humidity = initialData.main.humidity;
        let wind = initialData.wind.speed;
        return { name, temperature, feelsLike, humidity, wind };
    }

    async function searchWeather(city) {
        try {
            console.log(city)
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9332a31235ed4543be73e2188939b796`, {mode: 'cors'});
            let initialData = await response.json();
            let newData = convertData(initialData);
            console.log(newData)
            return newData;
        } catch (error) {
            console.log(error);
        }
    }
    return { searchWeather };
})();
   
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/view */ "./src/modules/view.js");
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");



const searchField = document.getElementById('search');
const button = document.getElementById('searchButton');

document.addEventListener('DOMContentLoaded', loadPage);
button.addEventListener('click', searchCity);

async function loadPage() {
    let city = 'San Luis Obispo';
    let initialCity = await _modules_weather__WEBPACK_IMPORTED_MODULE_1__["default"].searchWeather(city);
    (0,_modules_view__WEBPACK_IMPORTED_MODULE_0__["default"])(initialCity);
}

async function searchCity() {
    let city = searchField.value;
    let cityData = await _modules_weather__WEBPACK_IMPORTED_MODULE_1__["default"].searchWeather(city);
    searchField.value = '';
    (0,_modules_view__WEBPACK_IMPORTED_MODULE_0__["default"])(cityData);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDZm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixLQUFLLDBEQUEwRCxhQUFhO0FBQ3hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7VUN6QnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ007O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHNFQUFxQjtBQUNqRCxJQUFJLHlEQUFJO0FBQ1I7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixzRUFBcUI7QUFDOUM7QUFDQSxJQUFJLHlEQUFJO0FBQ1IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdmlldy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB2aWV3KGRhdGEpIHtcblxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJyk7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzLWxpa2UnKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xuXG4gICAgY2l0eS5pbm5lclRleHQgPSBkYXRhLm5hbWU7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gZGF0YS50ZW1wZXJhdHVyZTtcbiAgICBmZWVsc0xpa2UuaW5uZXJUZXh0ID0gZGF0YS5mZWVsc0xpa2U7XG4gICAgaHVtaWRpdHkuaW5uZXJUZXh0ID0gZGF0YS5odW1pZGl0eTtcbiAgICB3aW5kLmlubmVyVGV4dCA9IGRhdGEud2luZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlldzsiLCJjb25zdCB3ZWF0aGVyID0gKCgpID0+IHsgICAgXG4gICAgZnVuY3Rpb24gY29udmVydERhdGEoaW5pdGlhbERhdGEpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBpbml0aWFsRGF0YS5uYW1lO1xuICAgICAgICBsZXQgdGVtcGVyYXR1cmUgPSBpbml0aWFsRGF0YS5tYWluLnRlbXA7XG4gICAgICAgIGxldCBmZWVsc0xpa2UgPSBpbml0aWFsRGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gICAgICAgIGxldCBodW1pZGl0eSA9IGluaXRpYWxEYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgICAgIGxldCB3aW5kID0gaW5pdGlhbERhdGEud2luZC5zcGVlZDtcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgdGVtcGVyYXR1cmUsIGZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmQgfTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyKGNpdHkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPWltcGVyaWFsJmFwcGlkPTkzMzJhMzEyMzVlZDQ1NDNiZTczZTIxODg5MzliNzk2YCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICAgICAgbGV0IGluaXRpYWxEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBjb252ZXJ0RGF0YShpbml0aWFsRGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhKVxuICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgc2VhcmNoV2VhdGhlciB9O1xufSkoKTtcbiAgIFxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB2aWV3IGZyb20gJy4vbW9kdWxlcy92aWV3JztcbmltcG9ydCB3ZWF0aGVyIGZyb20gJy4vbW9kdWxlcy93ZWF0aGVyJztcblxuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnV0dG9uJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsb2FkUGFnZSk7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hDaXR5KTtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgbGV0IGNpdHkgPSAnU2FuIEx1aXMgT2Jpc3BvJztcbiAgICBsZXQgaW5pdGlhbENpdHkgPSBhd2FpdCB3ZWF0aGVyLnNlYXJjaFdlYXRoZXIoY2l0eSk7XG4gICAgdmlldyhpbml0aWFsQ2l0eSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaENpdHkoKSB7XG4gICAgbGV0IGNpdHkgPSBzZWFyY2hGaWVsZC52YWx1ZTtcbiAgICBsZXQgY2l0eURhdGEgPSBhd2FpdCB3ZWF0aGVyLnNlYXJjaFdlYXRoZXIoY2l0eSk7XG4gICAgc2VhcmNoRmllbGQudmFsdWUgPSAnJztcbiAgICB2aWV3KGNpdHlEYXRhKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=