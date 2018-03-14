// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

export interface Token { value: any; [key: string]: any };

export interface Lexer {
  reset: (chunk: string, info: any) => void;
  next: () => Token | undefined;
  save: () => any;
  formatError: (token: Token) => string;
  has: (tokenType: string) => boolean
};

export interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any
};

export type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

export var Lexer: Lexer | undefined = undefined;

export var ParserRules: NearleyRule[] = [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dqstring$ebnf$1", "dstrchar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sqstring$ebnf$1", "sstrchar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": ["btstring$ebnf$1", /[^`]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": function(d) { return JSON.parse("\""+d.join("")+"\""); }},
    {"name": "sstrchar$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": (d) => d.join('')},
    {"name": "sstrchar", "symbols": ["sstrchar$string$1"], "postprocess": function(d) {return "'"; }},
    {"name": "strescape", "symbols": [/["\\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "map", "symbols": ["difficulty", "bpms", "layers", "effects", "speeds", "annotations", "notes"]},
    {"name": "difficulty", "symbols": ["diffIdentifier", "__", "int", "_", {"literal":"\n"}], "postprocess": function(d) {return {difficulty:d[2]}}},
    {"name": "bpms$ebnf$1", "symbols": ["bpm"]},
    {"name": "bpms$ebnf$1", "symbols": ["bpms$ebnf$1", "bpm"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "bpms", "symbols": ["bpmIdentifier", "bpms$ebnf$1", "endIdentifier"], "postprocess": function(d) {return {bpms:d[1]}}},
    {"name": "layers$ebnf$1", "symbols": []},
    {"name": "layers$ebnf$1", "symbols": ["layers$ebnf$1", "layer"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "layers", "symbols": ["layersIdentifier", "layers$ebnf$1", "endIdentifier"], "postprocess": function(d) {return {layers:d[1]}}},
    {"name": "effects", "symbols": ["effectsIdentifier", "endIdentifier"], "postprocess": function(d) {return {effects:null}}},
    {"name": "speeds$ebnf$1", "symbols": []},
    {"name": "speeds$ebnf$1", "symbols": ["speeds$ebnf$1", "speed"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "speeds", "symbols": ["speedsIdentifier", "speeds$ebnf$1", "endIdentifier"], "postprocess": function(d) {return {speeds:d[1]}}},
    {"name": "annotations", "symbols": ["annotationsIdentifier", "endIdentifier"], "postprocess": function(d) {return {annotations:null}}},
    {"name": "notes$ebnf$1", "symbols": []},
    {"name": "notes$ebnf$1", "symbols": ["notes$ebnf$1", "note"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "notes", "symbols": ["notesIdentifier", "notes$ebnf$1", "endIdentifier", "fileEndIdentifier"], "postprocess": function(d) {return {notes:d[1]}}},
    {"name": "bpm", "symbols": ["decimal", "__", "decimal", {"literal":"\n"}], "postprocess": function(d) {return {type: 'bpm', millisecond: d[0], value: d[2]}}},
    {"name": "layer", "symbols": ["unsigned_int", "__", "unsigned_int", "__", "string", "_", {"literal":"\n"}], "postprocess": function(d) {return {type: 'layer', number:d[0], color:d[2], name:d[4].v}}},
    {"name": "speed", "symbols": ["decimal", "__", "decimal", "_", {"literal":"\n"}], "postprocess": function(d) {return {type: 'speed', millisecond:d[0], value:d[2]}}},
    {"name": "note", "symbols": ["decimal", "__", "decimal", "__", "lane", "__", "decimal", "__", {"literal":"0"}, "_", {"literal":"\n"}], "postprocess": function(d) {return {type: 'note', millisecond:d[0], duration:d[2], lane:d[4], color:d[6], unused:0}}},
    {"name": "diffIdentifier$string$1", "symbols": [{"literal":"$"}, {"literal":"~"}, {"literal":"D"}, {"literal":"I"}, {"literal":"F"}, {"literal":"F"}], "postprocess": (d) => d.join('')},
    {"name": "diffIdentifier", "symbols": ["diffIdentifier$string$1"]},
    {"name": "bpmIdentifier$string$1", "symbols": [{"literal":"!"}, {"literal":"~"}, {"literal":"B"}, {"literal":"P"}, {"literal":"M"}, {"literal":"S"}], "postprocess": (d) => d.join('')},
    {"name": "bpmIdentifier", "symbols": ["bpmIdentifier$string$1", {"literal":"\n"}]},
    {"name": "endIdentifier$string$1", "symbols": [{"literal":"!"}, {"literal":"~"}, {"literal":"E"}, {"literal":"N"}, {"literal":"D"}], "postprocess": (d) => d.join('')},
    {"name": "endIdentifier", "symbols": ["endIdentifier$string$1", {"literal":"\n"}]},
    {"name": "layersIdentifier$string$1", "symbols": [{"literal":"!"}, {"literal":"~"}, {"literal":"L"}, {"literal":"A"}, {"literal":"Y"}, {"literal":"E"}, {"literal":"R"}, {"literal":"S"}], "postprocess": (d) => d.join('')},
    {"name": "layersIdentifier", "symbols": ["layersIdentifier$string$1", {"literal":"\n"}]},
    {"name": "effectsIdentifier$string$1", "symbols": [{"literal":"!"}, {"literal":"~"}, {"literal":"E"}, {"literal":"F"}, {"literal":"F"}, {"literal":"E"}, {"literal":"C"}, {"literal":"T"}, {"literal":"S"}], "postprocess": (d) => d.join('')},
    {"name": "effectsIdentifier", "symbols": ["effectsIdentifier$string$1", {"literal":"\n"}]},
    {"name": "speedsIdentifier$string$1", "symbols": [{"literal":"!"}, {"literal":"~"}, {"literal":"S"}, {"literal":"P"}, {"literal":"E"}, {"literal":"E"}, {"literal":"D"}, {"literal":"S"}], "postprocess": (d) => d.join('')},
    {"name": "speedsIdentifier", "symbols": ["speedsIdentifier$string$1", {"literal":"\n"}]},
    {"name": "annotationsIdentifier$string$1", "symbols": [{"literal":"!"}, {"literal":"~"}, {"literal":"A"}, {"literal":"N"}, {"literal":"N"}, {"literal":"O"}, {"literal":"T"}, {"literal":"A"}, {"literal":"T"}, {"literal":"I"}, {"literal":"O"}, {"literal":"N"}, {"literal":"S"}], "postprocess": (d) => d.join('')},
    {"name": "annotationsIdentifier", "symbols": ["annotationsIdentifier$string$1", {"literal":"\n"}]},
    {"name": "notesIdentifier$string$1", "symbols": [{"literal":"!"}, {"literal":"~"}, {"literal":"N"}, {"literal":"O"}, {"literal":"T"}, {"literal":"E"}, {"literal":"S"}], "postprocess": (d) => d.join('')},
    {"name": "notesIdentifier", "symbols": ["notesIdentifier$string$1", {"literal":"\n"}]},
    {"name": "fileEndIdentifier$string$1", "symbols": [{"literal":"$"}, {"literal":"~"}, {"literal":"E"}, {"literal":"N"}, {"literal":"D"}], "postprocess": (d) => d.join('')},
    {"name": "fileEndIdentifier", "symbols": ["fileEndIdentifier$string$1"]},
    {"name": "string$ebnf$1", "symbols": [/[a-zA-Z0-9_]/]},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", /[a-zA-Z0-9_]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "string", "symbols": ["string$ebnf$1"], "postprocess": function(d) {return {v:d[0].join('')}}},
    {"name": "lane", "symbols": [/[0-6]/], "postprocess": function(d) {return parseInt(d[0])}}
];

export var ParserStart: string = "map";
