(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{393:function(e,t,n){"use strict";n.r(t);var a=n(42),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"what-to-do-about-integer-range"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-to-do-about-integer-range"}},[e._v("#")]),e._v(" What to do about integer range?")]),e._v(" "),n("h2",{attrs:{id:"concepts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),n("h3",{attrs:{id:"cardinality"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cardinality"}},[e._v("#")]),e._v(" cardinality")]),e._v(" "),n("p",[e._v("See the "),n("RouterLink",{attrs:{to:"/concepts/type-theory-glossary.html#cardinality"}},[e._v("Cardinality")]),e._v(" chapter\nin the Type Theory Glossary concepts doc.")],1),e._v(" "),n("h3",{attrs:{id:"totality"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#totality"}},[e._v("#")]),e._v(" totality")]),e._v(" "),n("p",[e._v('A "total function" is one that has defined outputs for all inputs.')]),e._v(" "),n("p",[e._v('A "partial function" is one that has undefined outputs for some inputs.')]),e._v(" "),n("h3",{attrs:{id:"bijection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bijection"}},[e._v("#")]),e._v(" bijection")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Injective_function",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia has a particularly nice diagram"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"overflow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overflow"}},[e._v("#")]),e._v(" overflow")]),e._v(" "),n("p",[e._v("Integer overflow can be defined as when one fails to have a bijection.")]),e._v(" "),n("p",[e._v("Overflow without explicit error is a surjection (it silently returns another number).")]),e._v(" "),n("p",[e._v("Overflow with explicit error is a partial function.")]),e._v(" "),n("p",[e._v("(Overflow with explicit error can also be visualized as having a codomain\nwhich is tuples of numbers and errors, but it's unclear if this produces\nany more useful intuitions than simply considering it a partial function.)")]),e._v(" "),n("h2",{attrs:{id:"concerns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concerns"}},[e._v("#")]),e._v(" Concerns")]),e._v(" "),n("h3",{attrs:{id:"overflow-is-annoying"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overflow-is-annoying"}},[e._v("#")]),e._v(" overflow is annoying")]),e._v(" "),n("p",[e._v("This is basic, but let's say it.")]),e._v(" "),n("p",[e._v("Overflow is a source of bugs (especially when it occurs at runtime and\nwithout explicit error).")]),e._v(" "),n("p",[e._v("Overflow is also a potential source of "),n("em",[e._v("design")]),e._v(" bugs: if two communicating\nsystems have different numeric support ranges, that almost certainly indicates\na potential compatibility issue.\n(Whether or not such a compatibility issue is reachable in practical usage may\nbe another matter, but the possibility itself is identifiable.)")]),e._v(" "),n("h3",{attrs:{id:"we-need-to-support-large-enough-numbers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#we-need-to-support-large-enough-numbers"}},[e._v("#")]),e._v(' we need to support "large enough" numbers')]),e._v(" "),n("p",[e._v("We might not be able to remove the concept of overflow from the world.")]),e._v(" "),n("p",[e._v("Knowing that overflow is a source of problems, however, we should at least\nbe able to specify when and where it's going to affect us.")]),e._v(" "),n("p",[e._v("We should be able to be clear about any limits to the precision of numbers\nwe can handle.  If an application needs to serialize and deserialize numbers\nbetween 1 and 10 billion, it might be important to declare this: such an\napplication will not work with libraries limited to 32 bit integer precision!")]),e._v(" "),n("h3",{attrs:{id:"let-s-not-have-dependent-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let-s-not-have-dependent-types"}},[e._v("#")]),e._v(" let's not have dependent types")]),e._v(" "),n("p",[e._v("Dependent types, as often commented, are cool;\nbut are the kind of powerful that comes with costs.")]),e._v(" "),n("p",[e._v("Specifically, dependent types make it easy for users to create "),n("em",[e._v("new cardinalities")]),e._v(",\nand this tends to drastically increase the number of places where we might encounter\nnon-total functions.  Reducing the number of places that can happen -- or at\nleast, making sure if it happens, it's consistently schema-side or consistently\nuser-application-side -- is desirable.")]),e._v(" "),n("h3",{attrs:{id:"built-in-ranges-are-softcore-dependent-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#built-in-ranges-are-softcore-dependent-types"}},[e._v("#")]),e._v(" built in ranges are softcore dependent types")]),e._v(" "),n("p",[e._v('"uint8" === "int [0 < 255]".')]),e._v(" "),n("p",[e._v('There\'s no particular reason to bless "uint8" any more than there is "int [0 < 12]"...\nother than mechanical sympathy with machine architectures that have physically\nspecial understanding of uint8.')]),e._v(" "),n("p",[e._v("Mechanical sympathy is good -- but it's worth pointing out that when that's the aim.\nIdeally, we want to get mechanical sympathy without too many compromises, or\nwith well-boxed compromises.")]),e._v(" "),n("h3",{attrs:{id:"ipld-has-no-math-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ipld-has-no-math-functions"}},[e._v("#")]),e._v(" IPLD has no math functions")]),e._v(" "),n("p",[e._v('IPLD has no math functions!  This actually means we get to play on "easy mode".')]),e._v(" "),n("p",[e._v("It's worth pointing this out because it means we have a lot fewer opportunities\nfor overflows to come up than a programming language would.\nAll we have to worry about is round-tripping the numbers through any of our\nmappings like serialization, and making numbers available in our client library\ninterfaces without loss of precision (or at least with clear loss of precision).")]),e._v(" "),n("p",[e._v("This is nice because it's a lot easier to reason about simple mappings from\none domain to another than it is to worry about e.g. multiplication or addition\ntaking two individually fine numbers and producing an overflowing one.\nIf there is any math, it's in an application that's using one of our libraries,\nand the precision and overflow handling story for the math is entirely the\nresponsibility of the system doing the math.")]),e._v(" "),n("h3",{attrs:{id:"practical-applications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#practical-applications"}},[e._v("#")]),e._v(" practical applications")]),e._v(" "),n("h4",{attrs:{id:"timestamps-are-a-real-issue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timestamps-are-a-real-issue"}},[e._v("#")]),e._v(" timestamps are a real issue")]),e._v(" "),n("p",[e._v("One very frequent occurrence of practical concerns about numeric ranges is in\ntimestamps.")]),e._v(" "),n("ul",[n("li",[e._v("2^31 as a unix timestamp int is Tue, 19 Jan 2038 -- fast approaching!")]),e._v(" "),n("li",[e._v("2^32 as a unix timestamp int is Sun, 07 Feb 2106 -- also not far!")]),e._v(" "),n("li",[e._v("2^63 as a unix timestamp int is just shy of 300 billion years out.")])]),e._v(" "),n("p",[e._v("In short: 32-bit ints (either signed or unsigned) are problematic for\ntimestamps in our lifetime; 64-bit (signed or unsigned) are sufficient.")]),e._v(" "),n("h4",{attrs:{id:"nonces"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nonces"}},[e._v("#")]),e._v(" nonces")]),e._v(" "),n("p",[e._v("... are mostly "),n("em",[e._v("not")]),e._v(" an issue.  If doing random numbers for security purposes,\napplications should use Bytes, and include an application-level check that any\nnonce is of reasonable length to meet the application's security needs.")]),e._v(" "),n("p",[e._v("(Min-length arrays are again wandering into dependent type land.)")]),e._v(" "),n("h4",{attrs:{id:"banking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#banking"}},[e._v("#")]),e._v(" banking")]),e._v(" "),n("p",[e._v('Large numbers in financial systems care about precision.\n(However, it should also be noted that This Is Not New to that field,\nand financial systems already often use their own bignum systems,\nwhich we will likely not have an effect on.  Such systems will most likely\nsimply appear as a "bytes" kind in IPLD Schemas.)')]),e._v(" "),n("h4",{attrs:{id:"engineering-and-scientific-compute"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engineering-and-scientific-compute"}},[e._v("#")]),e._v(" engineering and scientific compute")]),e._v(" "),n("p",[e._v("See 'banking'.  In general, it's not uncommon for systems dealing with very\nlarge numbers to have an existing bignum concept of some kind.")]),e._v(" "),n("h2",{attrs:{id:"the-idea"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-idea"}},[e._v("#")]),e._v(" The Idea")]),e._v(" "),n("p",[e._v("Let's use "),n("em",[e._v("adjuncts")]),e._v(".")]),e._v(" "),n("p",[e._v("This won't be a complete solution to the general problem,\nbut it will definitely give us some wiggle room to solve it in some cases,\nand especially solve it in the codegen case,\nand it'll do it without complicating either the Data Model nor the Schemas!")]),e._v(" "),n("h3",{attrs:{id:"what-s-an-adjunct"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-s-an-adjunct"}},[e._v("#")]),e._v(" what's an adjunct")]),e._v(" "),n("p",[e._v("Adjunct information is something attached to a schema which contains additional\nstrong suggestions about what to do when implementing it.  Adjunct information\nis less formally specified than the rest of the schema system, and importantly,\nadjunct information is allowed to contain language-specific notes as well\nas other specializations.")]),e._v(" "),n("p",[e._v("The only rule for adjunct information is that it must not change the cardinality\nof types nor the representation, because those are both kinds of information\nthat belong in the schema.")]),e._v(" "),n("p",[e._v("So, it would seem that we could say that some adjunct information may provide\nhints which change the cardinality which is "),n("em",[e._v("supported")]),e._v(" by a client library...\neven though we'll still theoretically consider the cardinality unchanged for\nany schematic purpose.")]),e._v(" "),n("p",[e._v("(There aren't many proposed uses of adjunct information yet, but it's\nanticipated that the subject will start coming up, especially as we proceed with\ncodegen.  So, while it may sound unfamiliar now, it may not be in the future!)")]),e._v(" "),n("h3",{attrs:{id:"what-would-this-look-like"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-would-this-look-like"}},[e._v("#")]),e._v(" what would this look like")]),e._v(" "),n("p",[e._v("Perhaps with a "),n("code",[e._v("foobar.ipldsch")]),e._v(" file like the following:")]),e._v(" "),n("div",{staticClass:"language-ipldsch extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[n("code",[n("span",{pre:!0,attrs:{class:"token typedef"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Foo")])]),e._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tfield SnazzyInt "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# note no size specifier")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token typedef"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SnazzyInt")])]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# note no size specifier")]),e._v("\n")])])]),n("p",[e._v("... we'd then have a sibling "),n("code",[e._v("foobar.adjunct.go.cfg")]),e._v(" file:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('codegen.forType.SnazzyInt.nativeSize = "uint64"\n')])])]),n("p",[e._v("(Syntax up for grabs.  This is a very vague, early proposal.\nWe could mine other systems like protobufs for their syntax as well;\nI believe there are comparable features, though I don't know details.)")]),e._v(" "),n("p",[e._v("(Another alternative would be to specify things by the fieldname in a struct,\nthus working even without the need for a named type for making size specifiers.\nThis might be interesting to explore further, but seems fraught with peril.)")]),e._v(" "),n("h3",{attrs:{id:"what-does-this-give-us"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-does-this-give-us"}},[e._v("#")]),e._v(" what does this give us")]),e._v(" "),n("p",[e._v('As the example above shows, this would give us a way to specify that a client\nlibrary needs to support a certain size of numeric precision (in this case,\n"uint64").')]),e._v(" "),n("p",[e._v("We could also specify that a code-generating client should make types in its\ntarget language which use smaller memory layouts, like uint8: in some\napplications, this may be relevant to performance.")]),e._v(" "),n("h3",{attrs:{id:"why-is-the-better-than-alternatives"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-better-than-alternatives"}},[e._v("#")]),e._v(" why is the better than alternatives")]),e._v(" "),n("p",[e._v("Adding a proliferation of {u,}int{,8,16,32,64} types to the Data Model causes\nthe number of kinds to more than double.  The complexity cost is significant.\nUsing adjuncts to define numeric range support avoids this complexity.")]),e._v(" "),n("h3",{attrs:{id:"what-doesn-t-this-solve"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-doesn-t-this-solve"}},[e._v("#")]),e._v(" what doesn't this solve")]),e._v(" "),n("p",[e._v("Long story short, specifying demands for large numeric ranges solves several\nproblems for generated code, but does "),n("em",[e._v("not")]),e._v(' solve problems for general-purpose\n"Node" interface design in strongly-typed languages.')]),e._v(" "),n("p",[e._v("(Of course, we can't wave a magic wand to give math in client languages\ninfinite precision either -- but that's nothing new!)")]),e._v(" "),n("h4",{attrs:{id:"still-several-int-getters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#still-several-int-getters"}},[e._v("#")]),e._v(" still several int getters")]),e._v(" "),n("p",[e._v('In building "Node" interfaces in most strongly typed languages, we\'ll still\noften need 3 methods for reading ints, which is about 2 more than desired:')]),e._v(" "),n("ul",[n("li",[n("code",[e._v("AsInt")]),e._v(" -> returns "),n("code",[e._v("int")]),e._v(" (the convenient, most-likely-to-be-used type in the language)")]),e._v(" "),n("li",[n("code",[e._v("AsInt64")]),e._v(" -> or whatever the largest signed int type is in the language")]),e._v(" "),n("li",[n("code",[e._v("AsUInt64")]),e._v(" -> or whatever the largest unsigned int type is in the language")])]),e._v(" "),n("p",[e._v("The first method is required for convenience (most language won't allow their\n"),n("code",[e._v("int64")]),e._v(" type to be silently downcast to "),n("code",[e._v("int")]),e._v("); the latter two for correctness\nin handling larger integers.")]),e._v(" "),n("p",[e._v("(I've made the assumption here that if using unsigned ints, it's because you\ncared about every last bit, and therefore uint methods for anything other than\nthe largest size are unnecessary.)")]),e._v(" "),n("p",[e._v("(Note that we can probably get away with only two "),n("em",[e._v("setter")]),e._v(" methods, since\nlanguages will typically upcast "),n("code",[e._v("int")]),e._v(" to "),n("code",[e._v("int64")]),e._v(" silently.)")]),e._v(" "),n("h4",{attrs:{id:"the-convenient-int-getter-will-have-to-check-overflow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-convenient-int-getter-will-have-to-check-overflow"}},[e._v("#")]),e._v(" the convenient int getter will have to check overflow")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("AsInt")]),e._v(" method, which returns the most-likely-to-be-used type in the\nlanguage (for sheer syntactic convenience), will need to check for overflow\nin many cases.")]),e._v(" "),n("p",[e._v("Code-generated node implementations may be free of this, since they already\nknow their limits, but other generic storage node implementations will be\nstuck checking for overflow.")]),e._v(" "),n("h4",{attrs:{id:"generic-node-implementations-aren-t-improved"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generic-node-implementations-aren-t-improved"}},[e._v("#")]),e._v(" generic node implementations aren't improved")]),e._v(" "),n("p",[e._v("Generic node implementations (i.e. can contain any value at runtime; none of\nthe NodeBuilder methods will reject anything) will have to use "),n("code",[e._v("int64")]),e._v(", or\nwhatever the largest form of int is, in their internal storage.")]),e._v(" "),n("p",[e._v("This might be fine -- but it's worth noting.")]),e._v(" "),n("p",[e._v("Note we also didn't solve the uint64 problem yet.")]),e._v(" "),n("h4",{attrs:{id:"generic-user-code-always-needs-to-use-the-biggest-form"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generic-user-code-always-needs-to-use-the-biggest-form"}},[e._v("#")]),e._v(" generic user code always needs to use the biggest form")]),e._v(" "),n("p",[e._v("Generic code will inevitably need to use the biggest numeric getters in order\nto be correct.  (There's no way to reference adjunct configuration from a schema\nfrom code that's targeting the general \"Node\" interface.)")]),e._v(" "),n("p",[e._v("This might be fine -- but it's worth noting.")]),e._v(" "),n("p",[e._v("Note we also didn't solve the uint64 problem yet.")]),e._v(" "),n("h4",{attrs:{id:"unsigned-ints-are-frustrating"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unsigned-ints-are-frustrating"}},[e._v("#")]),e._v(" unsigned ints are frustrating")]),e._v(" "),n("p",[e._v("Unsigned ints are effectively one bit bigger than signed ints.")]),e._v(" "),n("p",[e._v('If we try to have a single int type in the data model, but support uints\nfor reasons of that extra bit of range, things get painful.\nImagine writing a "deep copy" function over the generic Node interface:\nyou reach a node of kind int: what do you do?  Use GetInt() or GetUint()?')]),e._v(" "),n("h2",{attrs:{id:"nearby-alternatives"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nearby-alternatives"}},[e._v("#")]),e._v(" Nearby alternatives")]),e._v(" "),n("h3",{attrs:{id:"ditch-the-convenient-int-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ditch-the-convenient-int-method"}},[e._v("#")]),e._v(" ditch the convenient int method")]),e._v(" "),n("p",[e._v("Maybe we don't really need it.")]),e._v(" "),n("p",[e._v('Will involve a lot of user code writing their own casts if they want to use\nthe "Node" interface and want to use '),n("code",[e._v("int")]),e._v(" rather than "),n("code",[e._v("int64")]),e._v(" throughout\ntheir application code, though.")]),e._v(" "),n("h3",{attrs:{id:"do-we-really-need-uint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#do-we-really-need-uint"}},[e._v("#")]),e._v(" do we really need uint?")]),e._v(" "),n("p",[e._v("Do we?  It seems like a fairly massive amount of trouble.")]),e._v(" "),n("p",[e._v("There are no obvious solutions to the\n"),n("a",{attrs:{href:"#unsigned-ints-are-frustrating"}},[e._v("unsigned-ints-are-frustrating")]),e._v(" issue,\nexcept for introducing at least one new kind to the Data Model;\nand that kind won't be representable or meaningful in a fair number of\nCodecs (neither JSON "),n("em",[e._v("nor CBOR")]),e._v(" retains uint info), which would\nseem to strongly indicate it "),n("em",[e._v("does not belong")]),e._v(" in our Data Model.")]),e._v(" "),n("h2",{attrs:{id:"worth-mentioning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#worth-mentioning"}},[e._v("#")]),e._v(" Worth mentioning")]),e._v(" "),n("p",[e._v("The following facts are interesting, but only tangentially relevant:")]),e._v(" "),n("h3",{attrs:{id:"cbor-does-not-have-signed-and-unsigned"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cbor-does-not-have-signed-and-unsigned"}},[e._v("#")]),e._v(" CBOR does not have signed and unsigned")]),e._v(" "),n("p",[e._v("CBOR has "),n("em",[e._v("negative ints")]),e._v(" and "),n("em",[e._v("positive ints")]),e._v(".")]),e._v(" "),n("p",[e._v('Though the documentation refers to this as "unsigned", this is... contendable.\nIt is not possible to express an "unsigned positive" distinctly from "signed positive";\ntherefore, it seems inaccurate to say CBOR supports unsigned and signed ints.')]),e._v(" "),n("h3",{attrs:{id:"cbor-big-ints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cbor-big-ints"}},[e._v("#")]),e._v(" CBOR big ints")]),e._v(" "),n("p",[e._v("BigInt "),n("em",[e._v("is")]),e._v(" defined in the CBOR spec -- however, as an extension, based on tags.\nSee: https://tools.ietf.org/html/rfc7049#section-2.4.2 .")]),e._v(" "),n("p",[e._v("Support for this in the wild is not common.  It's not clear if we'd have much\nto gain from trying to transparently use this rare feature of a single codec.")]),e._v(" "),n("h3",{attrs:{id:"cbor-fraction-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cbor-fraction-types"}},[e._v("#")]),e._v(" CBOR fraction types")]),e._v(" "),n("p",[e._v("Fractions are also defined in the CBOR spec -- again, as an extension with tags.\nSee: https://tools.ietf.org/html/rfc7049#section-2.4.3 .")]),e._v(" "),n("p",[e._v('Support for this in the wild is not common.  Furthermore, it\'s not clear how\nwe could even begin to consider natively support this in IPLD without adding\n"Fraction" as a kind to the Data Model.')]),e._v(" "),n("p",[e._v("The implementation details of this fraction system might be of interest to\nanyone who wants to implement fractions in their application, though\n(we could imagine using a simple struct in a schema to represent fractions!).")]),e._v(" "),n("h2",{attrs:{id:"lessons-learned"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lessons-learned"}},[e._v("#")]),e._v(" Lessons learned")]),e._v(" "),n("p",[e._v("Overflows are still everywhere.")]),e._v(" "),n("p",[e._v("The best we can do is make a table about where we want to shuffle them off to.")]),e._v(" "),n("p",[e._v("That table has to include every ingoing and outgoing edge in client libraries,\nwhich makes it pretty big.  As a heuristic for success: the smaller we can\nkeep this table, while still providing our utility, the better.")]),e._v(" "),n("p",[e._v("And the table might have separate consideration of codegen'd native-type node\nimplementations vs generic node implementations.  (Codegen'd/native-type nodes\ncan be interfaced with in more ways than generic nodes, which relieves some\npressure; the question then becomes if that's actually grounds to have weaker\nsupport in the generic nodes (to which I suspect the answer is mostly \"no\").)")]),e._v(" "),n("p",[e._v("The adjunct idea may (or may not) be a large part of a good solution;\nthe one thing that's clear is it's not a complete solution on its own,\nbecause we still need specs for generic Node behavior where this isn't applicable.")]),e._v(" "),n("p",[e._v('Trying to imagine writing a "deep copy" function that works over the generic\nNode interface is a good forcing function to think through all the implications\nof a design.  (Nevermind that a "deep copy" function is nonsensical in a library\nthat has an immutable/copy-on-write design: imagine doing it anyway, perhaps for\nexample to flip data from a codegen-backed Node implemention to a generic one,\nand back again.)  (Could we specify a system that is lossless when used with a\ncodegen-backed Node and a particular codec, but lossy when copied through the\ngeneric Node interfaces?  Well, yes; but whether we '),n("em",[e._v("should")]),e._v(" is another\nquestion: it might make for many unpleasantly surprising interactions.)")])])}),[],!1,null,null,null);t.default=i.exports}}]);