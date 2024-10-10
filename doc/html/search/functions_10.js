var searchData=
[
  ['save_0',['save',['../browser_8js.html#a613da65a390e3d3a0351b8db1714a96e',1,'save(namespaces):&#160;browser.js'],['../src_2node_8js.html#a613da65a390e3d3a0351b8db1714a96e',1,'save(namespaces):&#160;node.js']]],
  ['sbcscodec_1',['SBCSCodec',['../sbcs-codec_8js.html#a996ab49283c6821b32d3385c87f76480',1,'sbcs-codec.js']]],
  ['sbcsencoder_2',['SBCSEncoder',['../sbcs-codec_8js.html#afe89f0a9cc26a355822da5b555486146',1,'sbcs-codec.js']]],
  ['selectcolor_3',['selectColor',['../debug_8js.html#a7058c83f9e4c8b8b407ca9f00ec3096e',1,'debug.js']]],
  ['sendfile_4',['sendfile',['../response_8js.html#aa21dc3ce9630dbea7fa83bbdeee0176f',1,'response.js']]],
  ['sendoptionsresponse_5',['sendOptionsResponse',['../express_2lib_2router_2index_8js.html#ac49f104ea36c2b675726a5222878b236',1,'index.js']]],
  ['serialize_6',['serialize',['../cookie_2index_8js.html#ab7ad679d82280f5c3699588c452d0375',1,'index.js']]],
  ['setattribute_7',['setAttribute',['../example_2inspect_8js.html#a6dab4af5585fcf370014ddf38140dfb4',1,'inspect.js']]],
  ['settypeparser_8',['setTypeParser',['../pg-types_2index_8js.html#a34f7e0a2b0afb11bfedb0981ee78ebf1',1,'index.js']]],
  ['sha1_9',['sha1',['../cookie-signature_2index_8js.html#a16973f9a625111c122c03eeceaf8800c',1,'index.js']]],
  ['shouldusenative_10',['shouldUseNative',['../object-assign_2index_8js.html#a2c7d5acc6c7d6c7c7bfd6f964ea72848',1,'index.js']]],
  ['singlelinevalues_11',['singleLineValues',['../object-inspect_2index_8js.html#a4ca3c5cfc812ffc962446ee185f513c0',1,'index.js']]],
  ['stripbomwrapper_12',['StripBOMWrapper',['../bom-handling_8js.html#aa79346a0d2038acb162505b02078fc22',1,'bom-handling.js']]],
  ['suite_13',['suite',['../writer-tests_8js.html#a2dd1d324ba38c59533c47e8394d3201e',1,'suite(&apos;adding int32&apos;, function() { var testAddingInt32=function(int, expectedBuffer) { test(&apos;writes &apos;+int, function() { var subject=new Writer();var result=subject.addInt32(int).join();assert.equalBuffers(result, expectedBuffer);});};testAddingInt32(0, [0, 0, 0, 0]);testAddingInt32(1, [0, 0, 0, 1]);testAddingInt32(256, [0, 0, 1, 0]);test(&apos;writes largest int32&apos;, function() { return false;});test(&apos;writing multiple int32s&apos;, function() { var subject=new Writer();var result=subject.addInt32(1).addInt32(10).addInt32(0).join();assert.equalBuffers(result, [0, 0, 0, 1, 0, 0, 0, 0x0a, 0, 0, 0, 0]);});suite(&apos;having to resize the buffer&apos;, function() { test(&apos;after resize correct result returned&apos;, function() { var subject=new Writer(10);subject.addInt32(1).addInt32(1).addInt32(1);assert.equalBuffers(subject.join(), [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]);});});}):&#160;writer-tests.js'],['../writer-tests_8js.html#a9a1e99d1e0431804fe197dbdc140018d',1,'suite(&apos;int16&apos;, function() { test(&apos;writes 0&apos;, function() { var subject=new Writer();var result=subject.addInt16(0).join();assert.equalBuffers(result, [0, 0]);});test(&apos;writes 400&apos;, function() { var subject=new Writer();var result=subject.addInt16(400).join();assert.equalBuffers(result, [1, 0x90]);});test(&apos;writes many&apos;, function() { var subject=new Writer();var result=subject.addInt16(0).addInt16(1).addInt16(2).join();assert.equalBuffers(result, [0, 0, 0, 1, 0, 2]);});test(&apos;resizes if internal buffer fills up&apos;, function() { var subject=new Writer(3);var result=subject.addInt16(2).addInt16(3).join();assert.equalBuffers(result, [0, 2, 0, 3]);});}):&#160;writer-tests.js'],['../writer-tests_8js.html#ac1c8e98ad8d345ec94bff8a259829bd7',1,'suite(&apos;cString&apos;, function() { test(&apos;writes empty cstring&apos;, function() { var subject=new Writer();var result=subject.addCString().join();assert.equalBuffers(result, [0]);});test(&apos;writes two empty cstrings&apos;, function() { var subject=new Writer();var result=subject.addCString(&quot;&quot;).addCString(&quot;&quot;).join();assert.equalBuffers(result, [0, 0]);});test(&apos;writes non-empty cstring&apos;, function() { var subject=new Writer();var result=subject.addCString(&quot;!!!&quot;).join();assert.equalBuffers(result, [33, 33, 33, 0]);});test(&apos;resizes if reached end&apos;, function() { var subject=new Writer(3);var result=subject.addCString(&quot;!!!&quot;).join();assert.equalBuffers(result, [33, 33, 33, 0]);});test(&apos;writes multiple cstrings&apos;, function() { var subject=new Writer();var result=subject.addCString(&quot;!&quot;).addCString(&quot;!&quot;).join();assert.equalBuffers(result, [33, 0, 33, 0]);});}):&#160;writer-tests.js'],['../writer-tests_8js.html#aaa07d2ed64a4dcdf5e97582c57c4706f',1,'suite(&apos;can write normal string&apos;, function() { var subject=new Writer(4);var result=subject.addString(&quot;!&quot;).join();assert.equalBuffers(result, [33]);test(&apos;can write cString too&apos;, function() { var result=subject.addCString(&quot;!&quot;).join();assert.equalBuffers(result, [33, 33, 0]);});test(&apos;can resize&apos;, function() { var result=subject.addString(&quot;!!&quot;).join();assert.equalBuffers(result, [33, 33, 0, 33, 33]);});}):&#160;writer-tests.js'],['../writer-tests_8js.html#adcefee73691a04b3fb14a9ca660f7763',1,'suite(&apos;clearing&apos;, function() { var subject=new Writer();subject.addCString(&quot;@!!#!#&quot;);subject.addInt32(10401);test(&apos;clears&apos;, function() { subject.clear();assert.equalBuffers(subject.join(), []);});test(&apos;writing more&apos;, function() { var joinedResult=subject.addCString(&quot;!&quot;).addInt32(9).addInt16(2).join();assert.equalBuffers(joinedResult, [33, 0, 0, 0, 0, 9, 0, 2]);});test(&apos;returns result&apos;, function() { var flushedResult=subject.flush();assert.equalBuffers(flushedResult, [33, 0, 0, 0, 0, 9, 0, 2]) });test(&apos;clears the writer&apos;, function() { assert.equalBuffers(subject.join(), []) assert.equalBuffers(subject.flush(), []) });}):&#160;writer-tests.js'],['../writer-tests_8js.html#aad8d6c3b1f9e5c73c849cd8f3c57ecf9',1,'suite(&quot;flush&quot;, function() { test(&apos;added as a hex code to a full writer&apos;, function() { var subject=new Writer(2);var result=subject.addCString(&quot;!&quot;).flush(0x50);assert.equalBuffers(result, [0x50, 0, 0, 0, 6, 33, 0]);});test(&apos;added as a hex code to a non-full writer&apos;, function() { var subject=new Writer(10).addCString(&quot;!&quot;);var joinedResult=subject.join(0x50);var result=subject.flush(0x50);assert.equalBuffers(result, [0x50, 0, 0, 0, 6, 33, 0]);});test(&apos;added as a hex code to a buffer which requires resizing&apos;, function() { var result=new Writer(2).addCString(&quot;!!!!!!!!&quot;).flush(0x50);assert.equalBuffers(result, [0x50, 0, 0, 0, 0x0D, 33, 33, 33, 33, 33, 33, 33, 33, 0]);});}):&#160;writer-tests.js'],['../writer-tests_8js.html#a4102e9b5b16017abc7109ac308d276a8',1,'suite(&quot;header&quot;, function() { test(&apos;adding two packets with headers&apos;, function() { var subject=new Writer(10).addCString(&quot;!&quot;);subject.addHeader(0x50);subject.addCString(&quot;!!&quot;);subject.addHeader(0x40);subject.addCString(&quot;!&quot;);var result=subject.flush(0x10);assert.equalBuffers(result, [0x50, 0, 0, 0, 6, 33, 0, 0x40, 0, 0, 0, 7, 33, 33, 0, 0x10, 0, 0, 0, 6, 33, 0]);});}):&#160;writer-tests.js']]]
];
