const tiles = [
  { index: 0, type: "bamboo", label: "Bamboo 1 1", code: "bam1-1", img: "", prevOwner: "", currOwner: "" },
  { index: 1, type: "bamboo", label: "Bamboo 1 2", code: "bam1-2", img: "", prevOwner: "", currOwner: "" },
  { index: 2, type: "bamboo", label: "Bamboo 1 3", code: "bam1-3", img: "", prevOwner: "", currOwner: "" },
  { index: 3, type: "bamboo", label: "Bamboo 1 4", code: "bam1-4", img: "", prevOwner: "", currOwner: "" },

  { index: 4, type: "bamboo", label: "Bamboo 2 1", code: "bam2-1", img: "", prevOwner: "", currOwner: "" },
  { index: 5, type: "bamboo", label: "Bamboo 2 2", code: "bam2-2", img: "", prevOwner: "", currOwner: "" },
  { index: 6, type: "bamboo", label: "Bamboo 2 3", code: "bam2-3", img: "", prevOwner: "", currOwner: "" },
  { index: 7, type: "bamboo", label: "Bamboo 2 4", code: "bam2-4", img: "", prevOwner: "", currOwner: "" },

  { index: 8, type: "bamboo", label: "Bamboo 3 1", code: "bam3-1", img: "", prevOwner: "", currOwner: "" },
  { index: 9, type: "bamboo", label: "Bamboo 3 2", code: "bam3-2", img: "", prevOwner: "", currOwner: "" },
  { index: 10, type: "bamboo", label: "Bamboo 3 3", code: "bam3-3", img: "", prevOwner: "", currOwner: "" },
  { index: 11, type: "bamboo", label: "Bamboo 3 4", code: "bam3-4", img: "", prevOwner: "", currOwner: "" },

  { index: 12, type: "bamboo", label: "Bamboo 4 1", code: "bam4-1", img: "", prevOwner: "", currOwner: "" },
  { index: 13, type: "bamboo", label: "Bamboo 4 2", code: "bam4-2", img: "", prevOwner: "", currOwner: "" },
  { index: 14, type: "bamboo", label: "Bamboo 4 3", code: "bam4-3", img: "", prevOwner: "", currOwner: "" },
  { index: 15, type: "bamboo", label: "Bamboo 4 4", code: "bam4-4", img: "", prevOwner: "", currOwner: "" },

  { index: 16, type: "bamboo", label: "Bamboo 5 1", code: "bam5-1", img: "", prevOwner: "", currOwner: "" },
  { index: 17, type: "bamboo", label: "Bamboo 5 2", code: "bam5-2", img: "", prevOwner: "", currOwner: "" },
  { index: 18, type: "bamboo", label: "Bamboo 5 3", code: "bam5-3", img: "", prevOwner: "", currOwner: "" },
  { index: 19, type: "bamboo", label: "Bamboo 5 4", code: "bam5-4", img: "", prevOwner: "", currOwner: "" },

  { index: 20, type: "bamboo", label: "Bamboo 6 1", code: "bam6-1", img: "", prevOwner: "", currOwner: "" },
  { index: 21, type: "bamboo", label: "Bamboo 6 2", code: "bam6-2", img: "", prevOwner: "", currOwner: "" },
  { index: 22, type: "bamboo", label: "Bamboo 6 3", code: "bam6-3", img: "", prevOwner: "", currOwner: "" },
  { index: 23, type: "bamboo", label: "Bamboo 6 4", code: "bam6-4", img: "", prevOwner: "", currOwner: "" },

  { index: 24, type: "bamboo", label: "Bamboo 7 1", code: "bam7-1", img: "", prevOwner: "", currOwner: "" },
  { index: 25, type: "bamboo", label: "Bamboo 7 2", code: "bam7-2", img: "", prevOwner: "", currOwner: "" },
  { index: 26, type: "bamboo", label: "Bamboo 7 3", code: "bam7-3", img: "", prevOwner: "", currOwner: "" },
  { index: 27, type: "bamboo", label: "Bamboo 7 4", code: "bam7-4", img: "", prevOwner: "", currOwner: "" },

  { index: 28, type: "bamboo", label: "Bamboo 8 1", code: "bam8-1", img: "", prevOwner: "", currOwner: "" },
  { index: 29, type: "bamboo", label: "Bamboo 8 2", code: "bam8-2", img: "", prevOwner: "", currOwner: "" },
  { index: 30, type: "bamboo", label: "Bamboo 8 3", code: "bam8-3", img: "", prevOwner: "", currOwner: "" },
  { index: 31, type: "bamboo", label: "Bamboo 8 4", code: "bam8-4", img: "", prevOwner: "", currOwner: "" },

  { index: 32, type: "bamboo", label: "Bamboo 9 1", code: "bam9-1", img: "", prevOwner: "", currOwner: "" },
  { index: 33, type: "bamboo", label: "Bamboo 9 2", code: "bam9-2", img: "", prevOwner: "", currOwner: "" },
  { index: 34, type: "bamboo", label: "Bamboo 9 3", code: "bam9-3", img: "", prevOwner: "", currOwner: "" },
  { index: 35, type: "bamboo", label: "Bamboo 9 4", code: "bam9-4", img: "", prevOwner: "", currOwner: "" },

  { index: 36, type: "character", label: "Ten Thousand 1 1", code: "cha1-1", img: "", prevOwner: "", currOwner: "" },
  { index: 37, type: "character", label: "Ten Thousand 1 2", code: "cha1-2", img: "", prevOwner: "", currOwner: "" },
  { index: 38, type: "character", label: "Ten Thousand 1 3", code: "cha1-3", img: "", prevOwner: "", currOwner: "" },
  { index: 39, type: "character", label: "Ten Thousand 1 4", code: "cha1-4", img: "", prevOwner: "", currOwner: "" },

  { index: 40, type: "character", label: "Ten Thousand 2 1", code: "cha2-1", img: "", prevOwner: "", currOwner: "" },
  { index: 41, type: "character", label: "Ten Thousand 2 2", code: "cha2-2", img: "", prevOwner: "", currOwner: "" },
  { index: 42, type: "character", label: "Ten Thousand 2 3", code: "cha2-3", img: "", prevOwner: "", currOwner: "" },
  { index: 43, type: "character", label: "Ten Thousand 2 4", code: "cha2-4", img: "", prevOwner: "", currOwner: "" },

  { index: 44, type: "character", label: "Ten Thousand 3 1", code: "cha3-1", img: "", prevOwner: "", currOwner: "" },
  { index: 45, type: "character", label: "Ten Thousand 3 2", code: "cha3-2", img: "", prevOwner: "", currOwner: "" },
  { index: 46, type: "character", label: "Ten Thousand 3 3", code: "cha3-3", img: "", prevOwner: "", currOwner: "" },
  { index: 47, type: "character", label: "Ten Thousand 3 4", code: "cha3-4", img: "", prevOwner: "", currOwner: "" },

  { index: 48, type: "character", label: "Ten Thousand 4 1", code: "cha4-1", img: "", prevOwner: "", currOwner: "" },
  { index: 49, type: "character", label: "Ten Thousand 4 2", code: "cha4-2", img: "", prevOwner: "", currOwner: "" },
  { index: 50, type: "character", label: "Ten Thousand 4 3", code: "cha4-3", img: "", prevOwner: "", currOwner: "" },
  { index: 51, type: "character", label: "Ten Thousand 4 4", code: "cha4-4", img: "", prevOwner: "", currOwner: "" },

  { index: 52, type: "character", label: "Ten Thousand 5 1", code: "cha5-1", img: "", prevOwner: "", currOwner: "" },
  { index: 53, type: "character", label: "Ten Thousand 5 2", code: "cha5-2", img: "", prevOwner: "", currOwner: "" },
  { index: 54, type: "character", label: "Ten Thousand 5 3", code: "cha5-3", img: "", prevOwner: "", currOwner: "" },
  { index: 55, type: "character", label: "Ten Thousand 5 4", code: "cha5-4", img: "", prevOwner: "", currOwner: "" },

  { index: 56, type: "character", label: "Ten Thousand 6 1", code: "cha6-1", img: "", prevOwner: "", currOwner: "" },
  { index: 57, type: "character", label: "Ten Thousand 6 2", code: "cha6-2", img: "", prevOwner: "", currOwner: "" },
  { index: 58, type: "character", label: "Ten Thousand 6 3", code: "cha6-3", img: "", prevOwner: "", currOwner: "" },
  { index: 59, type: "character", label: "Ten Thousand 6 4", code: "cha6-4", img: "", prevOwner: "", currOwner: "" },

  { index: 60, type: "character", label: "Ten Thousand 7 1", code: "cha7-1", img: "", prevOwner: "", currOwner: "" },
  { index: 61, type: "character", label: "Ten Thousand 7 2", code: "cha7-2", img: "", prevOwner: "", currOwner: "" },
  { index: 62, type: "character", label: "Ten Thousand 7 3", code: "cha7-3", img: "", prevOwner: "", currOwner: "" },
  { index: 63, type: "character", label: "Ten Thousand 7 4", code: "cha7-4", img: "", prevOwner: "", currOwner: "" },

  { index: 64, type: "character", label: "Ten Thousand 8 1", code: "cha8-1", img: "", prevOwner: "", currOwner: "" },
  { index: 65, type: "character", label: "Ten Thousand 8 2", code: "cha8-2", img: "", prevOwner: "", currOwner: "" },
  { index: 66, type: "character", label: "Ten Thousand 8 3", code: "cha8-3", img: "", prevOwner: "", currOwner: "" },
  { index: 67, type: "character", label: "Ten Thousand 8 4", code: "cha8-4", img: "", prevOwner: "", currOwner: "" },

  { index: 68, type: "character", label: "Ten Thousand 9 1", code: "cha9-1", img: "", prevOwner: "", currOwner: "" },
  { index: 69, type: "character", label: "Ten Thousand 9 2", code: "cha9-2", img: "", prevOwner: "", currOwner: "" },
  { index: 70, type: "character", label: "Ten Thousand 9 3", code: "cha9-3", img: "", prevOwner: "", currOwner: "" },
  { index: 71, type: "character", label: "Ten Thousand 9 4", code: "cha9-4", img: "", prevOwner: "", currOwner: "" },

  { index: 72, type: "dot", label: "Barrel 1 1", code: "dot1-1", img: "", prevOwner: "", currOwner: "" },
  { index: 73, type: "dot", label: "Barrel 1 2", code: "dot1-2", img: "", prevOwner: "", currOwner: "" },
  { index: 74, type: "dot", label: "Barrel 1 3", code: "dot1-3", img: "", prevOwner: "", currOwner: "" },
  { index: 75, type: "dot", label: "Barrel 1 4", code: "dot1-4", img: "", prevOwner: "", currOwner: "" },

  { index: 76, type: "dot", label: "Barrel 2 1", code: "dot2-1", img: "", prevOwner: "", currOwner: "" },
  { index: 77, type: "dot", label: "Barrel 2 2", code: "dot2-2", img: "", prevOwner: "", currOwner: "" },
  { index: 78, type: "dot", label: "Barrel 2 3", code: "dot2-3", img: "", prevOwner: "", currOwner: "" },
  { index: 79, type: "dot", label: "Barrel 2 4", code: "dot2-4", img: "", prevOwner: "", currOwner: "" },

  { index: 80, type: "dot", label: "Barrel 3 1", code: "dot3-1", img: "", prevOwner: "", currOwner: "" },
  { index: 81, type: "dot", label: "Barrel 3 2", code: "dot3-2", img: "", prevOwner: "", currOwner: "" },
  { index: 82, type: "dot", label: "Barrel 3 3", code: "dot3-3", img: "", prevOwner: "", currOwner: "" },
  { index: 83, type: "dot", label: "Barrel 3 4", code: "dot3-4", img: "", prevOwner: "", currOwner: "" },

  { index: 84, type: "dot", label: "Barrel 4 1", code: "dot4-1", img: "", prevOwner: "", currOwner: "" },
  { index: 85, type: "dot", label: "Barrel 4 2", code: "dot4-2", img: "", prevOwner: "", currOwner: "" },
  { index: 86, type: "dot", label: "Barrel 4 3", code: "dot4-3", img: "", prevOwner: "", currOwner: "" },
  { index: 87, type: "dot", label: "Barrel 4 4", code: "dot4-4", img: "", prevOwner: "", currOwner: "" },

  { index: 88, type: "dot", label: "Barrel 5 1", code: "dot5-1", img: "", prevOwner: "", currOwner: "" },
  { index: 89, type: "dot", label: "Barrel 5 2", code: "dot5-2", img: "", prevOwner: "", currOwner: "" },
  { index: 90, type: "dot", label: "Barrel 5 3", code: "dot5-3", img: "", prevOwner: "", currOwner: "" },
  { index: 91, type: "dot", label: "Barrel 5 4", code: "dot5-4", img: "", prevOwner: "", currOwner: "" },

  { index: 92, type: "dot", label: "Barrel 6 1", code: "dot6-1", img: "", prevOwner: "", currOwner: "" },
  { index: 93, type: "dot", label: "Barrel 6 2", code: "dot6-2", img: "", prevOwner: "", currOwner: "" },
  { index: 94, type: "dot", label: "Barrel 6 3", code: "dot6-3", img: "", prevOwner: "", currOwner: "" },
  { index: 95, type: "dot", label: "Barrel 6 4", code: "dot6-4", img: "", prevOwner: "", currOwner: "" },

  { index: 96, type: "dot", label: "Barrel 7 1", code: "dot7-1", img: "", prevOwner: "", currOwner: "" },
  { index: 97, type: "dot", label: "Barrel 7 2", code: "dot7-2", img: "", prevOwner: "", currOwner: "" },
  { index: 98, type: "dot", label: "Barrel 7 3", code: "dot7-3", img: "", prevOwner: "", currOwner: "" },
  { index: 99, type: "dot", label: "Barrel 7 4", code: "dot7-4", img: "", prevOwner: "", currOwner: "" },

  { index: 100, type: "dot", label: "Barrel 8 1", code: "dot8-1", img: "", prevOwner: "", currOwner: "" },
  { index: 101, type: "dot", label: "Barrel 8 2", code: "dot8-2", img: "", prevOwner: "", currOwner: "" },
  { index: 102, type: "dot", label: "Barrel 8 3", code: "dot8-3", img: "", prevOwner: "", currOwner: "" },
  { index: 103, type: "dot", label: "Barrel 8 4", code: "dot8-4", img: "", prevOwner: "", currOwner: "" },

  { index: 104, type: "dot", label: "Barrel 9 1", code: "dot9-1", img: "", prevOwner: "", currOwner: "" },
  { index: 105, type: "dot", label: "Barrel 9 2", code: "dot9-2", img: "", prevOwner: "", currOwner: "" },
  { index: 106, type: "dot", label: "Barrel 9 3", code: "dot9-3", img: "", prevOwner: "", currOwner: "" },
  { index: 107, type: "dot", label: "Barrel 9 4", code: "dot9-4", img: "", prevOwner: "", currOwner: "" },

  { index: 108, type: "direction", label: "North 1", code: "dirN-1", img: "", prevOwner: "", currOwner: "" },
  { index: 109, type: "direction", label: "North 2", code: "dirN-2", img: "", prevOwner: "", currOwner: "" },
  { index: 110, type: "direction", label: "North 3", code: "dirN-3", img: "", prevOwner: "", currOwner: "" },
  { index: 111, type: "direction", label: "North 4", code: "dirN-4", img: "", prevOwner: "", currOwner: "" },

  { index: 112, type: "direction", label: "South 1", code: "dirS-1", img: "", prevOwner: "", currOwner: "" },
  { index: 113, type: "direction", label: "South 2", code: "dirS-2", img: "", prevOwner: "", currOwner: "" },
  { index: 114, type: "direction", label: "South 3", code: "dirS-3", img: "", prevOwner: "", currOwner: "" },
  { index: 115, type: "direction", label: "South 4", code: "dirS-4", img: "", prevOwner: "", currOwner: "" },

  { index: 116, type: "direction", label: "West 1", code: "dirW-1", img: "", prevOwner: "", currOwner: "" },
  { index: 117, type: "direction", label: "West 2", code: "dirW-2", img: "", prevOwner: "", currOwner: "" },
  { index: 118, type: "direction", label: "West 3", code: "dirW-3", img: "", prevOwner: "", currOwner: "" },
  { index: 119, type: "direction", label: "West 4", code: "dirW-4", img: "", prevOwner: "", currOwner: "" },

  { index: 120, type: "direction", label: "East 1", code: "dirE-1", img: "", prevOwner: "", currOwner: "" },
  { index: 121, type: "direction", label: "East 2", code: "dirE-2", img: "", prevOwner: "", currOwner: "" },
  { index: 122, type: "direction", label: "East 3", code: "dirE-3", img: "", prevOwner: "", currOwner: "" },
  { index: 123, type: "direction", label: "East 4", code: "dirE-4", img: "", prevOwner: "", currOwner: "" },

  { index: 124, type: "cardinal", label: "Red Center 1", code: "carR-1", img: "", prevOwner: "", currOwner: "" },
  { index: 125, type: "cardinal", label: "Red Center 2", code: "carR-2", img: "", prevOwner: "", currOwner: "" },
  { index: 126, type: "cardinal", label: "Red Center 3", code: "carR-3", img: "", prevOwner: "", currOwner: "" },
  { index: 127, type: "cardinal", label: "Red Center 4", code: "carR-4", img: "", prevOwner: "", currOwner: "" },

  { index: 128, type: "cardinal", label: "Green Fat Choi 1", code: "carG-1", img: "", prevOwner: "", currOwner: "" },
  { index: 129, type: "cardinal", label: "Green Fat Choi 2", code: "carG-2", img: "", prevOwner: "", currOwner: "" },
  { index: 130, type: "cardinal", label: "Green Fat Choi 3", code: "carG-3", img: "", prevOwner: "", currOwner: "" },
  { index: 131, type: "cardinal", label: "Green Fat Choi 4", code: "carG-4", img: "", prevOwner: "", currOwner: "" },

  { index: 132, type: "cardinal", label: "White Board 1", code: "carW-1", img: "", prevOwner: "", currOwner: "" },
  { index: 133, type: "cardinal", label: "White Board 2", code: "carW-2", img: "", prevOwner: "", currOwner: "" },
  { index: 134, type: "cardinal", label: "White Board 3", code: "carW-3", img: "", prevOwner: "", currOwner: "" },
  { index: 135, type: "cardinal", label: "White Board 4", code: "carW-4", img: "", prevOwner: "", currOwner: "" },

  { index: 136, type: "flower", label: "Flower 1", code: "flo1-0", img: "", prevOwner: "", currOwner: "" },
  { index: 137, type: "flower", label: "Flower 2", code: "flo2-0", img: "", prevOwner: "", currOwner: "" },
  { index: 138, type: "flower", label: "Flower 3", code: "flo3-0", img: "", prevOwner: "", currOwner: "" },
  { index: 139, type: "flower", label: "Flower 4", code: "flo4-0", img: "", prevOwner: "", currOwner: "" },

  { index: 140, type: "season", label: "Season 1", code: "sea1-0", img: "", prevOwner: "", currOwner: "" },
  { index: 141, type: "season", label: "Season 2", code: "sea2-0", img: "", prevOwner: "", currOwner: "" },
  { index: 142, type: "season", label: "Season 3", code: "sea3-0", img: "", prevOwner: "", currOwner: "" },
  { index: 143, type: "season", label: "Season 4", code: "sea4-0", img: "", prevOwner: "", currOwner: "" }
];

export default tiles;