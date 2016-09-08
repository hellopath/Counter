const Counter = (total, index = 0) => {
	const props = {
		index: index,
		total: total,
		prev: 0,
		next: 0
	}
	const inc = (val = 1) => {
		props.index += val
		if(props.index > props.total - 1) props.index = 0
		prevNext()
	}
	const dec = (val = 1) => {
		props.index -= val
		if(props.index < 0) props.index = props.total - 1
		prevNext()
	}
	const prevNext = () => {
		props.prev = props.index - 1
		props.next = props.index + 1
		if(props.prev < 0) props.prev = props.total - 1
		if(props.next > props.total - 1) props.next = 0
	}
	const set = (val = 0) => {
		if (val < 0) val = 0
		if (val > props.total - 1) val = props.total - 1
		props.index = val
		prevNext()
	}
	prevNext()
	return { inc, dec, set, props }
}

export default Counter