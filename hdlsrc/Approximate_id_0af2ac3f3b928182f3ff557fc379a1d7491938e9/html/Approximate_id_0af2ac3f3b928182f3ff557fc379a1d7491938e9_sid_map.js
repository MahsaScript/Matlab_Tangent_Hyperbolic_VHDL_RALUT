function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:1"] = "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9";
    this.sidParentMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:2"] = "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9";
    this.sidParentMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:8"] = "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9";
    this.sidParentMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:3"] = "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:2";
    this.sidParentMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:4"] = "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:2";
    this.sidParentMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:5"] = "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:2";
    this.sidParentMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:6"] = "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:2";
    this.sidParentMap["Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:7"] = "Approximate_id_0af2ac3f3b928182f3ff557fc379a1d7491938e9:2";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
