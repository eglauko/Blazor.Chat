/**
* please-wait
* Display a nice loading screen while your app loads
* @author Pathgather <tech@pathgather.com>
* @copyright Pathgather 2015
* @license MIT <http://opensource.org/licenses/mit-license.php>
* @link https://github.com/Pathgather/please-wait
* @module please-wait
* @version 0.0.5
*/
(function (root, factory) {
    if (typeof exports === "object") {
        factory(exports);
    } else if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else {
        factory(root);
    }
})(this, function (exports) {
    var PleaseWait, addClass, animationEvent, animationSupport, domPrefixes, elm, key, pfx, pleaseWait, removeClass, transEndEventNames, transitionEvent, transitionSupport, val, _i, _len, logob, logow, vtemp;
    elm = document.createElement('fakeelement');
    animationSupport = false;
    transitionSupport = false;
    animationEvent = 'animationend';
    transitionEvent = null;
    domPrefixes = 'Webkit Moz O ms'.split(' ');
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    };
    for (key in transEndEventNames) {
        val = transEndEventNames[key];
        if (elm.style[key] != null) {
            transitionEvent = val;
            transitionSupport = true;
            break;
        }
    }
    if (elm.style.animationName != null) {
        animationSupport = true;
    }
    if (!animationSupport) {
        for (_i = 0, _len = domPrefixes.length; _i < _len; _i++) {
            pfx = domPrefixes[_i];
            if (elm.style["" + pfx + "AnimationName"] != null) {
                switch (pfx) {
                    case 'Webkit':
                        animationEvent = 'webkitAnimationEnd';
                        break;
                    case 'Moz':
                        animationEvent = 'animationend';
                        break;
                    case 'O':
                        animationEvent = 'oanimationend';
                        break;
                    case 'ms':
                        animationEvent = 'MSAnimationEnd';
                }
                animationSupport = true;
                break;
            }
        }
    }
    addClass = function (classname, elem) {
        if (elem.classList) {
            return elem.classList.add(classname);
        } else {
            return elem.className += " " + classname;
        }
    };
    removeClass = function (classname, elem) {
        if (elem.classList) {
            return elem.classList.remove(classname);
        } else {
            return elem.className = elem.className.replace(classname, "").trim();
        }
    };
    PleaseWait = (function () {
        logow = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="498" height="100.19" viewBox="0 0 498 100.19"><defs><style>.cls-1{fill:#fff;}</style></defs><title>logo-havan-slim-w</title><path class="cls-1" d="M108.62,95.45,105,94.86c-4.67-.77-6.8-2-8.07-4.62l-1-2.08V13.39l1.14-2c1.35-2.45,3.89-3.9,7.61-4.3,4.26-.5,4.17-.41,4.17-3.45V.93h-44V3.65c0,3-.22,2.85,4.31,3.4,3.08.4,5.8,1.67,6.89,3.21,1.94,2.81,2.08,4,2.31,18.85l.18,14.41H31.27l.23-14.41c.18-15.68.36-16.85,2.72-19.39,1.4-1.5,5.21-2.9,7.83-2.9,2.13,0,2.45-.41,2.45-3.22V.93H1V3.65c0,2.44.09,2.72,1,2.9.55.09,2.31.4,3.94.72,3.95.68,5.4,1.63,6.8,4.31l1.13,2.22V51c0,37.11,0,37.16-.95,39a10.5,10.5,0,0,1-1.86,2.58C9.88,93.64,6.94,94.64,3.72,95L1,95.32v5.75H44.5V95.41l-3.35-.55c-4.62-.72-6.35-1.54-7.71-3.62C31.72,88.66,31.36,85,31.36,70.8V58H78.49V70.35c0,13.77-.41,17.81-2,20.53-1.32,2.26-3.22,3.21-7.93,4l-3.4.54L65,98.26l-.13,2.81h44l-.13-2.81Z" transform="translate(-1 -0.91)"/><path class="cls-1" d="M211.62,88.32c-1.18-1.64-8.34-17.45-20.3-44.86L172.79,1.13l-2-.13c-1.82-.14-2.13,0-2.5.9-1.45,3.76-35.75,81.75-36.79,83.79-1.86,3.44-3.72,5.62-6,7a29,29,0,0,1-9.83,2.49h-1.32v5.89h43.51V95.34l-3.49-.59c-2.77-.45-3.72-.86-4.76-1.86-2-2-1.54-4.94,2.26-13.5l2-4.62,17,.09,17,.13,2.49,5.85c2.9,6.93,3.49,10.47,2,12-1,1-3.27,1.81-6.53,2.22l-2.08.27-.19,2.86-.13,2.9h43.73V95.29L224.76,95C217.92,94.3,214.66,92.62,211.62,88.32ZM176.09,60.18c-2.81,0-7.56,0-10.51,0L160.19,60l5.21-11.92c2.85-6.52,5.35-11.78,5.48-11.6s2.54,5.49,5.3,11.87L181.26,60Z" transform="translate(-1 -0.91)"/><path class="cls-1" d="M299.39,7c4.44-.5,4.31-.4,4.31-3.44V.91H259.65L260,3.49c.41,3.26.41,3.31,2.22,3.31a16.21,16.21,0,0,1,3.85.72c3.17.91,4,2.58,3.31,6.3-.27,1.36-3.85,10.2-8,19.62s-8.83,20.35-10.55,24.33-3.31,7.21-3.49,7.16A9.23,9.23,0,0,1,245.7,62c-.68-1.59-5.44-12.46-10.56-24.2s-9.61-22.38-9.88-23.65c-1.09-4.62.59-6.53,6.21-7.25l2.67-.32.14-2.86.13-2.8H190.87V3.58c0,3-.14,2.94,4.3,3.44,6.16.73,9.7,3.27,13,9.29.86,1.63,9.6,21.35,19.43,43.87l17.81,40.91,2-.13,2-.14,17.8-41c9.79-22.56,18.4-42.09,19.08-43.45C289.33,10.56,293.32,7.75,299.39,7Z" transform="translate(-1 -0.91)"/><path class="cls-1" d="M382.77,95.45l-3.58-.54c-6.71-1-9.7-2.9-12.69-7.84-.86-1.4-9.24-20.21-18.62-41.73S330.3,5,329.66,3.51C328.48.93,328.48.93,326.49.93s-2,0-3.08,2.35c-.59,1.32-8.84,20.26-18.35,42.06C287.11,86.62,285.57,89.7,282,92.24c-1.86,1.26-7.66,2.94-10.29,2.94h-1.5v5.89h43.51V95.32l-2.5-.32c-3.12-.36-6-1.5-6.57-2.58-1.31-2.4-.13-7.48,3.36-14.37l1.63-3.26h33.85l2.08,4.4c3.4,7.34,4.22,11.14,2.77,13.18-.87,1.27-2.18,1.81-6.08,2.54l-2.94.54-.14,2.81-.13,2.81h44l-.13-2.81ZM332,60.2c-2.81,0-7.56,0-10.56,0L316,60.06l4.53-10.42c2.49-5.75,4.85-11.15,5.25-12l.68-1.58.64,1.36c.36.72,2.76,6.16,5.35,12l4.62,10.65Z" transform="translate(-1 -0.91)"/><path class="cls-1" d="M478.84.93H458.67V3.65c0,2.58.05,2.72,1.27,2.94,5.3,1,7.16,1.68,8.34,2.95,2.35,2.58,2.35,2.49,2.49,35.57l.14,30.81-1.27-1.4C469,73.79,455.59,56.89,440,37L411.5.93H388.43V3.65c0,2.58.05,2.72,1.27,2.94,7.16,1.36,8.61,2.18,9.93,5.62.77,1.95.81,4.71.81,39v37l-1.13,2.18c-1.36,2.67-3.08,3.67-7.52,4.48l-3.13.59-.14,2.81-.13,2.81h40.37V95.36l-3.12-.5c-4.44-.68-6.35-1.76-7.75-4.48l-1.13-2.18-.1-27.91-.13-27.87,1,1.18c2.27,2.58,31,38.38,37.16,46.31,3.62,4.67,8.7,11.33,11.28,14.82l4.62,6.34h16.14l.09-43.64c.13-41.37.18-43.68,1-45.54C489,9.18,490.71,8,494.06,7.32c1.59-.32,3.35-.64,3.94-.77.91-.18,1-.46,1-2.9V.93Z" transform="translate(-1 -0.91)"/></svg>';
        logob = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="498" height="100.19" viewBox="0 0 498 100.19"><defs><style>.cls-1{fill:#00275e;}</style></defs><title>logo-havan-slim-b</title><path class="cls-1" d="M108.62,95.45,105,94.86c-4.67-.77-6.8-2-8.07-4.62l-1-2.08V13.39l1.14-2c1.35-2.45,3.89-3.9,7.61-4.3,4.26-.5,4.17-.41,4.17-3.45V.93h-44V3.65c0,3-.22,2.85,4.31,3.4,3.08.4,5.8,1.67,6.89,3.21,1.94,2.81,2.08,4,2.31,18.85l.18,14.41H31.27l.23-14.41c.18-15.68.36-16.85,2.72-19.39,1.4-1.5,5.21-2.9,7.83-2.9,2.13,0,2.45-.41,2.45-3.22V.93H1V3.65c0,2.44.09,2.72,1,2.9.55.09,2.31.4,3.94.72,3.95.68,5.4,1.63,6.8,4.31l1.13,2.22V51c0,37.11,0,37.16-.95,39a10.5,10.5,0,0,1-1.86,2.58C9.88,93.64,6.94,94.64,3.72,95L1,95.32v5.75H44.5V95.41l-3.35-.55c-4.62-.72-6.35-1.54-7.71-3.62C31.72,88.66,31.36,85,31.36,70.8V58H78.49V70.35c0,13.77-.41,17.81-2,20.53-1.32,2.26-3.22,3.21-7.93,4l-3.4.54L65,98.26l-.13,2.81h44l-.13-2.81Z" transform="translate(-1 -0.91)"/><path class="cls-1" d="M211.62,88.32c-1.18-1.64-8.34-17.45-20.3-44.86L172.79,1.13l-2-.13c-1.82-.14-2.13,0-2.5.9-1.45,3.76-35.75,81.75-36.79,83.79-1.86,3.44-3.72,5.62-6,7a29,29,0,0,1-9.83,2.49h-1.32v5.89h43.51V95.34l-3.49-.59c-2.77-.45-3.72-.86-4.76-1.86-2-2-1.54-4.94,2.26-13.5l2-4.62,17,.09,17,.13,2.49,5.85c2.9,6.93,3.49,10.47,2,12-1,1-3.27,1.81-6.53,2.22l-2.08.27-.19,2.86-.13,2.9h43.73V95.29L224.76,95C217.92,94.3,214.66,92.62,211.62,88.32ZM176.09,60.18c-2.81,0-7.56,0-10.51,0L160.19,60l5.21-11.92c2.85-6.52,5.35-11.78,5.48-11.6s2.54,5.49,5.3,11.87L181.26,60Z" transform="translate(-1 -0.91)"/><path class="cls-1" d="M299.39,7c4.44-.5,4.31-.4,4.31-3.44V.91H259.65L260,3.49c.41,3.26.41,3.31,2.22,3.31a16.21,16.21,0,0,1,3.85.72c3.17.91,4,2.58,3.31,6.3-.27,1.36-3.85,10.2-8,19.62s-8.83,20.35-10.55,24.33-3.31,7.21-3.49,7.16A9.23,9.23,0,0,1,245.7,62c-.68-1.59-5.44-12.46-10.56-24.2s-9.61-22.38-9.88-23.65c-1.09-4.62.59-6.53,6.21-7.25l2.67-.32.14-2.86.13-2.8H190.87V3.58c0,3-.14,2.94,4.3,3.44,6.16.73,9.7,3.27,13,9.29.86,1.63,9.6,21.35,19.43,43.87l17.81,40.91,2-.13,2-.14,17.8-41c9.79-22.56,18.4-42.09,19.08-43.45C289.33,10.56,293.32,7.75,299.39,7Z" transform="translate(-1 -0.91)"/><path class="cls-1" d="M382.77,95.45l-3.58-.54c-6.71-1-9.7-2.9-12.69-7.84-.86-1.4-9.24-20.21-18.62-41.73S330.3,5,329.66,3.51C328.48.93,328.48.93,326.49.93s-2,0-3.08,2.35c-.59,1.32-8.84,20.26-18.35,42.06C287.11,86.62,285.57,89.7,282,92.24c-1.86,1.26-7.66,2.94-10.29,2.94h-1.5v5.89h43.51V95.32l-2.5-.32c-3.12-.36-6-1.5-6.57-2.58-1.31-2.4-.13-7.48,3.36-14.37l1.63-3.26h33.85l2.08,4.4c3.4,7.34,4.22,11.14,2.77,13.18-.87,1.27-2.18,1.81-6.08,2.54l-2.94.54-.14,2.81-.13,2.81h44l-.13-2.81ZM332,60.2c-2.81,0-7.56,0-10.56,0L316,60.06l4.53-10.42c2.49-5.75,4.85-11.15,5.25-12l.68-1.58.64,1.36c.36.72,2.76,6.16,5.35,12l4.62,10.65Z" transform="translate(-1 -0.91)"/><path class="cls-1" d="M478.84.93H458.67V3.65c0,2.58.05,2.72,1.27,2.94,5.3,1,7.16,1.68,8.34,2.95,2.35,2.58,2.35,2.49,2.49,35.57l.14,30.81-1.27-1.4C469,73.79,455.59,56.89,440,37L411.5.93H388.43V3.65c0,2.58.05,2.72,1.27,2.94,7.16,1.36,8.61,2.18,9.93,5.62.77,1.95.81,4.71.81,39v37l-1.13,2.18c-1.36,2.67-3.08,3.67-7.52,4.48l-3.13.59-.14,2.81-.13,2.81h40.37V95.36l-3.12-.5c-4.44-.68-6.35-1.76-7.75-4.48l-1.13-2.18-.1-27.91-.13-27.87,1,1.18c2.27,2.58,31,38.38,37.16,46.31,3.62,4.67,8.7,11.33,11.28,14.82l4.62,6.34h16.14l.09-43.64c.13-41.37.18-43.68,1-45.54C489,9.18,490.71,8,494.06,7.32c1.59-.32,3.35-.64,3.94-.77.91-.18,1-.46,1-2.9V.93Z" transform="translate(-1 -0.91)"/></svg>';
        vtemp = function (white) {
            return "<div class='pg-loading-inner'><div class='pg-loading-center-outer'><div class='pg-loading-center-middle'><h1 class='pg-loading-logo-header'>"
                + (white ? logob : logow)
                + "</h1><div class='pg-loading-html'></div></div></div></div>";
        };
            
        PleaseWait._defaultOptions = {
            backgroundColor: null,
            logo: null,
            loadingHtml: null,
            template: vtemp,
            onLoadedCallback: null
        };

        function PleaseWait(options) {
            var defaultOptions, k, listener, v;
            defaultOptions = this.constructor._defaultOptions;
            this.options = {};
            this.loaded = false;
            this.finishing = false;
            for (k in defaultOptions) {
                v = defaultOptions[k];
                this.options[k] = options[k] != null ? options[k] : v;
            }
            this._loadingElem = document.getElementsByClassName("pg-loading-screen")[0];
            this._loadingHtmlToDisplay = [];
            if (this.options.backgroundColor != null) {
                this._loadingElem.style.backgroundColor = this.options.backgroundColor;
            }
            //this._loadingElem.innerHTML = this.options.template(options.white);
            this._loadingHtmlElem = this._loadingElem.getElementsByClassName("pg-loading-html")[0];
            if (this._loadingHtmlElem != null) {
                //this._loadingHtmlElem.innerHTML = this.options.loadingHtml;
            }
            this._readyToShowLoadingHtml = false;
            this._logoElem = this._loadingElem.getElementsByClassName("pg-loading-logo")[0];
            if (this._logoElem != null) {
                this._logoElem.src = this.options.logo;
            }
            removeClass("pg-loaded", document.body);
            addClass("pg-loading", document.body);
            document.body.appendChild(this._loadingElem);
            addClass("pg-loading", this._loadingElem);
            this._onLoadedCallback = this.options.onLoadedCallback;
            listener = (function (_this) {
                return function (evt) {
                    _this.loaded = true;
                    _this._readyToShowLoadingHtml = true;
                    addClass("pg-loaded", _this._loadingHtmlElem);
                    if (animationSupport) {
                        _this._loadingHtmlElem.removeEventListener(animationEvent, listener);
                    }
                    if (_this._loadingHtmlToDisplay.length > 0) {
                        _this._changeLoadingHtml();
                    }
                    if (_this.finishing) {
                        if (evt != null) {
                            evt.stopPropagation();
                        }
                        return _this._finish();
                    }
                };
            })(this);
            if (this._loadingHtmlElem != null) {
                if (animationSupport) {
                    this._loadingHtmlElem.addEventListener(animationEvent, listener);
                } else {
                    listener();
                }
                this._loadingHtmlListener = (function (_this) {
                    return function () {
                        _this._readyToShowLoadingHtml = true;
                        removeClass("pg-loading", _this._loadingHtmlElem);
                        if (transitionSupport) {
                            _this._loadingHtmlElem.removeEventListener(transitionEvent, _this._loadingHtmlListener);
                        }
                        if (_this._loadingHtmlToDisplay.length > 0) {
                            return _this._changeLoadingHtml();
                        }
                    };
                })(this);
                this._removingHtmlListener = (function (_this) {
                    return function () {
                        _this._loadingHtmlElem.innerHTML = _this._loadingHtmlToDisplay.shift();
                        removeClass("pg-removing", _this._loadingHtmlElem);
                        addClass("pg-loading", _this._loadingHtmlElem);
                        if (transitionSupport) {
                            _this._loadingHtmlElem.removeEventListener(transitionEvent, _this._removingHtmlListener);
                            return _this._loadingHtmlElem.addEventListener(transitionEvent, _this._loadingHtmlListener);
                        } else {
                            return _this._loadingHtmlListener();
                        }
                    };
                })(this);
            }
        }

        PleaseWait.prototype.finish = function (immediately, onLoadedCallback) {
            if (immediately == null) {
                immediately = false;
            }
            if (window.document.hidden) {
                immediately = true;
            }
            this.finishing = true;
            if (onLoadedCallback != null) {
                this.updateOption('onLoadedCallback', onLoadedCallback);
            }
            if (this.loaded || immediately) {
                return this._finish(immediately);
            }
        };

        PleaseWait.prototype.updateOption = function (option, value) {
            switch (option) {
                case 'backgroundColor':
                    return this._loadingElem.style.backgroundColor = value;
                case 'logo':
                    return this._logoElem.src = value;
                case 'loadingHtml':
                    return this.updateLoadingHtml(value);
                case 'onLoadedCallback':
                    return this._onLoadedCallback = value;
                default:
                    throw new Error("Unknown option '" + option + "'");
            }
        };

        PleaseWait.prototype.updateOptions = function (options) {
            var k, v, _results;
            if (options == null) {
                options = {};
            }
            _results = [];
            for (k in options) {
                v = options[k];
                _results.push(this.updateOption(k, v));
            }
            return _results;
        };

        PleaseWait.prototype.updateLoadingHtml = function (loadingHtml, immediately) {
            if (immediately == null) {
                immediately = false;
            }
            if (this._loadingHtmlElem == null) {
                throw new Error("The loading template does not have an element of class 'pg-loading-html'");
            }
            if (immediately) {
                this._loadingHtmlToDisplay = [loadingHtml];
                this._readyToShowLoadingHtml = true;
            } else {
                this._loadingHtmlToDisplay.push(loadingHtml);
            }
            if (this._readyToShowLoadingHtml) {
                return this._changeLoadingHtml();
            }
        };

        PleaseWait.prototype._changeLoadingHtml = function () {
            this._readyToShowLoadingHtml = false;
            this._loadingHtmlElem.removeEventListener(transitionEvent, this._loadingHtmlListener);
            this._loadingHtmlElem.removeEventListener(transitionEvent, this._removingHtmlListener);
            removeClass("pg-loading", this._loadingHtmlElem);
            removeClass("pg-removing", this._loadingHtmlElem);
            if (transitionSupport) {
                addClass("pg-removing", this._loadingHtmlElem);
                return this._loadingHtmlElem.addEventListener(transitionEvent, this._removingHtmlListener);
            } else {
                return this._removingHtmlListener();
            }
        };

        PleaseWait.prototype._finish = function (immediately) {
            var listener;
            if (immediately == null) {
                immediately = false;
            }
            if (this._loadingElem == null) {
                return;
            }
            addClass("pg-loaded", document.body);
            if (typeof this._onLoadedCallback === "function") {
                this._onLoadedCallback.apply(this);
            }
            listener = (function (_this) {
                return function () {
                    document.body.removeChild(_this._loadingElem);
                    removeClass("pg-loading", document.body);
                    if (animationSupport) {
                        _this._loadingElem.removeEventListener(animationEvent, listener);
                    }
                    return _this._loadingElem = null;
                };
            })(this);
            if (!immediately && animationSupport) {
                addClass("pg-loaded", this._loadingElem);
                return this._loadingElem.addEventListener(animationEvent, listener);
            } else {
                return listener();
            }
        };

        return PleaseWait;

    })();
    pleaseWait = function (options) {
        if (options == null) {
            options = {};
        }
        return new PleaseWait(options);
    };
    exports.pleaseWait = pleaseWait;
    return pleaseWait;
});