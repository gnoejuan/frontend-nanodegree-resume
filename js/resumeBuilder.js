var email ="provenhypothesis@gmail.com"
var name = "Charles Rodriguez"
var role = "Developer"
var skills = ["Java and Java-script", "Android", "Web Design", "System Anaylsis and Design"]
var contacts = {"mobile":"210.643.6690", "email":email, "twitter": "@SageOfVictor"}
var profile = "https://d324imu86q1bqn.cloudfront.net/uploads/user/avatar/1082626/large_ello-9a7d2d13-baef-4a11-b113-83a7b265bec4.png"
var welcomeMessage = "Welcome. This is my portfolio in the making."
var time = new Date()
var aboutMe = {"name":"Charles",
"age": time.getFullYear() - 1993, "skills": skills, "pictureURL": profile, "welcome":welcomeMessage }
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(aboutMe.name);
$("#main").append(" " + aboutMe.skills);
$("#main").append(" " + aboutMe.pictureURL);
$("#main").append(" " + aboutMe.welcome);
