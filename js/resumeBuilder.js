var email ="provenhypothesis@gmail.com"
var name = "Charles Rodriguez"
var role = "Developer"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
