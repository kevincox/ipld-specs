(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{378:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dag-pb-spec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dag-pb-spec"}},[e._v("#")]),e._v(" DAG-PB Spec")]),e._v(" "),a("p",[a("strong",[e._v("Status: Descriptive - Final")])]),e._v(" "),a("p",[e._v("DAG-PB is an IPLD codec that uses "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),a("OutboundLink")],1),e._v(" to describe a binary format that can encode a byte array and an associated list of links. It is the primary means of encoding structured file data for "),a("a",{attrs:{href:"https://ipfs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPFS"),a("OutboundLink")],1),e._v(", serving as the encoded data carrier for "),a("a",{attrs:{href:"https://docs.ipfs.io/concepts/file-systems/#unix-file-system-unixfs",target:"_blank",rel:"noopener noreferrer"}},[e._v("UnixFS"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("DAG-PB does not support the full "),a("RouterLink",{attrs:{to:"/data-model-layer/data-model.html"}},[e._v("IPLD Data Model")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"implementations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementations"}},[e._v("#")]),e._v(" Implementations")]),e._v(" "),a("ul",[a("li",[e._v("JavaScript\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ipld/js-dag-pb",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ipld/dag-pb"),a("OutboundLink")],1),e._v(" - compatible with "),a("a",{attrs:{href:"https://github.com/multiformats/js-multiformats",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiformats"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ipld/js-ipld-dag-pb",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipld-dag-pb"),a("OutboundLink")],1),e._v(" - legacy implementation")])])]),e._v(" "),a("li",[e._v("Go\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ipld/go-codec-dagpb",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-codec-dagpb"),a("OutboundLink")],1),e._v(" - for use with "),a("a",{attrs:{href:"https://github.com/ipld/go-ipld-prime",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-ipld-prime"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ipfs/go-merkledag/tree/master/pb",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-merkledag/pb"),a("OutboundLink")],1),e._v(" - legacy implementation")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ipld/go-ipld-prime-proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-ipld-prime-proto"),a("OutboundLink")],1),e._v(" - read-only interface for go-merkledag/pb through "),a("a",{attrs:{href:"https://github.com/ipld/go-ipld-prime",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-ipld-prime"),a("OutboundLink")],1)])])])]),e._v(" "),a("h2",{attrs:{id:"serial-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-format"}},[e._v("#")]),e._v(" Serial Format")]),e._v(" "),a("p",[e._v("The DAG-PB IPLD serial format is described with a single protobuf:")]),e._v(" "),a("div",{staticClass:"language-protobuf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PBLink")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// binary CID (with no multibase prefix) of the target object")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("optional")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" Hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// UTF-8 string name")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("optional")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" Name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// cumulative size of target object")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("optional")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint64")]),e._v(" Tsize "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PBNode")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// refs to other objects")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("repeated")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[e._v("PBLink")]),e._v(" Links "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// opaque user data")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("optional")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" Data "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"protobuf-strictness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf-strictness"}},[e._v("#")]),e._v(" Protobuf Strictness")]),e._v(" "),a("p",[e._v("DAG-PB aims to have a "),a("strong",[e._v("canonical form")]),e._v(" for any given set of data. Therefore, in addition to the standard Protobuf parsing rules, DAG-PB decoders should enforce additional constraints to ensure canonical forms (where possible):")]),e._v(" "),a("ol",[a("li",[e._v("Fields must appear in their correct order as defined by the Protobuf schema above, blocks with out-of-order fields should be rejected. It is common for Protobuf decoders to accept out-of-order field entries.")]),e._v(" "),a("li",[e._v("Duplicate entries in the binary form are invalid, blocks with duplicate field values should be rejected. It is common for Protobuf decoders to accept "),a("em",[e._v("updates")]),e._v(" to fields that have already been set.")]),e._v(" "),a("li",[e._v("Fields and wire types other than those that appear in the Protobuf schema above are invalid and blocks containing these should be rejected. It is common for Protobuf decoders to skip data in each message type that does not match the fields in the schema.")])]),e._v(" "),a("h2",{attrs:{id:"logical-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logical-format"}},[e._v("#")]),e._v(" Logical Format")]),e._v(" "),a("p",[e._v("When we handle DAG-PB content at the Data Model level, we treat these objects as maps.")]),e._v(" "),a("p",[e._v("This layout can be expressed with "),a("RouterLink",{attrs:{to:"/schemas/"}},[e._v("IPLD Schemas")]),e._v(" as:")],1),e._v(" "),a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PBNode")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  Links "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("PBLink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  Data "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("optional")]),e._v(" Bytes\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PBLink")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  Hash Link\n  Name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("optional")]),e._v(" String\n  Tsize "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("optional")]),e._v(" Int\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[e._v("#")]),e._v(" Constraints")]),e._v(" "),a("ul",[a("li",[e._v("The first node in a block of DAG-PB data will match the "),a("code",[e._v("PBNode")]),e._v(" type.")]),e._v(" "),a("li",[a("code",[e._v("Data")]),e._v(" may be omitted or a byte array with a length of zero or more.")]),e._v(" "),a("li",[a("code",[e._v("Links")]),e._v(":\n"),a("ul",[a("li",[e._v("must be present, even if empty; the binary form makes no distinction between an empty array and an omitted value, in the Data Model we always instantiate an array.")]),e._v(" "),a("li",[e._v("elements must be sorted in ascending order by their "),a("code",[e._v("Name")]),e._v(" values, which are compared by bytes rather than as strings.\n"),a("ul",[a("li",[a("code",[e._v("Name")]),e._v("s must be unique or be omitted.")])])])])]),e._v(" "),a("li",[a("code",[e._v("Hash")]),e._v(":\n"),a("ul",[a("li",[e._v("even though "),a("code",[e._v("Hash")]),e._v(" is "),a("code",[e._v("optional")]),e._v(" in the Protobuf encoding, it should not be treated as optional when creating new blocks or decoding existing ones, an omitted "),a("code",[e._v("Hash")]),e._v(" should be interpreted as a bad block")]),e._v(" "),a("li",[e._v("the bytes in the encoding format is interpreted as the bytes of a CID, if the bytes cannot be converted to a CID then it should be treated as a bad block.")]),e._v(" "),a("li",[e._v("the data is encoded in the binary form as a byte array, it is therefore possible for a decoder to read a correct binary form but fail to convert a "),a("code",[e._v("Hash")]),e._v(" to a CID and therefore treat it as a bad block.")])])]),e._v(" "),a("li",[e._v("When creating data, you can create maps using the standard Data Model concepts, and as long as they have exactly these fields. If additional fields are present, the DAG-PB codec will error, because there is no way to encode them.")])]),e._v(" "),a("p",[e._v("Both the most recent "),a("a",{attrs:{href:"https://github.com/ipld/js-dag-pb",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/ipld/go-codec-dagpb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go"),a("OutboundLink")],1),e._v(" implementations strictly expose this logical format via the Data Model and do not support alternative means of resolving paths via named links as the legacy implementations do (see below).")]),e._v(" "),a("h2",{attrs:{id:"alternative-legacy-pathing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-legacy-pathing"}},[e._v("#")]),e._v(" Alternative (Legacy) Pathing")]),e._v(" "),a("p",[e._v("While the "),a("a",{attrs:{href:"#logical-format"}},[e._v("logical format")]),e._v(" implicitly describes a set of mechanisms for pathing over and through DAG-PB data in strict Data Model form, legacy implementations afford a means of resolving paths by privileging the "),a("code",[e._v("Name")]),e._v(" in links.")]),e._v(" "),a("p",[e._v("This alternative pathing is covered here as part of this descriptive spec, but was developed independently of the Data Model and is thus not well standardized.\nThe alternative pathing mechanisms differ between implementations and has been removed from the newer implementations entirely.")]),e._v(" "),a("p",[e._v("The legacy "),a("a",{attrs:{href:"https://github.com/ipfs/go-merkledag/tree/master/pb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"github.com/ipld/js-ipld-dag-pb"}},[e._v("JavaScript")]),e._v(" implementations both support pathing with link names: "),a("code",[e._v("/<name1>/<name2>/…")]),e._v(".")]),e._v(" "),a("p",[e._v("In the legacy Go implementation, this is the only way, which implies that is is impossible to path through nodes that don't name their links. Also neither the Data section nor the Links section/metadata are accessible through paths.")]),e._v(" "),a("p",[e._v("In the legacy JavaScript implementation, there is an additional way to path through the data. It's based purely on the structure of object, i.e. "),a("code",[e._v("/Links/<index>/Hash/…")]),e._v(". This way you have direct access to the "),a("code",[e._v("Data")]),e._v(", "),a("code",[e._v("Links")]),e._v(", and "),a("code",[e._v("size")]),e._v(" fields, e.g. "),a("code",[e._v("/Links/<index>/Hash/Data")]),e._v(".")]),e._v(" "),a("p",[e._v("These two ways of pathing can be combined, so you can access e.g. the "),a("code",[e._v("Data")]),e._v(" field of a named link via "),a("code",[e._v("/<name/Data")]),e._v(". You can also use both approaches within a single path, e.g. "),a("code",[e._v("/<name1>/Links/0/Hash/Data")]),e._v(" or "),a("code",[e._v("/Links/<index>/Hash/<name>/Data")]),e._v(". When using the DAG API in js-ipfs, then the pathing over the structure has precedence, so you won't be able to use named pathing on a named link called "),a("code",[e._v("Links")]),e._v(", you would need to use the index of the link instead.")]),e._v(" "),a("p",[e._v("Both the most recent "),a("a",{attrs:{href:"https://github.com/ipld/js-dag-pb",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/ipld/go-codec-dagpb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go"),a("OutboundLink")],1),e._v(" implementations do not expose novel pathing mechanisms but adhere strictly to the IPLD Data Model as described in the above "),a("a",{attrs:{href:"#logical-format"}},[e._v("Logical Format")]),e._v(" schema.")]),e._v(" "),a("h2",{attrs:{id:"zero-length-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zero-length-blocks"}},[e._v("#")]),e._v(" Zero-length blocks")]),e._v(" "),a("p",[e._v("The zero-length DAG-PB block is valid and will be decoded as having null "),a("code",[e._v("Data")]),e._v(" and an empty "),a("code",[e._v("Links")]),e._v(" arrau.")]),e._v(" "),a("p",[e._v("With a SHA2-256 multihash, the CID of this block is:")]),e._v(" "),a("ul",[a("li",[e._v("CIDv1: "),a("code",[e._v("bafybeihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku")])]),e._v(" "),a("li",[e._v("CIDv0: "),a("code",[e._v("QmdfTbBqBPQ7VNxZEYEj14VmRuZBkqFbiwReogJgS1zR1n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);