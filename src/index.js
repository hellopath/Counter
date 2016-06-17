function Counter(total, index = 0) {
	let props = {
		index: index,
		total: total,
		prev: 0,
		next: 0
	}
	let inc = (val = 1) => {
		props.index += val
		if(props.index > props.total - 1) props.index = 0
		prevNext()
	}
	let dec = (val = 1) => {
		props.index -= val
		if(props.index < 0) props.index = props.total - 1
		prevNext()
	}
	let prevNext = () => {
		props.prev = props.index - 1
		props.next = props.index + 1
		if(props.prev < 0) props.prev = props.total - 1
		if(props.next > props.total - 1) props.next = 0
	}
	prevNext()
	return { inc, dec, props }
}