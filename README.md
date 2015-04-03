Javascript Performance breakdown examples

```
$ node global-variables.js
global loop ops/sec 323310
local scope loop ops/sec 2087682

$ node hidden-type.js
Unmodified object ops/sec 3344
Modified object ops/sec 593

$ node looping-over-object-properties.js
Object.keys ops/sec 1707
for..in ops/sec 658

$ node sparse-arrays.js
contiguous ops/sec 19267
sparse ops/sec 13458
```
