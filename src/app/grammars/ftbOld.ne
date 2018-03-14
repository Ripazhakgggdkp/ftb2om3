@preprocessor typescript

# Match an ftb classic map
@builtin "whitespace.ne"
@builtin "number.ne"   
@builtin "string.ne"    

map   -> start bpm:* note:*                   {% function(d) { return { bpms:d[1], notes:d[2]}} %}

start -> "###FILE ALREADY PARSED###" _ "\n"

note  -> decimal __ "0" __ lane _             {% function(d) { return {type: 'note', millisecond: d[0], lane: d[4]}} %}
       | decimal "-" decimal __ "0" __ lane _ {% function(d) { return {type: 'hold', start: d[0], end: d[2], lane: d[6]} }%}
bpm   -> "BPM" __ decimal __ decimal _        {% function(d) { return {type: 'bpm', millisecond: d[0], value: d[4]}} %}
lane  -> [1-7]                                {% function(d) {return parseInt(d[0])} %}                                               



