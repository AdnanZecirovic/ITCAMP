var longestPalindrome = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] = map[s[i]] + 1;
    } else {
      map[s[i]] = 1;
    }
  }
  const vrednosti = Object.values(map);
  let zbirParnih = 0;
  let zbirNeparnih = 0;
  for (let i = 0; i < vrednosti.length; i++) {
    if (vrednosti[i] % 2 === 0) {
      zbirParnih += vrednosti[i];
    }
  }
  for (let j = 0; j < vrednosti.length; j++) {
    if (vrednosti[j] % 2 === 1) {
      if (zbirNeparnih < vrednosti[j]) {
        zbirNeparnih = vrednosti[j];
      }
      if (zbirNeparnih > vrednosti[j]) {
        zbirNeparnih += vrednosti[i] - 1;
      }
    }
  }
  if (zbirParnih === 2 && s.length === 2) {
    return zbirParnih;
  }
  if (s.length === 1) {
    zbirNeparnih = 1;
  }
  return zbirParnih + zbirNeparnih;
};

longestPalindrome(
  "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
);
