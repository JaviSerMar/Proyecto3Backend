var searchData=
[
  ['dbcscodec_0',['DBCSCodec',['../dbcs-codec_8js.html#ae1aa3dc81117248270f3744a0eac6e5e',1,'dbcs-codec.js']]],
  ['dbcsdecoder_1',['DBCSDecoder',['../dbcs-codec_8js.html#aa111899b7d948e60b1d84783a493a3e3',1,'dbcs-codec.js']]],
  ['decode_2',['decode',['../cookie_2index_8js.html#a008079d2255f2a95df4d17453e41529c',1,'index.js']]],
  ['define_3',['define',['../mime_8js.html#a11e8630887223387469893b893e69ed8',1,'mime.js']]],
  ['definegetter_4',['defineGetter',['../request_8js.html#aa8986459dff9eac7e866fbfdcadb2018',1,'defineGetter(req, &apos;protocol&apos;, function protocol(){ var proto=this.connection.encrypted ? &apos;https&apos; :&apos;http&apos;;var trust=this.app.get(&apos;trust proxy fn&apos;);if(!trust(this.connection.remoteAddress, 0)) { return proto;} var header=this.get(&apos;X-Forwarded-Proto&apos;)||proto var index=header.indexOf(&apos;,&apos;) return index !==-1 ? header.substring(0, index).trim() :header.trim() }):&#160;request.js'],['../request_8js.html#addbdc40ef134b678163889aeb4a08949',1,'defineGetter(req, &apos;secure&apos;, function secure(){ return this.protocol===&apos;https&apos;;}):&#160;request.js'],['../request_8js.html#ab84f8183a2221a1a1d9d40bad41bd808',1,'defineGetter(req, &apos;ip&apos;, function ip(){ var trust=this.app.get(&apos;trust proxy fn&apos;);return proxyaddr(this, trust);}):&#160;request.js'],['../request_8js.html#a56b1c69b34cfaf83a129a46b79ce78be',1,'defineGetter(req, &apos;ips&apos;, function ips() { var trust=this.app.get(&apos;trust proxy fn&apos;);var addrs=proxyaddr.all(this, trust);addrs.reverse().pop() return addrs }):&#160;request.js'],['../request_8js.html#ae35cd920979fbf4ed3e969ea48f975d3',1,'defineGetter(req, &apos;subdomains&apos;, function subdomains() { var hostname=this.hostname;if(!hostname) return[];var offset=this.app.get(&apos;subdomain offset&apos;);var subdomains=!isIP(hostname) ? hostname.split(&apos;.&apos;).reverse() :[hostname];return subdomains.slice(offset);}):&#160;request.js'],['../request_8js.html#a1bf2b5521ee03138ed77a0acf32461a9',1,'defineGetter(req, &apos;path&apos;, function path() { return parse(this).pathname;}):&#160;request.js'],['../request_8js.html#acc60ab1af739cb8e0059ea5b3bc2e0d3',1,'defineGetter(req, &apos;hostname&apos;, function hostname(){ var trust=this.app.get(&apos;trust proxy fn&apos;);var host=this.get(&apos;X-Forwarded-Host&apos;);if(!host||!trust(this.connection.remoteAddress, 0)) { host=this.get(&apos;Host&apos;);} else if(host.indexOf(&apos;,&apos;) !==-1) { host=host.substring(0, host.indexOf(&apos;,&apos;)).trimRight() } if(!host) return;var offset=host[0]===&apos;[&apos; ? host.indexOf(&apos;]&apos;)+1 :0;var index=host.indexOf(&apos;:&apos;, offset);return index !==-1 ? host.substring(0, index) :host;}):&#160;request.js'],['../request_8js.html#a4e24a42739a57e5e2a3871aef1ecac14',1,'defineGetter(req, &apos;host&apos;, deprecate.function(function host(){ return this.hostname;}, &apos;req.host:Use req.hostname instead&apos;)):&#160;request.js'],['../request_8js.html#a104698b39d413b08bae5c2f051a6d388',1,'defineGetter(req, &apos;fresh&apos;, function(){ var method=this.method;var res=this.res var status=res.statusCode if(&apos;GET&apos; !==method &amp;&amp; &apos;HEAD&apos; !==method) return false;if((status &gt;=200 &amp;&amp;status&lt; 300)||304===status) { return fresh(this.headers, { &apos;etag&apos;:res.get(&apos;ETag&apos;), &apos;last-modified&apos;:res.get(&apos;Last-Modified&apos;) }) } return false;}):&#160;request.js'],['../request_8js.html#a2c0e995f48aa94be6ab194956659b2f7',1,'defineGetter(req, &apos;stale&apos;, function stale(){ return !this.fresh;}):&#160;request.js'],['../request_8js.html#aa265397c19c5cc737cf142a9b4ce4a0a',1,'defineGetter(req, &apos;xhr&apos;, function xhr(){ var val=this.get(&apos;X-Requested-With&apos;)||&apos;&apos;;return val.toLowerCase()===&apos;xmlhttprequest&apos;;}):&#160;request.js']]],
  ['defineproperty_5',['defineProperty',['../b_8js.html#a28b393256d5d3dc5b7d5940192da33e5',1,'defineProperty(exports, &quot;__esModule&quot;, { value:true }):&#160;b.js'],['../buffer-reader_8js.html#a28b393256d5d3dc5b7d5940192da33e5',1,'defineProperty(exports, &quot;__esModule&quot;, { value:true }):&#160;buffer-reader.js'],['../buffer-writer_8js.html#a28b393256d5d3dc5b7d5940192da33e5',1,'defineProperty(exports, &quot;__esModule&quot;, { value:true }):&#160;buffer-writer.js'],['../inbound-parser_8test_8js.html#a28b393256d5d3dc5b7d5940192da33e5',1,'defineProperty(exports, &quot;__esModule&quot;, { value:true }):&#160;inbound-parser.test.js'],['../pg-protocol_2dist_2index_8js.html#a28b393256d5d3dc5b7d5940192da33e5',1,'defineProperty(exports, &quot;__esModule&quot;, { value:true }):&#160;index.js'],['../pg-protocol_2dist_2index_8js.html#af56080039b97ac2e09ad9048c7ac6974',1,'defineProperty(exports, &quot;DatabaseError&quot;, { enumerable:true, get:function() { return messages_1.DatabaseError;} }):&#160;index.js'],['../pg-protocol_2dist_2index_8js.html#a023c9750ea56ec0067b0faaf93097878',1,'defineProperty(exports, &quot;serialize&quot;, { enumerable:true, get:function() { return serializer_1.serialize;} }):&#160;index.js'],['../messages_8js.html#a28b393256d5d3dc5b7d5940192da33e5',1,'defineProperty(exports, &quot;__esModule&quot;, { value:true }):&#160;messages.js'],['../outbound-serializer_8test_8js.html#a28b393256d5d3dc5b7d5940192da33e5',1,'defineProperty(exports, &quot;__esModule&quot;, { value:true }):&#160;outbound-serializer.test.js'],['../parser_8js.html#a28b393256d5d3dc5b7d5940192da33e5',1,'defineProperty(exports, &quot;__esModule&quot;, { value:true }):&#160;parser.js'],['../serializer_8js.html#a28b393256d5d3dc5b7d5940192da33e5',1,'defineProperty(exports, &quot;__esModule&quot;, { value:true }):&#160;serializer.js'],['../helper_8js.html#a79ad53e3fa9e9371549faa551e6c9f3d',1,'defineProperty(module.exports, &apos;isWin&apos;, { get :function() { return isWin;}, set :function(val) { isWin=val;} }):&#160;helper.js']]],
  ['delete_6',['delete',['../server_8js.html#af5592b322cf023a990308ac1e32c856d',1,'server.js']]],
  ['describe_7',['describe',['../inbound-parser_8test_8js.html#a87c6a6b3ca1911acf59151308afeb9bb',1,'describe(&apos;PgPacketStream&apos;, function() { testForMessage(authOkBuffer, expectedAuthenticationOkayMessage);testForMessage(plainPasswordBuffer, expectedPlainPasswordMessage);testForMessage(md5PasswordBuffer, expectedMD5PasswordMessage);testForMessage(SASLBuffer, expectedSASLMessage);testForMessage(SASLContinueBuffer, expectedSASLContinueMessage);const extendedSASLContinueBuffer=Buffer.concat([SASLContinueBuffer, Buffer.from([1, 2, 3, 4])]);testForMessage(extendedSASLContinueBuffer, expectedSASLContinueMessage);testForMessage(SASLFinalBuffer, expectedSASLFinalMessage);const extendedSASLFinalBuffer=Buffer.concat([SASLFinalBuffer, Buffer.from([1, 2, 4, 5])]);testForMessage(extendedSASLFinalBuffer, expectedSASLFinalMessage);testForMessage(paramStatusBuffer, expectedParameterStatusMessage);testForMessage(backendKeyDataBuffer, expectedBackendKeyDataMessage);testForMessage(readyForQueryBuffer, expectedReadyForQueryMessage);testForMessage(commandCompleteBuffer, expectedCommandCompleteMessage);testForMessage(notificationResponseBuffer, expectedNotificationResponseMessage);testForMessage(test_buffers_1.default.emptyQuery(), { name:&apos;emptyQuery&apos;, length:4, });testForMessage(Buffer.from([0x6e, 0, 0, 0, 4]), { name:&apos;noData&apos;, });describe(&apos;rowDescription messages&apos;, function() { testForMessage(emptyRowDescriptionBuffer, expectedEmptyRowDescriptionMessage);testForMessage(oneRowDescBuff, expectedOneRowMessage);testForMessage(twoRowBuf, expectedTwoRowMessage);});describe(&apos;parameterDescription messages&apos;, function() { testForMessage(emptyParameterDescriptionBuffer, expectedEmptyParameterDescriptionMessage);testForMessage(oneParameterDescBuf, expectedOneParameterMessage);testForMessage(twoParameterDescBuf, expectedTwoParameterMessage);});describe(&apos;parsing rows&apos;, function() { describe(&apos;parsing empty row&apos;, function() { testForMessage(emptyRowFieldBuf, { name:&apos;dataRow&apos;, fieldCount:0, });});describe(&apos;parsing data row with fields&apos;, function() { testForMessage(oneFieldBuf, { name:&apos;dataRow&apos;, fieldCount:1, fields:[&apos;test&apos;], });});});describe(&apos;notice message&apos;, function() { var buff=test_buffers_1.default.notice([{ type:&apos;C&apos;, value:&apos;code&apos; }]);testForMessage(buff, { name:&apos;notice&apos;, code:&apos;code&apos;, });});testForMessage(test_buffers_1.default.error([]), { name:&apos;error&apos;, });describe(&apos;with all the fields&apos;, function() { var buffer=test_buffers_1.default.error([{ type:&apos;S&apos;, value:&apos;ERROR&apos;, }, { type:&apos;C&apos;, value:&apos;code&apos;, }, { type:&apos;M&apos;, value:&apos;message&apos;, }, { type:&apos;D&apos;, value:&apos;details&apos;, }, { type:&apos;H&apos;, value:&apos;hint&apos;, }, { type:&apos;P&apos;, value:&apos;100&apos;, }, { type:&apos;p&apos;, value:&apos;101&apos;, }, { type:&apos;q&apos;, value:&apos;query&apos;, }, { type:&apos;W&apos;, value:&apos;where&apos;, }, { type:&apos;F&apos;, value:&apos;file&apos;, }, { type:&apos;L&apos;, value:&apos;line&apos;, }, { type:&apos;R&apos;, value:&apos;routine&apos;, }, { type:&apos;Z&apos;, value:&apos;alsdkf&apos;, },]);testForMessage(buffer, { name:&apos;error&apos;, severity:&apos;ERROR&apos;, code:&apos;code&apos;, message:&apos;message&apos;, detail:&apos;details&apos;, hint:&apos;hint&apos;, position:&apos;100&apos;, internalPosition:&apos;101&apos;, internalQuery:&apos;query&apos;, where:&apos;where&apos;, file:&apos;file&apos;, line:&apos;line&apos;, routine:&apos;routine&apos;, });});testForMessage(parseCompleteBuffer, { name:&apos;parseComplete&apos;, });testForMessage(bindCompleteBuffer, { name:&apos;bindComplete&apos;, });testForMessage(bindCompleteBuffer, { name:&apos;bindComplete&apos;, });testForMessage(test_buffers_1.default.closeComplete(), { name:&apos;closeComplete&apos;, });describe(&apos;parses portal suspended message&apos;, function() { testForMessage(portalSuspendedBuffer, { name:&apos;portalSuspended&apos;, });});describe(&apos;parses replication start message&apos;, function() { testForMessage(Buffer.from([0x57, 0x00, 0x00, 0x00, 0x04]), { name:&apos;replicationStart&apos;, length:4, });});describe(&apos;copy&apos;,()=&gt; { testForMessage(test_buffers_1.default.copyIn(0), { name:&apos;copyInResponse&apos;, length:7, binary:false, columnTypes:[], });testForMessage(test_buffers_1.default.copyIn(2), { name:&apos;copyInResponse&apos;, length:11, binary:false, columnTypes:[0, 1], });testForMessage(test_buffers_1.default.copyOut(0), { name:&apos;copyOutResponse&apos;, length:7, binary:false, columnTypes:[], });testForMessage(test_buffers_1.default.copyOut(3), { name:&apos;copyOutResponse&apos;, length:13, binary:false, columnTypes:[0, 1, 2], });testForMessage(test_buffers_1.default.copyDone(), { name:&apos;copyDone&apos;, length:4, });testForMessage(test_buffers_1.default.copyData(Buffer.from([5, 6, 7])), { name:&apos;copyData&apos;, length:7, chunk:Buffer.from([5, 6, 7]), });});describe(&apos;split buffer, single message parsing&apos;, function() { var fullBuffer=test_buffers_1.default.dataRow([null, &apos;bang&apos;, &apos;zug zug&apos;, null, &apos;!&apos;]);it(&apos;parses when full buffer comes in&apos;, function() { return __awaiter(this, void 0, void 0, function *() { const messages=yield parseBuffers([fullBuffer]);const message=messages[0];assert_1.default.equal(message.fields.length, 5);assert_1.default.equal(message.fields[0], null);assert_1.default.equal(message.fields[1], &apos;bang&apos;);assert_1.default.equal(message.fields[2], &apos;zug zug&apos;);assert_1.default.equal(message.fields[3], null);assert_1.default.equal(message.fields[4], &apos;!&apos;);});});var testMessageRecievedAfterSpiltAt=function(split) { return __awaiter(this, void 0, void 0, function *() { var firstBuffer=Buffer.alloc(fullBuffer.length - split);var secondBuffer=Buffer.alloc(fullBuffer.length - firstBuffer.length);fullBuffer.copy(firstBuffer, 0, 0);fullBuffer.copy(secondBuffer, 0, firstBuffer.length);const messages=yield parseBuffers([fullBuffer]);const message=messages[0];assert_1.default.equal(message.fields.length, 5);assert_1.default.equal(message.fields[0], null);assert_1.default.equal(message.fields[1], &apos;bang&apos;);assert_1.default.equal(message.fields[2], &apos;zug zug&apos;);assert_1.default.equal(message.fields[3], null);assert_1.default.equal(message.fields[4], &apos;!&apos;);});};it(&apos;parses when split in the middle&apos;, function() { testMessageRecievedAfterSpiltAt(6);});it(&apos;parses when split at end&apos;, function() { testMessageRecievedAfterSpiltAt(2);});it(&apos;parses when split at beginning&apos;, function() { testMessageRecievedAfterSpiltAt(fullBuffer.length - 2);testMessageRecievedAfterSpiltAt(fullBuffer.length - 1);testMessageRecievedAfterSpiltAt(fullBuffer.length - 5);});});describe(&apos;split buffer, multiple message parsing&apos;, function() { var dataRowBuffer=test_buffers_1.default.dataRow([&apos;!&apos;]);var readyForQueryBuffer=test_buffers_1.default.readyForQuery();var fullBuffer=Buffer.alloc(dataRowBuffer.length+readyForQueryBuffer.length);dataRowBuffer.copy(fullBuffer, 0, 0);readyForQueryBuffer.copy(fullBuffer, dataRowBuffer.length, 0);var verifyMessages=function(messages) { assert_1.default.strictEqual(messages.length, 2);assert_1.default.deepEqual(messages[0], { name:&apos;dataRow&apos;, fieldCount:1, length:11, fields:[&apos;!&apos;], });assert_1.default.equal(messages[0].fields[0], &apos;!&apos;);assert_1.default.deepEqual(messages[1], { name:&apos;readyForQuery&apos;, length:5, status:&apos;I&apos;, });};it(&apos;recieves both messages when packet is not split&apos;, function() { return __awaiter(this, void 0, void 0, function *() { const messages=yield parseBuffers([fullBuffer]);verifyMessages(messages);});});var splitAndVerifyTwoMessages=function(split) { return __awaiter(this, void 0, void 0, function *() { var firstBuffer=Buffer.alloc(fullBuffer.length - split);var secondBuffer=Buffer.alloc(fullBuffer.length - firstBuffer.length);fullBuffer.copy(firstBuffer, 0, 0);fullBuffer.copy(secondBuffer, 0, firstBuffer.length);const messages=yield parseBuffers([firstBuffer, secondBuffer]);verifyMessages(messages);});};describe(&apos;recieves both messages when packet is split&apos;, function() { it(&apos;in the middle&apos;, function() { return splitAndVerifyTwoMessages(11);});it(&apos;at the front&apos;, function() { return Promise.all([splitAndVerifyTwoMessages(fullBuffer.length - 1), splitAndVerifyTwoMessages(fullBuffer.length - 4), splitAndVerifyTwoMessages(fullBuffer.length - 6),]);});it(&apos;at the end&apos;, function() { return Promise.all([splitAndVerifyTwoMessages(8), splitAndVerifyTwoMessages(1)]);});});});}):&#160;inbound-parser.test.js'],['../outbound-serializer_8test_8js.html#a4593a144d1f9d9fb9107fdb0387c7709',1,'describe(&apos;serializer&apos;,()=&gt; { it(&apos;builds startup message&apos;, function() { const actual=serializer_1.serialize.startup({ user:&apos;brian&apos;, database:&apos;bang&apos;, });assert_1.default.deepEqual(actual, new buffer_list_1.default() .addInt16(3) .addInt16(0) .addCString(&apos;user&apos;) .addCString(&apos;brian&apos;) .addCString(&apos;database&apos;) .addCString(&apos;bang&apos;) .addCString(&apos;client_encoding&apos;) .addCString(&apos;UTF8&apos;) .addCString(&apos;&apos;) .join(true));});it(&apos;builds password message&apos;, function() { const actual=serializer_1.serialize.password(&apos;!&apos;);assert_1.default.deepEqual(actual, new buffer_list_1.default().addCString(&apos;!&apos;).join(true, &apos;p&apos;));});it(&apos;builds request ssl message&apos;, function() { const actual=serializer_1.serialize.requestSsl();const expected=new buffer_list_1.default().addInt32(80877103).join(true);assert_1.default.deepEqual(actual, expected);});it(&apos;builds SASLInitialResponseMessage message&apos;, function() { const actual=serializer_1.serialize.sendSASLInitialResponseMessage(&apos;mech&apos;, &apos;data&apos;);assert_1.default.deepEqual(actual, new buffer_list_1.default().addCString(&apos;mech&apos;).addInt32(4).addString(&apos;data&apos;).join(true, &apos;p&apos;));});it(&apos;builds SCRAMClientFinalMessage message&apos;, function() { const actual=serializer_1.serialize.sendSCRAMClientFinalMessage(&apos;data&apos;);assert_1.default.deepEqual(actual, new buffer_list_1.default().addString(&apos;data&apos;).join(true, &apos;p&apos;));});it(&apos;builds query message&apos;, function() { var txt=&apos;select *from boom&apos;;const actual=serializer_1.serialize.query(txt);assert_1.default.deepEqual(actual, new buffer_list_1.default().addCString(txt).join(true, &apos;Q&apos;));});describe(&apos;parse message&apos;,()=&gt; { it(&apos;builds parse message&apos;, function() { const actual=serializer_1.serialize.parse({ text:&apos;!&apos; });var expected=new buffer_list_1.default().addCString(&apos;&apos;).addCString(&apos;!&apos;).addInt16(0).join(true, &apos;P&apos;);assert_1.default.deepEqual(actual, expected);});it(&apos;builds parse message with named query&apos;, function() { const actual=serializer_1.serialize.parse({ name:&apos;boom&apos;, text:&apos;select *from boom&apos;, types:[], });var expected=new buffer_list_1.default().addCString(&apos;boom&apos;).addCString(&apos;select *from boom&apos;).addInt16(0).join(true, &apos;P&apos;);assert_1.default.deepEqual(actual, expected);});it(&apos;with multiple parameters&apos;, function() { const actual=serializer_1.serialize.parse({ name:&apos;force&apos;, text:&apos;select *from bang where name=$1&apos;, types:[1, 2, 3, 4], });var expected=new buffer_list_1.default() .addCString(&apos;force&apos;) .addCString(&apos;select *from bang where name=$1&apos;) .addInt16(4) .addInt32(1) .addInt32(2) .addInt32(3) .addInt32(4) .join(true, &apos;P&apos;);assert_1.default.deepEqual(actual, expected);});});describe(&apos;bind messages&apos;, function() { it(&apos;with no values&apos;, function() { const actual=serializer_1.serialize.bind();var expectedBuffer=new buffer_list_1.default() .addCString(&apos;&apos;) .addCString(&apos;&apos;) .addInt16(0) .addInt16(0) .addInt16(0) .join(true, &apos;B&apos;);assert_1.default.deepEqual(actual, expectedBuffer);});it(&apos;with named statement, portal, and values&apos;, function() { const actual=serializer_1.serialize.bind({ portal:&apos;bang&apos;, statement:&apos;woo&apos;, values:[&apos;1&apos;, &apos;hi&apos;, null, &apos;zing&apos;], });var expectedBuffer=new buffer_list_1.default() .addCString(&apos;bang&apos;) .addCString(&apos;woo&apos;) .addInt16(4) .addInt16(0) .addInt16(0) .addInt16(0) .addInt16(0) .addInt16(4) .addInt32(1) .add(Buffer.from(&apos;1&apos;)) .addInt32(2) .add(Buffer.from(&apos;hi&apos;)) .addInt32(-1) .addInt32(4) .add(Buffer.from(&apos;zing&apos;)) .addInt16(0) .join(true, &apos;B&apos;);assert_1.default.deepEqual(actual, expectedBuffer);});});it(&apos;with custom valueMapper&apos;, function() { const actual=serializer_1.serialize.bind({ portal:&apos;bang&apos;, statement:&apos;woo&apos;, values:[&apos;1&apos;, &apos;hi&apos;, null, &apos;zing&apos;], valueMapper:()=&gt; null, });var expectedBuffer=new buffer_list_1.default() .addCString(&apos;bang&apos;) .addCString(&apos;woo&apos;) .addInt16(4) .addInt16(0) .addInt16(0) .addInt16(0) .addInt16(0) .addInt16(4) .addInt32(-1) .addInt32(-1) .addInt32(-1) .addInt32(-1) .addInt16(0) .join(true, &apos;B&apos;);assert_1.default.deepEqual(actual, expectedBuffer);});it(&apos;with named statement, portal, and buffer value&apos;, function() { const actual=serializer_1.serialize.bind({ portal:&apos;bang&apos;, statement:&apos;woo&apos;, values:[&apos;1&apos;, &apos;hi&apos;, null, Buffer.from(&apos;zing&apos;, &apos;utf8&apos;)], });var expectedBuffer=new buffer_list_1.default() .addCString(&apos;bang&apos;) .addCString(&apos;woo&apos;) .addInt16(4) .addInt16(0) .addInt16(0) .addInt16(0) .addInt16(1) .addInt16(4) .addInt32(1) .add(Buffer.from(&apos;1&apos;)) .addInt32(2) .add(Buffer.from(&apos;hi&apos;)) .addInt32(-1) .addInt32(4) .add(Buffer.from(&apos;zing&apos;, &apos;utf-8&apos;)) .addInt16(0) .join(true, &apos;B&apos;);assert_1.default.deepEqual(actual, expectedBuffer);});describe(&apos;builds execute message&apos;, function() { it(&apos;for unamed portal with no row limit&apos;, function() { const actual=serializer_1.serialize.execute();var expectedBuffer=new buffer_list_1.default().addCString(&apos;&apos;).addInt32(0).join(true, &apos;E&apos;);assert_1.default.deepEqual(actual, expectedBuffer);});it(&apos;for named portal with row limit&apos;, function() { const actual=serializer_1.serialize.execute({ portal:&apos;my favorite portal&apos;, rows:100, });var expectedBuffer=new buffer_list_1.default().addCString(&apos;my favorite portal&apos;).addInt32(100).join(true, &apos;E&apos;);assert_1.default.deepEqual(actual, expectedBuffer);});});it(&apos;builds flush command&apos;, function() { const actual=serializer_1.serialize.flush();var expected=new buffer_list_1.default().join(true, &apos;H&apos;);assert_1.default.deepEqual(actual, expected);});it(&apos;builds sync command&apos;, function() { const actual=serializer_1.serialize.sync();var expected=new buffer_list_1.default().join(true, &apos;S&apos;);assert_1.default.deepEqual(actual, expected);});it(&apos;builds end command&apos;, function() { const actual=serializer_1.serialize.end();var expected=Buffer.from([0x58, 0, 0, 0, 4]);assert_1.default.deepEqual(actual, expected);});describe(&apos;builds describe command&apos;, function() { it(&apos;describe statement&apos;, function() { const actual=serializer_1.serialize.describe({ type:&apos;S&apos;, name:&apos;bang&apos; });var expected=new buffer_list_1.default().addChar(&apos;S&apos;).addCString(&apos;bang&apos;).join(true, &apos;D&apos;);assert_1.default.deepEqual(actual, expected);});it(&apos;describe unnamed portal&apos;, function() { const actual=serializer_1.serialize.describe({ type:&apos;P&apos; });var expected=new buffer_list_1.default().addChar(&apos;P&apos;).addCString(&apos;&apos;).join(true, &apos;D&apos;);assert_1.default.deepEqual(actual, expected);});});describe(&apos;builds close command&apos;, function() { it(&apos;describe statement&apos;, function() { const actual=serializer_1.serialize.close({ type:&apos;S&apos;, name:&apos;bang&apos; });var expected=new buffer_list_1.default().addChar(&apos;S&apos;).addCString(&apos;bang&apos;).join(true, &apos;C&apos;);assert_1.default.deepEqual(actual, expected);});it(&apos;describe unnamed portal&apos;, function() { const actual=serializer_1.serialize.close({ type:&apos;P&apos; });var expected=new buffer_list_1.default().addChar(&apos;P&apos;).addCString(&apos;&apos;).join(true, &apos;C&apos;);assert_1.default.deepEqual(actual, expected);});});describe(&apos;copy messages&apos;, function() { it(&apos;builds copyFromChunk&apos;,()=&gt; { const actual=serializer_1.serialize.copyData(Buffer.from([1, 2, 3]));const expected=new buffer_list_1.default().add(Buffer.from([1, 2, 3])).join(true, &apos;d&apos;);assert_1.default.deepEqual(actual, expected);});it(&apos;builds copy fail&apos;,()=&gt; { const actual=serializer_1.serialize.copyFail(&apos;err!&apos;);const expected=new buffer_list_1.default().addCString(&apos;err!&apos;).join(true, &apos;f&apos;);assert_1.default.deepEqual(actual, expected);});it(&apos;builds copy done&apos;,()=&gt; { const actual=serializer_1.serialize.copyDone();const expected=new buffer_list_1.default().join(true, &apos;c&apos;);assert_1.default.deepEqual(actual, expected);});});it(&apos;builds cancel message&apos;,()=&gt; { const actual=serializer_1.serialize.cancel(3, 4);const expected=new buffer_list_1.default().addInt16(1234).addInt16(5678).addInt32(3).addInt32(4).join(true);assert_1.default.deepEqual(actual, expected);});}):&#160;outbound-serializer.test.js']]]
];
