@preprocessor typescript

# Match an ftb air map
@builtin "whitespace.ne"
@builtin "number.ne"   
@builtin "string.ne"    

map -> difficulty bpms layers effects speeds annotations notes

difficulty  -> diffIdentifier __  int _ "\n"                            {% function(d) {return {difficulty:d[2]}} %}
bpms        -> bpmIdentifier bpm:+ endIdentifier                        {% function(d) {return {bpms:d[1]}} %}
layers      -> layersIdentifier layer:* endIdentifier                   {% function(d) {return {layers:d[1]}} %}
effects     -> effectsIdentifier endIdentifier                          {% function(d) {return {effects:null}} %}
speeds      -> speedsIdentifier speed:* endIdentifier                   {% function(d) {return {speeds:d[1]}} %}
annotations -> annotationsIdentifier endIdentifier                      {% function(d) {return {annotations:null}} %}
notes       -> notesIdentifier note:* endIdentifier fileEndIdentifier   {% function(d) {return {notes:d[1]}} %}


bpm   -> decimal __ decimal "\n"                             {% function(d) {return {type: 'bpm', millisecond: d[0], value: d[2]}} %}
layer -> unsigned_int __ unsigned_int __ string _ "\n"       {% function(d) {return {type: 'layer', number:d[0], color:d[2], name:d[4].v}} %}
speed -> decimal __ decimal _ "\n"                           {% function(d) {return {type: 'speed', millisecond:d[0], value:d[2]}}%}
note  -> decimal __ decimal __ lane __ decimal __ "0" _ "\n" {% function(d) {return {type: 'note', millisecond:d[0], duration:d[2], lane:d[4], color:d[6], unused:0}} %}


diffIdentifier        -> "$~DIFF"
bpmIdentifier         -> "!~BPMS" "\n"
endIdentifier         -> "!~END" "\n"
layersIdentifier      -> "!~LAYERS" "\n"
effectsIdentifier     -> "!~EFFECTS" "\n"
speedsIdentifier      -> "!~SPEEDS" "\n"
annotationsIdentifier -> "!~ANNOTATIONS" "\n"
notesIdentifier       -> "!~NOTES" "\n"
fileEndIdentifier     -> "$~END"

string -> [a-zA-Z0-9_]:+ {% function(d) {return {v:d[0].join('')}} %}
lane   -> [0-6]          {% function(d) {return parseInt(d[0])} %}                                               



