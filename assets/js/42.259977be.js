(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{400:function(e,t,o){"use strict";o.r(t);var i=o(42),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"specification-ipld-composites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specification-ipld-composites"}},[e._v("#")]),e._v(" Specification: IPLD Composites")]),e._v(" "),o("p",[o("strong",[e._v("Status: Prescriptive - Exploratory")])]),e._v(" "),o("p",[e._v("Organizing IPLD data into usable, efficient, complex data structures spanning many blocks aimed for use by end-user applications.")]),e._v(" "),o("p",[e._v("This document will re-use some terms found in the "),o("RouterLink",{attrs:{to:"/design/data-model-layer/data-model.html"}},[e._v("IPLD data model")]),e._v(".")],1),e._v(" "),o("p",[e._v("IPLD Composites offer codec agnostic programming interfaces for all common operations users can currently accomplish on Data-Model "),o("RouterLink",{attrs:{to:"/design/data-model-layer/data-model.html#kinds"}},[e._v("“Kinds”")]),e._v(".")],1),e._v(" "),o("p",[e._v("Contents:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#motivation"}},[e._v("Motivation")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#requirements"}},[e._v("Requirements")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#composite-definition"}},[e._v("Composite Definition")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#operations"}},[e._v("Operations")])])]),e._v(" "),o("h2",{attrs:{id:"motivation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),o("p",[e._v("Even before the IPLD Data-Model was formally specified, developers were creating multi-block data-structures with similar semantics to single-block primitives. The most illustrative example of this is the "),o("code",[e._v("dag-pb")]),e._v(" HAMT implementation used by IPFS for large directories.")]),e._v(" "),o("p",[e._v("These early implementations of multi-block data structures exposed several problems.")]),e._v(" "),o("ul",[o("li",[e._v("They are lacking self-description. A consumer of a graph containing these structures needs to have logic on top of IPLD and vary the way it performs operations on these data structures.")]),e._v(" "),o("li",[e._v("Implementations of these data structures cannot perform operations on each other. In other words, multi-block data structures have a hard time building on top of each other.")])]),e._v(" "),o("p",[e._v("Since there wasn’t a standardized way to describe these data structures we couldn’t build libraries for paths and selectors that seamlessly supported them.")]),e._v(" "),o("p",[e._v("As we started designing this system several other requirements surfaced.")]),e._v(" "),o("ul",[o("li",[e._v("Transparent encryption envelopes on the read "),o("strong",[e._v("and")]),e._v(" write.")]),e._v(" "),o("li",[e._v("Advanced "),o("code",[e._v("Link")]),e._v(" types that can support some form of mutability and link to paths within other data structures.")]),e._v(" "),o("li",[e._v("Flexible multi-block binary types.")])]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("IPLD Composites cannot be implemented without:")]),e._v(" "),o("ul",[o("li",[e._v("The IPLD Data-Model. While composites are codec agnostic they do require the full data model be implemented by the codec.")])]),e._v(" "),o("h2",{attrs:{id:"composite-definition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#composite-definition"}},[e._v("#")]),e._v(" Composite Definition")]),e._v(" "),o("p",[e._v("Composite definitions describe how to find an implementation of the data structure. When encoded into the data these also serve as a the self-description mechanism.")]),e._v(" "),o("p",[e._v('A Composite Definition may be applied in a number of ways, either "out-of-band" by applications or "in-band" using something like the the "Fat Pointers" discussed briefly below.')]),e._v(" "),o("p",[o("em",[o("strong",[e._v("Open Issue: Fat Pointers")])])]),e._v(" "),o("p",[e._v("Early experiments simply reserved the "),o("code",[e._v("_type")]),e._v(" property for composites to describe themselves. Reserving this property by default across any data in any block is highly problematic and makes it impossible to express certain data in IPLD.")]),e._v(" "),o("p",[e._v('What we need in order to move forward to enable some version of "fat pointer" is still under discussion. Some\nextension/modification to '),o("code",[e._v("CID")]),e._v(" in order to signal that “the data being linked to is a composite definition” at\nwhich point we can safely ad semantics to "),o("code",[e._v("_type")]),e._v(" or other properties without reserving any property universally\nwould work but there may be other options we have yet to explore.")]),e._v(" "),o("h3",{attrs:{id:"version-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#version-1"}},[e._v("#")]),e._v(" Version 1")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("_type")]),e._v(" property is a string identifier. This identifier is used to lookup the implementation and if it cannot be found by the host environment any operation is expected to throw an exception. When a Composite Definition is applied, implementations MUST NOT fallback to "),o("em",[e._v("Layer 1")]),e._v(" operations on the contents of the node if they do not have an implementation.")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"_type"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"IPLD/Experimental/HAMT/0"')]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("h3",{attrs:{id:"version-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#version-2"}},[e._v("#")]),e._v(" Version 2")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("_type")]),e._v(" property is a "),o("code",[e._v("Map")]),e._v(".")]),e._v(" "),o("p",[e._v("The map must contain the following properties.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("name")]),e._v(" must be a string identifier.")]),e._v(" "),o("li",[o("code",[e._v("engine")]),e._v(" must be one of the following:\n"),o("ul",[o("li",[o("code",[e._v("”IPLD/Engine/WASM/0”")])])])])]),e._v(" "),o("p",[e._v("Each additional property describes the implementation of every operation.")]),e._v(" "),o("p",[o("em",[e._v("TODO: define structure of pointers to WASM functions")])])])}),[],!1,null,null,null);t.default=s.exports}}]);