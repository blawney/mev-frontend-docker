(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-workspace-detail-workspace-detail-module"],{

/***/ "../../node_modules/@ncstate/sat-popover/__ivy_ngcc__/fesm2015/ncstate-sat-popover.js":
/*!****************************************************************************************************!*\
  !*** /mev-frontend/node_modules/@ncstate/sat-popover/__ivy_ngcc__/fesm2015/ncstate-sat-popover.js ***!
  \****************************************************************************************************/
/*! exports provided: SatPopover, SatPopoverAnchor, SatPopoverAnchoringService, SatPopoverHoverDirective, SatPopoverModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatPopover", function() { return SatPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatPopoverAnchor", function() { return SatPopoverAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatPopoverAnchoringService", function() { return SatPopoverAnchoringService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatPopoverHoverDirective", function() { return SatPopoverHoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatPopoverModule", function() { return SatPopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return transformPopover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");


















const _c0 = ["focusTrapElement"];
function SatPopover_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@transformPopover.done", function SatPopover_ng_template_0_Template_div_animation_transformPopover_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2._onAnimationDone($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0._classList)("@transformPopover", ctx_r0._getAnimation());
} }
const _c1 = ["*"];
const transformPopover = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('transformPopover', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'scale(0.3)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{openTransition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'scale(1)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{closeTransition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'scale(0.5)' }))
    ])
]);

const VALID_SCROLL = [
    'noop',
    'block',
    'reposition',
    'close'
];
const VALID_HORIZ_ALIGN = [
    'before',
    'start',
    'center',
    'end',
    'after'
];
const VALID_VERT_ALIGN = [
    'above',
    'start',
    'center',
    'end',
    'below'
];

function getUnanchoredPopoverError() {
    return Error('SatPopover does not have an anchor.');
}
function getInvalidPopoverAnchorError() {
    return Error('SatPopover#anchor must be an instance of SatPopoverAnchor, ElementRef, or HTMLElement.');
}
function getInvalidPopoverError() {
    return Error('SatPopoverAnchor#satPopoverAnchor must be an instance of SatPopover.');
}
function getInvalidSatPopoverAnchorError() {
    return Error(`SatPopoverAnchor must be associated with a ` +
        `SatPopover component. ` +
        `Examples: <sat-popover [anchor]="satPopoverAnchorTemplateRef"> or ` +
        `<button satPopoverAnchor [satPopoverAnchor]="satPopoverTemplateRef">`);
}
function getInvalidHorizontalAlignError(alignment) {
    return Error(generateGenericError('horizontalAlign/xAlign', alignment, VALID_HORIZ_ALIGN));
}
function getInvalidVerticalAlignError(alignment) {
    return Error(generateGenericError('verticalAlign/yAlign', alignment, VALID_VERT_ALIGN));
}
function getInvalidScrollStrategyError(strategy) {
    return Error(generateGenericError('scrollStrategy', strategy, VALID_SCROLL));
}
function generateGenericError(apiName, invalid, valid) {
    return `Invalid ${apiName}: '${invalid}'. Valid options are ${valid.map(v => `'${v}'`).join(', ')}.`;
}

class SatPopoverAnchoringService {
    constructor(_overlay, _ngZone, _dir) {
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._dir = _dir;
        /** Emits when the popover is opened. */
        this.popoverOpened = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Emits when the popover is closed. */
        this.popoverClosed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Whether the popover is presently open. */
        this._popoverOpen = false;
        /** Emits when the service is destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    ngOnDestroy() {
        // Destroy popover before terminating subscriptions so that any resulting
        // detachments update 'closed state'
        this._destroyPopover();
        // Terminate subscriptions
        if (this._notificationsSubscription) {
            this._notificationsSubscription.unsubscribe();
        }
        if (this._positionChangeSubscription) {
            this._positionChangeSubscription.unsubscribe();
        }
        this._onDestroy.next();
        this._onDestroy.complete();
        this.popoverOpened.complete();
        this.popoverClosed.complete();
    }
    /** Anchor a popover instance to a view and connection element. */
    anchor(popover, viewContainerRef, anchor) {
        // If we're just changing the anchor element and the overlayRef already exists,
        // simply update the existing _overlayRef's anchor.
        if (this._popover === popover &&
            this._viewContainerRef === viewContainerRef &&
            this._overlayRef) {
            this._anchor = anchor instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
                ? anchor.nativeElement
                : anchor;
            const config = this._overlayRef.getConfig();
            const strategy = config.positionStrategy;
            strategy.setOrigin(this._anchor);
            this._overlayRef.updatePosition();
            return;
        }
        // Destroy any previous popovers
        this._destroyPopover();
        // Assign local refs
        this._popover = popover;
        this._viewContainerRef = viewContainerRef;
        this._anchor = anchor instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            ? anchor.nativeElement
            : anchor;
    }
    /** Gets whether the popover is presently open. */
    isPopoverOpen() {
        return this._popoverOpen;
    }
    /** Toggles the popover between the open and closed states. */
    togglePopover() {
        return this._popoverOpen ? this.closePopover() : this.openPopover();
    }
    /** Opens the popover. */
    openPopover(options = {}) {
        if (!this._popoverOpen) {
            this._applyOpenOptions(options);
            this._createOverlay();
            this._subscribeToBackdrop();
            this._subscribeToEscape();
            this._subscribeToDetachments();
            this._saveOpenedState();
        }
    }
    /** Closes the popover. */
    closePopover(value) {
        if (this._overlayRef) {
            this._saveClosedState(value);
            this._overlayRef.detach();
        }
    }
    /** TODO: implement when the overlay's position can be dynamically changed */
    repositionPopover() {
        this.updatePopoverConfig();
    }
    /** TODO: when the overlay's position can be dynamically changed, do not destroy */
    updatePopoverConfig() {
        this._destroyPopoverOnceClosed();
    }
    /** Realign the popover to the anchor. */
    realignPopoverToAnchor() {
        if (this._overlayRef) {
            const config = this._overlayRef.getConfig();
            const strategy = config.positionStrategy;
            strategy.reapplyLastPosition();
        }
    }
    /** Get a reference to the anchor element. */
    getAnchorElement() {
        return this._anchor;
    }
    /** Apply behavior properties on the popover based on the open options. */
    _applyOpenOptions(options) {
        // Only override restoreFocus as `false` if the option is explicitly `false`
        const restoreFocus = options.restoreFocus !== false;
        this._popover._restoreFocusOverride = restoreFocus;
        // Only override autoFocus as `false` if the option is explicitly `false`
        const autoFocus = options.autoFocus !== false;
        this._popover._autoFocusOverride = autoFocus;
    }
    /** Create an overlay to be attached to the portal. */
    _createOverlay() {
        // Create overlay if it doesn't yet exist
        if (!this._overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](this._popover._templateRef, this._viewContainerRef);
            const popoverConfig = {
                horizontalAlign: this._popover.horizontalAlign,
                verticalAlign: this._popover.verticalAlign,
                hasBackdrop: this._popover.hasBackdrop,
                backdropClass: this._popover.backdropClass,
                scrollStrategy: this._popover.scrollStrategy,
                forceAlignment: this._popover.forceAlignment,
                lockAlignment: this._popover.lockAlignment,
            };
            const overlayConfig = this._getOverlayConfig(popoverConfig, this._anchor);
            this._subscribeToPositionChanges(overlayConfig.positionStrategy);
            this._overlayRef = this._overlay.create(overlayConfig);
        }
        // Actually open the popover
        this._overlayRef.attach(this._portal);
        return this._overlayRef;
    }
    /** Removes the popover from the DOM. Does NOT update open state. */
    _destroyPopover() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    }
    /**
     * Destroys the popover immediately if it is closed, or waits until it
     * has been closed to destroy it.
     */
    _destroyPopoverOnceClosed() {
        if (this.isPopoverOpen() && this._overlayRef) {
            this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(() => this._destroyPopover());
        }
        else {
            this._destroyPopover();
        }
    }
    /** Close popover when backdrop is clicked. */
    _subscribeToBackdrop() {
        this._overlayRef
            .backdropClick()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => this._popover.backdropClicked.emit()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(() => this._popover.interactiveClose), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.popoverClosed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(() => this.closePopover());
    }
    /** Close popover when escape keydown event occurs. */
    _subscribeToEscape() {
        this._overlayRef
            .keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(event => this._popover.overlayKeydown.emit(event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(event => event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ESCAPE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(() => this._popover.interactiveClose), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.popoverClosed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(() => this.closePopover());
    }
    /** Set state back to closed when detached. */
    _subscribeToDetachments() {
        this._overlayRef
            .detachments()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(() => this._saveClosedState());
    }
    /** Save the opened state of the popover and emit. */
    _saveOpenedState() {
        if (!this._popoverOpen) {
            this._popover._open = this._popoverOpen = true;
            this.popoverOpened.next();
            this._popover.opened.emit();
        }
    }
    /** Save the closed state of the popover and emit. */
    _saveClosedState(value) {
        if (this._popoverOpen) {
            this._popover._open = this._popoverOpen = false;
            this.popoverClosed.next(value);
            this._popover.closed.emit(value);
        }
    }
    /** Gets the text direction of the containing app. */
    _getDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Create and return a config for creating the overlay. */
    _getOverlayConfig(config, anchor) {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayConfig"]({
            positionStrategy: this._getPositionStrategy(config.horizontalAlign, config.verticalAlign, config.forceAlignment, config.lockAlignment, anchor),
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass || 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this._getScrollStrategyInstance(config.scrollStrategy),
            direction: this._getDirection(),
        });
    }
    /**
     * Listen to changes in the position of the overlay and set the correct alignment classes,
     * ensuring that the animation origin is correct, even with a fallback position.
     */
    _subscribeToPositionChanges(position) {
        if (this._positionChangeSubscription) {
            this._positionChangeSubscription.unsubscribe();
        }
        this._positionChangeSubscription = position.positionChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(change => {
            // Position changes may occur outside the Angular zone
            this._ngZone.run(() => {
                this._popover._setAlignmentClasses(getHorizontalPopoverAlignment(change.connectionPair.overlayX), getVerticalPopoverAlignment(change.connectionPair.overlayY));
            });
        });
    }
    /** Map a scroll strategy string type to an instance of a scroll strategy. */
    _getScrollStrategyInstance(strategy) {
        switch (strategy) {
            case 'block':
                return this._overlay.scrollStrategies.block();
            case 'reposition':
                return this._overlay.scrollStrategies.reposition();
            case 'close':
                return this._overlay.scrollStrategies.close();
            case 'noop':
            default:
                return this._overlay.scrollStrategies.noop();
        }
    }
    /** Create and return a position strategy based on config provided to the component instance. */
    _getPositionStrategy(horizontalTarget, verticalTarget, forceAlignment, lockAlignment, anchor) {
        // Attach the overlay at the preferred position
        const targetPosition = getPosition(horizontalTarget, verticalTarget);
        const positions = [targetPosition];
        const strategy = this._overlay.position()
            .flexibleConnectedTo(anchor)
            .withFlexibleDimensions(false)
            .withPush(false)
            .withViewportMargin(0)
            .withLockedPosition(lockAlignment);
        // Unless the alignment is forced, add fallbacks based on the preferred positions
        if (!forceAlignment) {
            const fallbacks = this._getFallbacks(horizontalTarget, verticalTarget);
            positions.push(...fallbacks);
        }
        return strategy.withPositions(positions);
    }
    /** Get fallback positions based around target alignments. */
    _getFallbacks(hTarget, vTarget) {
        // Determine if the target alignments overlap the anchor
        const horizontalOverlapAllowed = hTarget !== 'before' && hTarget !== 'after';
        const verticalOverlapAllowed = vTarget !== 'above' && vTarget !== 'below';
        // If a target alignment doesn't cover the anchor, don't let any of the fallback alignments
        // cover the anchor
        const possibleHorizontalAlignments = horizontalOverlapAllowed ?
            ['before', 'start', 'center', 'end', 'after'] :
            ['before', 'after'];
        const possibleVerticalAlignments = verticalOverlapAllowed ?
            ['above', 'start', 'center', 'end', 'below'] :
            ['above', 'below'];
        // Create fallbacks for each allowed prioritized fallback alignment combo
        const fallbacks = [];
        prioritizeAroundTarget(hTarget, possibleHorizontalAlignments).forEach(h => {
            prioritizeAroundTarget(vTarget, possibleVerticalAlignments).forEach(v => {
                fallbacks.push(getPosition(h, v));
            });
        });
        // Remove the first item since it will be the target alignment and isn't considered a fallback
        return fallbacks.slice(1, fallbacks.length);
    }
}
SatPopoverAnchoringService.ɵfac = function SatPopoverAnchoringService_Factory(t) { return new (t || SatPopoverAnchoringService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8)); };
SatPopoverAnchoringService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SatPopoverAnchoringService, factory: SatPopoverAnchoringService.ɵfac });
SatPopoverAnchoringService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SatPopoverAnchoringService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();
/** Helper function to get a cdk position pair from SatPopover alignments. */
function getPosition(h, v) {
    const { originX, overlayX } = getHorizontalConnectionPosPair(h);
    const { originY, overlayY } = getVerticalConnectionPosPair(v);
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX, originY }, { overlayX, overlayY });
}
/** Helper function to convert an overlay connection position to equivalent popover alignment. */
function getHorizontalPopoverAlignment(h) {
    if (h === 'start') {
        return 'after';
    }
    if (h === 'end') {
        return 'before';
    }
    return 'center';
}
/** Helper function to convert an overlay connection position to equivalent popover alignment. */
function getVerticalPopoverAlignment(v) {
    if (v === 'top') {
        return 'below';
    }
    if (v === 'bottom') {
        return 'above';
    }
    return 'center';
}
/** Helper function to convert alignment to origin/overlay position pair. */
function getHorizontalConnectionPosPair(h) {
    switch (h) {
        case 'before':
            return { originX: 'start', overlayX: 'end' };
        case 'start':
            return { originX: 'start', overlayX: 'start' };
        case 'end':
            return { originX: 'end', overlayX: 'end' };
        case 'after':
            return { originX: 'end', overlayX: 'start' };
        default:
            return { originX: 'center', overlayX: 'center' };
    }
}
/** Helper function to convert alignment to origin/overlay position pair. */
function getVerticalConnectionPosPair(v) {
    switch (v) {
        case 'above':
            return { originY: 'top', overlayY: 'bottom' };
        case 'start':
            return { originY: 'top', overlayY: 'top' };
        case 'end':
            return { originY: 'bottom', overlayY: 'bottom' };
        case 'below':
            return { originY: 'bottom', overlayY: 'top' };
        default:
            return { originY: 'center', overlayY: 'center' };
    }
}
/**
 * Helper function that takes an ordered array options and returns a reorderded
 * array around the target item. e.g.:
 *
 * target: 3; options: [1, 2, 3, 4, 5, 6, 7];
 *
 * return: [3, 4, 2, 5, 1, 6, 7]
 */
function prioritizeAroundTarget(target, options) {
    const targetIndex = options.indexOf(target);
    // Set the first item to be the target
    const reordered = [target];
    // Make left and right stacks where the highest priority item is last
    const left = options.slice(0, targetIndex);
    const right = options.slice(targetIndex + 1, options.length).reverse();
    // Alternate between stacks until one is empty
    while (left.length && right.length) {
        reordered.push(right.pop());
        reordered.push(left.pop());
    }
    // Flush out right side
    while (right.length) {
        reordered.push(right.pop());
    }
    // Flush out left side
    while (left.length) {
        reordered.push(left.pop());
    }
    return reordered;
}

// See http://cubic-bezier.com/#.25,.8,.25,1 for reference.
const DEFAULT_TRANSITION = '200ms cubic-bezier(0.25, 0.8, 0.25, 1)';
class SatPopoverAnchor {
    constructor(elementRef, viewContainerRef) {
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
    }
    get popover() {
        return this._popover;
    }
    set popover(val) {
        if (val instanceof SatPopover) {
            val.anchor = this;
        }
        else {
            // when a directive is added with no arguments,
            // angular assigns `''` as the argument
            if (val !== '') {
                throw getInvalidPopoverError();
            }
        }
    }
    ngAfterViewInit() {
        if (!this.popover) {
            throw getInvalidSatPopoverAnchorError();
        }
    }
}
SatPopoverAnchor.ɵfac = function SatPopoverAnchor_Factory(t) { return new (t || SatPopoverAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
SatPopoverAnchor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SatPopoverAnchor, selectors: [["", "satPopoverAnchor", ""]], inputs: { popover: ["satPopoverAnchor", "popover"] }, exportAs: ["satPopoverAnchor"] });
SatPopoverAnchor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
SatPopoverAnchor.propDecorators = {
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['satPopoverAnchor',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SatPopoverAnchor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[satPopoverAnchor]',
                exportAs: 'satPopoverAnchor'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['satPopoverAnchor']
        }] }); })();
class SatPopover {
    constructor(_focusTrapFactory, _anchoringService, _viewContainerRef, _document) {
        this._focusTrapFactory = _focusTrapFactory;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._horizontalAlign = 'center';
        this._verticalAlign = 'center';
        this._forceAlignment = false;
        this._lockAlignment = false;
        this._autoFocus = true;
        this._autoFocusOverride = true;
        this._restoreFocus = true;
        this._restoreFocusOverride = true;
        this._scrollStrategy = 'reposition';
        this._hasBackdrop = false;
        this._interactiveClose = true;
        this._openTransition = DEFAULT_TRANSITION;
        this._closeTransition = DEFAULT_TRANSITION;
        /** Optional backdrop class. */
        this.backdropClass = '';
        /** Emits when the popover is opened. */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the popover is closed. */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the popover has finished opening. */
        this.afterOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the popover has finished closing. */
        this.afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the backdrop is clicked. */
        this.backdropClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when a keydown event is targeted to this popover's overlay. */
        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Classes to be added to the popover for setting the correct transform origin. */
        this._classList = {};
        /** Whether the popover is presently open. */
        this._open = false;
        // `@internal` stripping doesn't seem to work if the property is
        // declared inside the constructor
        this._anchoringService = _anchoringService;
    }
    /** Anchor element. */
    get anchor() {
        return this._anchor;
    }
    set anchor(val) {
        if (val instanceof SatPopoverAnchor) {
            val._popover = this;
            this._anchoringService.anchor(this, val.viewContainerRef, val.elementRef);
            this._anchor = val;
        }
        else if (val instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] || val instanceof HTMLElement) {
            this._anchoringService.anchor(this, this._viewContainerRef, val);
            this._anchor = val;
        }
        else if (val) {
            throw getInvalidPopoverAnchorError();
        }
    }
    /** Alignment of the popover on the horizontal axis. */
    get horizontalAlign() {
        return this._horizontalAlign;
    }
    set horizontalAlign(val) {
        this._validateHorizontalAlign(val);
        if (this._horizontalAlign !== val) {
            this._horizontalAlign = val;
            this._anchoringService.repositionPopover();
        }
    }
    /** Alignment of the popover on the x axis. Alias for `horizontalAlign`. */
    get xAlign() {
        return this.horizontalAlign;
    }
    set xAlign(val) {
        this.horizontalAlign = val;
    }
    /** Alignment of the popover on the vertical axis. */
    get verticalAlign() {
        return this._verticalAlign;
    }
    set verticalAlign(val) {
        this._validateVerticalAlign(val);
        if (this._verticalAlign !== val) {
            this._verticalAlign = val;
            this._anchoringService.repositionPopover();
        }
    }
    /** Alignment of the popover on the y axis. Alias for `verticalAlign`. */
    get yAlign() {
        return this.verticalAlign;
    }
    set yAlign(val) {
        this.verticalAlign = val;
    }
    /** Whether the popover always opens with the specified alignment. */
    get forceAlignment() {
        return this._forceAlignment;
    }
    set forceAlignment(val) {
        const coercedVal = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
        if (this._forceAlignment !== coercedVal) {
            this._forceAlignment = coercedVal;
            this._anchoringService.repositionPopover();
        }
    }
    /**
     * Whether the popover's alignment is locked after opening. This prevents the popover
     * from changing its alignement when scrolling or changing the size of the viewport.
     */
    get lockAlignment() {
        return this._lockAlignment;
    }
    set lockAlignment(val) {
        const coercedVal = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
        if (this._lockAlignment !== coercedVal) {
            this._lockAlignment = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
            this._anchoringService.repositionPopover();
        }
    }
    /** Whether the first focusable element should be focused on open. */
    get autoFocus() {
        return this._autoFocus && this._autoFocusOverride;
    }
    set autoFocus(val) {
        this._autoFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
    }
    /** Whether the popover should return focus to the previously focused element after closing. */
    get restoreFocus() {
        return this._restoreFocus && this._restoreFocusOverride;
    }
    set restoreFocus(val) {
        this._restoreFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
    }
    /** How the popover should handle scrolling. */
    get scrollStrategy() {
        return this._scrollStrategy;
    }
    set scrollStrategy(val) {
        this._validateScrollStrategy(val);
        if (this._scrollStrategy !== val) {
            this._scrollStrategy = val;
            this._anchoringService.updatePopoverConfig();
        }
    }
    /** Whether the popover should have a backdrop (includes closing on click). */
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    set hasBackdrop(val) {
        this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
    }
    /** Whether the popover should close when the user clicks the backdrop or presses ESC. */
    get interactiveClose() {
        return this._interactiveClose;
    }
    set interactiveClose(val) {
        this._interactiveClose = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(val);
    }
    /** Custom transition to use while opening. */
    get openTransition() {
        return this._openTransition;
    }
    set openTransition(val) {
        if (val) {
            this._openTransition = val;
        }
    }
    /** Custom transition to use while closing. */
    get closeTransition() {
        return this._closeTransition;
    }
    set closeTransition(val) {
        if (val) {
            this._closeTransition = val;
        }
    }
    ngOnInit() {
        this._setAlignmentClasses();
    }
    /** Open this popover. */
    open(options = {}) {
        if (this._anchor) {
            this._anchoringService.openPopover(options);
            return;
        }
        throw getUnanchoredPopoverError();
    }
    /** Close this popover. */
    close(value) {
        this._anchoringService.closePopover(value);
    }
    /** Toggle this popover open or closed. */
    toggle() {
        this._anchoringService.togglePopover();
    }
    /** Realign the popover to the anchor. */
    realign() {
        this._anchoringService.realignPopoverToAnchor();
    }
    /** Gets whether the popover is presently open. */
    isOpen() {
        return this._open;
    }
    /** Allows programmatically setting a custom anchor. */
    setCustomAnchor(viewContainer, el) {
        this._anchor = el;
        this._anchoringService.anchor(this, viewContainer, el);
    }
    /** Gets an animation config with customized (or default) transition values. */
    _getAnimation() {
        return {
            value: 'visible',
            params: { openTransition: this.openTransition, closeTransition: this.closeTransition }
        };
    }
    /** Callback for when the popover is finished animating in or out. */
    _onAnimationDone(event) {
        if (event.toState === 'visible') {
            this._trapFocus();
            this.afterOpen.emit();
        }
        else if (event.toState === 'void') {
            this._restoreFocusAndDestroyTrap();
            this.afterClose.emit();
        }
    }
    /** Apply alignment classes based on alignment inputs. */
    _setAlignmentClasses(horizAlign = this.horizontalAlign, vertAlign = this.verticalAlign) {
        this._classList['sat-popover-before'] = horizAlign === 'before' || horizAlign === 'end';
        this._classList['sat-popover-after'] = horizAlign === 'after' || horizAlign === 'start';
        this._classList['sat-popover-above'] = vertAlign === 'above' || vertAlign === 'end';
        this._classList['sat-popover-below'] = vertAlign === 'below' || vertAlign === 'start';
        this._classList['sat-popover-center'] = horizAlign === 'center' || vertAlign === 'center';
    }
    /** Move the focus inside the focus trap and remember where to return later. */
    _trapFocus() {
        this._savePreviouslyFocusedElement();
        // There won't be a focus trap element if the close animation starts before open finishes
        if (!this._focusTrapElement) {
            return;
        }
        if (!this._focusTrap && this._focusTrapElement) {
            this._focusTrap = this._focusTrapFactory.create(this._focusTrapElement.nativeElement);
        }
        if (this.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
    }
    /** Restore focus to the element focused before the popover opened. Also destroy trap. */
    _restoreFocusAndDestroyTrap() {
        const toFocus = this._previouslyFocusedElement;
        // Must check active element is focusable for IE sake
        if (toFocus && 'focus' in toFocus && this.restoreFocus) {
            this._previouslyFocusedElement.focus();
        }
        this._previouslyFocusedElement = null;
        if (this._focusTrap) {
            this._focusTrap.destroy();
            this._focusTrap = undefined;
        }
    }
    /** Save a reference to the element focused before the popover was opened. */
    _savePreviouslyFocusedElement() {
        if (this._document) {
            this._previouslyFocusedElement = this._document.activeElement;
        }
    }
    /** Throws an error if the alignment is not a valid horizontalAlign. */
    _validateHorizontalAlign(pos) {
        if (VALID_HORIZ_ALIGN.indexOf(pos) === -1) {
            throw getInvalidHorizontalAlignError(pos);
        }
    }
    /** Throws an error if the alignment is not a valid verticalAlign. */
    _validateVerticalAlign(pos) {
        if (VALID_VERT_ALIGN.indexOf(pos) === -1) {
            throw getInvalidVerticalAlignError(pos);
        }
    }
    /** Throws an error if the scroll strategy is not a valid strategy. */
    _validateScrollStrategy(strategy) {
        if (VALID_SCROLL.indexOf(strategy) === -1) {
            throw getInvalidScrollStrategyError(strategy);
        }
    }
}
SatPopover.ɵfac = function SatPopover_Factory(t) { return new (t || SatPopover)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SatPopoverAnchoringService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8)); };
SatPopover.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SatPopover, selectors: [["sat-popover"]], viewQuery: function SatPopover_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._focusTrapElement = _t.first);
    } }, inputs: { backdropClass: "backdropClass", anchor: "anchor", horizontalAlign: "horizontalAlign", xAlign: "xAlign", verticalAlign: "verticalAlign", yAlign: "yAlign", forceAlignment: "forceAlignment", lockAlignment: "lockAlignment", autoFocus: "autoFocus", restoreFocus: "restoreFocus", scrollStrategy: "scrollStrategy", hasBackdrop: "hasBackdrop", interactiveClose: "interactiveClose", openTransition: "openTransition", closeTransition: "closeTransition" }, outputs: { opened: "opened", closed: "closed", afterOpen: "afterOpen", afterClose: "afterClose", backdropClicked: "backdropClicked", overlayKeydown: "overlayKeydown" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SatPopoverAnchoringService])], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [[1, "sat-popover-container", 3, "ngClass"], ["focusTrapElement", ""]], template: function SatPopover_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SatPopover_ng_template_0_Template, 3, 2, "ng-template");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".cdk-global-overlay-wrapper,.cdk-overlay-container{height:100%;left:0;pointer-events:none;top:0;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper,.cdk-overlay-pane{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{box-sizing:border-box;max-height:100%;max-width:100%;pointer-events:auto}.cdk-overlay-backdrop{-webkit-tap-highlight-color:transparent;bottom:0;left:0;opacity:0;pointer-events:auto;position:absolute;right:0;top:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);z-index:1000}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-height:1px;min-width:1px;position:absolute;z-index:1000}.cdk-global-scrollblock{overflow-y:scroll;position:fixed;width:100%}.sat-popover-container.sat-popover-before.sat-popover-above{transform-origin:right bottom}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-above{transform-origin:left bottom}.sat-popover-container.sat-popover-before.sat-popover-center{transform-origin:right center}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-center{transform-origin:left center}.sat-popover-container.sat-popover-before.sat-popover-below{transform-origin:right top}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-below{transform-origin:left top}.sat-popover-container.sat-popover-center.sat-popover-above{transform-origin:center bottom}.sat-popover-container.sat-popover-center.sat-popover-below{transform-origin:center top}.sat-popover-container.sat-popover-after.sat-popover-above{transform-origin:left bottom}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-above{transform-origin:right bottom}.sat-popover-container.sat-popover-after.sat-popover-center{transform-origin:left center}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-center{transform-origin:right center}.sat-popover-container.sat-popover-after.sat-popover-below{transform-origin:left top}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-below{transform-origin:right top}"], encapsulation: 2, data: { animation: [transformPopover] } });
SatPopover.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"] },
    { type: SatPopoverAnchoringService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
SatPopover.propDecorators = {
    anchor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    horizontalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    xAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    yAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    forceAlignment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lockAlignment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    restoreFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    interactiveClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    openTransition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closeTransition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    afterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    afterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    backdropClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    overlayKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    _templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }],
    _focusTrapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['focusTrapElement',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SatPopover, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sat-popover',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: [transformPopover],
                template: "<ng-template>\n  <div class=\"sat-popover-container\"\n      #focusTrapElement\n      [ngClass]=\"_classList\"\n      [@transformPopover]=\"_getAnimation()\"\n      (@transformPopover.done)=\"_onAnimationDone($event)\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                providers: [SatPopoverAnchoringService],
                styles: [".cdk-global-overlay-wrapper,.cdk-overlay-container{height:100%;left:0;pointer-events:none;top:0;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper,.cdk-overlay-pane{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{box-sizing:border-box;max-height:100%;max-width:100%;pointer-events:auto}.cdk-overlay-backdrop{-webkit-tap-highlight-color:transparent;bottom:0;left:0;opacity:0;pointer-events:auto;position:absolute;right:0;top:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);z-index:1000}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-height:1px;min-width:1px;position:absolute;z-index:1000}.cdk-global-scrollblock{overflow-y:scroll;position:fixed;width:100%}.sat-popover-container.sat-popover-before.sat-popover-above{transform-origin:right bottom}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-above{transform-origin:left bottom}.sat-popover-container.sat-popover-before.sat-popover-center{transform-origin:right center}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-center{transform-origin:left center}.sat-popover-container.sat-popover-before.sat-popover-below{transform-origin:right top}[dir=rtl] .sat-popover-container.sat-popover-before.sat-popover-below{transform-origin:left top}.sat-popover-container.sat-popover-center.sat-popover-above{transform-origin:center bottom}.sat-popover-container.sat-popover-center.sat-popover-below{transform-origin:center top}.sat-popover-container.sat-popover-after.sat-popover-above{transform-origin:left bottom}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-above{transform-origin:right bottom}.sat-popover-container.sat-popover-after.sat-popover-center{transform-origin:left center}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-center{transform-origin:right center}.sat-popover-container.sat-popover-after.sat-popover-below{transform-origin:left top}[dir=rtl] .sat-popover-container.sat-popover-after.sat-popover-below{transform-origin:right top}"]
            }]
    }], function () { return [{ type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"] }, { type: SatPopoverAnchoringService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], afterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], afterClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], backdropClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], overlayKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], anchor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], horizontalAlign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xAlign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], verticalAlign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], yAlign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], forceAlignment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lockAlignment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interactiveClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openTransition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeTransition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true }]
        }], _focusTrapElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['focusTrapElement']
        }] }); })();

class SatPopoverHoverDirective {
    constructor(anchor) {
        this.anchor = anchor;
        this._satPopoverHover = 0;
        /** Emits when the directive is destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Emits when the user's mouse enters the element. */
        this._onMouseEnter = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Emits when the user's mouse leaves the element. */
        this._onMouseLeave = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    /**
     * Amount of time to delay (ms) after hovering starts before
     * the popover opens. Defaults to 0ms.
     */
    get satPopoverHover() { return this._satPopoverHover; }
    set satPopoverHover(val) {
        this._satPopoverHover = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(val);
    }
    ngAfterViewInit() {
        // Whenever the user hovers this host element, delay the configured
        // amount of time and open the popover. Terminate if the mouse leaves
        // the host element before the delay is complete.
        this._onMouseEnter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(() => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(this._satPopoverHover || 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onMouseLeave));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(() => this.anchor.popover.open());
    }
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    showPopover() {
        this._onMouseEnter.next();
    }
    closePopover() {
        this._onMouseLeave.next();
        this.anchor.popover.close();
    }
}
SatPopoverHoverDirective.ɵfac = function SatPopoverHoverDirective_Factory(t) { return new (t || SatPopoverHoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SatPopoverAnchor)); };
SatPopoverHoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SatPopoverHoverDirective, selectors: [["", "satPopoverHover", ""]], hostBindings: function SatPopoverHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SatPopoverHoverDirective_mouseenter_HostBindingHandler() { return ctx.showPopover(); })("mouseleave", function SatPopoverHoverDirective_mouseleave_HostBindingHandler() { return ctx.closePopover(); });
    } }, inputs: { satPopoverHover: "satPopoverHover" } });
SatPopoverHoverDirective.ctorParameters = () => [
    { type: SatPopoverAnchor }
];
SatPopoverHoverDirective.propDecorators = {
    satPopoverHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showPopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
    closePopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SatPopoverHoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[satPopoverHover]'
            }]
    }], function () { return [{ type: SatPopoverAnchor }]; }, { satPopoverHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showPopover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], closePopover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();

class SatPopoverModule {
}
SatPopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SatPopoverModule });
SatPopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SatPopoverModule_Factory(t) { return new (t || SatPopoverModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
        ],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SatPopoverModule, { declarations: function () { return [SatPopover,
        SatPopoverAnchor,
        SatPopoverHoverDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"]]; }, exports: function () { return [SatPopover,
        SatPopoverAnchor,
        SatPopoverHoverDirective,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SatPopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
                ],
                declarations: [
                    SatPopover,
                    SatPopoverAnchor,
                    SatPopoverHoverDirective,
                ],
                exports: [
                    SatPopover,
                    SatPopoverAnchor,
                    SatPopoverHoverDirective,
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ncstate-sat-popover.js.map

/***/ }),

/***/ "./src/app/features/workspace-detail/components/dialogs/add-dialog/add-dialog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/dialogs/add-dialog/add-dialog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_features_workspace_detail_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/features/workspace-detail/services/workspace-detail.service */ "./src/app/features/workspace-detail/services/workspace-detail.service.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "../../node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _pipes_valid_files__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/valid-files */ "./src/app/features/workspace-detail/pipes/valid-files.ts");











function AddDialogComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Type: ", item_r3.readable_resource_type || "N/A", "");
} }
function AddDialogComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
} }
/**
 * Add Workspace Resource Dialog Component
 *
 * Modal dialog component which is used to add new resources to the current workspace
 */
class AddDialogComponent {
    constructor(dialogRef, apiService, data) {
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.data = data;
        this.files = [];
        this.selectedFiles = [];
        this.dropdownSettings = {};
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    ngOnInit() {
        this.workspaceId = this.data.workspaceId;
        this.apiService.getAvailableResources().subscribe(data => {
            this.files = data;
        });
        this.dropdownSettings = {
            text: 'Select resources',
            selectAllText: 'Select All',
            unSelectAllText: 'Unselect All',
            enableSearchFilter: true,
            searchBy: ['name', 'readable_resource_type'],
            lazyLoading: true,
            classes: 'resource-dropdown'
        };
    }
    /**
     * Function is triggered when user clicks the Cancel button
     *
     */
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        // empty stuff
    }
    /**
     * Function is triggered when user clicks the Add button
     *
     */
    confirmAdd() {
        this.selectedFiles.forEach(file => {
            this.apiService
                .addResourceToWorkspace(file.id, this.data.workspaceId)
                .subscribe();
        });
    }
}
AddDialogComponent.ɵfac = function AddDialogComponent_Factory(t) { return new (t || AddDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_features_workspace_detail_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
AddDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddDialogComponent, selectors: [["mev-add-dialog"]], decls: 19, vars: 6, consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "ngSubmit"], ["formControl", "ngForm"], [1, "form"], ["name", "resource", 3, "data", "ngModel", "settings", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "mat-dialog-close", "click"], ["mat-button", "", "tabindex", "-1", 3, "click"], [1, "resource-label"], [1, "resource-type-label"]], template: function AddDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select one or more resources from the list to add to the Workspace. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Then click the Add button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddDialogComponent_Template_form_ngSubmit_5_listener() { return ctx.submit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "angular2-multiselect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddDialogComponent_Template_angular2_multiselect_ngModelChange_8_listener($event) { return ctx.selectedFiles = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "validFilesPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "c-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddDialogComponent_ng_template_11_Template, 5, 2, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "c-badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddDialogComponent_ng_template_13_Template, 2, 1, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddDialogComponent_Template_button_click_15_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddDialogComponent_Template_button_click_17_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, ctx.files))("ngModel", ctx.selectedFiles)("settings", ctx.dropdownSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["AngularMultiSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["Item"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["ɵf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], pipes: [_pipes_valid_files__WEBPACK_IMPORTED_MODULE_6__["ValidFilesPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  min-height: 350px;\n  max-height: none;\n  position: relative;\n  overflow: visible;\n}\n\n.mat-dialog-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 6px;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n\n.resource-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  word-break: break-all;\n}\n\n.resource-type-label[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n\n  .selected-list .c-list .c-token {\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvZGlhbG9ncy9hZGQtZGlhbG9nL2FkZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdFO0VBQ0UscUJBQUE7QUFBSiIsImZpbGUiOiJwcm9qZWN0cy93ZWItbWV2L3NyYy9hcHAvZmVhdHVyZXMvd29ya3NwYWNlLWRldGFpbC9jb21wb25lbnRzL2RpYWxvZ3MvYWRkLWRpYWxvZy9hZGQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICBtYXgtaGVpZ2h0OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi5yZXNvdXJjZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ucmVzb3VyY2UtdHlwZS1sYWJlbCB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjo6bmctZGVlcCB7XG4gIC5zZWxlY3RlZC1saXN0IC5jLWxpc3QgLmMtdG9rZW4ge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mev-add-dialog',
                templateUrl: './add-dialog.component.html',
                styleUrls: ['./add-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: _app_features_workspace_detail_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceDetailService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/dialogs/delete-dialog/delete-dialog.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/dialogs/delete-dialog/delete-dialog.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_features_workspace_detail_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/features/workspace-detail/services/workspace-detail.service */ "./src/app/features/workspace-detail/services/workspace-detail.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _app_shared_pipes_byte_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/pipes/byte-name.pipe */ "./src/app/shared/pipes/byte-name.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









/**
 * Delete Workspace Resource Dialog Component
 *
 * Modal dialog component which is used to delete a resource from the current workspace
 */
class DeleteDialogComponent {
    constructor(dialogRef, data, service) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.resource = this.data.resource;
    }
    /**
     * Function is triggered when user clicks the Cancel button
     *
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * Function is triggered when user clicks the Delete button
     *
     */
    confirmDelete() {
        this.service
            .deleteResourceFromWorkspace(this.data.resource.id, this.data.workspaceId)
            .subscribe(() => {
            this.dialogRef.close();
        }, error => {
            console.error(error);
        });
    }
}
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_features_workspace_detail_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_2__["WorkspaceDetailService"])); };
DeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteDialogComponent, selectors: [["mev-delete-dialog"]], decls: 20, vars: 10, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close", "click"], ["mat-button", "", "tabindex", "-1", 3, "click"]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This resource will be deleted from your workspace. Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "byteName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_16_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_18_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("File: ", ctx.resource.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Resource type: ", ctx.resource.readable_resource_type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Size: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.resource.size), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, ctx.resource.created, "medium"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], pipes: [_app_shared_pipes_byte_name_pipe__WEBPACK_IMPORTED_MODULE_4__["ByteNamePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: none;\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvZGlhbG9ncy9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvZGlhbG9ncy9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiA0NTBweDtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mev-delete-dialog',
                templateUrl: './delete-dialog.component.html',
                styleUrls: ['./delete-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _app_features_workspace_detail_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_2__["WorkspaceDetailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/dialogs/edit-dialog/edit-dialog/edit-dialog.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/dialogs/edit-dialog/edit-dialog/edit-dialog.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_features_file_manager_services_file_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/features/file-manager/services/file-manager.service */ "./src/app/features/file-manager/services/file-manager.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function EditDialogComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage());
} }
/**
 * Edit Workspace Resource Dialog Component
 *
 * Modal dialog component which is used to edit a resource name
 */
class EditDialogComponent {
    constructor(dialogRef, data, fileService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fileService = fileService;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
    }
    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' : '';
    }
    submit() {
        // empty stuff
    }
    /**
     * Function is triggered when user clicks the Cancel button
     *
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * Function is triggered when user clicks the Save button
     *
     */
    stopEdit() {
        this.fileService.updateFile(this.data);
    }
}
EditDialogComponent.ɵfac = function EditDialogComponent_Factory(t) { return new (t || EditDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_features_file_manager_services_file_manager_service__WEBPACK_IMPORTED_MODULE_3__["FileService"])); };
EditDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditDialogComponent, selectors: [["mev-edit-dialog"]], decls: 15, vars: 5, consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "ngSubmit"], ["formControl", "ngForm"], [1, "form"], ["color", "accent"], ["matInput", "", "placeholder", "File name", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["input", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-button", "", "tabindex", "-1", 3, "click"]], template: function EditDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditDialogComponent_Template_form_ngSubmit_3_listener() { return ctx.submit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDialogComponent_Template_input_ngModelChange_7_listener($event) { return ctx.data.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditDialogComponent_mat_error_9_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditDialogComponent_Template_button_click_11_listener() { return ctx.stopEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditDialogComponent_Template_button_click_13_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.submit)("disabled", !_r0.valid)("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  min-height: 150px;\n  position: relative;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: none;\n  overflow: visible;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvZGlhbG9ncy9lZGl0LWRpYWxvZy9lZGl0LWRpYWxvZy9lZGl0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy93ZWItbWV2L3NyYy9hcHAvZmVhdHVyZXMvd29ya3NwYWNlLWRldGFpbC9jb21wb25lbnRzL2RpYWxvZ3MvZWRpdC1kaWFsb2cvZWRpdC1kaWFsb2cvZWRpdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mev-edit-dialog',
                templateUrl: './edit-dialog.component.html',
                styleUrls: ['./edit-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _app_features_file_manager_services_file_manager_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/metadata/dialogs/add-annotation-dialog/add-annotation-dialog.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/metadata/dialogs/add-annotation-dialog/add-annotation-dialog.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AddAnnotationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnnotationDialogComponent", function() { return AddAnnotationDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_features_analysis_services_analysis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/features/analysis/services/analysis.service */ "./src/app/features/analysis/services/analysis.service.ts");
/* harmony import */ var _app_models_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_models/metadata */ "./src/app/_models/metadata.ts");
/* harmony import */ var _app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/utils/utils */ "./src/app/shared/utils/utils.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "../../node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _pipes_annotation_files__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../pipes/annotation-files */ "./src/app/features/workspace-detail/pipes/annotation-files.ts");

















function AddAnnotationDialogComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", file_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", file_r3.name, " ");
} }
function AddAnnotationDialogComponent_mat_form_field_13_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", attribute_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", attribute_r5, " ");
} }
function AddAnnotationDialogComponent_mat_form_field_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Annotation attribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function AddAnnotationDialogComponent_mat_form_field_13_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.selectedAttribute = $event; })("selectionChange", function AddAnnotationDialogComponent_mat_form_field_13_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onSelectAttribute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddAnnotationDialogComponent_mat_form_field_13_mat_option_4_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.selectedAttribute);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.attributes);
} }
function AddAnnotationDialogComponent_angular2_multiselect_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r11.name);
} }
function AddAnnotationDialogComponent_angular2_multiselect_14_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.name);
} }
function AddAnnotationDialogComponent_angular2_multiselect_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddAnnotationDialogComponent_angular2_multiselect_14_Template_angular2_multiselect_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.selectedAttributeValues = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "c-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddAnnotationDialogComponent_angular2_multiselect_14_ng_template_2_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "c-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddAnnotationDialogComponent_angular2_multiselect_14_ng_template_4_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r2.attributeValues)("settings", ctx_r2.dropdownSettings)("ngModel", ctx_r2.selectedAttributeValues);
} }
/**
 * Add Annotation Dialog Component
 *
 * Modal dialog component which is used to incorporate an annotation file as custom observation set.
 */
class AddAnnotationDialogComponent {
    constructor(formBuilder, dialogRef, data, apiService) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiService = apiService;
        this.files = [];
        this.attributes = [];
        this.annotationFileContent = [];
        this.attributeValues = [];
        this.selectedAttributeValues = [];
        this.dropdownSettings = {};
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            annotation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            attribute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            attributeValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.dropdownSettings = {
            primaryKey: 'name',
            text: 'Select custom observation sets to create',
            selectAllText: 'Select All',
            unSelectAllText: 'Unselect All',
            classes: 'resource-dropdown'
        };
        this.files = this.data.workspaceResources;
    }
    /**
     * Method is triggered when the user selects an annotation file from the dropdown list
     *
     * Get the annotation file content to get the list of attributes
     */
    onSelectAnnonation() {
        this.apiService
            .getResourceContent(this.selectedAnnotationFileId)
            .subscribe(response => {
            if (response.length) {
                this.annotationFileContent = response;
                this.attributes = Object.keys(response[0].values);
                this.selectedAttributeValues = []; // reset selected attributes in multi-select dropdown
            }
        });
    }
    /**
     * Method is triggered when the user select an attribure from the annotation file
     *
     * Get the list of unique attribute values
     */
    onSelectAttribute() {
        this.attributeValues = [
            ...new Set(this.annotationFileContent.map(item => item.values[this.selectedAttribute]))
        ].map(el => ({ name: el }));
    }
    /**
     * Function is triggered when user clicks the Cancel button
     *
     */
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        // empty stuff
    }
    /**
     * Function is triggered when user clicks the Add button
     *
     */
    confirmAdd() {
        const customSets = [];
        this.form.value.attributeValue.forEach(attrValue => {
            const attrSamples = this.annotationFileContent
                .filter(sample => sample.values[this.selectedAttribute] === attrValue.name)
                .map(sample => ({ id: sample.rowname, attributes: sample.values }));
            const customSet = {
                name: attrValue.name,
                type: _app_models_metadata__WEBPACK_IMPORTED_MODULE_4__["CustomSetType"].ObservationSet,
                elements: attrSamples,
                color: _app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].getRandomColor(),
                multiple: true
            };
            customSets.push(customSet);
        });
        this.dialogRef.close(customSets);
    }
}
AddAnnotationDialogComponent.ɵfac = function AddAnnotationDialogComponent_Factory(t) { return new (t || AddAnnotationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_features_analysis_services_analysis_service__WEBPACK_IMPORTED_MODULE_3__["AnalysesService"])); };
AddAnnotationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddAnnotationDialogComponent, selectors: [["mev-add-annotation-dialog"]], decls: 20, vars: 10, consts: [[1, "container"], [1, "mat-dialog-content", 3, "formGroup", "ngSubmit"], [1, "form"], ["color", "accent", 1, "form-control"], ["formControlName", "annotation", 3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-control", "color", "accent", 4, "ngIf"], ["formControlName", "attributeValue", "class", "form-control", 3, "data", "settings", "ngModel", "ngModelChange", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "mat-dialog-close", "type", "disabled", "click"], ["mat-button", "", "tabindex", "-1", 3, "click"], [3, "value"], ["formControlName", "attribute", 3, "value", "valueChange", "selectionChange"], ["formControlName", "attributeValue", 1, "form-control", 3, "data", "settings", "ngModel", "ngModelChange"]], template: function AddAnnotationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Fill in the parameters and click the Add button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " After you have created custom observations sets from your annotation file, you can rename them and assign new colors instead default ones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddAnnotationDialogComponent_Template_form_ngSubmit_5_listener() { return ctx.submit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Annotation file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function AddAnnotationDialogComponent_Template_mat_select_valueChange_10_listener($event) { return ctx.selectedAnnotationFileId = $event; })("selectionChange", function AddAnnotationDialogComponent_Template_mat_select_selectionChange_10_listener() { return ctx.onSelectAnnonation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddAnnotationDialogComponent_mat_option_11_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "annotationFilesPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddAnnotationDialogComponent_mat_form_field_13_Template, 5, 2, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddAnnotationDialogComponent_angular2_multiselect_14_Template, 5, 3, "angular2-multiselect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAnnotationDialogComponent_Template_button_click_16_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAnnotationDialogComponent_Template_button_click_18_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedAnnotationFileId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, ctx.files));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.attributes.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.attributeValues.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", 1)("type", ctx.submit)("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["AngularMultiSelect"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["Item"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["ɵf"]], pipes: [_pipes_annotation_files__WEBPACK_IMPORTED_MODULE_12__["AnnotationFilesPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n  max-width: 700px;\n  font-size: 14px !important;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  min-height: 350px;\n  max-height: none;\n  position: relative;\n  overflow: visible;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 6px;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvZGlhbG9ncy9hZGQtYW5ub3RhdGlvbi1kaWFsb2cvYWRkLWFubm90YXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvZGlhbG9ncy9hZGQtYW5ub3RhdGlvbi1kaWFsb2cvYWRkLWFubm90YXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNDUwcHg7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddAnnotationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mev-add-annotation-dialog',
                templateUrl: './add-annotation-dialog.component.html',
                styleUrls: ['./add-annotation-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }, { type: _app_features_analysis_services_analysis_service__WEBPACK_IMPORTED_MODULE_3__["AnalysesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/metadata/dialogs/add-observation-set-dialog/add-observation-set-dialog.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/metadata/dialogs/add-observation-set-dialog/add-observation-set-dialog.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: AddObservationSetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddObservationSetDialogComponent", function() { return AddObservationSetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _app_models_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_models/metadata */ "./src/app/_models/metadata.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
















function AddObservationSetDialogComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddObservationSetDialogComponent_th_20_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r7.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected());
} }
function AddObservationSetDialogComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddObservationSetDialogComponent_td_21_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); return $event.stopPropagation(); })("change", function AddObservationSetDialogComponent_td_21_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const row_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r12.selection.toggle(row_r9) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.selection.isSelected(row_r9));
} }
function AddObservationSetDialogComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddObservationSetDialogComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.id, " ");
} }
function AddObservationSetDialogComponent_ng_container_25_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attrCol_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attrCol_r14);
} }
function AddObservationSetDialogComponent_ng_container_25_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const attrCol_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.attributes[attrCol_r14] ? element_r19.attributes[attrCol_r14].value : "", "");
} }
function AddObservationSetDialogComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddObservationSetDialogComponent_ng_container_25_th_1_Template, 2, 1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddObservationSetDialogComponent_ng_container_25_td_2_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const attrCol_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", attrCol_r14);
} }
function AddObservationSetDialogComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
} }
function AddObservationSetDialogComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddObservationSetDialogComponent_tr_27_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const row_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.selection.toggle(row_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25]; };
/**
 * Add Observation Dialog Component
 *
 * Modal dialog component which is used to add a custom observation set
 */
class AddObservationSetDialogComponent {
    constructor(formBuilder, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.submitted = false;
    }
    ngOnInit() {
        this.observationForm = this.formBuilder.group({
            observationSetName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            observationSetColor: ['#000000', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.allObservationSetsDS = this.data.observationSetDS;
        this.observationSetsDisplayedColumns = this.data.observationSetsDisplayedColumns;
        this.observationSetsDisplayedColumnsAttributesOnly = this.data.observationSetsDisplayedColumnsAttributesOnly;
    }
    ngAfterViewInit() {
        this.allObservationSetsDS.paginator = this.paginator;
    }
    /**
     * Function is triggered when user clicks the Cancel button
     *
     */
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        //empty stuff
    }
    /**
     * Function is triggered when user clicks the Add button
     *
     */
    confirmAdd() {
        const name = this.observationForm.value.observationSetName;
        const color = this.observationForm.value.observationSetColor;
        const samples = this.selection.selected;
        const observationSet = {
            name: name,
            color: color,
            type: _app_models_metadata__WEBPACK_IMPORTED_MODULE_5__["CustomSetType"].ObservationSet,
            elements: samples,
            multiple: true
        };
        this.dialogRef.close(observationSet);
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.allObservationSetsDS.filteredData.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.allObservationSetsDS.filteredData.forEach(row => this.selection.select(row));
    }
    /**
     * Filtering observations by name
     */
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.allObservationSetsDS.filter = filterValue;
    }
    /**
     * Convenience getter for easy access to form fields
     */
    get f() {
        return this.observationForm.controls;
    }
}
AddObservationSetDialogComponent.ɵfac = function AddObservationSetDialogComponent_Factory(t) { return new (t || AddObservationSetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AddObservationSetDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddObservationSetDialogComponent, selectors: [["mev-add-observation-set-dialog"]], viewQuery: function AddObservationSetDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 34, vars: 10, consts: [[1, "container"], [1, "mat-dialog-content", 3, "formGroup", "ngSubmit"], [1, "form"], ["color", "accent", 1, "form-control"], ["matInput", "", "formControlName", "observationSetName", "name", "observationSetName"], ["type", "color", "matInput", "", "formControlName", "observationSetColor", "name", "observationSetColor", 1, "color-picker-input"], [1, "mat-elevation-z8"], [1, "filter-panel"], [1, "form-control"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [1, "button-panel"], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "mat-dialog-close", "type", "disabled", "click"], ["mat-button", "", "tabindex", "-1", 3, "click"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], [3, "matColumnDef"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function AddObservationSetDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter the name of a new observation set and select samples. Then click the Add button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddObservationSetDialogComponent_Template_form_ngSubmit_3_listener() { return ctx.submit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter observation set name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select your color for the observation set:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Select samples: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AddObservationSetDialogComponent_Template_input_keyup_17_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddObservationSetDialogComponent_th_20_Template, 2, 2, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddObservationSetDialogComponent_td_21_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddObservationSetDialogComponent_th_23_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddObservationSetDialogComponent_td_24_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddObservationSetDialogComponent_ng_container_25_Template, 3, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddObservationSetDialogComponent_tr_26_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddObservationSetDialogComponent_tr_27_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddObservationSetDialogComponent_Template_button_click_30_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddObservationSetDialogComponent_Template_button_click_32_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.observationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.allObservationSetsDS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.observationSetsDisplayedColumnsAttributesOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.observationSetsDisplayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.observationSetsDisplayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 1)("type", ctx.submit)("disabled", !ctx.observationForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]], styles: [".container[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.filter-panel[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.color-picker-input[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0;\n  padding: 0;\n}\n\n.button-panel[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvZGlhbG9ncy9hZGQtb2JzZXJ2YXRpb24tc2V0LWRpYWxvZy9hZGQtb2JzZXJ2YXRpb24tc2V0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvZGlhbG9ncy9hZGQtb2JzZXJ2YXRpb24tc2V0LWRpYWxvZy9hZGQtb2JzZXJ2YXRpb24tc2V0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWx0ZXItcGFuZWwge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2xvci1waWNrZXItaW5wdXQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24tcGFuZWwge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddObservationSetDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mev-add-observation-set-dialog',
                templateUrl: './add-observation-set-dialog.component.html',
                styleUrls: ['./add-observation-set-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/metadata/dialogs/delete-set-dialog/delete-set-dialog.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/metadata/dialogs/delete-set-dialog/delete-set-dialog.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: DeleteSetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSetDialogComponent", function() { return DeleteSetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





/**
 * Delete Observation Dialog Component
 *
 * Modal dialog component which is used to delete a custom observation set
 */
class DeleteSetDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * Function is triggered when user clicks the Cancel button
     *
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * Function is triggered when user clicks the Delete button
     *
     */
    confirmDelete() { }
}
DeleteSetDialogComponent.ɵfac = function DeleteSetDialogComponent_Factory(t) { return new (t || DeleteSetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DeleteSetDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteSetDialogComponent, selectors: [["mev-delete-set-dialog"]], decls: 11, vars: 2, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "mat-dialog-close", "click"], ["mat-button", "", "tabindex", "-1", 3, "click"]], template: function DeleteSetDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This custom observation/feature set will be deleted. Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteSetDialogComponent_Template_button_click_7_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteSetDialogComponent_Template_button_click_9_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Set name: ", ctx.data.setId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: none;\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvZGlhbG9ncy9kZWxldGUtc2V0LWRpYWxvZy9kZWxldGUtc2V0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvd2ViLW1ldi9zcmMvYXBwL2ZlYXR1cmVzL3dvcmtzcGFjZS1kZXRhaWwvY29tcG9uZW50cy9tZXRhZGF0YS9kaWFsb2dzL2RlbGV0ZS1zZXQtZGlhbG9nL2RlbGV0ZS1zZXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteSetDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mev-delete-set-dialog',
                templateUrl: './delete-set-dialog.component.html',
                styleUrls: ['./delete-set-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/metadata/dialogs/edit-feature-set-dialog/edit-feature-set-dialog.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/metadata/dialogs/edit-feature-set-dialog/edit-feature-set-dialog.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: EditFeatureSetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFeatureSetDialogComponent", function() { return EditFeatureSetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _app_models_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_models/metadata */ "./src/app/_models/metadata.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
















function EditFeatureSetDialogComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update the name of the observation set, its color and sample list. Then click the Save button. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditFeatureSetDialogComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update the name of the feature set. Then click the Save button. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditFeatureSetDialogComponent_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select your color for the observation set:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditFeatureSetDialogComponent_div_12_th_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditFeatureSetDialogComponent_div_12_th_8_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return $event ? ctx_r13.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r6.selection.hasValue() && ctx_r6.isAllSelected())("indeterminate", ctx_r6.selection.hasValue() && !ctx_r6.isAllSelected());
} }
function EditFeatureSetDialogComponent_div_12_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFeatureSetDialogComponent_div_12_td_9_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); return $event.stopPropagation(); })("change", function EditFeatureSetDialogComponent_div_12_td_9_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const row_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return $event ? ctx_r18.selection.toggle(row_r15) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r7.selection.isSelected(row_r15));
} }
function EditFeatureSetDialogComponent_div_12_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditFeatureSetDialogComponent_div_12_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.id, " ");
} }
function EditFeatureSetDialogComponent_div_12_ng_container_13_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attrCol_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attrCol_r20);
} }
function EditFeatureSetDialogComponent_div_12_ng_container_13_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const attrCol_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.attributes[attrCol_r20] ? element_r25.attributes[attrCol_r20].value : "", "");
} }
function EditFeatureSetDialogComponent_div_12_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditFeatureSetDialogComponent_div_12_ng_container_13_th_1_Template, 2, 1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditFeatureSetDialogComponent_div_12_ng_container_13_td_2_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const attrCol_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", attrCol_r20);
} }
function EditFeatureSetDialogComponent_div_12_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
} }
function EditFeatureSetDialogComponent_div_12_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFeatureSetDialogComponent_div_12_tr_15_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const row_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.selection.toggle(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25]; };
function EditFeatureSetDialogComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select samples: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EditFeatureSetDialogComponent_div_12_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.applyFilter($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditFeatureSetDialogComponent_div_12_th_8_Template, 2, 2, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditFeatureSetDialogComponent_div_12_td_9_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditFeatureSetDialogComponent_div_12_th_11_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditFeatureSetDialogComponent_div_12_td_12_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditFeatureSetDialogComponent_div_12_ng_container_13_Template, 3, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditFeatureSetDialogComponent_div_12_tr_14_Template, 1, 0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditFeatureSetDialogComponent_div_12_tr_15_Template, 1, 0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-paginator", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r4.allObservationSetsDS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.observationSetsDisplayedColumnsAttributesOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.observationSetsDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r4.observationSetsDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
function EditFeatureSetDialogComponent_div_13_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const elem_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r33.id);
} }
function EditFeatureSetDialogComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selected features: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditFeatureSetDialogComponent_div_13_li_3_Template, 2, 1, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.data.selectedElements);
} }
/**
 * Edit Feature/Observation Dialog Component
 *
 * Modal dialog component which is used to edit a custom feature or observation set
 * For Observation sets the user  can update name and the list of samples included
 * For Feature sets the user can update name
 */
class EditFeatureSetDialogComponent {
    constructor(formBuilder, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.isObservationSet = true;
        this.submitted = false;
    }
    ngOnInit() {
        var _a;
        // if no custom set type is passed, assume Observation set by default
        this.customSetType = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.type) || _app_models_metadata__WEBPACK_IMPORTED_MODULE_5__["CustomSetType"].ObservationSet;
        if (this.customSetType === _app_models_metadata__WEBPACK_IMPORTED_MODULE_5__["CustomSetType"].FeatureSet) {
            this.isObservationSet = false;
        }
        this.observationForm = this.formBuilder.group({
            observationSetName: [this.data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            observationSetColor: [
                this.data.color,
                [...(this.isObservationSet ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] : [])]
            ]
        });
        if (this.isObservationSet) {
            this.allObservationSetsDS = this.data.observationSetDS;
            this.observationSetsDisplayedColumns = this.data.observationSetsDisplayedColumns;
            this.observationSetsDisplayedColumnsAttributesOnly = this.data.observationSetsDisplayedColumnsAttributesOnly;
            this.allObservationSetsDS.data
                .filter(el => this.data.selectedElements.some(selEl => selEl.id === el.id))
                .forEach(row => {
                this.selection.select(row);
            });
        }
    }
    ngAfterViewInit() {
        if (this.isObservationSet) {
            this.allObservationSetsDS.paginator = this.paginator;
        }
    }
    /**
     * Function is triggered when user clicks the Cancel button
     *
     */
    onNoClick() {
        this.dialogRef.close();
    }
    submit() {
        //empty stuff
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.allObservationSetsDS.filteredData.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.allObservationSetsDS.filteredData.forEach(row => this.selection.select(row));
    }
    /**
     * Convenience getter for easy access to form fields
     */
    get f() {
        return this.observationForm.controls;
    }
    /**
     * Method is triggered when user clicks the Save button
     *
     */
    confirmEdit() {
        const name = this.observationForm.value.observationSetName;
        const color = this.observationForm.value.observationSetColor;
        const samples = this.selection.selected;
        const observationSet = {
            name: name,
            color: color,
            type: this.customSetType,
            multiple: true
        };
        // for Feature sets users can't update sample list
        if (this.customSetType === _app_models_metadata__WEBPACK_IMPORTED_MODULE_5__["CustomSetType"].ObservationSet) {
            observationSet['elements'] = samples;
        }
        this.dialogRef.close(observationSet);
    }
    /**
     * Filtering observations by name
     */
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.allObservationSetsDS.filter = filterValue;
    }
}
EditFeatureSetDialogComponent.ɵfac = function EditFeatureSetDialogComponent_Factory(t) { return new (t || EditFeatureSetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
EditFeatureSetDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditFeatureSetDialogComponent, selectors: [["mev-edit-feature-set-dialog"]], viewQuery: function EditFeatureSetDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 19, vars: 12, consts: [[1, "container"], [4, "ngIf", "ngIfElse"], ["featureSetText", ""], [1, "mat-dialog-content", 3, "formGroup", "ngSubmit"], [1, "form"], ["color", "accent", 1, "form-control"], ["matInput", "", "formControlName", "observationSetName", "name", "observationSetName"], ["class", "form-control", "color", "accent", 4, "ngIf"], [4, "ngIf"], [1, "button-panel"], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "mat-dialog-close", "type", "disabled", "click"], ["mat-button", "", "tabindex", "-1", 3, "click"], ["type", "color", "matInput", "", "formControlName", "observationSetColor", "name", "observationSetColor", 1, "color-picker-input"], [1, "mat-elevation-z8"], [1, "filter-panel"], [1, "form-control"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], [3, "matColumnDef"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [4, "ngFor", "ngForOf"]], template: function EditFeatureSetDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditFeatureSetDialogComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditFeatureSetDialogComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditFeatureSetDialogComponent_Template_form_ngSubmit_4_listener() { return ctx.submit; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditFeatureSetDialogComponent_mat_form_field_11_Template, 4, 0, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditFeatureSetDialogComponent_div_12_Template, 17, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditFeatureSetDialogComponent_div_13_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFeatureSetDialogComponent_Template_button_click_15_listener() { return ctx.confirmEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFeatureSetDialogComponent_Template_button_click_17_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isObservationSet)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.observationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enter ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx.customSetType), " name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isObservationSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isObservationSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isObservationSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 1)("type", ctx.submit)("disabled", !ctx.observationForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["LowerCasePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.filter-panel[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.color-picker-input[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0;\n  padding: 0;\n}\n\n.button-panel[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvZGlhbG9ncy9lZGl0LWZlYXR1cmUtc2V0LWRpYWxvZy9lZGl0LWZlYXR1cmUtc2V0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvZGlhbG9ncy9lZGl0LWZlYXR1cmUtc2V0LWRpYWxvZy9lZGl0LWZlYXR1cmUtc2V0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWx0ZXItcGFuZWwge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2xvci1waWNrZXItaW5wdXQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24tcGFuZWwge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditFeatureSetDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mev-edit-feature-set-dialog',
                templateUrl: './edit-feature-set-dialog.component.html',
                styleUrls: ['./edit-feature-set-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/metadata/dialogs/view-info-dialog/view-info-dialog.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/metadata/dialogs/view-info-dialog/view-info-dialog.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ViewInfoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInfoDialogComponent", function() { return ViewInfoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





/**
 * Feature/Observation Information Dialog Component
 *
 * Modal dialog component which is used to view information
 * about custom observation and feature sets
 */
class ViewInfoDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    /**
     * Function is triggered when user clicks the Close button
     *
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
ViewInfoDialogComponent.ɵfac = function ViewInfoDialogComponent_Factory(t) { return new (t || ViewInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
ViewInfoDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewInfoDialogComponent, selectors: [["mev-view-info-dialog"]], decls: 18, vars: 0, consts: [[1, "container"], ["mat-dialog-actions", "", 1, "btn-group"], ["mat-button", "", "mat-raised-button", "", "color", "accent", 3, "click"]], template: function ViewInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Observations and features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Within WebMEV, you will see references to \"Observations\" and \"Features\". If you are working with \"-omic\" data as WebMEV is intended, an observation is a sample and a feature is a gene/transcript. However, we use these more generic terms to allow flexibility in the types of data we work with. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Observations and features are directly linked. An illustrative example is a count table (or matrix) generated in RNA-seq data. Typically, these matrices are arranged so that each column corresponds to a single sample and each row corresponds to a gene. If we examine a single column of the table, we see that this observation/sample is composed of many gene measurements, which we are calling features; collectively, we can refer to that column as a \"feature vector\" or \"feature array\". In many \"omic\" analyses, we compare these arrays in an attempt to infer biological meaning. For a more general example, we could imagine investigating a population of patients (observations); each patient has some features (e.g. age, sex, smoking history) which may affect the measured outcome variable (e.g. blood pressure).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Within WebMEV, we can create sets of custom observations/samples and features/genes to allow stratification and comparisons between biologically meaningful groups. These groups may already be known, as in the case of a designed experiment between \"control\" and \"experimental\" observations. Alternatively, custom groups may be discovered and defined in the course of an analysis, perhaps originating from a clustering operation. Similarly, we can create a group of genes/features that represent a biologically meaningful pathway. Suggestively, these are referred to as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "observation sets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "feature sets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewInfoDialogComponent_Template_button_click_16_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["*[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nheader[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.container[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvZGlhbG9ncy92aWV3LWluZm8tZGlhbG9nL3ZpZXctaW5mby1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy93ZWItbWV2L3NyYy9hcHAvZmVhdHVyZXMvd29ya3NwYWNlLWRldGFpbC9jb21wb25lbnRzL21ldGFkYXRhL2RpYWxvZ3Mvdmlldy1pbmZvLWRpYWxvZy92aWV3LWluZm8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewInfoDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mev-view-info-dialog',
                templateUrl: './view-info-dialog.component.html',
                styleUrls: ['./view-info-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/metadata/dialogs/view-set-dialog/view-set-dialog.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/metadata/dialogs/view-set-dialog/view-set-dialog.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ViewSetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSetDialogComponent", function() { return ViewSetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_models_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_models/metadata */ "./src/app/_models/metadata.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







function ViewSetDialogComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const elem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r1.id);
} }
/**
 * View Custom Feature/Observation Dialog Component
 *
 * Modal dialog component which is used to view a custom feature or observation set
 * User can view set name and the list of features/samples
 */
class ViewSetDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /*
     * Initialization of the isObservationSet property
     * If no set type, use Observation Set type by default
     */
    ngOnInit() {
        this.isObservationSet =
            this.data.type === _app_models_metadata__WEBPACK_IMPORTED_MODULE_2__["CustomSetType"].FeatureSet ? false : true;
    }
    /**
     * Function is triggered when user clicks the Close button
     *
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
ViewSetDialogComponent.ɵfac = function ViewSetDialogComponent_Factory(t) { return new (t || ViewSetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ViewSetDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewSetDialogComponent, selectors: [["mev-view-set-dialog"]], decls: 12, vars: 4, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", "color", "accent", "tabindex", "-1", 3, "click"]], template: function ViewSetDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewSetDialogComponent_li_8_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewSetDialogComponent_Template_button_click_10_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Type: ", ctx.data.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isObservationSet ? "Observations" : "Features", ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.elements);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-dialog-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvZGlhbG9ncy92aWV3LXNldC1kaWFsb2cvdmlldy1zZXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy93ZWItbWV2L3NyYy9hcHAvZmVhdHVyZXMvd29ya3NwYWNlLWRldGFpbC9jb21wb25lbnRzL21ldGFkYXRhL2RpYWxvZ3Mvdmlldy1zZXQtZGlhbG9nL3ZpZXctc2V0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewSetDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mev-view-set-dialog',
                templateUrl: './view-set-dialog.component.html',
                styleUrls: ['./view-set-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/metadata/metadata.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/metadata/metadata.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataComponent", function() { return MetadataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _dialogs_add_annotation_dialog_add_annotation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs/add-annotation-dialog/add-annotation-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/add-annotation-dialog/add-annotation-dialog.component.ts");
/* harmony import */ var _services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/workspace-detail.service */ "./src/app/features/workspace-detail/services/workspace-detail.service.ts");
/* harmony import */ var _dialogs_add_observation_set_dialog_add_observation_set_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/add-observation-set-dialog/add-observation-set-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/add-observation-set-dialog/add-observation-set-dialog.component.ts");
/* harmony import */ var _dialogs_delete_set_dialog_delete_set_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialogs/delete-set-dialog/delete-set-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/delete-set-dialog/delete-set-dialog.component.ts");
/* harmony import */ var _dialogs_view_set_dialog_view_set_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialogs/view-set-dialog/view-set-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/view-set-dialog/view-set-dialog.component.ts");
/* harmony import */ var _app_core_local_storage_lcl_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/core/local-storage/lcl-storage.service */ "./src/app/core/local-storage/lcl-storage.service.ts");
/* harmony import */ var _app_core_metadata_metadata_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/core/metadata/metadata.service */ "./src/app/core/metadata/metadata.service.ts");
/* harmony import */ var _dialogs_edit_feature_set_dialog_edit_feature_set_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialogs/edit-feature-set-dialog/edit-feature-set-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/edit-feature-set-dialog/edit-feature-set-dialog.component.ts");
/* harmony import */ var _dialogs_view_info_dialog_view_info_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialogs/view-info-dialog/view-info-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/view-info-dialog/view-info-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _shared_components_spinner_overlay_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/components/spinner-overlay/spinner-overlay.component */ "./src/app/shared/components/spinner-overlay/spinner-overlay.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _pipes_annotation_files__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../pipes/annotation-files */ "./src/app/features/workspace-detail/pipes/annotation-files.ts");


































function MetadataComponent_mev_spinner_overlay_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mev-spinner-overlay");
} }
function MetadataComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click the Incorporate annotations button to use your annotation file. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MetadataComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please upload an annotation file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "and add it to your workspace to. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MetadataComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No custom observation and feature sets available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MetadataComponent_div_34_table_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MetadataComponent_div_34_table_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", element_r17.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.name, " ");
} }
function MetadataComponent_div_34_table_1_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type (Observation/Feature set) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MetadataComponent_div_34_table_1_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.type, " ");
} }
function MetadataComponent_div_34_table_1_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MetadataComponent_div_34_table_1_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetadataComponent_div_34_table_1_td_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r19 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.onViewCustomSet(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetadataComponent_div_34_table_1_td_9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r19 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.onDeleteCustomSet(element_r19.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetadataComponent_div_34_table_1_td_9_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r19 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.onEditCustomSet(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MetadataComponent_div_34_table_1_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 40);
} }
function MetadataComponent_div_34_table_1_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 41);
} }
function MetadataComponent_div_34_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MetadataComponent_div_34_table_1_th_2_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MetadataComponent_div_34_table_1_td_3_Template, 3, 3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MetadataComponent_div_34_table_1_th_5_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MetadataComponent_div_34_table_1_td_6_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MetadataComponent_div_34_table_1_th_8_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MetadataComponent_div_34_table_1_td_9_Template, 10, 0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MetadataComponent_div_34_table_1_tr_10_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MetadataComponent_div_34_table_1_tr_11_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r7.customSetDS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.customSetsDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r7.customSetsDisplayedColumns);
} }
function MetadataComponent_div_34_table_2_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sample ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MetadataComponent_div_34_table_2_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.sampleName, " ");
} }
function MetadataComponent_div_34_table_2_ng_container_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const setCol_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](setCol_r32);
} }
const _c0 = function (a0) { return { "highlighted-cell2": a0 }; };
function MetadataComponent_div_34_table_2_ng_container_4_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    const setCol_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", element_r36[setCol_r32]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, element_r36[setCol_r32] === true));
} }
function MetadataComponent_div_34_table_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MetadataComponent_div_34_table_2_ng_container_4_th_1_Template, 2, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MetadataComponent_div_34_table_2_ng_container_4_td_2_Template, 2, 5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const setCol_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", setCol_r32);
} }
function MetadataComponent_div_34_table_2_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 40);
} }
function MetadataComponent_div_34_table_2_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 41);
} }
function MetadataComponent_div_34_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MetadataComponent_div_34_table_2_th_2_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MetadataComponent_div_34_table_2_td_3_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MetadataComponent_div_34_table_2_ng_container_4_Template, 3, 1, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MetadataComponent_div_34_table_2_tr_5_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MetadataComponent_div_34_table_2_tr_6_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r8.visObservationSetDS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.visObsDisplayedColumnsSetsOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.visObsDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r8.visObsDisplayedColumns);
} }
function MetadataComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MetadataComponent_div_34_table_1_Template, 12, 3, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MetadataComponent_div_34_table_2_Template, 7, 4, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.value === "tableMode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.value === "visMode");
} }
/**
 * Metadata Component
 *
 * Used to add, edit, remove custom observations sets and edit, remove custom feature sets.
 * User's custom sets are stored in local storage only
 */
class MetadataComponent {
    constructor(service, metadataService, storage, route, cd, dialog) {
        this.service = service;
        this.metadataService = metadataService;
        this.storage = storage;
        this.route = route;
        this.cd = cd;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'symbol'];
        this.displayedColumnsAttributesOnly = [];
        this.customSetsDisplayedColumns = ['name', 'type', 'actions']; // the list of columns for the Custom Sets table
        this.globalObservationSets = []; // all samples from all resources
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.isWait = false;
        this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.workspaceId = this.route.snapshot.paramMap.get('workspaceId');
        // check if there is a current annotation saved locally to display
        const currentObsSet = JSON.parse(localStorage.getItem(this.workspaceId + '_current_observation_set')) || [];
        this.generateMetadataColumns(currentObsSet);
        this.observationSetDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](currentObsSet);
        // retrieve custom observation/feature sets
        const customSet = this.metadataService.getCustomSets();
        this.customSetDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](customSet);
        // watch value changes
        this.storageSubscription = this.storage
            .watch(this.workspaceId + '_custom_sets')
            .subscribe(response => {
            this.customSetDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.metadataService.getCustomSets());
            this.generateObservationSetsVisualization(); // generate custom observation visualization
            this.cd.markForCheck();
        });
    }
    ngAfterViewInit() {
        this.observationSetDS.paginator = this.paginator;
    }
    ngOnDestroy() {
        this.onDestroy.next();
        this.onDestroy.complete();
        this.storageSubscription.unsubscribe();
    }
    /**
     * Method is triggered when the user clicks button 'Incorporate annotation'
     *
     */
    onChooseAnnotation() {
        const dialogRef = this.dialog.open(_dialogs_add_annotation_dialog_add_annotation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddAnnotationDialogComponent"], {
            data: { workspaceResources: this.workspaceResources }
        });
        dialogRef.afterClosed().subscribe(newCustomSets => {
            if (newCustomSets) {
                newCustomSets.forEach(newCustomSet => this.metadataService.addCustomSet(newCustomSet));
            }
        });
    }
    /**
     * Method is triggered when the user clicks button 'Create a custom observation set'
     * Display the list of all available samples from all files in the workspace
     */
    onCreateObservationSet() {
        this.isWait = true;
        this.globalObservationSets = [];
        this.service
            .getWorkspaceMetadataObservations(this.workspaceId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500), // delay for spinner
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(metadata => {
            var _a, _b;
            if ((_b = (_a = metadata) === null || _a === void 0 ? void 0 : _a.observation_set) === null || _b === void 0 ? void 0 : _b.elements) {
                this.globalObservationSets = metadata.observation_set.elements;
            }
            const globalObservationSetsDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.globalObservationSets);
            // the list of columns for pop-up table to select samples for custom observation sets
            const observationSetsDisplayedColumns = ['select', 'id'];
            const observationSetsDisplayedColumnsAttributesOnly = [];
            const obsSetsWithAttr = this.globalObservationSets.filter(set => 'attributes' in set);
            const attributes = obsSetsWithAttr.length
                ? obsSetsWithAttr[0].attributes
                : {};
            for (const attribute in attributes) {
                if (attributes.hasOwnProperty(attribute)) {
                    observationSetsDisplayedColumns.push(attribute);
                    observationSetsDisplayedColumnsAttributesOnly.push(attribute);
                }
            }
            this.isWait = false;
            const dialogRef = this.dialog.open(_dialogs_add_observation_set_dialog_add_observation_set_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddObservationSetDialogComponent"], {
                data: {
                    observationSetDS: globalObservationSetsDS,
                    observationSetsDisplayedColumns: observationSetsDisplayedColumns,
                    observationSetsDisplayedColumnsAttributesOnly: observationSetsDisplayedColumnsAttributesOnly
                }
            });
            return dialogRef.afterClosed();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy))
            .subscribe(newObservationSet => {
            if (newObservationSet) {
                this.metadataService.addCustomSet(newObservationSet);
            }
        });
    }
    /**
     * Method to display the list of custom observation sets in the Visualization mode
     */
    generateObservationSetsVisualization() {
        const visTable = [];
        const customObservationSets = this.metadataService.getCustomObservationSets();
        this.visObsDisplayedColumns = [
            'id',
            ...customObservationSets.map(customSet => customSet.name)
        ];
        this.visObsDisplayedColumnsSetsOnly = customObservationSets.map(customSet => customSet.name);
        if (this.visObsDisplayedColumnsSetsOnly.length > 0) {
            this.getGlobalObservationSets().subscribe(data => {
                this.globalObservationSets = data;
                this.globalObservationSets.forEach(sample => {
                    const elem = { sampleName: sample.id };
                    customObservationSets.forEach(customSet => {
                        if (customSet.elements.filter(e => e.id === sample.id).length > 0) {
                            elem[customSet.name] = customSet.color;
                        }
                        else {
                            elem[customSet.name] = 'transparent';
                        }
                    });
                    visTable.push(elem);
                });
                this.visObservationSetDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](visTable);
                this.cd.markForCheck();
            });
        }
    }
    /**
     * Method is triggered when the user clicks icon 'Delete'
     * Delete a custom observation or feature set from the list
     */
    onDeleteCustomSet(setId) {
        const dialogRef = this.dialog.open(_dialogs_delete_set_dialog_delete_set_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DeleteSetDialogComponent"], {
            data: { setId: setId }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                this.metadataService.deleteCustomSet(setId);
            }
        });
    }
    /**
     * Method is triggered when the user clicks icon 'Edit'
     *
     * Edit a custom observation or feature set.
     * For custom observation sets the user can update name, color, list of samples.
     * For feature sets only names can be updated
     */
    onEditCustomSet(set) {
        this.isWait = true;
        this.globalObservationSets = [];
        this.service
            .getWorkspaceMetadataObservations(this.workspaceId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500), // delay for spinner
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(metadata => {
            var _a, _b;
            if ((_b = (_a = metadata) === null || _a === void 0 ? void 0 : _a.observation_set) === null || _b === void 0 ? void 0 : _b.elements) {
                this.globalObservationSets = metadata.observation_set.elements;
            }
            const globalObservationSetsDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.globalObservationSets);
            // the list of columns for pop-up table to select samples for custom observation sets
            const observationSetsDisplayedColumns = ['select', 'id'];
            const observationSetsDisplayedColumnsAttributesOnly = [];
            const obsSetsWithAttr = this.globalObservationSets.filter(set => 'attributes' in set);
            const attributes = obsSetsWithAttr.length
                ? obsSetsWithAttr[0].attributes
                : {};
            for (const attribute in attributes) {
                if (attributes.hasOwnProperty(attribute)) {
                    observationSetsDisplayedColumns.push(attribute);
                    observationSetsDisplayedColumnsAttributesOnly.push(attribute);
                }
            }
            this.isWait = false;
            const dialogRef = this.dialog.open(_dialogs_edit_feature_set_dialog_edit_feature_set_dialog_component__WEBPACK_IMPORTED_MODULE_16__["EditFeatureSetDialogComponent"], {
                data: {
                    name: set.name,
                    color: set.color,
                    type: set.type,
                    selectedElements: set.elements,
                    observationSetDS: globalObservationSetsDS,
                    observationSetsDisplayedColumns: observationSetsDisplayedColumns,
                    observationSetsDisplayedColumnsAttributesOnly: observationSetsDisplayedColumnsAttributesOnly
                }
            });
            return dialogRef.afterClosed();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy))
            .subscribe(updatedObservationSet => {
            if (updatedObservationSet) {
                this.metadataService.updateCustomSet(updatedObservationSet, set.name);
            }
        });
    }
    /**
     * Method is triggered when the user clicks icon 'View'
     * View a custom observation or feature set.
     */
    onViewCustomSet(set) {
        const dialogRef = this.dialog.open(_dialogs_view_set_dialog_view_set_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ViewSetDialogComponent"], { data: set });
        dialogRef.afterClosed().subscribe();
    }
    /**
     * Make the list of columns for the Mat Table with current annotation
     */
    generateMetadataColumns(currentObsSet) {
        if (currentObsSet && currentObsSet.length) {
            this.metadataObsDisplayedColumns = ['id'];
            this.metadataObsDisplayedColumnsAttributesOnly = [];
            let attributes = {};
            currentObsSet.forEach(sample => (attributes = Object.assign(Object.assign({}, attributes), sample.attributes)));
            for (const attribute in attributes) {
                if (attributes.hasOwnProperty(attribute)) {
                    this.metadataObsDisplayedColumns.push(attribute);
                    this.metadataObsDisplayedColumnsAttributesOnly.push(attribute);
                }
            }
        }
    }
    /**
     * Get the list of observations used in all files/resources included in the current workspace
     */
    getGlobalObservationSets() {
        let globalObservationSets = [];
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.service
            .getWorkspaceMetadataObservations(this.workspaceId)
            .subscribe(metadata => {
            var _a, _b;
            if ((_b = (_a = metadata) === null || _a === void 0 ? void 0 : _a.observation_set) === null || _b === void 0 ? void 0 : _b.elements) {
                globalObservationSets = metadata.observation_set.elements;
            }
            subject.next(globalObservationSets);
        });
        return subject.asObservable();
    }
    /**
     * Method is triggered when the user clicks a link in the Metadata tab description
     */
    viewCustomSetInfo() {
        this.dialog.open(_dialogs_view_info_dialog_view_info_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ViewInfoDialogComponent"]);
    }
}
MetadataComponent.ɵfac = function MetadataComponent_Factory(t) { return new (t || MetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_10__["WorkspaceDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_metadata_metadata_service__WEBPACK_IMPORTED_MODULE_15__["MetadataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_local_storage_lcl_storage_service__WEBPACK_IMPORTED_MODULE_14__["LclStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
MetadataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MetadataComponent, selectors: [["mev-metadata"]], viewQuery: function MetadataComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { workspaceResources: "workspaceResources" }, decls: 35, vars: 11, consts: [[4, "ngIf"], [1, "metadata-container"], [1, "metadata-card"], [1, "metadata-card__main"], [1, "metadata-card__instruction"], [3, "click"], [4, "ngIf", "ngIfElse"], ["noAnnotationFiles", ""], [3, "inset"], [1, "metadata-card__content"], [1, "control-group"], [1, "btn-group"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["aria-label", "Create an observation set"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["aria-label", "Incorporate annotations"], ["value", "tableMode"], ["customSetsViewMode", "matButtonToggleGroup"], ["value", "tableMode", "aria-label", "Text align left"], ["value", "visMode", "aria-label", "Text align center"], ["matTooltipClass", "tooltip", "fontSet", "material-icons-outlined", "matTooltip", " An Annotation Table is a special type of table that is be responsible for annotating observations/samples (e.g. adding sample names and associated attributes like experimental group or other covariates). The first column gives the sample names and the remaining columns  each individually represent different covariates associated with that sample.", "aria-label", "Info tooltip about the field", 1, "icon"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["mat-table", "", "class", "visualization-table", 3, "dataSource", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "sample-color"], ["mat-icon-button", "", "color", "accent", "title", "View", 3, "click"], ["aria-label", "View"], ["mat-icon-button", "", "color", "accent", "title", "Delete", 3, "click"], ["aria-label", "Delete"], ["mat-icon-button", "", "color", "accent", "title", "Edit", 3, "click"], ["aria-label", "Edit"], ["mat-header-row", ""], ["mat-row", ""], ["mat-table", "", 1, "visualization-table", 3, "dataSource"], ["matColumnDef", "id"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], [3, "matColumnDef"], [1, "highlighted-cell", 3, "ngClass"]], template: function MetadataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MetadataComponent_mev_spinner_overlay_0_Template, 1, 0, "mev-spinner-overlay", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Here you can create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetadataComponent_Template_a_click_7_listener() { return ctx.viewCustomSetInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "custom observation and feature sets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " to filter your data during the analysis. You also can incorporate an annotation file as attributes to your custom observation set. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MetadataComponent_p_10_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "annotationFilesPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MetadataComponent_ng_template_12_Template, 5, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetadataComponent_Template_button_click_18_listener() { return ctx.onCreateObservationSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Create an observation set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetadataComponent_Template_button_click_22_listener() { return ctx.onChooseAnnotation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "annotationFilesPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Incorporate annotations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-button-toggle-group", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-button-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Table view ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-button-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Visualization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MetadataComponent_div_33_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MetadataComponent_div_34_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        var tmp_1_0 = null;
        const currVal_1 = ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx.workspaceResources)) == null ? null : tmp_1_0.length) > 0;
        var tmp_4_0 = null;
        const currVal_4 = ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, ctx.workspaceResources)) == null ? null : tmp_4_0.length) === 0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isWait);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", currVal_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customSetDS || !ctx.customSetDS.data || ctx.customSetDS.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.customSetDS == null ? null : ctx.customSetDS.data == null ? null : ctx.customSetDS.data.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggle"], _shared_components_spinner_overlay_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_24__["SpinnerOverlayComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"]], pipes: [_pipes_annotation_files__WEBPACK_IMPORTED_MODULE_26__["AnnotationFilesPipe"]], styles: ["a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.metadata-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 98%;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-table-container[_ngcontent-%COMP%] {\n  width: 80%;\n  align-self: start;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n  .mat-figure {\n  overflow: scroll;\n}\n\n.control-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n  .mat-button-toggle-label-content {\n  line-height: 36px !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.visualization-table[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.visualization-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.visualization-table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:nth-child(n+2) {\n  text-align: center;\n}\n\n.visualization-table[_ngcontent-%COMP%]   .highlighted-cell[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin: auto;\n}\n\n.mat-button-toggle-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.mat-button-toggle-label-content[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n\n.mat-cell.mat-column-comment[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.annotation-text[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.hint-text[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.annotation-table-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.add-column-btn[_ngcontent-%COMP%] {\n  position: relative;\n  left: -50px;\n  top: 15px;\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.sample-color[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n  .mat-tooltip {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvbWV0YWRhdGEvbWV0YWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTs7RUFFRSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkYiLCJmaWxlIjoicHJvamVjdHMvd2ViLW1ldi9zcmMvYXBwL2ZlYXR1cmVzL3dvcmtzcGFjZS1kZXRhaWwvY29tcG9uZW50cy9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZXRhZGF0YS1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA5OCU7XG59XG5cbi5tYXQtY2FyZCB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG46Om5nLWRlZXAgLm1hdC1maWd1cmUge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uY29udHJvbC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udmlzdWFsaXphdGlvbi10YWJsZSB7XG4gIHdpZHRoOiBhdXRvO1xuXG4gIC5tYXQtY2VsbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQobiArIDIpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaGlnaGxpZ2h0ZWQtY2VsbCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50LFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIGJ1dHRvbiBkaXYge1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuLm1hdC1jZWxsLm1hdC1jb2x1bW4tY29tbWVudCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFubm90YXRpb24tdGV4dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5oaW50LXRleHQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5hbm5vdGF0aW9uLXRhYmxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkLWNvbHVtbi1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC01MHB4O1xuICB0b3A6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zYW1wbGUtY29sb3Ige1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC10b29sdGlwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetadataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mev-metadata',
                templateUrl: './metadata.component.html',
                styleUrls: ['./metadata.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: _services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_10__["WorkspaceDetailService"] }, { type: _app_core_metadata_metadata_service__WEBPACK_IMPORTED_MODULE_15__["MetadataService"] }, { type: _app_core_local_storage_lcl_storage_service__WEBPACK_IMPORTED_MODULE_14__["LclStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"]]
        }], workspaceResources: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/components/workspace-detail/workspace-detail.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/workspace-detail/components/workspace-detail/workspace-detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: WorkspaceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceDetailComponent", function() { return WorkspaceDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _features_workspace_detail_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/workspace-detail/services/workspace-detail.service */ "./src/app/features/workspace-detail/services/workspace-detail.service.ts");
/* harmony import */ var _dialogs_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/add-dialog/add-dialog.component */ "./src/app/features/workspace-detail/components/dialogs/add-dialog/add-dialog.component.ts");
/* harmony import */ var _dialogs_preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/preview-dialog/preview-dialog.component */ "./src/app/features/workspace-detail/components/dialogs/preview-dialog/preview-dialog.component.ts");
/* harmony import */ var _dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialogs/delete-dialog/delete-dialog.component */ "./src/app/features/workspace-detail/components/dialogs/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _dialogs_edit_dialog_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/edit-dialog/edit-dialog/edit-dialog.component */ "./src/app/features/workspace-detail/components/dialogs/edit-dialog/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _shared_components_spinner_overlay_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/spinner-overlay/spinner-overlay.component */ "./src/app/shared/components/spinner-overlay/spinner-overlay.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../metadata/metadata.component */ "./src/app/features/workspace-detail/components/metadata/metadata.component.ts");
/* harmony import */ var _analysis_components_analysis_flow_analysis_flow_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../analysis/components/analysis-flow/analysis-flow.component */ "./src/app/features/analysis/components/analysis-flow/analysis-flow.component.ts");
/* harmony import */ var _analysis_components_analysis_list_analyses_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../analysis/components/analysis-list/analyses.component */ "./src/app/features/analysis/components/analysis-list/analyses.component.ts");
/* harmony import */ var _analysis_components_executed_operation_executed_operation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../analysis/components/executed-operation/executed-operation.component */ "./src/app/features/analysis/components/executed-operation/executed-operation.component.ts");
/* harmony import */ var _features_workspace_detail_pipes_search__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @features/workspace-detail/pipes/search */ "./src/app/features/workspace-detail/pipes/search.ts");
/* harmony import */ var _app_shared_pipes_byte_name_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @app/shared/pipes/byte-name.pipe */ "./src/app/shared/pipes/byte-name.pipe.ts");





































function WorkspaceDetailComponent_mev_spinner_overlay_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mev-spinner-overlay");
} }
function WorkspaceDetailComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Workspace ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workspace_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workspace_r7.workspace_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("matTooltip", "Workspace: ", workspace_r7.workspace_name, " \n                          Created: ", workspace_r7.created, " \n                          Owner: ", workspace_r7.owner_email, "");
} }
function WorkspaceDetailComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To perform analyses, you need to add or import data into the workspace. Select from among the files you uploaded or import public data (if available) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkspaceDetailComponent_ng_template_11_div_22_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceDetailComponent_ng_template_11_div_22_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const resource_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.selectResource(resource_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "byteName");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceDetailComponent_ng_template_11_div_22_a_1_Template_mat_icon_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const resource_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.editItem(resource_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceDetailComponent_ng_template_11_div_22_a_1_Template_mat_icon_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const resource_r13 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.previewItem(resource_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceDetailComponent_ng_template_11_div_22_a_1_Template_mat_icon_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const resource_r13 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.deleteItem(resource_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resource_r13.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resource type: ", resource_r13.readable_resource_type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Size: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, resource_r13.size), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date added: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, resource_r13.created, "medium"), "");
} }
function WorkspaceDetailComponent_ng_template_11_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkspaceDetailComponent_ng_template_11_div_22_a_1_Template, 21, 9, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r10.workspaceResources, ctx_r10.searchText));
} }
function WorkspaceDetailComponent_ng_template_11_div_23_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Resource name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkspaceDetailComponent_ng_template_11_div_23_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resource_r32.name, " ");
} }
function WorkspaceDetailComponent_ng_template_11_div_23_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Resource type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkspaceDetailComponent_ng_template_11_div_23_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resource_r33.readable_resource_type, " ");
} }
function WorkspaceDetailComponent_ng_template_11_div_23_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkspaceDetailComponent_ng_template_11_div_23_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "byteName");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, resource_r34.size), " ");
} }
function WorkspaceDetailComponent_ng_template_11_div_23_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Creation date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkspaceDetailComponent_ng_template_11_div_23_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, resource_r35.created, "medium"), " ");
} }
function WorkspaceDetailComponent_ng_template_11_div_23_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkspaceDetailComponent_ng_template_11_div_23_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceDetailComponent_ng_template_11_div_23_td_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const resource_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.previewItem(resource_r36.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceDetailComponent_ng_template_11_div_23_td_16_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const resource_r36 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.deleteItem(resource_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceDetailComponent_ng_template_11_div_23_td_16_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const resource_r36 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r40.editItem(resource_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkspaceDetailComponent_ng_template_11_div_23_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 61);
} }
function WorkspaceDetailComponent_ng_template_11_div_23_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 62);
} }
const _c0 = function () { return [5, 10, 25]; };
function WorkspaceDetailComponent_ng_template_11_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkspaceDetailComponent_ng_template_11_div_23_th_3_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkspaceDetailComponent_ng_template_11_div_23_td_4_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorkspaceDetailComponent_ng_template_11_div_23_th_6_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorkspaceDetailComponent_ng_template_11_div_23_td_7_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WorkspaceDetailComponent_ng_template_11_div_23_th_9_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WorkspaceDetailComponent_ng_template_11_div_23_td_10_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WorkspaceDetailComponent_ng_template_11_div_23_th_12_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WorkspaceDetailComponent_ng_template_11_div_23_td_13_Template, 3, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkspaceDetailComponent_ng_template_11_div_23_th_15_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WorkspaceDetailComponent_ng_template_11_div_23_td_16_Template, 10, 0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorkspaceDetailComponent_ng_template_11_div_23_tr_17_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WorkspaceDetailComponent_ng_template_11_div_23_tr_18_Template, 1, 0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-paginator", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r11.workspaceResourcesDS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r11.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r11.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("pageIndex", 0)("pageSize", 10);
} }
function WorkspaceDetailComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkspaceDetailComponent_ng_template_11_div_0_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkspaceDetailComponent_ng_template_11_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.searchText = $event; })("keyup", function WorkspaceDetailComponent_ng_template_11_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-placeholder", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceDetailComponent_ng_template_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.addItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Add local data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceDetailComponent_ng_template_11_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.addItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Add external data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-button-toggle-group", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-button-toggle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Table view ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-button-toggle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Card view ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WorkspaceDetailComponent_ng_template_11_div_22_Template, 3, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WorkspaceDetailComponent_ng_template_11_div_23_Template, 21, 7, "div", 29);
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r2.workspaceResources == null ? null : ctx_r2.workspaceResources.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.value === "cardMode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.value === "tableMode");
} }
function WorkspaceDetailComponent_ng_template_13_mev_metadata_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mev-metadata", 64);
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("workspaceResources", ctx_r47.workspaceResources);
} }
function WorkspaceDetailComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkspaceDetailComponent_ng_template_13_mev_metadata_0_Template, 1, 1, "mev-metadata", 63);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.workspaceResources);
} }
function WorkspaceDetailComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mev-analysis-flow", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("executedOperationId", function WorkspaceDetailComponent_ng_template_15_Template_mev_analysis_flow_executedOperationId_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.showExecutedOperationResult($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkspaceDetailComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mev-analyses", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("executedOperationId", function WorkspaceDetailComponent_ng_template_17_Template_mev_analyses_executedOperationId_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.showExecutedOperationResult($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkspaceDetailComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mev-executed-operation", 66);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("execOperationId", ctx_r6.execOperationId);
} }
/**
 * Workspace Detail Component
 *
 * Used to display the list of files/resources included in the current workspace
 * Also contains child components for Metadata, Analyses Flow, Tools and Analyses Result
 */
class WorkspaceDetailComponent {
    constructor(route, service, dialog) {
        this.route = route;
        this.service = service;
        this.dialog = dialog;
        this.isWait = false;
        this.displayedColumns = [
            'name',
            'readable_resource_type',
            'size',
            'created',
            'actions'
        ];
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.workspaceId = this.route.snapshot.paramMap.get('workspaceId');
        this.service.getConnectedResources(this.workspaceId).subscribe(data => {
            this.workspaceResources = data;
            this.workspaceResourcesDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](data);
            this.workspaceResourcesDS.paginator = this.paginator;
            this.workspaceResourcesDS.sort = this.sort;
        });
        this.workspace$ = this.service.getWorkspaceDetail(this.workspaceId);
    }
    refresh() {
        this.loadData();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.workspaceResourcesDS.filter = filterValue.trim().toLowerCase();
    }
    selectResource(resource) {
        console.log(`The selected resource is::  ${resource.name}`);
    }
    /**
     * Open a modal dialog to add files to a specific workspace
     *
     */
    addItem() {
        const dialogRef = this.dialog.open(_dialogs_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddDialogComponent"], {
            data: { workspaceId: this.workspaceId }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                this.refresh();
            }
        });
    }
    /**
     * Open a modal dialog to preview workspace resource content
     *
     */
    previewItem(resourceId) {
        this.isWait = true;
        this.service.getResourcePreview(resourceId).subscribe(data => {
            var _a, _b;
            const previewData = {};
            if (((_b = (_a = data) === null || _a === void 0 ? void 0 : _a.results) === null || _b === void 0 ? void 0 : _b.length) && 'rowname' in data.results[0]) {
                const minN = Math.min(data.results.length, 10);
                let slicedData = data.results.slice(0, minN);
                const columns = Object.keys(slicedData[0].values);
                const rows = slicedData.map(elem => elem.rowname);
                const values = slicedData.map(elem => {
                    let rowValues = [];
                    const elemValues = elem.values;
                    columns.forEach(col => rowValues.push(elemValues[col]));
                    return rowValues;
                });
                previewData['columns'] = columns;
                previewData['rows'] = rows;
                previewData['values'] = values;
            }
            setTimeout(() => {
                this.isWait = false;
                this.dialog.open(_dialogs_preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PreviewDialogComponent"], {
                    data: {
                        previewData: previewData
                    }
                });
            }, 1000); // time-out for spinner
        });
    }
    /**
     * Open a modal dialog to edit workspace resource
     * Users can re-name resources
     */
    editItem(resource) {
        const dialogRef = this.dialog.open(_dialogs_edit_dialog_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditDialogComponent"], {
            data: {
                id: resource.id,
                name: resource.name,
                resource_type: resource.resource_type
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.refresh();
        });
    }
    /**
     * Open a modal dialog to delete a workspace resource from the current workspace
     *
     */
    deleteItem(resource) {
        const dialogRef = this.dialog.open(_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"], {
            data: { workspaceId: this.workspaceId, resource: resource }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.refresh();
        });
    }
    /**
     * Switch to Analyses tab when the user clicks the Run button  on the Tools tab
     *
     */
    goToAnalysesTab() {
        this.selectedTabIndex = 4;
    }
    /**
     * Refresh data when user switching between tabs
     *
     */
    onTabChanged($event) {
        const clickedIndex = $event.index;
        if (clickedIndex === 0) {
            this.refresh();
        }
    }
    /**
     * Method is triggered when the user clicks on a executed operation on the Analyses Flow Tab
     *
     */
    showExecutedOperationResult(executedOperationId) {
        this.execOperationId = executedOperationId;
        this.goToAnalysesTab();
    }
}
WorkspaceDetailComponent.ɵfac = function WorkspaceDetailComponent_Factory(t) { return new (t || WorkspaceDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_features_workspace_detail_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
WorkspaceDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkspaceDetailComponent, selectors: [["mev-workspace-detail"]], viewQuery: function WorkspaceDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 20, vars: 5, consts: [[4, "ngIf"], [1, "workspace-header"], ["routerLink", "/workarea", 1, "workspace-header__nav", "nav"], ["aria-label", "Next step", 1, "nav__icon"], [1, "nav__text"], ["class", "workspace-header__title", 4, "ngIf"], ["animationDuration", "0ms", "color", "accent", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["label", "Resources"], ["matTabContent", ""], ["label", "Metadata"], ["label", "Analysis Flow"], ["label", "Tools"], ["label", "Analyses Result"], [1, "workspace-header__title"], ["matTooltipClass", "tooltip", "fontSet", "material-icons-outlined", "aria-label", "Info tooltip about the workspace", 1, "workspace-header__icon", 3, "matTooltip"], ["class", "instruction", 4, "ngIf"], ["floatLabel", "never", 1, "search-field"], ["matInput", "", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], [1, "placeholder"], [1, "btn-panel"], [1, "btn-group"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["aria-label", "Add local data"], ["aria-label", "Add external data"], ["value", "tableMode"], ["viewMode", "matButtonToggleGroup"], ["value", "tableMode", "aria-label", "Text align left"], ["value", "cardMode", "aria-label", "Text align center"], ["class", "cardList", 4, "ngIf"], ["class", "resource-table-container mat-elevation-z8", 4, "ngIf"], [1, "instruction"], [1, "cardList"], ["class", "cardList__item card", "matRipple", "", "matRippleColor", "rgba(158, 158, 158, 0.22)", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", "matRippleColor", "rgba(158, 158, 158, 0.22)", 1, "cardList__item", "card", 3, "click"], [1, "card-title"], ["fontSet", "material-icons-outlined", "title", "Edit resource", 3, "click"], ["fontSet", "material-icons-outlined", "title", "Preview resource", 3, "click"], ["fontSet", "material-icons-outlined", "title", "Delete resource", 3, "click"], [1, "resource-table-container", "mat-elevation-z8"], ["mat-table", "", "matSort", "", "matSortActive", "date", "matSortDirection", "desc", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "readable_resource_type"], ["matColumnDef", "size"], ["matColumnDef", "created"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions", "pageIndex", "pageSize"], ["paginator", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "accent", "title", "Preview", 3, "click"], ["aria-label", "View"], ["mat-icon-button", "", "color", "accent", "title", "Delete", 3, "click"], ["aria-label", "Delete"], ["mat-icon-button", "", "color", "accent", "title", "Edit", 3, "click"], ["aria-label", "Edit"], ["mat-header-row", ""], ["mat-row", ""], [3, "workspaceResources", 4, "ngIf"], [3, "workspaceResources"], [3, "executedOperationId"], [3, "execOperationId"]], template: function WorkspaceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkspaceDetailComponent_mev_spinner_overlay_0_Template, 1, 0, "mev-spinner-overlay", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Back to File & Workspace list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorkspaceDetailComponent_span_7_Template, 6, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function WorkspaceDetailComponent_Template_mat_tab_group_selectedIndexChange_9_listener($event) { return ctx.selectedTabIndex = $event; })("selectedTabChange", function WorkspaceDetailComponent_Template_mat_tab_group_selectedTabChange_9_listener($event) { return ctx.onTabChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorkspaceDetailComponent_ng_template_11_Template, 24, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WorkspaceDetailComponent_ng_template_13_Template, 1, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkspaceDetailComponent_ng_template_15_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorkspaceDetailComponent_ng_template_17_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WorkspaceDetailComponent_ng_template_19_Template, 1, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isWait);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.workspace$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedTabIndex);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabContent"], _shared_components_spinner_overlay_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerOverlayComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatPlaceholder"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRipple"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardFooter"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"], _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_24__["MetadataComponent"], _analysis_components_analysis_flow_analysis_flow_component__WEBPACK_IMPORTED_MODULE_25__["AnalysisFlowComponent"], _analysis_components_analysis_list_analyses_component__WEBPACK_IMPORTED_MODULE_26__["AnalysesComponent"], _analysis_components_executed_operation_executed_operation_component__WEBPACK_IMPORTED_MODULE_27__["ExecutedOperationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _features_workspace_detail_pipes_search__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"], _app_shared_pipes_byte_name_pipe__WEBPACK_IMPORTED_MODULE_29__["ByteNamePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".workspace-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n}\n\n.workspace-header__nav[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-size: 14px;\n}\n\n.workspace-header__nav[_ngcontent-%COMP%]   .nav__icon[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n\n.workspace-header__title[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  left: -100px;\n}\n\n.workspace-header__icon[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.instruction[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 16px;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.search-field[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n\n.search-field[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666666;\n}\n\n.btn-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n  .tooltip {\n  white-space: pre-line !important;\n}\n\n  .mat-button-toggle-group {\n  font-size: 14px;\n}\n\n  .mat-button-toggle-label-content {\n  line-height: 36px !important;\n}\n\n  .mat-button-toggle-checked {\n  background-color: #c8ebfa !important;\n}\n\n.resource-table-container[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.resource-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resource-table-container[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%] {\n  background: #eeeeee;\n}\n\n.resource-table-container[_ngcontent-%COMP%]   .mat-column-name[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 40% !important;\n  width: 40% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.cardList[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.cardList[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.cardList__item[_ngcontent-%COMP%] {\n  margin: 15px;\n  flex: 0 1 calc(33.3% - 32px);\n}\n\n@media screen and (max-width: 959px) {\n  .cardListItem[_ngcontent-%COMP%] {\n    flex: 0 1 calc(50% - 32px);\n  }\n}\n\n@media screen and (max-width: 599px) {\n  .cardList[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n}\n\n.card-title[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.mat-card-footer[_ngcontent-%COMP%] {\n  padding: 7px;\n  text-align: right;\n}\n\n.mat-card-footer[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.mat-card-footer[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n\n.workspace-footer[_ngcontent-%COMP%] {\n  float: right;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvd29ya3NwYWNlLWRldGFpbC93b3Jrc3BhY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFFRjs7QUFBRTtFQUNFLHNCQUFBO0FBRUo7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLDZCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBRUU7RUFDRSxnQ0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUFKOztBQUdFO0VBQ0UsNEJBQUE7QUFESjs7QUFJRTtFQUNFLG9DQUFBO0FBRko7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBS0U7RUFDRSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxtQkFBQTtBQUpKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUxKOztBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBTkY7O0FBU0E7RUFDRSxzQkFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLDBCQUFBO0VBTkY7QUFDRjs7QUFTQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsMkJBQUE7RUFQRjtBQUNGOztBQVVBO0VBQ0UscUJBQUE7QUFSRjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQVJGOztBQVVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBUko7O0FBVUk7RUFDRSxXQUFBO0FBUk47O0FBYUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVZGIiwiZmlsZSI6InByb2plY3RzL3dlYi1tZXYvc3JjL2FwcC9mZWF0dXJlcy93b3Jrc3BhY2UtZGV0YWlsL2NvbXBvbmVudHMvd29ya3NwYWNlLWRldGFpbC93b3Jrc3BhY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmtzcGFjZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ud29ya3NwYWNlLWhlYWRlcl9fbmF2IHtcbiAgY29sb3I6ICMwM2E5ZjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxuICAubmF2X19pY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICB9XG59XG4ud29ya3NwYWNlLWhlYWRlcl9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogLTEwMHB4O1xufVxuXG4ud29ya3NwYWNlLWhlYWRlcl9faWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5pbnN0cnVjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2gtZmllbGQge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uc2VhcmNoLWZpZWxkIC5wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi5idG4tcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuOjpuZy1kZWVwIHtcbiAgLnRvb2x0aXAge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlYmZhICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnJlc291cmNlLXRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTVweDtcblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICB9XG5cbiAgLm1hdC1jb2x1bW4tbmFtZSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA0MCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbn1cblxuLmNhcmRMaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5jYXJkTGlzdCA+ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FyZExpc3RfX2l0ZW0ge1xuICBtYXJnaW46IDE1cHg7XG4gIGZsZXg6IDAgMSBjYWxjKDMzLjMlIC0gMzJweCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5jYXJkTGlzdEl0ZW0ge1xuICAgIGZsZXg6IDAgMSBjYWxjKDUwJSAtIDMycHgpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5jYXJkTGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxufVxuXG4uY2FyZC10aXRsZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLm1hdC1jYXJkLWZvb3RlciB7XG4gIHBhZGRpbmc6IDdweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgLm1hdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG4gIH1cbn1cblxuLndvcmtzcGFjZS1mb290ZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspaceDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mev-workspace-detail',
                templateUrl: './workspace-detail.component.html',
                styleUrls: ['./workspace-detail.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _features_workspace_detail_services_workspace_detail_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceDetailService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: false }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/pipes/annotation-files.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/workspace-detail/pipes/annotation-files.ts ***!
  \*********************************************************************/
/*! exports provided: AnnotationFilesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationFilesPipe", function() { return AnnotationFilesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Pipe to include only annotation files from the list of all available resources
 */
class AnnotationFilesPipe {
    transform(value) {
        return value.filter(item => item.resource_type == 'ANN');
    }
}
AnnotationFilesPipe.ɵfac = function AnnotationFilesPipe_Factory(t) { return new (t || AnnotationFilesPipe)(); };
AnnotationFilesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "annotationFilesPipe", type: AnnotationFilesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnotationFilesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'annotationFilesPipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/pipes/search.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/workspace-detail/pipes/search.ts ***!
  \***********************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const { isArray } = Array;
/**
 * Pipe for text searching
 */
class FilterPipe {
    transform(resources, find) {
        if (!resources)
            return [];
        if (!find)
            return resources;
        find = find.toLowerCase();
        return search(resources, find);
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();
function search(entries, search) {
    search = search.toLowerCase();
    return entries.filter(function (obj) {
        const keys = Object.keys(obj);
        return keys.some(function (key) {
            const value = obj[key];
            if (isArray(value)) {
                return value.some(v => {
                    return v.toLowerCase().includes(search);
                });
            }
            else if (!isArray(value)) {
                return String(value)
                    .toLowerCase()
                    .includes(search);
            }
        });
    });
}


/***/ }),

/***/ "./src/app/features/workspace-detail/pipes/valid-files.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/workspace-detail/pipes/valid-files.ts ***!
  \****************************************************************/
/*! exports provided: ValidFilesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidFilesPipe", function() { return ValidFilesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * To link a resource to a workspace, the file should have a valid resource type.
 * To exclude duplicate rows, we filter out the files that already have a workspace linked.
 */
class ValidFilesPipe {
    transform(value) {
        return value.filter(item => item.resource_type && !item.workspace);
    }
}
ValidFilesPipe.ɵfac = function ValidFilesPipe_Factory(t) { return new (t || ValidFilesPipe)(); };
ValidFilesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "validFilesPipe", type: ValidFilesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidFilesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'validFilesPipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/workspace-detail-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/workspace-detail/workspace-detail-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: WorkspaceDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceDetailRoutingModule", function() { return WorkspaceDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_workspace_detail_workspace_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/workspace-detail/workspace-detail.component */ "./src/app/features/workspace-detail/components/workspace-detail/workspace-detail.component.ts");





const routes = [
    // {
    //   path: ':resourceId/metadata',
    //   component: MetadataComponent
    // },
    // {
    //   path: 'analyses',
    //   component: AnalysesComponent
    // },
    // {
    //   path: 'executedOperation/:executedOperationId',
    //   component: ExecutedOperationComponent
    // },
    {
        path: '',
        component: _components_workspace_detail_workspace_detail_component__WEBPACK_IMPORTED_MODULE_2__["WorkspaceDetailComponent"],
        pathMatch: 'full'
        // children: [
        //   {
        //     path: 'analyses',
        //     loadChildren: () =>
        //     import('../analysis/analysis.module').then(m => m.AnalysisModule),
        //   }
        // ]
    }
];
class WorkspaceDetailRoutingModule {
}
WorkspaceDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkspaceDetailRoutingModule });
WorkspaceDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkspaceDetailRoutingModule_Factory(t) { return new (t || WorkspaceDetailRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkspaceDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspaceDetailRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/workspace-detail/workspace-detail.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/workspace-detail/workspace-detail.module.ts ***!
  \**********************************************************************/
/*! exports provided: WorkspaceDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceDetailModule", function() { return WorkspaceDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _workspace_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workspace-detail-routing.module */ "./src/app/features/workspace-detail/workspace-detail-routing.module.ts");
/* harmony import */ var _components_workspace_detail_workspace_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/workspace-detail/workspace-detail.component */ "./src/app/features/workspace-detail/components/workspace-detail/workspace-detail.component.ts");
/* harmony import */ var _features_workspace_detail_pipes_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/workspace-detail/pipes/search */ "./src/app/features/workspace-detail/pipes/search.ts");
/* harmony import */ var _components_dialogs_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dialogs/add-dialog/add-dialog.component */ "./src/app/features/workspace-detail/components/dialogs/add-dialog/add-dialog.component.ts");
/* harmony import */ var _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dialogs/delete-dialog/delete-dialog.component */ "./src/app/features/workspace-detail/components/dialogs/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "../../node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _pipes_valid_files__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/valid-files */ "./src/app/features/workspace-detail/pipes/valid-files.ts");
/* harmony import */ var _pipes_annotation_files__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/annotation-files */ "./src/app/features/workspace-detail/pipes/annotation-files.ts");
/* harmony import */ var _components_dialogs_preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dialogs/preview-dialog/preview-dialog.component */ "./src/app/features/workspace-detail/components/dialogs/preview-dialog/preview-dialog.component.ts");
/* harmony import */ var _components_metadata_metadata_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/metadata/metadata.component */ "./src/app/features/workspace-detail/components/metadata/metadata.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_metadata_dialogs_add_annotation_dialog_add_annotation_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/metadata/dialogs/add-annotation-dialog/add-annotation-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/add-annotation-dialog/add-annotation-dialog.component.ts");
/* harmony import */ var _components_metadata_dialogs_add_observation_set_dialog_add_observation_set_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/metadata/dialogs/add-observation-set-dialog/add-observation-set-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/add-observation-set-dialog/add-observation-set-dialog.component.ts");
/* harmony import */ var _components_metadata_dialogs_delete_set_dialog_delete_set_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/metadata/dialogs/delete-set-dialog/delete-set-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/delete-set-dialog/delete-set-dialog.component.ts");
/* harmony import */ var _components_metadata_dialogs_view_set_dialog_view_set_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/metadata/dialogs/view-set-dialog/view-set-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/view-set-dialog/view-set-dialog.component.ts");
/* harmony import */ var _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ncstate/sat-popover */ "../../node_modules/@ncstate/sat-popover/__ivy_ngcc__/fesm2015/ncstate-sat-popover.js");
/* harmony import */ var _analysis_analysis_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../analysis/analysis.module */ "./src/app/features/analysis/analysis.module.ts");
/* harmony import */ var _components_metadata_dialogs_edit_feature_set_dialog_edit_feature_set_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/metadata/dialogs/edit-feature-set-dialog/edit-feature-set-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/edit-feature-set-dialog/edit-feature-set-dialog.component.ts");
/* harmony import */ var _components_dialogs_edit_dialog_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dialogs/edit-dialog/edit-dialog/edit-dialog.component */ "./src/app/features/workspace-detail/components/dialogs/edit-dialog/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _components_metadata_dialogs_view_info_dialog_view_info_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/metadata/dialogs/view-info-dialog/view-info-dialog.component */ "./src/app/features/workspace-detail/components/metadata/dialogs/view-info-dialog/view-info-dialog.component.ts");

























class WorkspaceDetailModule {
}
WorkspaceDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkspaceDetailModule });
WorkspaceDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkspaceDetailModule_Factory(t) { return new (t || WorkspaceDetailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_19__["SatPopoverModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"],
            _analysis_analysis_module__WEBPACK_IMPORTED_MODULE_20__["AnalysisModule"],
            _workspace_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceDetailRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkspaceDetailModule, { declarations: [_components_workspace_detail_workspace_detail_component__WEBPACK_IMPORTED_MODULE_5__["WorkspaceDetailComponent"],
        _features_workspace_detail_pipes_search__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"],
        _pipes_valid_files__WEBPACK_IMPORTED_MODULE_10__["ValidFilesPipe"],
        _pipes_annotation_files__WEBPACK_IMPORTED_MODULE_11__["AnnotationFilesPipe"],
        _components_dialogs_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddDialogComponent"],
        _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteDialogComponent"],
        _components_dialogs_preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PreviewDialogComponent"],
        _components_metadata_metadata_component__WEBPACK_IMPORTED_MODULE_13__["MetadataComponent"],
        _components_metadata_dialogs_add_annotation_dialog_add_annotation_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddAnnotationDialogComponent"],
        _components_metadata_dialogs_add_observation_set_dialog_add_observation_set_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AddObservationSetDialogComponent"],
        _components_metadata_dialogs_delete_set_dialog_delete_set_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DeleteSetDialogComponent"],
        _components_metadata_dialogs_view_set_dialog_view_set_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ViewSetDialogComponent"],
        _components_metadata_dialogs_edit_feature_set_dialog_edit_feature_set_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditFeatureSetDialogComponent"],
        _components_dialogs_edit_dialog_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_22__["EditDialogComponent"],
        _components_metadata_dialogs_view_info_dialog_view_info_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ViewInfoDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_19__["SatPopoverModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
        angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"],
        _analysis_analysis_module__WEBPACK_IMPORTED_MODULE_20__["AnalysisModule"],
        _workspace_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceDetailRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspaceDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_workspace_detail_workspace_detail_component__WEBPACK_IMPORTED_MODULE_5__["WorkspaceDetailComponent"],
                    _features_workspace_detail_pipes_search__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"],
                    _pipes_valid_files__WEBPACK_IMPORTED_MODULE_10__["ValidFilesPipe"],
                    _pipes_annotation_files__WEBPACK_IMPORTED_MODULE_11__["AnnotationFilesPipe"],
                    _components_dialogs_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddDialogComponent"],
                    _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteDialogComponent"],
                    _components_dialogs_preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PreviewDialogComponent"],
                    _components_metadata_metadata_component__WEBPACK_IMPORTED_MODULE_13__["MetadataComponent"],
                    _components_metadata_dialogs_add_annotation_dialog_add_annotation_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddAnnotationDialogComponent"],
                    _components_metadata_dialogs_add_observation_set_dialog_add_observation_set_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AddObservationSetDialogComponent"],
                    _components_metadata_dialogs_delete_set_dialog_delete_set_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DeleteSetDialogComponent"],
                    _components_metadata_dialogs_view_set_dialog_view_set_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ViewSetDialogComponent"],
                    _components_metadata_dialogs_edit_feature_set_dialog_edit_feature_set_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditFeatureSetDialogComponent"],
                    _components_dialogs_edit_dialog_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_22__["EditDialogComponent"],
                    _components_metadata_dialogs_view_info_dialog_view_info_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ViewInfoDialogComponent"]
                ],
                exports: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_19__["SatPopoverModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                    angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"],
                    _analysis_analysis_module__WEBPACK_IMPORTED_MODULE_20__["AnalysisModule"],
                    _workspace_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceDetailRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-workspace-detail-workspace-detail-module-es2015.js.map