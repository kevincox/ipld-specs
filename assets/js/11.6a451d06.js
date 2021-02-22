(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(e,t,a){"use strict";a.r(t);var s=a(41),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"specification-cids"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification-cids"}},[e._v("#")]),e._v(" Specification: CIDs")]),e._v(" "),a("p",[a("strong",[e._v("Status: Descriptive - Final")])]),e._v(" "),a("p",[e._v('This document will use the words "Content IDs" or "CIDs" interchangeably.')]),e._v(" "),a("p",[e._v("Prior Base58 Multihash links to Protobuf data is referred to as CID Version 0.")]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("A CID is a hash-based content identifier. Includes the "),a("code",[e._v("codec")]),e._v(" and "),a("code",[e._v("multihash")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+-------+------------------------------+\n| Codec | Multihash                    |\n+-------+------------------------------+\n")])])]),a("p",[e._v("The long version:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+------------------------------+\n|Codec                         |\n+------------------------------+\n|Multihash                     |\n| +----------+---------------+ |\n| |Hash Type | Hash Value    | |\n| +----------+---------------+ |\n|                              |\n+------------------------------+\n")])])]),a("h2",{attrs:{id:"cids-version-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cids-version-1"}},[e._v("#")]),e._v(" CIDs Version 1")]),e._v(" "),a("p",[e._v("Putting together the IPLD Link update statements above, we can term the new handle for IPLD data CID Version 1, with a multibase prefix, a version, a packed multicodec, and a multihash.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<mbase><version><mcodec><mhash>\n")])])]),a("p",[e._v("Where:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<mbase>")]),e._v(" is a multibase prefix describing the base that encodes this CID. If binary, this is omitted.")]),e._v(" "),a("li",[a("code",[e._v("<version>")]),e._v(" is the version number of the cid.")]),e._v(" "),a("li",[a("code",[e._v("<mcodec>")]),e._v(" is a multicodec-packed identifier, from the CID multicodec table")]),e._v(" "),a("li",[a("code",[e._v("<mhash>")]),e._v(" is a cryptographic multihash, including: "),a("code",[e._v("<mhash-code><mhash-len><mhash-value>")])])]),e._v(" "),a("p",[e._v("Note that all CIDs v1 and on should always begin with "),a("code",[e._v("<mbase><version>")]),e._v(", this evolving nicely.")]),e._v(" "),a("h3",{attrs:{id:"multicodec-packed-representation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicodec-packed-representation"}},[e._v("#")]),e._v(" Multicodec Packed Representation")]),e._v(" "),a("p",[e._v("It is useful to have a compact version of multicodec, for use in small identifiers. This compact identifier will just be a single varint, looked up in a table. Different applications can use different tables. We should probably have one common table for well-known formats.")]),e._v(" "),a("p",[e._v("We will establish a table for common authenticated data structure formats, for example: IPFS v0 Merkledag, CBOR IPLD, Git, Bitcoin, and more. The table is a simple varint lookup.")]),e._v(" "),a("h3",{attrs:{id:"distinguishing-v0-and-v1-cids-old-and-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distinguishing-v0-and-v1-cids-old-and-new"}},[e._v("#")]),e._v(" Distinguishing v0 and v1 CIDs (old and new)")]),e._v(" "),a("p",[e._v("It is a HARD CONSTRAINT that all IPFS links continue to work. This means we need to continue to support v0 CIDs. This means IPFS APIs must accept both v0 and v1 CIDs. This section defines how to distinguish v0 from v1 CIDs.")]),e._v(" "),a("p",[e._v("Old v0 CIDs are strictly sha2-256 multihashes encoded in base58 -- this is because IPFS tooling only shipped with support for sha2-256. This means the binary versions are 34 bytes long (sha2-256 256 bit multihash), and that the string versions are 46 characters long (base58 encoded). This means we can recognize a v0 CID by ensuring it is a sha256 bit multihash, of length 256 bits, and base58 encoded (when a string). Basically:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<mbase>")]),e._v(" is implicitly base58.")]),e._v(" "),a("li",[a("code",[e._v("<version>")]),e._v(" is implicitly 0.")]),e._v(" "),a("li",[a("code",[e._v("<mcodec>")]),e._v(" is implicitly protobuf (for backwards compat with v0).")]),e._v(" "),a("li",[a("code",[e._v("<mhash>")]),e._v(" is a cryptographic multihash, explicit.")])]),e._v(" "),a("p",[e._v("We can re-write old v0 CIDs into v1 CIDs, by making the elements explicit. This should be done henceforth to avoid creating more v0 CIDs. But note that many references exist in the wild, and thus we must continue supporting v0 links. In the distant future, we may remove this support after sha2 breaks.")]),e._v(" "),a("p",[e._v("Note we can cleanly distinguish the values, which makes it easy to support both. The code for this check is here: https://gist.github.com/jbenet/bf402718a7955bf636fb47d214bcef8a")]),e._v(" "),a("h3",{attrs:{id:"ipld-supports-non-cid-hash-links-as-implicit-cidv1s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipld-supports-non-cid-hash-links-as-implicit-cidv1s"}},[e._v("#")]),e._v(" IPLD supports non-CID hash links as implicit CIDv1s")]),e._v(" "),a("p",[e._v("Note that raw hash links "),a("em",[e._v("stored in various data structures")]),e._v(' (e.g. Protobuf, Git, Bitcoin, Ethereum, etc) already exist. These links -- when loaded directly as one of these data structures -- can be seen as "linking within a network" whereas proper CIDv1 IPLD links can be seen as linking "across networks" (internet of data! internet of data structures!). Supporting these existing (or even new) raw hash links as a CIDv1 can be done by noting that when on data structure links with just a raw binary link, the rest of the CIDv1 fields are implicit:')]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<mbase>")]),e._v(" is implicitly binary or whatever the format encodes.")]),e._v(" "),a("li",[a("code",[e._v("<version>")]),e._v(" is implicitly 1.")]),e._v(" "),a("li",[a("code",[e._v("<mcodec>")]),e._v(" is implicitly the same as the data structure.")]),e._v(" "),a("li",[a("code",[e._v("<mhash>")]),e._v(" can be determined from the raw hash.")])]),e._v(" "),a("p",[e._v("Basically, we construct the corresponding CIDv1 out of the raw hash link because all the other information is "),a("em",[e._v("in the context")]),e._v(" of the data structure. This is very useful because it allows:")]),e._v(" "),a("ul",[a("li",[e._v("more compact encoding of a CIDv1 when linking from one data struct to another")]),e._v(" "),a("li",[e._v("linking from CBOR IPLD to other CBOR IPLD objects exactly as has been spec-ed out so far, so any IPLD adopters continue working.")]),e._v(" "),a("li",[e._v("(most important) opens the door for native support of other data structures")])]),e._v(" "),a("h3",{attrs:{id:"ipld-addresses-raw-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipld-addresses-raw-data"}},[e._v("#")]),e._v(" IPLD addresses raw data")]),e._v(" "),a("p",[e._v("Given the above addressing changes, it is now possible to address raw data directly, as an IPLD node. This node is of course taken to be just a byte buffer, and devoid of links (i.e. a leaf node).")]),e._v(" "),a("p",[e._v("The utility of this is the ability to directly address any object via hashing external to IPLD datastructures.")]),e._v(" "),a("h3",{attrs:{id:"support-for-multiple-binary-packed-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-for-multiple-binary-packed-formats"}},[e._v("#")]),e._v(" Support for multiple binary packed formats")]),e._v(" "),a("p",[e._v("Contrary to prior Merkle objects (e.g. IPFS protobuf legacy, git, bitcoin, dat and others), new IPLD ojects are authenticated AND self described data blobs, each IPLD object is serialized and prefixed by a multicodec identifying its format.")])])}),[],!1,null,null,null);t.default=i.exports}}]);