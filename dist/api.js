var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import axios from 'axios';
import axiosRetry from 'axios-retry';
var RETRY_DELAY_LENGTH_MS = 2000;
var MAX_REQ_TRIES = 5;
var Api = /** @class */ (function () {
    // apiKey = 'f7ba8e2e-0d82-43ac-bd20-9789a4f50473'
    function Api() {
        var _this = this;
        this.domain = window.location.host.includes('localhost')
            ? 'borrower.staircaseapi.com'
            : // ? 'console-dev.staircaseapi.com'
                window.location.host;
        this.apiKey = '2564a812-dcc8-4923-a1d3-838c8d67fb6b';
        this.request = function (config) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios
                            .request(config)
                            .then(function (response) { return response.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.invokeJob = function (baseURL, apiKey, job_name, request_payload, callback_url) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request({
                            method: 'POST',
                            baseURL: "https://" + baseURL,
                            headers: { 'x-api-key': apiKey },
                            url: "/job/jobs/".concat(job_name, "/executions"),
                            data: JSON.stringify({
                                request_payload: request_payload,
                                callback_url: callback_url,
                            }),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getJobExecutionDetails = function (baseURL, apiKey, job_name, execution_id) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request({
                            method: 'GET',
                            baseURL: "https://" + baseURL,
                            headers: { 'x-api-key': apiKey },
                            url: "/job/jobs/".concat(job_name, "/executions/").concat(execution_id),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.resumeJob = function (baseURL, apiKey, job_name, execution_id, body) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request({
                            method: 'POST',
                            baseURL: "https://" + baseURL,
                            headers: { 'x-api-key': apiKey },
                            url: "/job/jobs/".concat(job_name, "/executions/").concat(execution_id, "/resume"),
                            data: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.axios = axios.create({
            baseURL: "https://".concat(this.domain),
            headers: { 'x-api-key': this.apiKey },
        });
        axiosRetry(this.axios, {
            retries: MAX_REQ_TRIES,
            retryCondition: function (err) {
                console.log({ err: err });
                return true;
            },
            retryDelay: function (retryCount) {
                return RETRY_DELAY_LENGTH_MS;
            },
        });
    }
    return Api;
}());
export { Api };
