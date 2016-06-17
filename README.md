# Counter
<p>Just a simple counter that when comes to the end go back to zero and when go less than zero return to total index</p>

Properties: <br>
<code>
index 	//current index<br>
total 	//total items<br>
prev 	//previous index<br>
next 	//next index <br>
</code>

Example: <br>

<code>
var totalLength = 3<br>
// Starts from 0, you can specify a start index as second parameter<br>
var counter = Counter(totalLength, startIndex)<br>
counter.inc() // counter = 1<br>
counter.inc() // counter = 2<br>
counter.dec() // counter = 1<br>
counter.dec() // counter = 0<br>
counter.dec() // counter = 2<br>
</code>

