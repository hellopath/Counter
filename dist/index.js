"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Counter = function Counter(total) {
	var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	var props = {
		index: index,
		total: total,
		prev: 0,
		next: 0
	};
	var inc = function inc() {
		var val = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

		props.index += val;
		if (props.index > props.total - 1) props.index = 0;
		prevNext();
	};
	var dec = function dec() {
		var val = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

		props.index -= val;
		if (props.index < 0) props.index = props.total - 1;
		prevNext();
	};
	var prevNext = function prevNext() {
		props.prev = props.index - 1;
		props.next = props.index + 1;
		if (props.prev < 0) props.prev = props.total - 1;
		if (props.next > props.total - 1) props.next = 0;
	};
	var set = function set() {
		var val = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		if (val < 0) val = 0;
		if (val > props.total - 1) val = props.total - 1;
		props.index = val;
		prevNext();
	};
	prevNext();
	return { inc: inc, dec: dec, set: set, props: props };
};

exports.default = Counter;