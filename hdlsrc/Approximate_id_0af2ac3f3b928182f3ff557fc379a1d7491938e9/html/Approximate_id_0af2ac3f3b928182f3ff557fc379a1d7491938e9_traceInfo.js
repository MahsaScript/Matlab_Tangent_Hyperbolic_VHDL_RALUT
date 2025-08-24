function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Source */
	this.urlHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:2"] = "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9.vhd:71,72,73,74,75,76";
	/* <Root>/Out1 */
	this.urlHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:8"] = "msg=rtwMsg_notTraceable&block=Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:8";
	/* <S1>/DTC1 */
	this.urlHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:4"] = "Source.vhd:85";
	/* <S1>/LUT */
	this.urlHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:5"] = "Source.vhd:87,89,90,91,92";
	/* <S1>/SigSpec1 */
	this.urlHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:6"] = "Source.vhd:85";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9"};
	this.sidHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:1"};
	this.sidHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Source"] = {sid: "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:2"};
	this.sidHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:2"] = {rtwname: "<Root>/Source"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:8"};
	this.sidHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:8"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:3"};
	this.sidHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:3"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/DTC1"] = {sid: "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:4"};
	this.sidHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:4"] = {rtwname: "<S1>/DTC1"};
	this.rtwnameHashMap["<S1>/LUT"] = {sid: "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:5"};
	this.sidHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:5"] = {rtwname: "<S1>/LUT"};
	this.rtwnameHashMap["<S1>/SigSpec1"] = {sid: "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:6"};
	this.sidHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:6"] = {rtwname: "<S1>/SigSpec1"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:7"};
	this.sidHashMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:7"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
