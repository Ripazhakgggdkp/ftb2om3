# Match a CSS color
# http://www.w3.org/TR/css3-color/#colorunits
@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace
@builtin "number.ne"     # `int`, `decimal`, and `percentage` number primitives
@builtin "string.ne"     # Matches various kinds of string literals

map -> difficulty bpms layers effects speeds
difficulty -> diffIdentifier
bpms -> bpmIdentifier bpm:+ endIdentifier 
bpm -> decimal __ decimal "\n"
layers -> layersIdentifier layerEntity:* endIdentifier {% function(d) {return {layers:d[1]}}%}
speeds -> speedsIdentifier speedEntity:* 


layerEntity -> layerNumber __ layerColor __ layerName "\n" {% function(d) {return {type: 'layer',m:d, number:d[0].v, color:d[2].v, name:d[5].v}}%}
layerNumber -> int {% function(d) {return {type: 'layerNumber', v:d[0]}}%}
layerColor -> int {% function(d) {return {type: 'layerColor', v:d[0]}}%}
layerName -> string {% function(d) {return {type: 'layerName', v:d[0]}}%}

effects -> effectsIdentifier endIdentifier

speedEntity -> speedMillisecond __ speedValue "\n"
speedMillisecond -> decimal
speedValue -> decimal

 
diffIdentifier -> "$~DIFF" __  int "\n"
bpmIdentifier -> "!~BPMS" "\n"
endIdentifier -> "!~END" "\n"
layersIdentifier -> "!~LAYERS" "\n"
layerName -> sstrchar
effectsIdentifier -> "!~EFFECTS" "\n"
speedsIdentifier -> "!~SPEEDS" "\n"
annotationsIdentifier -> "!~ANNOTATIONS"
notesIdentifier -> "!~NOTES"
fileEndIdentifier -> "$~END"

string -> char:+ {% function(d) {return {v:d[0]}}%}
char -> [a-zA-Z0-9_] {% function(d) {return {v:d[0].v}}%}


